/**
 * NUNA COTTON · CONSUMOS Y AVÍOS (v4.0.0) — Combos textil + Almacén de avíos en una sola app
 * Code.gs — backend de avíos. Combos textil vive en Combos.gs.
 * Sheet "NUNA · CONSUMOS Y AVÍOS" (copia de NUNA · ALMACÉN DE AVÍOS); el script va vinculado a ese Sheet.
 *
 * Lee de PLAN DE VENTAS (solo lectura): LISTADO PEDIDOS, DETALLE PEDIDOS, DETALLE_TALLAS y TALLA.
 * Hojas propias: FAMILIA · UNMEDIDA · AVIOS · MARCA · MEDIDA · BD_AVIOS (SKU) · CONFIG
 *                MOVIMIENTOS (kardex por SKU) · BOM_ESTILOS · PLANTILLAS · PEDIDOS_ESTADO
 *                COMBOS_DATA (Combos textil: una fila por plantilla, programa, arte, taller, tela…)
 *
 * Stock por SKU (ID.AVIO):
 *   Stock actual  = CARGA INICIAL + INGRESO − SALIDA
 *   Stock reserva = Σ por PE del pendiente de reserva, en orden del kardex: RESERVA suma; LIBERA y SALIDA
 *                   restan sin bajar de 0 (una salida previa sin reserva no anula reservas posteriores)
 *   Disponible    = Stock actual − Stock reserva
 * Las tallas no se crean aquí: se leen de PLAN DE VENTAS › TALLA.
 */

const VERSION = 'v4.0.0';
const PLAN_ID = '1E-vnNP_4lNdiRqU6GZuotJgJPCYKaJ_bEQOMaNKa5Vg';
const BASE_QTY = 'PROG'; // Cantidad para el BOM: 'PROG' = DETALLE_TALLAS col L (UNDS. PROG.); si está vacía la talla no genera requerimiento. 'PROD' = col K (UNDS. PROD.)
const STATUS_EXCLUIDOS = ['ANULADO INTERNO'];      // no se listan ni se abren
const STATUS_SOLO_LECTURA = ['CERRADO'];           // se listan y se abren para consulta; no admiten reservas ni salidas
const UN_ENTERAS = ['UND', 'PAR', 'JGO'];
/* Control de consumo: lo define la FAMILIA (col E) y lo heredan sus avíos. Determina cómo se arma el BOM. */
const CONTROLES = ['UNICO', 'TALLA', 'COLOR', 'MEDIDA'];
/* Valores iniciales de la hoja CONFIG (luego se editan desde la app, pestaña Configuración). */
const PROC_SEED = [['CT', 'Corte'], ['ET', 'Estampado localizado'], ['SI', 'Smock industrial'], ['SM', 'Smock manual'], ['BI', 'Bordado industrial'],
  ['BM', 'Bordado manual'], ['CS', 'Costura'], ['CR', 'Crochet'], ['AC', 'Acabado']];
const PARA_SEED = ['A TONO TELA', 'A TONO DE PRINT', 'A TONO BORDADO', 'OJAL Y BOTON', 'PICUETA', 'ETIQUETA'];
const CACHE_MIN = 5; // minutos de caché para lecturas de PLAN DE VENTAS

const SH = {
  FAM: 'FAMILIA', UN: 'UNMEDIDA', AV: 'AVIOS', MAR: 'MARCA', MED: 'MEDIDA', SKU: 'BD_AVIOS',
  MOV: 'MOVIMIENTOS', BOM: 'BOM_ESTILOS', PLA: 'PLANTILLAS', PED: 'PEDIDOS_ESTADO', CFG: 'CONFIG', CT: 'COMBOS_DATA'
};
const HEAD = {
  FAMILIA: ['COD.FAMILIA', 'FAMILIA', '% MERMA', 'ACTIVO', 'CONTROL'],
  UNMEDIDA: ['COD.UN.MEDIDA', 'DESCRIPCION', 'ENTERA'],
  AVIOS: ['COD.AVIO', 'DESCRIPCION', 'UN', 'PRESENTACION COMERCIAL', 'FACTOR CONVERSION', 'COD.FAMILIA', 'ACTIVO', 'Actualizado', 'Usuario'],
  MARCA: ['COD.MARCA', 'MARCA', 'COD.CLIENTE', 'ACTIVO', 'LOGO'],
  MEDIDA: ['COD.MEDIDA', 'MEDIDA', 'ACTIVO'],
  BD_AVIOS: ['ID.AVIO', 'CODIGO INTERNO', 'COD.AVIO', 'DESCRIPCION', 'COD.FAMILIA', 'TIPO AVIO', 'ID MARCA', 'ID TALLA', 'ID MEDIDA', 'UN',
    'STOCK SEGURIDAD', 'COD.COLOR', 'NOMBRE COLOR', 'PRESENTACION COMERCIAL', 'COD.AVIO PROVEEDOR', 'FACTOR CONVERSION', 'MINIMO COMPRA',
    'COSTO UNIT $', 'LEAD TIME (DIAS)', 'PROVEEDOR', 'LINK IMAGEN', 'UBICACION', 'STATUS APROBACION', 'ACTIVO', 'Actualizado', 'Usuario',
    'DESCRIPCION ADD', 'DESCRIPCION EXTENSA'],
  MOVIMIENTOS: ['ID', 'Fecha', 'Tipo', 'Documento', 'ID.AVIO', 'COD.AVIO', 'Cantidad', 'UN', 'PE', 'Destino', 'Observación', 'Usuario'],
  BOM_ESTILOS: ['Código modelo', 'PE', 'Molde', 'Avíos (JSON)', '# Líneas', 'Actualizado', 'Usuario'],
  PLANTILLAS: ['Código', 'Cliente', 'Descripción', 'Molde ref.', 'Avíos (JSON)', 'Creada', 'Usuario'],
  PEDIDOS_ESTADO: ['PE', 'Cliente', 'Marca', 'Estilos', 'Con BOM', 'Estado', 'Líneas', 'Actualizado', 'Usuario'],
  CONFIG: ['LISTA', 'CODIGO', 'NOMBRE', 'ORDEN', 'ACTIVO'],
  COMBOS_DATA: ['CLAVE', 'VERSION', 'Actualizado', 'Usuario', 'JSON 1', 'JSON 2', 'JSON 3', 'JSON 4', 'JSON 5', 'JSON 6', 'JSON 7', 'JSON 8']
};

/* ================= Web app y setup ================= */
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Consumos y avíos · Nuna Cotton')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
/** Inserta otro archivo HTML del proyecto (CSS y JS separados por módulo). */
function include(nombre) { return HtmlService.createHtmlOutputFromFile(nombre).getContent(); }

/** Ejecutar desde el editor: crea las hojas que falten, congela encabezados y siembra CONFIG. No modifica datos. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(HEAD).forEach(n => {
    const s = ss.getSheetByName(n) || ss.insertSheet(n);
    s.getRange(1, 1, 1, HEAD[n].length).setValues([HEAD[n]])
      .setFontWeight('bold').setBackground('#082D58').setFontColor('#FFFFFF');
    s.setFrozenRows(1);
  });
  const ct = sheet_(SH.CT);
  ct.getRange(1, 1, ct.getMaxRows(), HEAD.COMBOS_DATA.length).setNumberFormat('@'); // JSON como texto: evita que Sheets lo convierta en fecha/número
  if (sheet_(SH.CFG).getLastRow() < 2) {
    append_(SH.CFG, PROC_SEED.map((p, i) => ['PROCESO', p[0], p[1], i + 1, true]).concat(PARA_SEED.map((p, i) => ['PARA', p, p, i + 1, true])));
  }
  return 'Hojas verificadas.';
}

/* ================= Helpers ================= */
const str_ = v => String(v == null ? '' : v).trim();
const up_ = v => str_(v).toUpperCase();
const num_ = v => { const n = Number(String(v).replace(/[^0-9.\-]/g, '')); return isNaN(n) ? 0 : n; };
const r2_ = n => Math.round(n * 100) / 100;
const usr_ = () => Session.getActiveUser().getEmail() || 'usuario';
const fdate_ = d => d instanceof Date ? Utilities.formatDate(d, 'America/Lima', 'dd/MM/yyyy HH:mm') : str_(d);
const bool_ = v => v === true || up_(v) === 'TRUE' || v === '✅';
const pad_ = (n, w) => String(n).padStart(w, '0');
const normNom_ = v => up_(v).replace(/\s+/g, ' ');

function sheet_(n) {
  const s = SpreadsheetApp.getActive().getSheetByName(n);
  if (!s) throw new Error('Falta la hoja ' + n + '. Ejecuta setup() en el editor.');
  return s;
}
function data_(n) {
  const s = sheet_(n), lr = s.getLastRow();
  return lr < 2 ? [] : s.getRange(2, 1, lr - 1, HEAD[n].length).getValues();
}
function append_(n, rows) {
  if (!rows.length) return;
  const s = sheet_(n);
  s.getRange(s.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}
/** Número de fila (1-based) donde la columna `col` es igual a `key`, o -1. Usa TextFinder; si no está disponible, recorre solo esa columna. */
function filaPorClave_(sh, col, key, r0) {
  const last = sh.getLastRow(); r0 = r0 || 2;
  if (last < r0) return -1;
  const rg = sh.getRange(r0, col, last - r0 + 1, 1);
  if (typeof rg.createTextFinder === 'function') {
    try { const f = rg.createTextFinder(key).matchEntireCell(true).matchCase(false).findAll(); if (f.length) return f[0].getRow(); } catch (e) { }
  }
  const v = rg.getValues(); key = up_(key);
  for (let i = 0; i < v.length; i++) if (up_(v[i][0]) === key) return r0 + i;
  return -1;
}
/** Kardex sin las columnas que el cálculo de stock no usa (ID, fecha, destino, obs, usuario). Mantiene los índices 2..8. */
function movData_() {
  const s = sheet_(SH.MOV), lr = s.getLastRow();
  if (lr < 2) return [];
  return s.getRange(2, 3, lr - 1, 7).getValues().map(r => [0, 0, r[0], r[1], r[2], r[3], r[4], r[5], r[6]]);
}
function lock_(fn) {
  const l = LockService.getScriptLock();
  l.waitLock(20000);
  try { return fn(); } finally { SpreadsheetApp.flush(); l.releaseLock(); } // flush: la siguiente ejecución debe ver lo escrito
}
function driveId_(v) {
  v = str_(v);
  if (!v) return '';
  if (v.indexOf('http') === 0) {
    const m = v.match(/[-\w]{25,}/);
    return /drive\.google|docs\.google/.test(v) && m ? m[0] : v;
  }
  return v;
}
const interno_ = (cod, mar, tal, med, col) => up_(cod) + up_(mar) + up_(tal) + up_(med) + up_(col);
/** DESCRIPCION EXTENSA = Descripción avío + Descripción add + Marca + Talla + Medida + Color (omite vacíos y "-"). */
const descExt_ = (partes) => partes.map(str_).filter(x => x && x !== '-').join(' ').replace(/\s+/g, ' ');
function nombres_() {
  const m = {}, mar = {}, med = {}, tal = {};
  data_(SH.MAR).forEach(r => mar[up_(r[0])] = str_(r[1]));
  data_(SH.MED).forEach(r => med[up_(r[0])] = str_(r[1]));
  try { tallas_().forEach(t => tal[t.c] = t.n); } catch (e) { }
  m.mar = mar; m.med = med; m.tal = tal;
  return m;
}
const extDeFila_ = (r, N) => descExt_([r[3], r[26], N.mar[up_(r[6])], up_(r[7]) === 'T000' ? '' : N.tal[up_(r[7])], N.med[up_(r[8])], str_(r[12]) || str_(r[11])]);
/** Recalcula DESCRIPCION EXTENSA de todos los SKU (lo ejecuta setup; también se puede correr a mano). */
function recalcularDescripciones() {
  const d = data_(SH.SKU);
  if (!d.length) return 0;
  const N = nombres_();
  sheet_(SH.SKU).getRange(2, 28, d.length, 1).setValues(d.map(r => [extDeFila_(r, N)]));
  return d.length;
}

/* ================= Caché ================= */
const CACHE_KEYS = ['tallas_v2', 'listado_v4', 'respe_v1', 'ctplan_v1', 'ctcli_v1'];
const CACHE_TROZO = 90000; // CacheService admite ~100 KB por entrada: los valores grandes se guardan en partes
/** Lee/guarda en caché un valor JSON; si pesa más de una entrada lo reparte en `key_0..key_n` con el índice en `key`. */
function cache_(key, minutos, fn) {
  let c = null;
  try {
    c = CacheService.getScriptCache();
    const head = c.get(key);
    if (head) {
      if (head.charAt(0) !== '#') return JSON.parse(head);
      const n = Number(head.slice(1)), keys = []; for (let i = 0; i < n; i++) keys.push(key + '_' + i);
      const parts = c.getAll(keys);
      if (keys.every(k => parts[k] != null)) return JSON.parse(keys.map(k => parts[k]).join(''));
    }
  } catch (e) { }
  const v = fn();
  try {
    if (c) {
      const json = JSON.stringify(v), ttl = minutos * 60;
      if (json.length <= CACHE_TROZO) c.put(key, json, ttl);
      else {
        const all = {}; let n = 0;
        for (let i = 0; i < json.length; i += CACHE_TROZO) all[key + '_' + (n++)] = json.slice(i, i + CACHE_TROZO);
        all[key] = '#' + n;
        c.putAll(all, ttl);
      }
    }
  } catch (e) { }
  return v;
}
/** Borra la caché de PLAN DE VENTAS (botón "Actualizar" o desde el editor). */
function limpiarCache() {
  try { const c = CacheService.getScriptCache(), ks = []; CACHE_KEYS.forEach(k => { ks.push(k); for (let i = 0; i < 12; i++) ks.push(k + '_' + i); }); c.removeAll(ks); } catch (e) { }
  return true;
}
/**
 * Lee solo las filas cuya columna `col` es igual a `key` (TextFinder), en bloques contiguos.
 * Evita leer hojas completas de 100 mil+ celdas para obtener las filas de un pedido.
 */
function filasPorClave_(sh, col, key, nc, r0) {
  const last = sh.getLastRow();
  if (last < r0) return [];
  const rg = sh.getRange(r0, col, last - r0 + 1, 1);
  let filas = [];
  if (typeof rg.createTextFinder === 'function') {
    try { filas = rg.createTextFinder(key).matchEntireCell(true).matchCase(false).findAll().map(r => r.getRow()); } catch (e) { filas = []; }
  }
  if (!filas.length) return sh.getRange(r0, 1, last - r0 + 1, nc).getValues().filter(r => up_(r[col - 1]) === key);
  filas.sort((a, b) => a - b);
  const out = [];
  let ini = filas[0], prev = filas[0];
  const flush = (a, b) => sh.getRange(a, 1, b - a + 1, nc).getValues().forEach(r => { if (up_(r[col - 1]) === key) out.push(r); });
  for (let i = 1; i < filas.length; i++) {
    if (filas[i] === prev + 1) { prev = filas[i]; continue; }
    flush(ini, prev); ini = prev = filas[i];
  }
  flush(ini, prev);
  return out;
}

/* ================= Lectura PLAN DE VENTAS ================= */
let PLAN_SS_ = null;
function plan_() { return PLAN_SS_ || (PLAN_SS_ = SpreadsheetApp.openById(PLAN_ID)); }
/** LISTADO PEDIDOS (A:AA) en caché: alimenta pedidos activos, clientes y cabecera del pedido. */
/** ID de Drive del PDF de la columna "Link CAD": acepta URL escrita, texto con link incrustado o chip de archivo. */
function cadId_(valor, rich) {
  let url = str_(valor);
  if (url.indexOf('http') !== 0 && rich) {
    try {
      url = rich.getLinkUrl() || '';
      if (!url) { const runs = rich.getRuns(); for (let i = 0; i < runs.length && !url; i++) url = runs[i].getLinkUrl() || ''; }
    } catch (e) { url = ''; }
  }
  const m = str_(url).match(/[-\w]{25,}/);
  return m && /drive\.google|docs\.google/.test(url) ? m[0] : '';
}
/** LISTADO PEDIDOS en caché: [PE, cód. cliente, cliente, marca, status, ex-factory, modelos, ID del CAD, programa (G), colección (I)]. */
function listado_() {
  return cache_('listado_v4', CACHE_MIN, () => {
    const lp = plan_().getSheetByName('LISTADO PEDIDOS'), n = lp.getLastRow() - 1;
    if (n < 1) return [];
    const v = lp.getRange(2, 1, n, 27).getValues();
    let rich = null;
    if (v.some(r => str_(r[20]) && str_(r[20]).indexOf('http') !== 0)) {
      try { rich = lp.getRange(2, 21, n, 1).getRichTextValues(); } catch (e) { rich = null; }
    }
    const out = [];
    v.forEach((r, i) => { if (!str_(r[0])) return; out.push([
      up_(r[0]), str_(r[1]), str_(r[3]), str_(r[4]), up_(r[10]),
      r[15] instanceof Date ? Utilities.formatDate(r[15], 'America/Lima', 'dd/MM/yyyy') : str_(r[15]), Number(r[26]) || 0,
      cadId_(r[20], rich ? rich[i][0] : null), str_(r[6]), str_(r[8])]); });
    return out;
  });
}

/** Única fuente de tallas: PLAN DE VENTAS › TALLA (col B código, col C talla). */
function tallas_() {
  return cache_('tallas_v2', 360, () => {
    const s = plan_().getSheetByName('Talla');
    return s.getRange(2, 2, s.getLastRow() - 1, 2).getValues()
      .filter(r => str_(r[0])).map(r => ({ c: up_(r[0]), n: str_(r[1]) }));
  });
}

function readPlan_(pe) {
  const ss = plan_();
  const lrow = listado_().find(r => r[0] === pe);
  const dv = filasPorClave_(ss.getSheetByName('DETALLE PEDIDOS'), 2, pe, 16, 2);
  const tv = filasPorClave_(ss.getSheetByName('DETALLE_TALLAS'), 3, pe, 12, 3);
  const tByNom = {};
  tallas_().forEach(t => { (tByNom[t.n] = tByNom[t.n] || []).push(t.c); });
  const estilos = dv.map(r => {
    const c = str_(r[0]);
    return {
      c: c,
      d: (str_(r[10]) || str_(r[6])).replace(/\s+/g, ' '),
      m: str_(r[7]),
      obs: str_(r[11]).replace(/[\r\n]+/g, ' · ').replace(/\s*·\s*(·\s*)+/g, ' · ').replace(/^·\s*|\s*·$/g, ''),
      img: driveId_(r[15]),
      tl: tv.filter(t => str_(t[1]) === c).map(t => {
        const m = str_(t[0]).match(/-(T\d+)$/i), nom = str_(t[8]);
        const tc = m ? up_(m[1]) : ((tByNom[nom] || []).length === 1 ? tByNom[nom][0] : '');
        return [nom, num_(t[10]), str_(t[11]) === '' ? null : num_(t[11]), tc];
      })
    };
  });
  return { cli: lrow ? lrow[1] : '', marca: lrow ? lrow[3] : '', status: lrow ? lrow[4] : '', cad: lrow ? lrow[7] || '' : '', estilos: estilos };
}

function clientes_() {
  const m = {};
  listado_().forEach(r => { if (r[1]) m[r[1]] = r[3] || r[1]; });
  return Object.keys(m).sort().map(c => ({ c: c, n: m[c] }));
}

/** Por pedido: primera imagen de estilo (DETALLE PEDIDOS col P) y totales de UNDS. PROD. / UNDS. PROG. (DETALLE_TALLAS K/L). En caché. */
function resumenPE_() {
  return cache_('respe_v1', CACHE_MIN, () => {
    const ss = plan_(), m = {};
    const dp = ss.getSheetByName('DETALLE PEDIDOS'), n = dp.getLastRow() - 1;
    if (n >= 1) {
      const pes = dp.getRange(2, 2, n, 1).getValues(), imgs = dp.getRange(2, 16, n, 1).getValues();
      for (let i = 0; i < n; i++) { const pe = up_(pes[i][0]), im = driveId_(imgs[i][0]); if (!pe) continue; const o = m[pe] || (m[pe] = { i: '', p: 0, g: 0, h: 0 }); if (im && !o.i) o.i = im; }
    }
    const dt = ss.getSheetByName('DETALLE_TALLAS'), nt = dt.getLastRow() - 2;
    if (nt >= 1) {
      const pes = dt.getRange(3, 3, nt, 1).getValues(), q = dt.getRange(3, 11, nt, 2).getValues();
      for (let i = 0; i < nt; i++) { const pe = up_(pes[i][0]); if (!pe) continue; const o = m[pe] || (m[pe] = { i: '', p: 0, g: 0, h: 0 });
        o.p += num_(q[i][0]); if (str_(q[i][1]) !== '') { o.g += num_(q[i][1]); o.h = 1; } }
    }
    return m;
  });
}
function pedidosActivos_() {
  return listado_().filter(r => STATUS_EXCLUIDOS.indexOf(r[4]) < 0)
    .map(r => ({ pe: r[0], cli: r[1], marca: r[3], status: r[4] || 'SIN STATUS', exf: r[5], modelos: r[6], cad: r[7] || '' }));
}

/* ================= Maestro ================= */
function maestro_() {
  const ctlFam = {};
  const familias = data_(SH.FAM).filter(r => str_(r[0])).map(r => ({ c: up_(r[0]), n: str_(r[1]), merma: Number(r[2]) || 0, act: bool_(r[3]), ctl: CONTROLES.indexOf(up_(r[4])) >= 0 ? up_(r[4]) : 'UNICO' }));
  familias.forEach(f => ctlFam[f.c] = f.ctl);
  return {
    familias: familias,
    unidades: data_(SH.UN).filter(r => str_(r[0])).map(r => ({ c: up_(r[0]), n: str_(r[1]), ent: bool_(r[2]) })),
    avios: data_(SH.AV).filter(r => str_(r[0])).map(r => ({ c: up_(r[0]), d: str_(r[1]), un: up_(r[2]), pres: str_(r[3]), fam: up_(r[5]), act: bool_(r[6]), ctl: ctlFam[up_(r[5])] || 'UNICO' })),
    marcas: data_(SH.MAR).filter(r => str_(r[0])).map(r => ({ c: up_(r[0]), n: str_(r[1]), cli: str_(r[2]), act: bool_(r[3]), logo: driveId_(r[4]) })),
    medidas: data_(SH.MED).filter(r => str_(r[0])).map(r => ({ c: up_(r[0]), n: str_(r[1]), act: bool_(r[2]) })),
    skus: data_(SH.SKU).filter(r => str_(r[0])).map(r => ({
      id: up_(r[0]), cod: up_(r[2]), d: str_(r[3]), fam: up_(r[4]), tipo: up_(r[5]), mar: up_(r[6]), tal: up_(r[7]), med: up_(r[8]), un: up_(r[9]),
      col: up_(r[11]), coln: str_(r[12]), prov: str_(r[19]), ubic: str_(r[21]), act: bool_(r[23]), add: str_(r[26]), ext: str_(r[27]) || str_(r[3])
    }))
  };
}
const enteraMap_ = () => { const m = {}; data_(SH.UN).forEach(r => m[up_(r[0])] = bool_(r[2])); return m; };

function cargaCerrada_() { return PropertiesService.getScriptProperties().getProperty('CARGA_INICIAL_CERRADA') === '1'; }

/* ================= Stock ================= */
function stock_(pe, mv) {
  const items = {}, pk = {};
  pe = up_(pe);
  (mv || movData_()).forEach(r => {
    const tipo = str_(r[2]), item = up_(r[4]), q = Number(r[6]) || 0, p = up_(r[8]);
    if (!item) return;
    const it = items[item] || (items[item] = { item: item, base: up_(r[5]), und: up_(r[7]), ini: 0, ing: 0, sal: 0, res: 0, resPE: 0, salPE: 0 });
    if (tipo === 'CARGA INICIAL') it.ini += q;
    if (tipo === 'INGRESO') it.ing += q;
    if (tipo === 'SALIDA') it.sal += q;
    if (p && (tipo === 'RESERVA' || tipo === 'LIBERA' || tipo === 'SALIDA')) {
      /* Cronológico (el kardex está en orden de registro): la salida consume solo lo reservado hasta ese momento. */
      const k = p + '|' + item, o = pk[k] || (pk[k] = { pend: 0, sal: 0 });
      if (tipo === 'RESERVA') o.pend = r2_(o.pend + q);
      else o.pend = Math.max(0, r2_(o.pend - q));
      if (tipo === 'SALIDA') o.sal += q;
    }
  });
  Object.keys(pk).forEach(k => {
    const i = k.indexOf('|'), p = k.slice(0, i), item = k.slice(i + 1), o = pk[k];
    const pend = o.pend;
    items[item].res += pend;
    if (p === pe) { items[item].resPE = r2_(pend); items[item].salPE = r2_(o.sal); }
  });
  Object.keys(items).forEach(k => {
    const it = items[k];
    ['ini', 'ing', 'sal', 'res'].forEach(f => it[f] = r2_(it[f]));
    it.act = r2_(it.ini + it.ing - it.sal); it.disp = r2_(it.act - it.res);
  });
  return items;
}
/**
 * Solo lectura. Ejecutar desde el editor: compara la reserva pendiente por PE|SKU con la fórmula anterior
 * (max(0, RESERVA − LIBERA − SALIDA) sobre totales) y lista dónde difiere: reservas "fantasma" que antes no contaban.
 */
function diagnosticoReservas() {
  const mv = movData_(), pk = {};
  mv.forEach(r => {
    const tipo = str_(r[2]), item = up_(r[4]), q = Number(r[6]) || 0, p = up_(r[8]);
    if (!item || !p || ['RESERVA', 'LIBERA', 'SALIDA'].indexOf(tipo) < 0) return;
    const o = pk[p + '|' + item] || (pk[p + '|' + item] = { res: 0, lib: 0, sal: 0, pend: 0 });
    if (tipo === 'RESERVA') { o.res += q; o.pend = r2_(o.pend + q); }
    else { o.pend = Math.max(0, r2_(o.pend - q)); if (tipo === 'LIBERA') o.lib += q; else o.sal += q; }
  });
  const dif = Object.keys(pk).map(k => {
    const o = pk[k], antes = r2_(Math.max(0, o.res - o.lib - o.sal));
    return { pe: k.split('|')[0], item: k.split('|')[1], antes: antes, ahora: o.pend, diferencia: r2_(o.pend - antes) };
  }).filter(d => Math.abs(d.diferencia) > 1e-9);
  Logger.log('PE|SKU revisados: ' + Object.keys(pk).length + ' · con diferencia: ' + dif.length);
  dif.forEach(d => Logger.log(d.pe + ' · ' + d.item + ': antes ' + d.antes + ' → ahora ' + d.ahora + ' (' + (d.diferencia > 0 ? '+' : '') + d.diferencia + ')'));
  return dif;
}
function nextDoc_(prefix, mv) {
  let max = 0;
  (mv || movData_()).forEach(r => {
    const d = str_(r[3]);
    if (d.indexOf(prefix + '-') === 0) max = Math.max(max, parseInt(d.slice(prefix.length + 1), 10) || 0);
  });
  return prefix + '-' + pad_(max + 1, 6);
}
function mov_(tipo, doc, l, q, pe, dest, obs) {
  return [Utilities.getUuid().slice(0, 8), new Date(), tipo, doc, up_(l.item), up_(l.base), q, up_(l.und), up_(pe), dest || '', obs || '', usr_()];
}
function skuMap_() { const m = {}; maestro_().skus.forEach(s => m[s.id] = s); return m; }

/* ================= API: inicio y listados ================= */
function getInit() {
  const out = { user: usr_(), version: VERSION, baseQty: BASE_QTY, procesos: [], paras: [], cargaCerrada: false, maestro: null, tallas: [], plantillas: [], pedidos: [], clientes: [], talleres: [], errores: [] };
  const step = (k, fn) => { try { out[k] = fn(); } catch (e) { out.errores.push(k + ': ' + e.message); } };
  step('maestro', maestro_);
  step('tallas', tallas_);
  step('plantillas', getPlantillas_);
  step('pedidos', getPedidos);
  step('clientes', clientes_);
  step('cargaCerrada', cargaCerrada_);
  step('procesos', () => config_().procesos);
  step('paras', () => config_().paras);
  step('talleres', talleresCT_);
  return JSON.stringify(out);
}
function diagnostico() {
  const r = JSON.parse(getInit());
  Logger.log('Usuario: ' + r.user);
  if (r.maestro) Logger.log('Familias ' + r.maestro.familias.length + ' · Avíos ' + r.maestro.avios.length + ' · SKU ' + r.maestro.skus.length + ' · Marcas ' + r.maestro.marcas.length);
  Logger.log('Tallas (PLAN) ' + r.tallas.length + ' · Pedidos activos ' + r.pedidos.length + ' · Plantillas ' + r.plantillas.length);
  Logger.log(r.errores.length ? 'ERRORES: ' + r.errores.join(' | ') : 'Sin errores');
}
function getPlantillas_() {
  return data_(SH.PLA).filter(r => str_(r[0])).map(r => ({
    code: str_(r[0]), cli: str_(r[1]), desc: str_(r[2]), molde: str_(r[3]), rows: JSON.parse(str_(r[4]) || '[]'), fecha: fdate_(r[5]), usr: str_(r[6])
  }));
}
/** Orden natural de PE: PE-1187-2 < PE-1187-10 < PE-1188 */
function cmpPE_(a, b) {
  const x = String(a).match(/\d+/g) || [], y = String(b).match(/\d+/g) || [];
  for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (Number(x[i]) || 0) - (Number(y[i]) || 0); if (d) return d; }
  return String(a).localeCompare(String(b));
}
const pedFila_ = (p, r) => Object.assign(p, {
  estilos: r ? Number(r[3]) || 0 : p.modelos, conBom: r ? Number(r[4]) || 0 : 0,
  estado: r ? str_(r[5]) : 'SIN BOM', lineas: r ? Number(r[6]) || 0 : 0,
  fecha: r ? fdate_(r[7]) : '', usr: r ? str_(r[8]) : ''
});
function getPedidos(refrescar) {
  if (refrescar) limpiarCache();
  const est = {};
  data_(SH.PED).forEach(r => { if (str_(r[0])) est[up_(r[0])] = r; });
  let rs = {};
  try { rs = resumenPE_(); } catch (e) { }
  return pedidosActivos_().map(p => { const f = pedFila_(p, est[p.pe]), x = rs[p.pe] || {}; f.img = x.i || ''; f.qPed = x.p || 0; f.qProg = x.h ? x.g : null; return f; }).sort((a, b) => cmpPE_(b.pe, a.pe));
}
function getStock(pe) { return stock_(pe || ''); }
function getMovimientos(pe) {
  const s = sheet_(SH.MOV), lr = s.getLastRow();
  if (lr < 2) return [];
  pe = up_(pe);
  let rows;
  if (pe) rows = filasPorClave_(s, 9, pe, HEAD.MOVIMIENTOS.length, 2); /* solo las filas del pedido */
  else { const n = Math.min(1000, lr - 1); rows = s.getRange(lr - n + 1, 1, n, HEAD.MOVIMIENTOS.length).getValues(); }
  return rows.reverse().map(r => ({
    fecha: fdate_(r[1]), tipo: str_(r[2]), doc: str_(r[3]), item: str_(r[4]), base: str_(r[5]),
    cant: Number(r[6]) || 0, und: str_(r[7]), pe: str_(r[8]), dest: str_(r[9]), obs: str_(r[10]), usr: str_(r[11])
  }));
}

/* ================= API: pedido ================= */
function buscarPedido(pe) {
  pe = up_(pe).replace(/^PE\s*-?\s*/, 'PE-');
  const plan = readPlan_(pe);
  if (STATUS_EXCLUIDOS.indexOf(plan.status) >= 0) throw new Error(pe + ' tiene status ' + plan.status + ' en LISTADO PEDIDOS: no se trabaja en almacén.');
  if (!plan.estilos.length) throw new Error(pe + ' no tiene estilos en DETALLE PEDIDOS (col B).');
  const codes = {};
  plan.estilos.forEach(s => codes[s.c] = 1);
  const bom = {}, bomVer = {};
  filasPorClave_(sheet_(SH.BOM), 2, pe, 7, 2).forEach(r => {
    const mod = str_(r[0]);
    bomVer[mod] = verBOM_(r[5]);
    if (codes[mod]) bom[mod] = JSON.parse(str_(r[3]) || '[]');
  });
  return { pe: pe, cli: plan.cli, marca: plan.marca, status: plan.status, cad: plan.cad, estilos: plan.estilos, bom: bom, bomVer: bomVer, stock: stock_(pe) };
}

/** Versión de un BOM = su "Actualizado" en segundos (lo que se lee de la hoja, no de memoria). */
const verBOM_ = d => d instanceof Date ? Math.round(d.getTime() / 1000) : 0; // round: Sheets puede devolver 11:59:59.999 por 12:00:00
/**
 * Antes de escribir: el cliente manda en meta.bomVer las versiones de los BOM del PE con que armó `lines`.
 * Si otro usuario guardó algún BOM del pedido después, se rechaza: con `lines` viejas se liberarían reservas ajenas.
 */
function verificarBOM_(pe, meta) {
  const ver = meta && meta.bomVer;
  if (!ver) throw new Error('La página está desactualizada: recárgala antes de continuar. No se grabó nada.');
  const cambiados = [];
  filasPorClave_(sheet_(SH.BOM), 2, up_(pe), 7, 2).forEach(r => {
    const mod = str_(r[0]);
    if ((Number(ver[mod]) || 0) !== verBOM_(r[5])) cambiados.push(mod + ' (' + (str_(r[6]) || 'otro usuario') + ', ' + fdate_(r[5]) + ')');
  });
  if (cambiados.length) throw new Error('Otro usuario modificó el BOM de ' + cambiados.join(', ') + ' después de que abriste ' + up_(pe) + '. Recarga el pedido; no se grabó nada.');
}

/** Guarda el BOM del estilo; si recibe meta y lines, en la misma llamada libera excedentes y actualiza el estado del pedido. */
function guardarBOM(pe, modelo, molde, rows, meta, lines) {
  return lock_(() => {
    verificarBOM_(pe, meta);
    const s = sheet_(SH.BOM), ahora = new Date();
    ahora.setMilliseconds(0); // la versión se compara en segundos
    const row = [modelo, pe, molde, JSON.stringify(rows), rows.length, ahora, usr_()];
    const f = filaPorClave_(s, 1, modelo, 2);
    if (f > 0) s.getRange(f, 1, 1, row.length).setValues([row]);
    else append_(SH.BOM, [row]);
    if (!lines) return { ver: verBOM_(ahora) };
    lines.forEach(l => l.item = up_(l.item));
    let mv = movData_();
    const lib = ajustarReservas_(pe, lines, mv); mv = mv.concat(lib);
    const e = estado_(pe, meta, lines, mv); e.liberadas = lib.length; e.ver = verBOM_(ahora);
    return e;
  });
}
function bomPorMolde(molde, excluir) {
  const d = filasPorClave_(sheet_(SH.BOM), 3, up_(molde), 7, 2);
  for (let i = d.length - 1; i >= 0; i--) {
    if (str_(d[i][2]) === molde && str_(d[i][0]) !== excluir) return { modelo: str_(d[i][0]), pe: str_(d[i][1]), rows: JSON.parse(str_(d[i][3]) || '[]') };
  }
  return null;
}

function estado_(pe, meta, lines, mv) {
  lines.forEach(l => l.item = up_(l.item));
  const st = stock_(pe, mv);
  let estado = 'SIN BOM';
  if (lines.length) {
    const g = l => st[l.item] || { resPE: 0, salPE: 0 };
    const allSal = lines.every(l => g(l).salPE >= l.req - 1e-9);
    const anySal = lines.some(l => g(l).salPE > 0);
    const allCov = lines.every(l => g(l).salPE + g(l).resPE >= l.req - 1e-9);
    const anyRes = lines.some(l => g(l).resPE > 0);
    estado = allSal ? 'ATENDIDO' : anySal ? 'ATENDIDO PARCIAL' : allCov ? 'RESERVADO' : anyRes ? 'RESERVADO PARCIAL' : 'POR RESERVAR';
  }
  const row = [pe, meta.cliente, meta.marca, meta.estilos, meta.conBom, estado, lines.length, new Date(), usr_()];
  const s = sheet_(SH.PED), d = data_(SH.PED);
  const i = d.findIndex(r => up_(r[0]) === pe);
  if (i >= 0) s.getRange(i + 2, 1, 1, row.length).setValues([row]);
  else append_(SH.PED, [row]);
  const base = pedidosActivos_().find(p => p.pe === pe) || { pe: pe, cli: meta.cliente, marca: meta.marca, status: '', exf: '', modelos: meta.estilos };
  let x = {};
  try { x = resumenPE_()[pe] || {}; } catch (e) { }
  const ped = pedFila_(base, row); ped.img = x.i || ''; ped.qPed = x.p || 0; ped.qProg = x.h ? x.g : null;
  return { estado: estado, stock: st, ped: ped };
}

function ajustarReservas_(pe, lines, mv) {
  const st = stock_(pe, mv), req = {}, out = [];
  lines.forEach(l => req[up_(l.item)] = Number(l.req) || 0);
  Object.keys(st).forEach(k => {
    const s = st[k];
    if (s.resPE <= 0) return;
    const exceso = r2_(s.resPE - Math.max(0, (req[k] || 0) - s.salPE));
    if (exceso > 1e-9) out.push(mov_('LIBERA', '', s, exceso, pe, '', 'Ajuste automático por cambio de BOM'));
  });
  if (out.length) { const doc = nextDoc_('LIB', mv); out.forEach(r => r[3] = doc); append_(SH.MOV, out); }
  return out;
}

/** Bloquea reservas y salidas en pedidos cerrados. */
function exigirAbierto_(pe) {
  const r = listado_().find(x => x[0] === up_(pe));
  if (r && STATUS_SOLO_LECTURA.indexOf(r[4]) >= 0) throw new Error(pe + ' está ' + r[4] + ': solo consulta, no admite reservas ni salidas.');
}
function reservar(pe, meta, lines) {
  exigirAbierto_(pe);
  lines.forEach(l => l.item = up_(l.item));
  return lock_(() => {
    verificarBOM_(pe, meta);
    let mv = movData_();
    mv = mv.concat(ajustarReservas_(pe, lines, mv));
    const st = stock_(pe, mv), ent = enteraMap_(), doc = nextDoc_('RES', mv), out = [];
    lines.forEach(l => {
      const s = st[l.item] || { disp: 0, resPE: 0, salPE: 0 };
      let q = Math.min(l.req - s.salPE - s.resPE, s.disp);
      q = ent[up_(l.und)] ? Math.floor(q + 1e-9) : r2_(q);
      if (q > 0) out.push(mov_('RESERVA', doc, l, q, pe, '', 'Reserva automática'));
    });
    append_(SH.MOV, out);
    const e = estado_(pe, meta, lines, mv.concat(out));
    e.doc = out.length ? doc : null; e.n = out.length;
    return e;
  });
}
function liberar(pe, meta, lines) {
  return lock_(() => {
    verificarBOM_(pe, meta);
    const mv = movData_(), st = stock_(pe, mv), doc = nextDoc_('LIB', mv), out = [];
    Object.keys(st).forEach(k => { const s = st[k]; if (s.resPE > 0) out.push(mov_('LIBERA', doc, s, s.resPE, pe, '', 'Liberación de reserva')); });
    append_(SH.MOV, out);
    const e = estado_(pe, meta, lines, mv.concat(out));
    e.doc = out.length ? doc : null; e.n = out.length;
    return e;
  });
}
function generarSalida(pe, meta, lines, salida, destino, obs) {
  exigirAbierto_(pe);
  return lock_(() => {
    verificarBOM_(pe, meta);
    const mv = movData_(), st = stock_(pe, mv), ent = enteraMap_(), doc = nextDoc_('SAL', mv), out = [], req = {};
    lines.forEach(l => req[up_(l.item)] = Number(l.req) || 0);
    salida.forEach(l => {
      l.item = up_(l.item);
      const q = Number(l.cant) || 0;
      if (q <= 0) return;
      if (ent[up_(l.und)] && Math.abs(q - Math.round(q)) > 1e-9) throw new Error(l.item + ': la cantidad en ' + l.und + ' debe ser entera.');
      if (!(l.item in req)) throw new Error(l.item + ' no está en el BOM del pedido.');
      const s = st[l.item] || { act: 0, disp: 0, resPE: 0, salPE: 0 };
      const pend = r2_(req[l.item] - s.salPE);
      if (q > pend + 1e-9) throw new Error(l.item + ': supera lo pendiente del pedido (' + Math.max(0, pend) + ' ' + l.und + ').');
      const max = r2_(Math.min(s.act, s.resPE + Math.max(0, s.disp)));
      if (q > max + 1e-9) throw new Error(l.item + ': solo puedes despachar ' + max + ' ' + l.und + ' (stock + reserva del pedido).');
      out.push(mov_('SALIDA', doc, l, r2_(q), pe, destino, obs));
    });
    if (!out.length) throw new Error('No hay cantidades para despachar.');
    append_(SH.MOV, out);
    const e = estado_(pe, meta, lines, mv.concat(out));
    e.doc = doc; e.n = out.length;
    return e;
  });
}

/* ================= API: ingresos y carga inicial ================= */
function validarSkuCant_(item, cant) {
  const sh = sheet_(SH.SKU), f = filaPorClave_(sh, 1, up_(item), 2);
  if (f < 0) throw new Error('El SKU ' + item + ' no existe en BD_AVIOS.');
  const r = sh.getRange(f, 1, 1, HEAD.BD_AVIOS.length).getValues()[0];
  const s = { id: up_(r[0]), cod: up_(r[2]), un: up_(r[9]), act: bool_(r[23]) };
  if (!s.act) throw new Error('El SKU ' + s.id + ' está inactivo.');
  const q = Number(cant) || 0;
  if (q <= 0) throw new Error('La cantidad debe ser mayor a 0.');
  if (enteraMap_()[s.un] && Math.abs(q - Math.round(q)) > 1e-9) throw new Error('La cantidad en ' + s.un + ' debe ser entera.');
  return { s: s, q: r2_(q) };
}
function registrarIngreso(d, pe) {
  return lock_(() => {
    const v = validarSkuCant_(d.item, d.cant), mv = movData_(), doc = str_(d.doc) || nextDoc_('ING', mv);
    const row = mov_('INGRESO', doc, { item: v.s.id, base: v.s.cod, und: v.s.un }, v.q, '', '', d.obs);
    append_(SH.MOV, [row]);
    return { doc: doc, stock: stock_(pe || '', mv.concat([row])) };
  });
}
/** Stock de arranque: sin documento, una vez por SKU, solo mientras la carga inicial esté abierta. */
function cargaInicial(d, pe) {
  return lock_(() => {
    if (cargaCerrada_()) throw new Error('La carga inicial ya está cerrada. Usa Registrar ingreso.');
    const v = validarSkuCant_(d.item, d.cant);
    const mv = movData_();
    if (mv.some(r => str_(r[2]) === 'CARGA INICIAL' && up_(r[4]) === v.s.id)) throw new Error(v.s.id + ' ya tiene carga inicial.');
    const row = mov_('CARGA INICIAL', 'CI', { item: v.s.id, base: v.s.cod, und: v.s.un }, v.q, '', '', d.obs || '');
    append_(SH.MOV, [row]);
    return { doc: 'CI', stock: stock_(pe || '', mv.concat([row])) };
  });
}
function cerrarCargaInicial() {
  PropertiesService.getScriptProperties().setProperty('CARGA_INICIAL_CERRADA', '1');
  return true;
}

/* ================= API: maestro (altas) ================= */
/** Nuevo avío base: código = COD.FAMILIA + correlativo de 3 dígitos dentro de la familia. */
function crearAvio(a) {
  return lock_(() => { const cod = crearAvio_(a, maestro_()); return { cod: cod, maestro: maestro_() }; });
}
function crearAvio_(a, m) {
  {
    const fam = m.familias.find(f => f.c === up_(a.fam));
    if (!fam) throw new Error('Familia ' + a.fam + ' no existe.');
    if (!str_(a.d)) throw new Error('Completa la descripción.');
    if (!m.unidades.some(u => u.c === up_(a.un))) throw new Error('Unidad ' + a.un + ' no existe.');
    const max = m.avios.filter(x => x.c.indexOf(fam.c) === 0).reduce((mx, x) => Math.max(mx, parseInt(x.c.slice(fam.c.length), 10) || 0), 0);
    const cod = fam.c + pad_(max + 1, 3);
    append_(SH.AV, [[cod, str_(a.d).toUpperCase(), up_(a.un), str_(a.pres), str_(a.factor), fam.c, true, new Date(), usr_()]]);
    return cod;
  }
}
/**
 * Alta rápida desde Consumo de avíos: crea (opcional) el avío base y su(s) SKU en una sola llamada.
 * a: datos del avío nuevo o null si es un avío existente (k.cod). Si el avío es X TALLA crea un SKU por cada talla
 * recibida (las del estilo); los que ya existen se reutilizan. Valida todo antes de escribir.
 */
function registrarAvioRapido(a, k, tallas) {
  return lock_(() => {
    let m = maestro_();
    const T = tallas_(), mar = up_(k.mar) || 'M000', med = up_(k.med) || 'E000', col = up_(k.col);
    if (!m.marcas.some(x => x.c === mar)) throw new Error('Marca ' + mar + ' no existe.');
    if (!m.medidas.some(x => x.c === med)) throw new Error('Medida ' + med + ' no existe.');
    if (a) {
      if (!m.familias.some(f => f.c === up_(a.fam))) throw new Error('Familia ' + a.fam + ' no existe.');
      if (!str_(a.d)) throw new Error('Completa la descripción del avío.');
      if (!m.unidades.some(u => u.c === up_(a.un))) throw new Error('Unidad ' + a.un + ' no existe.');
    } else if (!m.avios.some(x => x.c === up_(k.cod))) throw new Error('Avío ' + k.cod + ' no existe.');
    const ctl = a ? ((m.familias.find(f => f.c === up_(a.fam)) || {}).ctl || 'UNICO') : (m.avios.find(x => x.c === up_(k.cod)) || {}).ctl;
    const lista = ctl === 'TALLA' ? (tallas || []).map(up_).filter(Boolean) : [up_(k.tal) || 'T000'];
    if (!lista.length) throw new Error('El estilo no tiene tallas con código para crear SKU por talla.');
    lista.forEach(t => { if (t !== 'T000' && !T.some(x => x.c === t)) throw new Error('La talla ' + t + ' no existe en PLAN DE VENTAS.'); });
    const cod = a ? crearAvio_(a, m) : up_(k.cod);
    if (a) m = maestro_();
    const ids = [], creados = [], skAll = data_(SH.SKU);
    lista.forEach(t => {
      const ex = skAll.find(r => up_(r[1]) === interno_(cod, mar, t, med, col));
      if (ex) { ids.push(up_(ex[0])); return; }
      const r = crearSKU_(Object.assign({}, k, { cod: cod, mar: mar, med: med, col: col, tal: t }), m, T, skAll);
      ids.push(r.id); creados.push(r.id);
    });
    return { cod: cod, ids: ids, creados: creados, maestro: maestro_() };
  });
}
/**
 * Nuevo SKU. La talla debe existir en PLAN DE VENTAS (aquí no se crean tallas).
 * ID.AVIO = COD.AVIO-correlativo global de 4 dígitos · CODIGO INTERNO = avío+marca+talla+medida+color (único).
 */
function crearSKU(k) {
  return lock_(() => { const r = crearSKU_(k, maestro_(), tallas_(), data_(SH.SKU)); r.maestro = maestro_(); return r; });
}
/** Crea varios SKU en una sola llamada (faltantes de un BOM). */
function crearSKUs(lista) {
  return lock_(() => {
    const m = maestro_(), t = tallas_(), ids = [], skAll = data_(SH.SKU);
    lista.forEach(k => ids.push(crearSKU_(k, m, t, skAll).id));
    return { ids: ids, maestro: maestro_() };
  });
}
/** Crea un SKU. skAll = filas de BD_AVIOS ya leídas (se actualiza en memoria para altas en lote). */
function crearSKU_(k, m, tallas, skAll) {
  const av = m.avios.find(x => x.c === up_(k.cod));
  if (!av) throw new Error('Avío ' + k.cod + ' no existe.');
  if (!av.act) throw new Error('Avío ' + av.c + ' inactivo.');
  const mar = up_(k.mar) || 'M000', tal = up_(k.tal) || 'T000', med = up_(k.med) || 'E000', col = up_(k.col);
  if (!m.marcas.some(x => x.c === mar)) throw new Error('Marca ' + mar + ' no existe.');
  if (tal !== 'T000' && !tallas.some(x => x.c === tal)) throw new Error('La talla ' + tal + ' no existe en PLAN DE VENTAS. Las tallas se crean solo en PLAN DE VENTAS.');
  if (!m.medidas.some(x => x.c === med)) throw new Error('Medida ' + med + ' no existe.');
  const intern = interno_(av.c, mar, tal, med, col);
  const dup = skAll.find(r => up_(r[1]) === intern);
  if (dup) throw new Error('Ya existe el SKU ' + str_(dup[0]) + ' con esa combinación (' + intern + ').');
  const max = skAll.reduce((mx, r) => { const p = str_(r[0]).split('-'); return Math.max(mx, parseInt(p[p.length - 1], 10) || 0); }, 0);
  const id = av.c + '-' + pad_(max + 1, 4);
  const tipo = up_(k.tipo) === 'STOCK' ? 'STOCK' : 'X DEMANDA';
  const coln = col ? (str_(k.coln) || (m.skus.find(s => s.col === col) || {}).coln || '') : '';
  const add = str_(k.add).toUpperCase();
  const ext = descExt_([av.d, add, (m.marcas.find(x => x.c === mar) || {}).n, tal === 'T000' ? '' : (tallas.find(x => x.c === tal) || {}).n,
    (m.medidas.find(x => x.c === med) || {}).n, coln || col]);
  const fila = [id, intern, av.c, av.d, av.fam, tipo, mar, tal, med, av.un, 0, col, coln, av.pres, '', '', '', '', '', str_(k.prov), '', str_(k.ubic).toUpperCase(), '', true, new Date(), usr_(), add, ext];
  append_(SH.SKU, [fila]); skAll.push(fila);
  return { id: id };
}
/** Control de consumo de una familia: lo heredan todos sus avíos base. */
function actualizarFamilia(cod, cambios) {
  return lock_(() => {
    const s = sheet_(SH.FAM), d = data_(SH.FAM), i = d.findIndex(r => up_(r[0]) === up_(cod));
    if (i < 0) throw new Error('Familia ' + cod + ' no existe.');
    const row = d[i].slice();
    if ('ctl' in cambios) { const c = up_(cambios.ctl); if (CONTROLES.indexOf(c) < 0) throw new Error('Control no válido: ' + c); row[4] = c; }
    s.getRange(i + 2, 1, 1, row.length).setValues([row]);
    return maestro_();
  });
}
function actualizarSKU(id, cambios) {
  return lock_(() => {
    const s = sheet_(SH.SKU), f = filaPorClave_(s, 1, up_(id), 2);
    if (f < 0) throw new Error('SKU ' + id + ' no existe.');
    const row = s.getRange(f, 1, 1, HEAD.BD_AVIOS.length).getValues()[0];
    if ('ubic' in cambios) row[21] = str_(cambios.ubic).toUpperCase();
    if ('act' in cambios) row[23] = !!cambios.act;
    if ('add' in cambios) { row[26] = str_(cambios.add).toUpperCase(); row[27] = extDeFila_(row, nombres_()); }
    row[24] = new Date(); row[25] = usr_();
    s.getRange(f, 1, 1, row.length).setValues([row]);
    return maestro_();
  });
}
function crearMarca(k) {
  return lock_(() => {
    const m = maestro_(), nom = str_(k.n).toUpperCase();
    if (!nom) throw new Error('Completa el nombre de la marca.');
    if (m.marcas.some(x => normNom_(x.n) === normNom_(nom))) throw new Error('La marca ' + nom + ' ya existe.');
    const max = m.marcas.reduce((mx, x) => Math.max(mx, parseInt(x.c.slice(1), 10) || 0), 0);
    const cod = 'M' + pad_(max + 1, 3);
    append_(SH.MAR, [[cod, nom, str_(k.cli), true, str_(k.logo)]]);
    return { cod: cod, maestro: maestro_() };
  });
}
/** Logo de la marca (link de Drive, ID o URL de imagen). Se muestra en las tarjetas de pedidos de sus clientes. */
function actualizarMarcaLogo(cod, logo) {
  return lock_(() => {
    const s = sheet_(SH.MAR), f = filaPorClave_(s, 1, up_(cod), 2);
    if (f < 0) throw new Error('Marca ' + cod + ' no existe.');
    s.getRange(f, 5, 1, 1).setValues([[str_(logo)]]);
    return maestro_();
  });
}
function actualizarMarcaCliente(cod, cli) {
  return lock_(() => {
    const s = sheet_(SH.MAR), d = data_(SH.MAR), i = d.findIndex(r => up_(r[0]) === up_(cod));
    if (i < 0) throw new Error('Marca ' + cod + ' no existe.');
    s.getRange(i + 2, 3, 1, 1).setValues([[str_(cli)]]);
    return maestro_();
  });
}
function crearMedida(k) {
  return lock_(() => {
    const m = maestro_(), nom = str_(k.n).toUpperCase();
    if (!nom) throw new Error('Completa la medida.');
    if (m.medidas.some(x => normNom_(x.n) === normNom_(nom))) throw new Error('La medida ' + nom + ' ya existe.');
    const max = m.medidas.reduce((mx, x) => Math.max(mx, parseInt(x.c.slice(1), 10) || 0), 0);
    const cod = 'E' + pad_(max + 1, 3);
    append_(SH.MED, [[cod, nom, true]]);
    return { cod: cod, maestro: maestro_() };
  });
}

/* ================= API: configuración (listas editables) ================= */
function config_() {
  const rows = data_(SH.CFG).filter(r => str_(r[0]) && str_(r[1]));
  const lista = l => rows.filter(r => up_(r[0]) === l)
    .map(r => ({ c: up_(r[1]), n: str_(r[2]) || str_(r[1]), o: Number(r[3]) || 0, act: bool_(r[4]) }))
    .sort((a, b) => a.o - b.o);
  return { procesos: lista('PROCESO'), paras: lista('PARA') };
}
/** Valores de proc/para usados en BOM y plantillas (para no borrar algo en uso). */
function enUso_(campo) {
  const m = {};
  const scan = (json, ref) => { try { JSON.parse(str_(json) || '[]').forEach(r => { const v = up_(r && r[campo]); if (v) (m[v] = m[v] || []).push(ref); }); } catch (e) { } };
  data_(SH.BOM).forEach(r => scan(r[3], str_(r[0])));
  data_(SH.PLA).forEach(r => scan(r[4], str_(r[0])));
  return m;
}
/**
 * Reemplaza una lista completa (PROCESO o PARA) con el orden recibido.
 * items: [{c, n, act}]. Un código en uso por algún BOM o plantilla no se puede borrar: se desactiva.
 */
function guardarConfig(lista, items) {
  return lock_(() => {
    lista = up_(lista);
    if (lista !== 'PROCESO' && lista !== 'PARA') throw new Error('Lista no válida: ' + lista);
    const vistos = {};
    const limpios = (items || []).map(it => {
      const n = str_(it.n), c = lista === 'PARA' ? up_(it.c || n) : up_(it.c);
      if (!c || !n) throw new Error('Cada fila necesita código y nombre.');
      if (lista === 'PROCESO' && !/^[A-Z0-9]{1,6}$/.test(c)) throw new Error('Código de proceso "' + c + '": solo letras y números, máximo 6.');
      if (vistos[c]) throw new Error('Código repetido: ' + c);
      vistos[c] = 1;
      return { c: c, n: lista === 'PARA' ? c : n, act: it.act !== false };
    });
    if (!limpios.length) throw new Error('La lista no puede quedar vacía.');
    const antes = (lista === 'PROCESO' ? config_().procesos : config_().paras).map(x => x.c);
    const uso = enUso_(lista === 'PROCESO' ? 'proc' : 'para');
    const borrados = antes.filter(c => !vistos[c] && uso[c]);
    if (borrados.length) throw new Error('No se puede eliminar ' + borrados.map(c => c + ' (usado en ' + uso[c].slice(0, 3).join(', ') + (uso[c].length > 3 ? '…' : '') + ')').join('; ') + '. Desactívalo en su lugar.');
    const otras = data_(SH.CFG).filter(r => str_(r[0]) && up_(r[0]) !== lista);
    const nuevas = limpios.map((x, i) => [lista, x.c, x.n, i + 1, x.act]);
    const sh = sheet_(SH.CFG), lr = sh.getLastRow();
    if (lr >= 2) sh.deleteRows(2, lr - 1);
    const todo = otras.concat(nuevas);
    if (todo.length) sh.getRange(2, 1, todo.length, 5).setValues(todo);
    return config_();
  });
}

/* ================= API: plantillas ================= */
function guardarPlantilla(p) {
  return lock_(() => {
    p.code = up_(p.code);
    if (!p.code || !str_(p.desc)) throw new Error('Completa código y descripción.');
    if (!p.rows || !p.rows.length) throw new Error('No se puede guardar una plantilla sin avíos.');
    if (data_(SH.PLA).some(r => up_(r[0]) === p.code)) throw new Error('El código ' + p.code + ' ya existe.');
    append_(SH.PLA, [[p.code, p.cli, p.desc, p.molde, JSON.stringify(p.rows), new Date(), usr_()]]);
    return getPlantillas_();
  });
}
function eliminarPlantilla(code) {
  return lock_(() => {
    const d = data_(SH.PLA), i = d.findIndex(r => str_(r[0]) === code);
    if (i >= 0) sheet_(SH.PLA).deleteRow(i + 2);
    return getPlantillas_();
  });
}
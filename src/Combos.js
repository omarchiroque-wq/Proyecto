/**
 * NUNA COTTON · CONSUMO TEXTIL (Combos) — backend
 *
 * Lee de PLAN DE VENTAS (solo lectura):
 *   LISTADO PEDIDOS  A PE · B cód. cliente · E marca · G programa · I colección · K status
 *   DETALLE PEDIDOS  A código modelo · B PE · C ruta prenda · J cód. prenda cliente · K descripción cliente · P imagen
 *   DETALLE_TALLAS   B código modelo · C PE · F código de molde · I talla · K UNDS. PROD. · L UNDS. PROG.
 *   CONFIG           A cliente · B marca
 *
 * Guarda en COMBOS_DATA una fila por entidad: CLAVE = "colección|id" (ej. tpl|JS-80C01, pgd|PG-1180, prints|A1x2, talleres|ANGEL).
 * Cada fila tiene VERSION: si otro usuario la cambió desde que la cargaste, el guardado de esa fila se rechaza y se devuelve la vigente.
 */

const CT_STATUS_FUERA = ['CERRADO', 'ANULADO INTERNO', 'ANULADO', 'CANCELADO']; // pedidos que no entran a Combos
const CT_J = 8;           // columnas JSON por fila
const CT_TROZO = 45000;   // caracteres por celda (límite de Sheets: 50 000)
const CT_COLS = 4 + CT_J;
const CT_CARPETA = 'NUNA · Imágenes PLM';

/* ================= Lectura PLAN DE VENTAS ================= */
/**
 * Pedidos activos con sus modelos, tallas (UNDS. PROG.) y ruta de prenda. En caché.
 * plan:    [PE, cód. cliente, marca, programa, colección, status, # modelos, Σ prod, Σ prog | null]
 * modelos: { "PE|MOLDE": [[código modelo, descripción cliente, cód. prenda cliente, imagen, {talla: prog}]] }
 * rutas:   { "M-xxxxx": "RP-101-CT · Transfer" }
 */
function planCT_() {
  return cache_('ctplan_v1', CACHE_MIN, () => {
    const ss = plan_(), act = {};
    listado_().forEach(r => { if (r[0] && CT_STATUS_FUERA.indexOf(r[4]) < 0) act[r[0]] = r; });

    const dp = ss.getSheetByName('DETALLE PEDIDOS'), nd = dp.getLastRow() - 1, info = {}, rutas = {};
    if (nd >= 1) dp.getRange(2, 1, nd, 16).getValues().forEach(r => {
      const pe = up_(r[1]), cm = str_(r[0]);
      if (!act[pe] || !cm) return;
      info[pe + '|' + cm] = { d: (str_(r[10]) || str_(r[6])).replace(/\s+/g, ' '), cc: str_(r[9]), img: driveId_(r[15]), mv: str_(r[7]) };
      const ru = str_(r[2]) || str_(r[12]);
      if (ru) rutas[cm] = ru;
    });

    const dt = ss.getSheetByName('DETALLE_TALLAS'), nt = dt.getLastRow() - 2, mods = {}, tot = {};
    if (nt >= 1) dt.getRange(3, 1, nt, 12).getValues().forEach(r => {
      const pe = up_(r[2]), cm = str_(r[1]);
      if (!act[pe] || !cm) return;
      const inf = info[pe + '|' + cm] || {};
      const molde = up_(r[5]) || up_(inf.mv) || 'SIN MOLDE';
      const k = pe + '|' + molde, t = str_(r[8]) || '-';
      const L = mods[k] || (mods[k] = []);
      let m = L.find(x => x[0] === cm);
      if (!m) { m = [cm, inf.d || str_(r[3]).replace(/\s+/g, ' '), inf.cc || '', inf.img || '', {}]; L.push(m); }
      const prog = str_(r[11]) === '' ? 0 : num_(r[11]);
      m[4][t] = (m[4][t] || 0) + prog;
      const o = tot[pe] || (tot[pe] = { cm: {}, p: 0, g: 0, h: 0 });
      o.cm[cm] = 1; o.p += num_(r[10]); if (str_(r[11]) !== '') { o.g += prog; o.h = 1; }
    });

    const plan = Object.keys(act).map(pe => {
      const r = act[pe], o = tot[pe] || { cm: {}, p: 0, g: 0, h: 0 };
      return [pe, r[1], r[3] || r[2], r[8] || '', r[9] || '', r[4], Object.keys(o.cm).length || r[6] || 0, o.p, o.h ? o.g : null];
    }).sort((a, b) => cmpPE_(b[0], a[0]));
    return { plan: plan, modelos: mods, rutas: rutas };
  });
}

/** PLAN DE VENTAS › CONFIG: [[código cliente, marca]]. */
function clientesCT_() {
  return cache_('ctcli_v1', 360, () => {
    const s = plan_().getSheetByName('CONFIG');
    if (!s || s.getLastRow() < 2) return clientes_().map(c => [c.c, c.n]);
    return s.getRange(2, 1, s.getLastRow() - 1, 2).getValues().filter(r => str_(r[0])).map(r => [str_(r[0]), str_(r[1])]);
  });
}

/* ================= Almacén de estado (COMBOS_DATA) ================= */
function ctRows_() {
  const s = sheet_(SH.CT), lr = s.getLastRow();
  return lr < 2 ? [] : s.getRange(2, 1, lr - 1, CT_COLS).getValues();
}
const ctJson_ = r => r.slice(4, 4 + CT_J).map(v => v == null ? '' : String(v)).join('');

/** Talleres del maestro de Combos: alimentan "Entregado a" en las salidas de avíos. */
function talleresCT_() {
  const s = sheet_(SH.CT), lr = s.getLastRow();
  if (lr < 2) return [];
  const filas = [];
  s.getRange(2, 1, lr - 1, 1).getValues().forEach((r, i) => { if (str_(r[0]).indexOf('talleres|') === 0) filas.push(s.getRange(i + 2, 1, 1, CT_COLS).getValues()[0]); });
  return filas.map(r => {
    try { const t = JSON.parse(ctJson_(r)); return { id: t.id, nom: t.nom, tipo: t.tipo }; } catch (e) { return null; }
  }).filter(Boolean);
}

/** Carga de Combos en dos llamadas separadas: si una falla, el mensaje dice cuál (plan de ventas o datos guardados). */
function getCombosPlan(refrescar) {
  if (refrescar) limpiarCache();
  const p = planCT_();
  return JSON.stringify({ user: usr_(), plan: p.plan, modelos: p.modelos, rutas: p.rutas });
}
function getCombosEstado() {
  let cli = [];
  try { cli = clientesCT_(); } catch (e) { cli = []; }
  return JSON.stringify({ clientes: cli, estado: ctRows_().filter(r => str_(r[0])).map(r => [str_(r[0]), str_(r[1]), ctJson_(r)]) });
}
/** Carga inicial de Combos en una sola llamada (diagnóstico desde el editor). */
function getCombosInit(refrescar) {
  if (refrescar) limpiarCache();
  const out = { user: usr_(), plan: [], modelos: {}, rutas: {}, clientes: [], estado: [], errores: [] };
  const step = (fn) => { try { fn(); } catch (e) { out.errores.push(e.message); } };
  step(() => { const p = planCT_(); out.plan = p.plan; out.modelos = p.modelos; out.rutas = p.rutas; });
  step(() => { out.clientes = clientesCT_(); });
  step(() => { out.estado = ctRows_().filter(r => str_(r[0])).map(r => [str_(r[0]), str_(r[1]), ctJson_(r)]); });
  return JSON.stringify(out);
}

/**
 * Guarda cambios de Combos. cambios: [{k: clave, v: JSON | null (borrar), b: versión con la que se cargó}]
 * Devuelve { ok: [{k, ver}], conflictos: [{k, ver, v}] }. Un conflicto no detiene el resto.
 */
function guardarCombos(cambios) {
  return lock_(() => {
    const s = sheet_(SH.CT), lr = s.getLastRow(), idx = {}, ok = [], conf = [], upd = [], nuevas = [], borrar = [];
    const rows = lr < 2 ? [] : s.getRange(2, 1, lr - 1, 2).getValues(); /* solo CLAVE y VERSION: los JSON se leen únicamente si hay conflicto */
    rows.forEach((r, i) => { const k = str_(r[0]); if (k) idx[k] = i; });
    const now = new Date(), u = usr_();
    (cambios || []).forEach(c => {
      const k = str_(c.k);
      if (!k || k.indexOf('|') < 0) return;
      const i = idx[k], cur = i == null ? null : rows[i];
      if (cur && str_(c.b) !== str_(cur[1])) { conf.push({ k: k, ver: str_(cur[1]), v: ctJson_(s.getRange(i + 2, 1, 1, CT_COLS).getValues()[0]) }); return; }
      if (c.v == null) { if (cur) { borrar.push(i + 2); } ok.push({ k: k, ver: '' }); return; }
      const json = String(c.v);
      if (json.length > CT_TROZO * CT_J) throw new Error(k + ': supera el tamaño máximo (' + Math.round(json.length / 1000) + ' KB). Si tiene imágenes, súbelas de nuevo.');
      const ver = String(now.getTime()) + Math.floor(Math.random() * 1000);
      const partes = []; for (let j = 0; j < CT_J; j++) partes.push(json.slice(j * CT_TROZO, (j + 1) * CT_TROZO));
      const row = [k, ver, fdate_(now), u].concat(partes);
      if (cur) upd.push({ f: i + 2, row: row }); else nuevas.push(row);
      ok.push({ k: k, ver: ver });
    });
    upd.forEach(x => { const rg = s.getRange(x.f, 1, 1, CT_COLS); rg.setNumberFormat('@'); rg.setValues([x.row.map(String)]); });
    if (nuevas.length) { const rg = s.getRange(s.getLastRow() + 1, 1, nuevas.length, CT_COLS); rg.setNumberFormat('@'); rg.setValues(nuevas.map(r => r.map(String))); }
    borrar.sort((a, b) => b - a).forEach(f => s.deleteRow(f));
    return { ok: ok, conflictos: conf };
  });
}

/* ================= Código del módulo (carga diferida) ================= */
/**
 * Devuelve el CSS y el JS de Combos para que el navegador los cargue al entrar a Combos.
 * El JS viaja en base64 desde CodigoCombos1..4.gs: servido como HTML, Apps Script lo llegaba truncado.
 */
function getCodigoCombos() {
  const css = HtmlService.createHtmlOutputFromFile('CssCombos').getContent().replace(/^\s*<style>/i, '').replace(/<\/style>\s*$/i, '');
  return { css: css, js: [COMBOS_JS_1, COMBOS_JS_2, COMBOS_JS_3, COMBOS_JS_4], bytes: [COMBOS_JS_1_BYTES, COMBOS_JS_2_BYTES, COMBOS_JS_3_BYTES, COMBOS_JS_4_BYTES] };
}

/* ================= Imágenes ================= */
function carpetaImg_() {
  const p = PropertiesService.getScriptProperties(), id = p.getProperty('CT_IMG_FOLDER');
  if (id) { try { return DriveApp.getFolderById(id); } catch (e) { } }
  const par = DriveApp.getFileById(SpreadsheetApp.getActive().getId()).getParents();
  const f = (par.hasNext() ? par.next() : DriveApp.getRootFolder()).createFolder(CT_CARPETA);
  p.setProperty('CT_IMG_FOLDER', f.getId());
  return f;
}
/** Sube una imagen (data URL) a la carpeta de imágenes PLM y devuelve la URL de miniatura para mostrarla en la app. */
function subirImagen(dataUrl, nombre) {
  const m = String(dataUrl || '').match(/^data:([^;]+);base64,(.+)$/);
  if (!m) throw new Error('Imagen no válida.');
  const ext = /png/.test(m[1]) ? '.png' : '.jpg';
  const f = carpetaImg_().createFile(Utilities.newBlob(Utilities.base64Decode(m[2]), m[1], str_(nombre || 'imagen').replace(/[\\/:*?"<>|]/g, '-') + ext));
  try { f.setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.VIEW); }
  catch (e) { try { f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (e2) { } }
  return 'https://drive.google.com/thumbnail?id=' + f.getId() + '&sz=w800';
}
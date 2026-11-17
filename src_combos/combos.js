/* JsCombos1 · parte 1 de 4 del módulo Combos textil (archivo independiente, con sus propias etiquetas script) */
/* ================= COMBOS TEXTIL (mockup v33 llevado a Apps Script en v4.0.0) ================= */
/* ===== DATA (extraída de la hoja, sin pestañas "acabado") ===== */
const PEDS = {
  'PE-1179': 'SEASIDE',
  'PE-1180': 'IRELAND',
  'PE-1188': 'RHODE ISLAND',
  'PE-1189': 'MAINE',
  'PE-1190': 'I DREAM OF JEWELS',
};
const P5 = Object.keys(PEDS),
  P4 = P5.slice(0, 4);
const IL = 'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M2';
const W = 'WH001|—',
  r = (v, n = 5) => Array(n).fill(v);
const BA = [
    'WH001|[PR01] SEASIDE',
    'WH001|[PR02] IRELAND',
    'WH001|[PR03] RHODE ISLAND',
    'WH001|[PR01] EST. MAINE',
    'WH001|[PR01] EST. I DREAM OF JEWELS',
  ],
  BA4 = BA.slice(0, 4);
const L = {
  pr06: 'WH001|[PR06] LISTADO AZUL',
  ir: 'WH001|[PR02] IRELAND',
  cel: 'WH001|[PR05] LISTADO CELESTE',
  ver: 'WH001|[PR05] LISTADO VERDE',
  a278: 'WH001|LISTADO AZUL 278C',
  a282: 'WH001|LISTADO AZUL 282C',
  v5825: 'WH001|LISTADO VERDE 16-5825',
  v5117: 'WH001|LISTADO VERDE 17-5117',
};
const PC = [L.pr06, L.ir, L.cel, L.ver, L.pr06],
  PC4 = PC.slice(0, 4),
  CB = [W, W, L.cel, L.ver, W];
const FORRO = ['WH001|[PR06] LISTADO AZUL 282C', L.v5117, L.a278, L.v5825, W];
const HC = 'WH|YOVI 301',
  HE = 'LB|YOVI 406',
  U = 'ÚNICO',
  U1 = '1 UNID';
const HB = [HC, 'VERDE OSCURO|YOVI 23TNB', 'CELESTE|YOVI 406', HC, 'TURQUESA|YOVI 252'];
const HBN = ['NV|YOVI 331', ...HB.slice(1)];
const A_BIB = [
  ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
  ['ETIQUETA COMPOSICIÓN NYLON OS', '', [U1, U1, U1, U1, 'LB|YOVI 406']],
  ['HILO DE COSTURA 40/3', 'BOTÓN', HB],
  ['BOTONES N°20', '', r('BLANCO')],
  ['ETIQUETA MARCA TEJIDA', '', r(U)],
  ['ETIQUETA TALLA TEJIDA', '', r(U)],
  ['BATCH NYLON', '', r('')],
  ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U)],
];
const A_30 = [
  ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
  ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE)],
  ['ETIQUETA DE MARCA TEJIDA', '', [U1, U1, U1, HC, U1]],
  ['ETIQUETA DE TALLA TEJIDA', '', [U1, U1, U1, 'BLANCO', U1]],
  ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U1)],
  ['COLA DE RATA MERCERIZADO', '', ['WH', '', '', '', '']],
  ['HILO DE COSTURA 40/3', 'BOTÓN', HBN],
  ['HILO DE COSTURA 40/4', 'OJAL', r(HC)],
  ['BOTONES 16L', '', ['TRANSPARENTE', 'BLANCO', 'BLANCO', 'BLANCO', 'BLANCO']],
  ['CINTA BORLÓN 1CM', '', r('BLANCO CLARO 226')],
  ['BATCH NYLON', '', r('')],
  ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U)],
];
const A_80C01V2 = (cinta) => [
  ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
  ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE)],
  ['HILO DE COSTURA 40/3', 'BOTÓN', HB],
  ['HILO DE COSTURA 40/4', 'OJAL', r(HC)],
  ['BOTONES N°20', '', r('BLANCO')],
  ['CINTA BORLÓN 1CM', '', r(cinta)],
  ['ETIQUETA MARCA TEJIDA', '', r(U)],
  ['ETIQUETA TALLA TEJIDA', '', r(U)],
  ['BATCH NYLON', '', r('')],
  ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U)],
];
const T_80C01V2 = [
  ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA + BOTAPIE', BA],
  ['TELA COMPLEMENTO B', IL, 'PUÑOS + TAPA CIERRE', CB],
  ['TELA COMPLEMENTO C', IL, 'PLANTAS', PC],
  ['VENA 2CM', IL, 'BOTAPIE', r(W)],
];
const E_80C01V2 = [
  ['ENTRETELA', 'ADHESIVO', 'REFUERZO DE OJALES', r('WH')],
  ['ELÁSTICO 3.5CM', '—', '—', r('WH')],
];

const RAW = [
  {
    sheet: 'JS-22A15',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA + MANGAS + PUNTILLAS', BA],
      ['TELA COMPLEMENTO B', IL, 'PUÑOS + TAPA CIERRE', [W, W, L.a278, W, W]],
      [
        'TELA COMPLEMENTO C',
        IL,
        'PLANTAS',
        ['WH001|[PR06] LISTADO AZUL 282C', L.ir, L.a278, L.v5825, 'WH001|LISTADO AZUL NV'],
      ],
      ['COLLARETA 3.5', IL, 'ESCOTE + DELANTERO', [W, W, L.a278, W, W]],
    ],
    ent: [],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
      ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE)],
      [
        'CIERRE NYLON DOBLE LLAVE',
        'NB=50 cm \/\/ 0-3M=55 cm \/\/ 3-6M, 6-9M=60 cm',
        r('REY BLANCO 001'),
      ],
      ['ETIQUETA MARCA TEJIDA', '', r(U)],
      ['ETIQUETA TALLA TEJIDA', '', r(U)],
      ['BATCH NYLON', '', r('')],
      ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U)],
    ],
  },
  {
    sheet: 'JS-23A06',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA + MANGAS', BA],
      [
        'TELA COMPLEMENTO B',
        IL,
        'PUÑOS + TAPA CIERRE + PRETINA DE BOTAPIE',
        [W, W, L.a278, W, W],
      ],
      ['COLLARETA 3.5', IL, 'ESCOTE + DELANTERO (AL TRAVEZ)', [W, W, L.a278, W, W]],
    ],
    ent: [],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
      ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r('—')],
      [
        'CIERRE NYLON DOBLE LLAVE',
        '9-12M=60 cm \/\/ 12-18M=65 cm \/\/ 18-24M=70 cm',
        r('REY BLANCO 001'),
      ],
      ['ETIQUETA MARCA TEJIDA', '', r('—')],
      ['ETIQUETA TALLA TEJIDA', '', r('—')],
      ['BATCH NYLON', '', r('')],
      ['ETIQUETA TRANSFER CON RECTÁNGULO', '', r('1UNID')],
    ],
  },
  {
    sheet: 'JS-80A12V3',
    peds: P4,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA + MANGAS', BA4],
      ['TELA COMPLEMENTO B', IL, 'CUELLO + PUÑOS', r(W, 4)],
      ['COLLARETA', IL, 'PLANTAS', PC4],
      ['VENA 2CM', IL, 'CUELLO + DELANTERO + MANGAS', r(W, 4)],
    ],
    ent: [],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC, 4)],
      ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE, 4)],
      ['HILO DE COSTURA 40/3', 'BOTÓN', HB.slice(0, 4)],
      ['BOTONES N°20', '', r('BLANCO', 4)],
      ['(sin nombre)', '', r(U1, 4)],
      ['(sin nombre)', '', r(U, 4)],
      ['BATCH NYLON', '', r('', 4)],
    ],
    warns: [
      'Mismo código que la pestaña JS-80A12-V3 pero con contenido distinto (mangas/cuello vs tobillos).',
      '2 filas de avío sin nombre.',
    ],
  },
  {
    sheet: 'JS-80A12-V3',
    peds: P4,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA', BA4],
      ['TELA COMPLEMENTO B', IL, 'TOBILLOS', r(W, 4)],
      ['COLLARETA', IL, 'PLANTAS', PC4],
      ['VENA 2CM', IL, 'CUELLO + DELANTERO + MANGAS', r(W, 4)],
    ],
    ent: [['ELÁSTICO 3CM', '—', '—', r('BLANCO', 4)]],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC, 4)],
      ['ETIQUETA DE TALLA TEJIDA', '', r('1UNID', 4)],
      ['HILO DE COSTURA 40/3', '—', r('1UNID', 4)],
      ['BOTONES N°20', '', r('BLANCO', 4)],
      ['(sin nombre)', '', r(U, 4)],
      ['BATCH NYLON', '', r('', 4)],
    ],
    warns: [
      'Mismo código que JS-80A12V3 (solo cambia el guion).',
      'Hilo 40/3 con valor "1UNID" en vez de color/código.',
    ],
  },
  {
    sheet: 'JS-80C01-V2',
    peds: P5,
    telas: [
      [
        'TELA CUERPO A',
        IL,
        'DELANTEROS + ESPALDA + MANGAS + CUELLO SOLAPA + PUÑO + PLAQUETA',
        BA,
      ],
      ['TELA COMPLEMENTO B', IL, 'PUÑOS + TAPA CIERRE', CB],
      ['TELA COMPLEMENTO C', IL, 'PLANTAS', PC],
      ['VENA 2CM', IL, 'CUELLO + DELANTERO + MANGAS', r(W)],
    ],
    ent: [['ENTRETELA', 'TRICOT', 'VUELTAS + CUELLO EXTERNO', r('WH')]],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
      ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE)],
      ['ETIQUETA DE MARCA TEJIDA', '', r(U1)],
      ['ETIQUETA DE TALLA TEJIDA', '', [U1, U1, U1, 'BLANCO', U1]],
      ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U1)],
      [
        'HILO DE COSTURA 40/3',
        'BOTÓN',
        [HC, 'VERDE OSCURO|YOVI 23TNB', 'CELESTE|YOVI 406', HC, 'TURQUESA|GLADYS 252'],
      ],
      ['HILO DE COSTURA 40/4', 'OJAL', r(HC)],
      ['BOTONES N°20', '', r('BLANCO')],
      ['CINTA BORLÓN 1CM', '', r('BLANCO CLARO 226')],
      ['BATCH NYLON', '', r('')],
      ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U)],
    ],
    warns: [
      'Mismo código que JS-80C01V2 con contenido distinto.',
      'Hilo botón PE-1190: GLADYS 252 aquí vs YOVI 252 en el resto.',
      'Etiqueta composición satinada repetida en 2 filas.',
    ],
  },
  {
    sheet: 'JS-80C01V2',
    peds: P5,
    telas: T_80C01V2,
    ent: E_80C01V2,
    avios: A_80C01V2('BLANCO'),
    warns: ['Mismo código que JS-80C01-V2 con contenido distinto.'],
  },
  {
    sheet: 'JS-52A01',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'PIEZA EXTERNA', BA],
      ['TELA COMPLEMENTO B', IL, 'FORRO', FORRO],
      ['TELA COMPLEMENTO C', 'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M3', 'PLANTAS', PC],
      ['COLLARETA 3.2', 'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M4', 'BORDE- (AL TRAVEZ)', r(W)],
    ],
    ent: [],
    avios: A_BIB,
    warns: [
      'Gramaje escrito GR/M3 y GR/M4 en complementos.',
      'Etiqueta composición nylon PE-1190 tiene un hilo (LB YOVI 406).',
    ],
  },
  {
    sheet: ' JS-80C02V2',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA + MANGAS + CUELLOS + VUELTAS + PUÑOS', BA],
      ['TELA COMPLEMENTO B', IL, 'PUÑOS + TAPA CIERRE', CB],
      ['TELA COMPLEMENTO C', IL, 'PLANTAS', PC],
      ['VENA 2CM', IL, 'BASTA MANGA + DELANTERO + CUELLO (AL TRAVEZ)', r(W)],
    ],
    ent: [['(sin nombre)', 'TRICOT', 'VUELTAS + CUELLO EXTERNO', r('WH')]],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
      ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE)],
      ['ETIQUETA DE MARCA TEJIDA', '', r(U1)],
      ['ETIQUETA DE TALLA TEJIDA', '', r(U1)],
      ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U1)],
      ['HILO DE COSTURA 40/3', 'BOTÓN', HB],
      ['HILO DE COSTURA 40/4', 'OJAL', r(HC)],
      ['BOTONES N°20', '', r('BLANCO')],
      ['ETIQUETA MARCA TEJIDA', '', r(U)],
      ['(sin nombre)', '', r(U)],
      ['BATCH NYLON', '', r('')],
    ],
    warns: ['Nombre de pestaña con espacio inicial y duplicado con otra JS-80C02V2.'],
  },
  {
    sheet: 'JS-80C02V2',
    peds: P5,
    telas: T_80C01V2,
    ent: E_80C01V2,
    avios: A_80C01V2('BLANCO CLARO 226'),
    warns: [
      'Pestaña duplicada: su contenido es igual a JS-80C01V2 (botapié), no a la pijama 80C02V2.',
    ],
  },
  {
    sheet: 'JS-27C04',
    peds: P5,
    telas: [
      [
        'TELA CUERPO A',
        IL,
        'DELANTERO + ESPALDA + MANGAS + CUELLOS + PIE DE CUELLO EXTERNO + PLAQUETA SUPERIOR',
        BA,
      ],
      [
        'TELA COMPLEMENTO B',
        IL,
        'PIE DE CUELLO INTERNO + PLAQUETA INFERIOR',
        [L.a282, L.v5117, L.cel, L.ver, W],
      ],
      [
        'COLLARETA 3.5cm',
        IL,
        'VENZ INTERNO - (AL TRAVEZ)',
        [L.a282, L.v5117, L.cel, L.ver, L.pr06],
      ],
      ['VENA 2CM', IL, 'PIE DE CUELLO INTERNO + PLAQUETA INFERIOR + COLLARETA VENTS', r(W)],
    ],
    ent: [['ENTRETELA', '—', 'VUELTAS + CUELLO EXTERNO', r('WH')]],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC)],
      ['HILO DE COSTURA 40/2', 'ETIQUETA MARCA Y TALLA', r(HE)],
      ['ETIQUETA DE MARCA TEJIDA', '', [U1, U1, U1, HC, U1]],
      ['ETIQUETA DE TALLA TEJIDA', '', [U1, U1, U1, 'BLANCO', U1]],
      ['HILO DE COSTURA 40/3', 'BOTÓN', ['WH|YOVI 331', ...HB.slice(1)]],
      ['HILO DE COSTURA 40/4', 'OJAL', r(HC)],
      ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U1)],
      ['BOTONES N°16', '', ['TRANSPARENTE', 'TRANSPARENTE', 'BLANCO', 'BLANCO', 'BLANCO']],
      ['CINTA BORLÓN 1CM', '', r('BLANCO CLARO 226')],
      ['BATCH NYLON', '', r('')],
      ['ETIQUETA COMPOSICIÓN SATINADA', '', r(U)],
    ],
    warns: [
      'Etiqueta de marca PE-1189 tiene un hilo (WH YOVI 301) y etiqueta de talla dice BLANCO.',
      'Hilo botón PE-1179: WH YOVI 331 aquí vs NV YOVI 331 en la versión acabado.',
    ],
  },
  {
    sheet: 'JS-30C01',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDAS + MANGAS', BA],
      ['TELA COMPLEMENTO B', IL, 'CUELLOS', CB],
      ['VENA 2CM', IL, 'BORDE CUELLO', [W, L.ir, L.cel, L.ver, L.pr06]],
      ['TAPETE 3 CM', IL, 'ESCOTE', r(W)],
      ['COLLARETA 3.2 CM', IL, 'BORDE MANGA', [W, '', '', '', '']],
    ],
    ent: [
      ['(sin nombre)', 'TRICOT', 'CUELLO EXTERNO', r('WH')],
      ['(sin nombre)', 'ADHESIVO 2.5', 'VUELTAS ESPALDA', ['WH', '', '', '', '']],
    ],
    avios: A_30,
    warns: [
      'Collareta borde manga y adhesivo solo tienen dato en PE-1179.',
      'Etiqueta de marca PE-1189 tiene un hilo; etiqueta de talla dice BLANCO.',
    ],
  },
  {
    sheet: 'JS-35C01',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTERO + ESPALDA + MANGAS + PLAQUETAS + CUELLOS', BA],
      ['TAPETE 3 CM', IL, 'CUELLOS (AL TRAVEZ)', CB],
      ['VENA 2CM', IL, 'BORDE CUELLO', PC],
      ['TAPETE 3 CM', IL, 'ESCOTE', r(W)],
      ['COLLARETA 3.2 CM', IL, 'COLLARETA ENTREPIERNA (AL TRAVEZ)', [L.a282, '', '', '', '']],
    ],
    ent: [['ENTRETELA', '—', 'PLAQUETAS + CUELLOS EXTERNO E INTERNO', r('WH')]],
    avios: A_30,
    warns: [
      'Collareta entrepierna solo tiene dato en PE-1179.',
      'Etiqueta de marca PE-1189 tiene un hilo; etiqueta de talla dice BLANCO.',
    ],
  },
  {
    sheet: 'JS-39A01',
    peds: P4,
    telas: [
      ['TELA CUERPO A', IL, 'DELANTEROS + ESPALDA', BA4],
      ['COLLARETA', IL, 'PLANTAS', PC4],
      ['VENA 2CM', IL, 'CUELLO + DELANTERO + MANGAS', r(W, 4)],
    ],
    ent: [
      ['ELÁSTICO 10 LIGAS', '—', '—', r('BLANCO', 4)],
      ['ELÁSTICO 3 LIGAS', '—', '—', ['BLANCO', '', '', '']],
    ],
    avios: [
      ['HILO DE COSTURA 40/2', 'CUERPO', r(HC, 4)],
      ['ETIQUETA DE TALLA TEJIDA', '', r('1UNID', 4)],
      ['HILO DE COSTURA 40/3', '—', r('1UNID', 4)],
      ['BOTONES N°20', '', r('BLANCO', 4)],
      ['(sin nombre)', '', r(U, 4)],
      ['BATCH NYLON', '', r('', 4)],
    ],
    warns: ['Plantas y botones en un underwear: revisar si la pestaña se copió de 80A12.'],
  },
  {
    sheet: 'JS-51A01',
    peds: P5,
    telas: [
      ['TELA CUERPO A', IL, 'PIEZA EXTERNA', BA],
      ['TELA COMPLEMENTO B', IL, 'FORRO', FORRO],
      ['TELA COMPLEMENTO C', 'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M3', 'PLANTAS', PC],
      ['COLLARETA 3.2', 'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M4', 'BORDE - (AL TRAVEZ)', r(W)],
    ],
    ent: [],
    avios: A_BIB,
    warns: ['Gramaje escrito GR/M3 y GR/M4 en complementos.'],
  },
  {
    sheet: 'JS-51A02',
    peds: P5,
    col: { 'PE-1179': 'MAINE' },
    telas: [
      ['TELA CUERPO A', IL, 'PIEZA EXTERNA', ['WH001|[PR01] EST. MAINE', ...BA.slice(1)]],
      ['TELA COMPLEMENTO B', IL, 'FORRO', [L.v5825, L.v5117, L.a278, L.v5825, W]],
      [
        'TELA COMPLEMENTO C',
        'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M3',
        'PLANTAS',
        [L.ver, L.ir, L.cel, L.ver, L.pr06],
      ],
      ['COLLARETA 3.2', 'INTERLOCK 50/1 100% PIMA COTTON 180 GR/M4', 'BORDE - (AL TRAVEZ)', r(W)],
    ],
    ent: [],
    avios: A_BIB,
    warns: ['PE-1179 figura con colección MAINE (en el resto de moldes es SEASIDE).'],
  },
];
/* ===== Datos de PLAN DE VENTAS: llegan del servidor (getCombosInit). RAW conserva las pestañas de la Hoja de combinaciones como semilla de plantillas. ===== */
const nmo = (c) =>
  String(c)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
let MOLDES = [],
  TQ = {},
  MODN = {},
  PLAN = [],
  CLIENTES = [],
  RUTA_PLAN = {};
const modelosOf = (m, pe) => (MODN[pe] || {})[nmo(m.code)] || [];
const driveImg = (id) =>
  id
    ? /^https?:/.test(id)
      ? id
      : 'https:\/\/drive.google.com/thumbnail?id=' + encodeURIComponent(id) + '&sz=w200'
    : '';
const tallasOf = (m, pe) => (TQ[pe] || {})[nmo(m.code)] || {};
const qtyOf = (m, pe) => Object.values(tallasOf(m, pe)).reduce((a, b) => a + (+b || 0), 0);
/* plan: [PE, cliente, marca, programa, colección, status, # modelos, Σ prod, Σ prog] · modelos: {"PE|MOLDE": [[cód. modelo, descripción, cód. cliente, imagen, {talla: prog}]]} */
function buildData(D) {
  PLAN = (D.plan || []).map(([pe, cli, marca, pgc, col, st, est, ped, prog]) => ({
    pe,
    cli,
    marca,
    pgc,
    col,
    st,
    est,
    ped,
    prog: prog ?? null,
  }));
  CLIENTES = (D.clientes || []).length
    ? D.clientes
    : [...new Map(PLAN.map((r) => [r.cli, [r.cli, r.marca]])).values()];
  RUTA_PLAN = D.rutas || {};
  TQ = {};
  MODN = {};
  const MC = {};
  Object.entries(D.modelos || {}).forEach(([k, arr]) => {
    const i = k.indexOf('|'),
      pe = k.slice(0, i),
      mo = k.slice(i + 1),
      n = nmo(mo);
    (MODN[pe] = MODN[pe] || {})[n] = arr;
    const t = {};
    arr.forEach((x) =>
      Object.entries(x[4] || {}).forEach(([tl, q]) => (t[tl] = (t[tl] || 0) + (+q || 0))),
    );
    (TQ[pe] = TQ[pe] || {})[n] = t;
    (MC[n] = MC[n] || { code: mo, peds: [] }).peds.push(pe);
  });
  /* Si dos pestañas de la Hoja normalizan al mismo molde (JS-80C01-V2 / JS-80C01V2), los pedidos van solo a una: la de código idéntico al plan o la primera. */
  const bases = RAW.map((m) => m.sheet.trim()),
    own = {};
  Object.entries(MC).forEach(([n, e]) => {
    const c = bases.map((b, i) => i).filter((i) => nmo(bases[i]) === n);
    if (c.length) own[n] = c.find((i) => bases[i] === e.code) ?? c[0];
  });
  const seen = {};
  MOLDES = RAW.map((m, i) => {
    const base = bases[i],
      n = nmo(base);
    seen[base] = (seen[base] || 0) + 1;
    const e = MC[n],
      mine = e && own[n] === i;
    if (e) e.used = 1;
    const dup =
      e && !mine
        ? [`Mismo molde que la pestaña ${bases[own[n]]}: los pedidos se asignan allá.`]
        : [];
    return {
      ...m,
      code: base,
      id: seen[base] > 1 ? base + '~' + seen[base] : base,
      label: seen[base] > 1 ? base + ' (2)' : base,
      warns: [...dup, ...(m.warns || [])],
      peds: mine ? [...e.peds] : [],
    };
  });
  Object.values(MC)
    .filter((e) => !e.used)
    .forEach((e) =>
      MOLDES.push({
        sheet: e.code,
        code: e.code,
        id: e.code,
        label: e.code,
        peds: e.peds,
        telas: [],
        ent: [],
        avios: [],
        warns: [],
      }),
    );
}
/** Suma los moldes que solo existen en plantillas guardadas (sus pedidos ya cerraron) y ordena: primero los que tienen pedidos activos. */
function completarMoldes() {
  Object.keys(S.tpl || {}).forEach((id) => {
    if (!MOLDES.some((m) => m.id === id)) {
      const c = id.split('~')[0];
      MOLDES.push({
        sheet: c,
        code: c,
        id,
        label: c,
        peds: [],
        telas: [],
        ent: [],
        avios: [],
        warns: [],
      });
    }
  });
  MOLDES.sort(
    (a, b) =>
      (b.peds.length > 0) - (a.peds.length > 0) ||
      a.code.localeCompare(b.code, 'es', { numeric: true }) ||
      a.id.localeCompare(b.id),
  );
}

/* ===== utilidades ===== */
const ct$ = (id) => document.getElementById(id);
const ctEsc = (s) =>
  String(s ?? '').replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c],
  );
const has = (v) => v !== '' && v != null;
const inCT = (el) => !!(el && el.closest && el.closest('#ctRoot, #pkHost'));
/* Operaciones (CONFIG): código, operación, tipo, control de precio (E=x estilo, P=x pedido), requiere arte */
const OPS = [
  ['CT', 'Corte', 'Obligatoria', 'E', 0],
  ['CS', 'Costura', 'Obligatoria', 'E', 0],
  ['AC', 'Acabado', 'Obligatoria', 'E', 0],
  ['ET', 'Estampado localizado', 'Opcional', 'P', 1],
  ['SI', 'Smock industrial', 'Opcional', 'P', 1],
  ['SM', 'Smock manual', 'Opcional', 'P', 1],
  ['BS', 'Bishop', 'Opcional', 'P', 1],
  ['BI', 'Bordado industrial', 'Opcional', 'P', 1],
  ['BM', 'Bordado manual', 'Opcional', 'P', 1],
  ['CR', 'Crochet', 'Opcional', 'P', 1],
  ['BO', 'Botón', 'Opcional', 'E', 0],
  ['OJ', 'Ojal', 'Opcional', 'E', 0],
  ['OB', 'Ojal y botón', 'Opcional', 'E', 0],
  ['BR', 'Broche', 'Opcional', 'E', 0],
  ['CP', 'Costura parcial', 'Opcional', 'E', 0],
  ['TR', 'Transfer', 'Opcional', 'E', 0],
];
const OP = Object.fromEntries(
  OPS.map((o) => [o[0], { c: o[0], n: o[1], tipo: o[2], ctl: o[3], art: !!o[4] }]),
);
const PROCS = OPS.map((o) => [o[0], o[1]]);
const PSCOPE = Object.fromEntries(OPS.map((o) => [o[0], o[3] === 'E' ? 'M' : 'P']));
const scopeTxt = (c) => (PSCOPE[c] === 'M' ? 'x estilo' : 'x pedido');
/* Rutas de prenda (CONFIG col N) */
const RUTAS = [
  'RP-101 · Básica',
  'RP-101-CT · Transfer',
  'RP-101-TA · Transfer',
  'RP-102 · Estampado localizado',
  'RP-102-CT · Transfer + Estampado localizado',
  'RP-102-TA · Estampado localizado + Transfer',
  'RP-103 · Smock industrial',
  'RP-103-CT · Transfer + Smock industrial',
  'RP-103-TA · Smock industrial + Transfer',
  'RP-104 · Smock manual',
  'RP-104-CT · Transfer + Smock manual',
  'RP-104-TA · Smock manual + Transfer',
  'RP-105 · Bordado industrial',
  'RP-105-CT · Transfer + Bordado industrial',
  'RP-105-TA · Bordado industrial + Transfer',
  'RP-106 · Bordado manual',
  'RP-106-CT · Transfer + Bordado manual',
  'RP-106-TA · Bordado manual + Transfer',
  'RP-107 · Crochet',
  'RP-107-CT · Transfer + Crochet',
  'RP-107-TA · Crochet + Transfer',
  'RP-108 · Smock industrial + Bordado industrial',
  'RP-108-CT · Transfer + Smock industrial + Bordado industrial',
  'RP-108-TA · Smock industrial + Bordado industrial + Transfer',
  'RP-109 · Smock industrial + Bordado manual',
  'RP-109-CT · Transfer + Smock industrial + Bordado manual',
  'RP-109-TA · Smock industrial + Bordado manual + Transfer',
  'RP-110 · Smock manual + Bordado industrial',
  'RP-110-CT · Transfer + Smock manual + Bordado industrial',
  'RP-110-TA · Smock manual + Bordado industrial + Transfer',
  'RP-111 · Smock manual + Bordado manual',
  'RP-111-CT · Transfer + Smock manual + Bordado manual',
  'RP-111-TA · Smock manual + Bordado manual + Transfer',
  'RP-112 · Bordado industrial + Bordado manual',
  'RP-112-CT · Transfer + Bordado industrial + Bordado manual',
  'RP-112-TA · Bordado industrial + Bordado manual + Transfer',
  'RP-113 · Bordado industrial + Crochet',
  'RP-113-CT · Transfer + Bordado industrial + Crochet',
  'RP-113-TA · Bordado industrial + Crochet + Transfer',
  'RP-114 · Bordado manual + Crochet',
  'RP-114-CT · Transfer + Bordado manual + Crochet',
  'RP-114-TA · Bordado manual + Crochet + Transfer',
  'RP-115 · Costura parcial + Ojal',
  'RP-115-CT · Transfer + Costura parcial + Ojal',
  'RP-115-TA · Costura parcial + Ojal + Transfer',
  'RP-116 · Costura parcial + Ojal + Broche',
  'RP-116-CT · Transfer + Costura parcial + Ojal + Broche',
  'RP-116-TA · Costura parcial + Ojal + Broche + Transfer',
  'RP-117 · Ojal y botón + Broche',
  'RP-117-CT · Transfer + Ojal y botón + Broche',
  'RP-117-TA · Ojal y botón + Broche + Transfer',
  'RP-118 · Costura parcial + Bishop',
  'RP-118-CT · Transfer + Costura parcial + Bishop',
  'RP-118-TA · Costura parcial + Bishop + Transfer',
  'RP-119 · Costura parcial + Bishop + Bordado industrial',
  'RP-119-CT · Transfer + Costura parcial + Bishop + Bordado industrial',
  'RP-119-TA · Costura parcial + Bishop + Bordado industrial + Transfer',
  'RP-120 · Costura parcial + Bishop + Bordado manual',
  'RP-120-CT · Transfer + Costura parcial + Bishop + Bordado manual',
  'RP-120-TA · Costura parcial + Bishop + Bordado manual + Transfer',
].map((l) => {
  const [c, n] = l.split(' · ');
  const byN = Object.fromEntries(OPS.map((o) => [o[1], o[0]]));
  const opt =
    n === 'Básica'
      ? []
      : n
          .split(' + ')
          .map((x) => byN[x.trim()])
          .filter(Boolean);
  const pre = ['TR', 'ET', 'SI', 'SM', 'BS', 'BI', 'BM', 'CR', 'CP'],
    post = ['OJ', 'OB', 'BO', 'BR'];
  const tra = opt.includes('TR') ? (/-TA$/.test(c) ? 'post' : 'pre') : null;
  const seq = [
    'CT',
    ...opt.filter((x) => pre.includes(x) && !(x === 'TR' && tra === 'post')),
    'CS',
    ...opt.filter((x) => post.includes(x)),
    ...(tra === 'post' ? ['TR'] : []),
    'AC',
  ];
  return { c, n, seq };
});
const RT_ = (c) => RUTAS.find((r) => r.c === c);
const TIPOS_PRINT = ['Print cobertura', 'Listado', 'Estampado localizado', 'Sólido teñido'];

/* PLAN DE VENTAS 2026 › CONFIG col A (cliente) y B (marca) */
const cliN = (c) => String(c || '').split('-')[0];
const cliOf = (c) => CLIENTES.find((x) => x[0] === c);
/* Tipo de arte = operación de la ruta que requiere arte */
const ART_TIPOS = [
  ['Estampado localizado', 'P', 'ET'],
  ['Smock industrial', 'SI', 'SI'],
  ['Smock manual', 'SM', 'SM'],
  ['Bishop', 'BS', 'BS'],
  ['Bordado industrial', 'BI', 'BI'],
  ['Bordado manual', 'BM', 'BM'],
  ['Crochet', 'CR', 'CR'],
];
const ART_OLD = {
  Estampado: 'Estampado localizado',
  Bordado: 'Bordado industrial',
  'Smock / Bishop': 'Smock industrial',
};
const ART_TEC = {
  'Estampado localizado': [
    'Digital pigmento',
    'Digital reactivo',
    'Serigrafía',
    'DTF',
    'Transfer',
  ],
  'Smock industrial': ['Máquina smock'],
  'Smock manual': ['Smock a mano'],
  Bishop: ['Bishop a mano', 'Bishop máquina'],
  'Bordado industrial': ['Bordado máquina', 'Aplique + bordado'],
  'Bordado manual': ['Bordado a mano', 'Aplique a mano'],
  Crochet: ['Crochet a mano'],
};
const ART_EST = ['Solicitado', 'En desarrollo', 'En aprobación cliente', 'Aprobado'];
const SENTIDO = ['Sin sentido', 'Una dirección', 'Dos direcciones'];
const plabel = (p) => (p ? (p.ref ? `[${p.ref}] ${p.nombre}` : p.nombre) : '-');
const norm = (t) => String(t).replace(/\s+/g, ' ').trim().toUpperCase();

/* ===== despiece sugerido ===== */
function suggest(ubi) {
  const parts = String(ubi || '')
    .replace(/\(.*?\)/g, '')
    .split(/\+|\n/)
    .map((x) =>
      x
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/[-–]\s*$/, '')
        .trim(),
    )
    .filter((x) => x && x !== '-' && x !== '—');
  const out = [];
  parts.forEach((p) => {
    if (p === 'DELANTEROS') {
      out.push({ q: 1, n: 'DELANTERO IZQ.' }, { q: 1, n: 'DELANTERO DER.' });
      return;
    }
    out.push({ q: /S$/.test(p.split(' ')[0]) ? 2 : 1, n: p });
  });
  return out;
}

const progCode = (r) =>
  r.pgc
    ? /^PG-/i.test(r.pgc)
      ? r.pgc.toUpperCase()
      : 'PG-' + r.pgc
    : 'PG-' + r.pe.replace(/^PE-/, '').split('-')[0];
/* Programa = LISTADO PEDIDOS col G (si está vacía, el prefijo del N° de pedido). No se crean a mano. */
function buildProgs() {
  const map = {};
  PLAN.forEach((r) => {
    const c = progCode(r);
    (map[c] = map[c] || {
      code: c,
      cli: r.cli,
      marca: r.marca,
      combos: [],
      asg: {},
      excl: {},
      groups: [{ id: 'T1', tid: '', pes: [] }],
      out: [],
    }).combos.push({ pe: r.pe, col: r.col });
  });
  const progs = Object.values(map).sort((a, b) =>
    b.code.localeCompare(a.code, undefined, { numeric: true }),
  );
  progs.forEach((pg) =>
    MOLDES.forEach((m) => {
      pg.excl[m.id] = pg.combos.map((c) => c.pe).filter((pe) => !m.peds.includes(pe));
    }),
  );
  return progs;
}
/* ===== Estado =====
 Compartido: hoja COMBOS_DATA, una fila por entidad (plantilla de un molde, combos de un programa, un arte, un taller…).
 Se guarda solo lo que cambió, a los ~1 s de dejar de editar. Si otro usuario cambió esa misma fila, se carga su versión y se avisa.
 Solo en este navegador: sección, estilo y programa abiertos, filtros. */
const UIK = 'nuna-ct-ui-v1',
  UI_KEYS = ['tab', 'sel', 'pi', 'q', 'hideSide', 'chip', 'afil', 'tview'];
const ST_MAP = [
  'tpl',
  'mimg',
  'mdesc',
  'tplG',
  'cmbG',
  'pM',
  'pP',
  'pU',
  'vmin',
  'avcu',
  'avun',
  'codes',
  'pmap',
  'chex',
  'osq',
  'arts',
  'as',
  'aseq',
  'pgd',
  'tarM',
  'tarP',
];
const ST_LIST = ['prints', 'talleres', 'est', 'col', 'tela', 'tprec'];
const ST_ONE = ['hconv', 'pseq', 'osn', 'procs'];
let S = null,
  VER = {},
  LAST = {},
  LOADED = false,
  SEEDED = false,
  tSave = null,
  saving = false,
  again = false,
  pend = false;
const defTalleres = () => [
  {
    id: 'ANGEL',
    nom: 'Taller Angel',
    tipo: 'Costura',
    rs: 'ORIA ROJAS YINY ANGEL',
    ruc: '',
    zona: 'Parque Sinchi Roca',
    tel: '',
    precios: {},
    procs: ['CS'],
  },
  {
    id: 'YOLI',
    nom: 'Taller Yoli',
    tipo: 'Costura',
    rs: 'INGA MARCELO YOLY',
    ruc: '',
    zona: 'Ancón',
    tel: '',
    precios: {},
    procs: ['CS'],
  },
  {
    id: 'YUVICA',
    nom: 'Taller Yuvica',
    tipo: 'Costura',
    rs: 'VASQUEZ CHAVEZ MARIA CRISTEL ANAIS',
    ruc: '10728497896',
    zona: 'Zárate, San Juan de Lurigancho',
    tel: '982 063 800',
    precios: {},
    procs: ['CS'],
  },
  {
    id: 'ELIO',
    nom: 'Taller Elio',
    tipo: 'Costura',
    rs: 'QUISPE QUISPE ELEUTERIO',
    ruc: '10104410800',
    zona: '',
    tel: '',
    precios: {},
    procs: ['CS'],
  },
  {
    id: 'PFERNANDEZ',
    nom: 'Taller Pedro Fernández',
    tipo: 'Costura',
    rs: 'FERNÁNDEZ CHUPILLÓN ELÍ',
    ruc: '10450810296',
    zona: 'Av. Santa Rosa de Lima Mz A Lt 13, San Juan de Lurigancho',
    tel: '',
    precios: {},
    procs: ['CS'],
  },
  {
    id: 'KUKILIN',
    nom: 'Moda BB Kukilin',
    tipo: 'Bordado',
    rs: 'MODA BB KUKILIN',
    ruc: '20600988019',
    zona: '',
    tel: '',
    precios: {},
    procs: ['BI', 'BM'],
  },
];
const defEst = () => [
  { id: 1, c: 'JE0001', d: 'JERSEY 24/1 NE 100% SUPIMA 160 gr/m2', moq: 300 },
  { id: 2, c: 'RB0001', d: 'RIB 1x1 100% PIMA COTTON 185 gr/m2', moq: 100 },
  { id: 3, c: 'PI0001', d: 'PIQUE SIMPLE 44/2 NE 100% COTTON 180 gr/m2', moq: 200 },
  {
    id: 4,
    c: 'JE0002',
    d: 'JERSEY F/SPANDEX 30/1 NE + 20 DN 50% PIMA COTTON 46% MODAL 4% SPANDEX 170 gr/m2',
    moq: 250,
  },
  { id: 5, c: 'IN0001', d: 'INTERLOCK 44/1 NE 100% SUPIMA 190 gr/m2', moq: 300 },
  { id: 6, c: 'IN0002', d: 'INTERLOCK 50/1 100% PIMA COTTON 180 gr/m2', moq: 300 },
];
const defCol = () => [
  { id: 1, c: 'WHT-001', d: 'Blanco óptico', h: '#F6F5EF' },
  { id: 2, c: 'BLU-214', d: 'Azul Nantucket', h: '#7FA6C9' },
  { id: 3, c: 'PNK-118', d: 'Rosa ballet', h: '#F2C6CF' },
  { id: 4, c: 'SAG-305', d: 'Verde sage', h: '#A9B99A' },
  { id: 5, c: 'NAV-410', d: 'Navy marino', h: '#1F2F4F' },
  { id: 6, c: 'HTG-020', d: 'Gris jaspe', h: '#BFC3C7' },
  { id: 7, c: 'WH001', d: 'Blanco', h: '#FFFFFF' },
];
const defTela = () => [
  { id: 1, e: 1, c: 1 },
  { id: 2, e: 1, c: 2 },
  { id: 3, e: 4, c: 3 },
  { id: 4, e: 5, c: 1 },
  { id: 5, e: 5, c: 4 },
  { id: 6, e: 5, c: 5 },
  { id: 7, e: 2, c: 1 },
  { id: 8, e: 2, c: 2 },
  { id: 9, e: 3, c: 6 },
  { id: 10, e: 6, c: 7 },
];
const defHconv = () => [
  { m: 'FINO CABLE', h: 3, mt: 340, u: 'CONO' },
  { m: 'ANCHOR', h: 6, mt: 8, u: 'MADEJA' },
  { m: 'YOVI', h: 1, mt: 4550, u: 'CONO' },
  { m: 'MOLINO', h: 6, mt: 8, u: 'MADEJA' },
  { m: 'COLONIAL', h: '', mt: '', u: 'MADEJA' },
];
const defTprec = () => [
  {
    id: 'TP1',
    n: 'SMOCK BOMBACHO · 5 CARRERAS',
    modo: 'P',
    p: '',
    rows: [
      { tl: '0-3M / 3-6M', p: 5.5 },
      { tl: '6-9M / 9-12M', p: 6 },
      { tl: '12-18M / 18-24M', p: 6 },
      { tl: '2T', p: 6 },
    ],
  },
  { id: 'TP2', n: 'SMOCK VESTIDO · 5 CARRERAS', modo: 'T', p: 8, rows: [] },
  { id: 'TP3', n: 'SMOCK BOMBACHO · TODAS LAS TALLAS', modo: 'T', p: 7.5, rows: [] },
];
/** rows: [[CLAVE, VERSION, JSON]] de COMBOS_DATA. */
function cargarEstado(rows) {
  let ui = {};
  try {
    ui = JSON.parse(localStorage.getItem(UIK) || '{}') || {};
  } catch (e) {}
  S = {
    tab: 'prg',
    sel: 0,
    pi: 0,
    q: '',
    chip: 'RUTA',
    procs: PROCS.map((p) => p[0]),
    pseq: 1,
    osn: 1,
  };
  UI_KEYS.forEach((k) => {
    if (ui[k] !== undefined) S[k] = ui[k];
  });
  ST_MAP.forEach((k) => (S[k] = {}));
  ST_LIST.forEach((k) => (S[k] = []));
  VER = {};
  LAST = {};
  const hay = {};
  rows.forEach(([k, ver, json]) => {
    const i = k.indexOf('|');
    if (i < 0) return;
    const col = k.slice(0, i),
      sub = k.slice(i + 1);
    let v;
    try {
      v = JSON.parse(json);
    } catch (e) {
      return;
    }
    VER[k] = ver;
    LAST[k] = json;
    hay[col] = 1;
    if (ST_LIST.includes(col)) S[col].push(v);
    else if (ST_ONE.includes(col)) S[col] = v;
    else if (ST_MAP.includes(col)) S[col][sub] = v;
  });
  /* primera vez: maestros base (se guardan en el Sheet en el primer guardado) */
  SEEDED = false;
  const seed = (k, f) => {
    if (!hay[k]) {
      S[k] = f();
      SEEDED = true;
    }
  };
  seed('talleres', defTalleres);
  seed('est', defEst);
  seed('col', defCol);
  seed('tela', defTela);
  seed('hconv', defHconv);
  seed('tprec', defTprec);
  S.prints.forEach((p) => {
    if (!p.cons) p.cons = [];
    p.cons = p.cons.map((c) =>
      c.items ? c : { ins: c.ins, items: [{ sku: c.sku || '', cons: c.cons ?? '' }] },
    );
    if (ART_OLD[p.tipo]) {
      p.tipo = ART_OLD[p.tipo];
      p.tec = ART_TEC[p.tipo][0];
    }
    if (!ART_TEC[p.tipo]) p.tipo = 'Estampado localizado';
    if (!p.pm) p.pm = 'T';
  });
  S.talleres.forEach((t) => {
    if (!t.procs) t.procs = t.tipo === 'Bordado' ? ['BI', 'BM'] : ['CS'];
    if (t.tel === undefined) t.tel = '';
  });
  completarMoldes();
  /* plantilla semilla desde las pestañas de la Hoja de combinaciones (solo moldes que aún no tienen plantilla) */
  MOLDES.forEach((m) => {
    if (!S.tpl[m.id])
      S.tpl[m.id] = {
        seq: m.telas.length,
        comps: m.telas.map((r, i) => ({
          id: 'c' + i,
          comp: r[0],
          desc: r[1],
          desp: suggest(r[2]),
          cu: '',
          un: 'kg',
        })),
      };
    S.tpl[m.id].comps.forEach((c) => {
      if (!c.un) c.un = 'kg';
    });
  });
  S.progs = buildProgs();
  S.progs.forEach((pg) => {
    const d = S.pgd[pg.code];
    if (d) {
      pg.asg = d.asg || {};
      pg.out = d.out || [];
    }
  });
  /* programa por defecto: el abierto antes, o el primero que ya tenga estilos con tallas (los recién creados en UDP aún no tienen) */
  if (!S.progs[S.pi] || !MOLDES.some((m) => relevant(m, S.progs[S.pi]))) {
    const i = S.progs.findIndex((pg) => MOLDES.some((m) => relevant(m, pg)));
    S.pi = i < 0 ? 0 : i;
  }
  if (!(S.sel < MOLDES.length)) S.sel = 0;
  if (!['prg', 'tpl', 'art', 'rep', 'prn', 'tal', 'tel', 'cmb'].includes(S.tab)) S.tab = 'prg';
}
/* Combos de cada programa (asg) se guardan por programa; los programas ya cerrados conservan su fila. */
function pgdOf() {
  const o = { ...(S.pgd || {}) };
  S.progs.forEach((pg) => {
    if (Object.keys(pg.asg || {}).length || (pg.out || []).length || o[pg.code])
      o[pg.code] = { asg: pg.asg || {}, out: pg.out || [] };
  });
  S.pgd = o;
  return o;
}
function flat() {
  const o = {};
  ST_MAP.forEach((k) => {
    const v = k === 'pgd' ? pgdOf() : S[k] || {};
    Object.keys(v).forEach((sub) => {
      const x = v[sub];
      if (x == null) return;
      if (k === 'tpl' && !(x.comps || []).length && !(S.tplG || {})[sub]) return;
      o[k + '|' + sub] = JSON.stringify(x);
    });
  });
  ST_LIST.forEach((k) =>
    (S[k] || []).forEach((x) => {
      if (x && x.id != null && x.id !== '') o[k + '|' + x.id] = JSON.stringify(x);
    }),
  );
  ST_ONE.forEach((k) => {
    if (S[k] !== undefined) o[k + '|'] = JSON.stringify(S[k]);
  });
  return o;
}
function aplicar(k, json) {
  const i = k.indexOf('|'),
    col = k.slice(0, i),
    sub = k.slice(i + 1);
  let v = null;
  try {
    v = json ? JSON.parse(json) : null;
  } catch (e) {}
  if (ST_LIST.includes(col)) {
    const Lx = S[col],
      j = Lx.findIndex((x) => String(x.id) === sub);
    if (v == null) {
      if (j >= 0) Lx.splice(j, 1);
    } else if (j >= 0) Lx[j] = v;
    else Lx.push(v);
  } else if (ST_ONE.includes(col)) {
    if (v != null) S[col] = v;
  } else if (ST_MAP.includes(col)) {
    if (v == null) delete S[col][sub];
    else S[col][sub] = v;
    if (col === 'pgd') {
      const pg = S.progs.find((p) => p.code === sub);
      if (pg) {
        pg.asg = (v || {}).asg || {};
        pg.out = (v || {}).out || [];
      }
    }
  }
}
function flush() {
  if (!S) return;
  if (saving) {
    again = true;
    return;
  }
  const F = flat(),
    ch = [];
  Object.keys(F).forEach((k) => {
    if (F[k] !== LAST[k]) ch.push({ k, v: F[k], b: VER[k] || '' });
  });
  Object.keys(LAST).forEach((k) => {
    if (!(k in F)) ch.push({ k, v: null, b: VER[k] || '' });
  });
  if (!ch.length) {
    pend = false;
    Shell.sync('Guardado ✓', 'ok');
    return;
  }
  saving = true;
  Shell.sync('Guardando…', 'run');
  google.script.run
    .withSuccessHandler((r) => {
      saving = false;
      const sent = {};
      ch.forEach((c) => (sent[c.k] = c.v));
      (r.ok || []).forEach((x) => {
        if (sent[x.k] == null) {
          delete LAST[x.k];
          delete VER[x.k];
        } else {
          LAST[x.k] = sent[x.k];
          VER[x.k] = x.ver;
        }
      });
      const cf = r.conflictos || [];
      if (cf.length) {
        cf.forEach((c) => {
          VER[c.k] = c.ver;
          LAST[c.k] = c.v;
          aplicar(c.k, c.v);
        });
        ctRender();
        toast(
          cf.length +
            ' registro(s) los cambió otro usuario mientras editabas: se cargó su versión (' +
            cf
              .map((c) => c.k.replace('|', ' '))
              .slice(0, 3)
              .join(', ') +
            '). Revisa y vuelve a hacer tu cambio.',
          true,
        );
      }
      if (again) {
        again = false;
        flush();
      } else {
        pend = false;
        Shell.sync('Guardado ✓', 'ok');
      }
    })
    .withFailureHandler((err) => {
      saving = false;
      Shell.sync('Sin guardar · reintentando', 'err');
      toast('No se pudo guardar Combos: ' + ((err && err.message) || err), true);
      clearTimeout(tSave);
      tSave = setTimeout(flush, 8000);
    })
    .guardarCombos(ch);
}
window.addEventListener('beforeunload', (e) => {
  if (pend || saving) {
    e.preventDefault();
    e.returnValue = '';
  }
});
function saveUI() {
  try {
    const ui = {};
    UI_KEYS.forEach((k) => (ui[k] = S[k]));
    localStorage.setItem(UIK, JSON.stringify(ui));
  } catch (e) {}
}
function save() {
  saveUI();
  if (typeof A !== 'undefined' && A)
    A.talleres = S.talleres.map((t) => ({ id: t.id, nom: t.nom, tipo: t.tipo }));
  pend = true;
  clearTimeout(tSave);
  tSave = setTimeout(flush, 900);
  Shell.sync('Cambios sin guardar…', 'run');
}
const ctP = () => S.progs[S.pi];
const M = () => MOLDES[S.sel];
const comps = (m) => S.tpl[m.id].comps;
const applic = (m, pg) => (pg || ctP()).combos.map((c) => c.pe).filter((pe) => m.peds.includes(pe));
const relevant = (m, pg) => applic(m, pg).length > 0;
const pmK = (m, c) => m.id + '|' + c,
  ppK = (pe, c) => pe + '|' + c;
const PROC_M = OPS.filter((o) => o[3] === 'E').map((o) => o[0]),
  PROC_P = OPS.filter((o) => o[3] === 'P').map((o) => o[0]);
const colOf = (pe) => (ctP().combos.find((c) => c.pe === pe) || {}).col || '';
function cellOf(m, cid, pe) {
  const v = ((ctP().asg[m.id] || {})[cid] || {})[pe];
  return { t: '', c: '', p: '-', ...(v || {}) };
}
/* ===== Maestro de telas (del tablero NC · Abastecimiento y Reservas de Tela): Tela = Estructura + Color ===== */
const E_ = (id) => S.est.find((x) => x.id === id),
  C_ = (id) => S.col.find((x) => x.id === id),
  T_ = (id) => S.tela.find((x) => x.id === +id);
const telaOpts = (sel) =>
  '<option value="">Elegir tela…</option>' +
  S.est
    .map((e) => {
      const ts = S.tela.filter((t) => t.e === e.id);
      return ts.length
        ? `<optgroup label="${ctEsc(e.c + ' ' + e.d)}">${ts
            .map((t) => {
              const c = C_(t.c);
              return `<option value="${t.id}"${t.id === +sel ? ' selected' : ''}>${ctEsc(e.c)} · ${ctEsc(c.c)} ${ctEsc(c.d)}</option>`;
            })
            .join('')}</optgroup>`
        : '';
    })
    .join('');
const hexOf = (c) => (has(c) ? S.chex[c] || (/^WH/.test(c) ? '#FFFFFF' : null) : null);
function setCell(m, cid, pe, patch) {
  const a = ctP().asg;
  a[m.id] = a[m.id] || {};
  a[m.id][cid] = a[m.id][cid] || {};
  a[m.id][cid][pe] = { ...cellOf(m, cid, pe), ...patch };
}
const prById = (id) => S.prints.find((p) => p.id === id);

/* ===== progreso ===== */
function tplProg(m) {
  const c = comps(m);
  return { tot: c.length, ok: c.filter((x) => has(x.cu)).length };
}
function cmbProg(m) {
  let tot = 0,
    ok = 0;
  comps(m).forEach((c) =>
    applic(m).forEach((pe) => {
      tot++;
      if (T_(cellOf(m, c.id, pe).tid)) ok++;
    }),
  );
  return { tot, ok };
}

/* ===== lista lateral ===== */
function renderSide() {
  ct$('wrap').classList.toggle(
    'full',
    ['prg', 'avi', 'art', 'rep', 'prn', 'tal', 'tel'].includes(S.tab),
  );
  ct$('wrap').classList.toggle('sidec', !!S.hideSide);
  if (['prg', 'avi', 'art', 'rep', 'prn', 'tal', 'tel'].includes(S.tab)) return;
  const q = (S.q || '').trim();
  ct$('mcount').textContent =
    MOLDES.length +
    ' moldes · ' +
    MOLDES.filter((m) => m.peds.length).length +
    ' con pedidos activos';
  const isAp = (m) => !!(S.tplG && S.tplG[m.id]),
    fl = S.afil || { ap: true, pe: true },
    tpl = S.tab === 'tpl';
  ct$('afil').style.display = tpl ? '' : 'none';
  document.querySelectorAll('[data-afil]').forEach((x) => (x.checked = !!fl[x.dataset.afil]));
  const na = MOLDES.filter(isAp).length;
  ct$('n-ap').textContent = na;
  ct$('n-pe').textContent = MOLDES.length - na;
  ct$('mlist').innerHTML = MOLDES.map((m, i) => {
    if (tpl && !(isAp(m) ? fl.ap : fl.pe)) return '';
    if (q && !NPK.match(m.label + ' ' + (S.mdesc[m.id] || '') + ' ' + m.peds.join(' '), q))
      return '';
    if (S.tab === 'cmb' && !relevant(m)) return '';
    const pr = S.tab === 'tpl' ? tplProg(m) : cmbProg(m),
      pct = pr.tot ? Math.round((pr.ok / pr.tot) * 100) : 0,
      img = S.mimg[m.id];
    return `<li><button data-i="${i}" aria-current="${i === S.sel}"><span class="mth">${img ? `<img src="${img}" alt="">` : '<span>sin<br>imagen</span>'}</span><span class="mcode">${ctEsc(m.label)}${m.warns.length ? '<span class="dot" title="Observaciones en la hoja"></span>' : ''}${tpl ? `<span class="apb ${isAp(m) ? 'ok' : ''}" title="${isAp(m) ? 'Aprobado ' + ctEsc(S.tplG[m.id]) : 'Pendiente de aprobar'}">${isAp(m) ? '✓ Aprobado' : 'Pendiente'}</span>` : ''}</span><span class="mpct ${pct === 100 ? 'ok' : ''}">${pct}%</span><span class="msub">${S.tab === 'tpl' ? pr.tot + ' componentes · C.U. ' + pr.ok + '/' + pr.tot : pr.ok + '/' + pr.tot + ' celdas con color'}</span></button></li>`;
  }).join('');
}

/* fin JsCombos1 */
window.__ctPartes = (window.__ctPartes || 0) + 1; (window.__ctOK = window.__ctOK || {})[1] = 1;
/* JsCombos2 · parte 2 de 4 del módulo Combos textil (archivo independiente, con sus propias etiquetas script) */
/* ===== imagen ===== */
function readImg(file, max, cb) {
  const r = new FileReader();
  r.onload = () => {
    const im = new Image();
    im.onload = () => {
      const k = Math.min(1, max / Math.max(im.width, im.height)),
        c = document.createElement('canvas');
      c.width = Math.round(im.width * k);
      c.height = Math.round(im.height * k);
      const x = c.getContext('2d');
      x.fillStyle = '#fff';
      x.fillRect(0, 0, c.width, c.height);
      x.drawImage(im, 0, 0, c.width, c.height);
      cb(c.toDataURL('image/jpeg', 0.82));
    };
    im.onerror = () => toast('No se pudo leer la imagen');
    im.src = r.result;
  };
  r.readAsDataURL(file);
}

/* ===== 2.1 · PROGRAMAS ===== */
let PGQ = '',
  PGC = '';
const planOf = (pe) => PLAN.find((r) => r.pe === pe);
function bomOf(pe) {
  const ms = MOLDES.filter((m) => m.peds.includes(pe));
  return {
    tot: ms.length,
    ok: ms.filter((m) => comps(m).length && comps(m).every((c) => has(c.cu))).length,
  };
}
const ini = (t) =>
  String(t)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
function renderPrg() {
  const clis = [...new Set(PLAN.map((r) => r.marca))].sort();
  const q = PGQ.trim();
  const list = S.progs
    .map((pg, i) => ({ pg, i, rows: pg.combos.map((c) => planOf(c.pe)).filter(Boolean) }))
    .filter(
      (x) =>
        (!PGC || x.pg.marca === PGC) &&
        (!q ||
          NPK.match(
            x.pg.code +
              ' ' +
              x.pg.marca +
              ' ' +
              x.pg.cli +
              ' ' +
              x.rows.map((r) => r.pe + ' ' + r.col).join(' '),
            q,
          )),
    );
  const sum = (rs, k) => rs.reduce((a, r) => a + (+r[k] || 0), 0);
  ct$('content').innerHTML =
    `<div class="car-h"><h2>Programas <span>· ${list.length} · PLAN DE VENTAS</span></h2>
  <div class="cadd"><select class="psel2" id="pgc" aria-label="Cliente"><option value="">Todos los clientes</option>${clis.map((c) => `<option${c === PGC ? ' selected' : ''}>${ctEsc(c)}</option>`).join('')}</select><input class="search" id="pgq" type="search" value="${ctEsc(PGQ)}" placeholder="Buscar programa, pedido, cliente o colección" style="width:300px"><button class="btn sm" data-ctref title="Vuelve a leer PLAN DE VENTAS y lo guardado por otros usuarios">⟳ Actualizar</button></div></div>
${
  list
    .map(({ pg, i, rows }) => {
      const ped = sum(rows, 'ped'),
        prg = rows.some((r) => r.prog != null) ? sum(rows, 'prog') : null;
      return `<section class="pgblock ${i === S.pi ? 'on' : ''}"><div class="pgh"><div><b>${NPK.hl(pg.code, PGQ)}</b><span>${ctEsc(pg.marca)} · ${ctEsc(pg.cli)} · ${rows.length} pedido${rows.length > 1 ? 's' : ''}</span></div>
    <div class="pgk"><span>Pedido <b>${ped}</b></span><span>Programado <b>${prg ?? '-'}</b>${prg ? ` <em>${Math.round((prg / ped) * 100)}%</em>` : ''}</span><span>Estilos <b>${sum(rows, 'est')}</b></span></div>
    <span style="display:flex;gap:8px"><button class="btn sm gold" data-pgo="${i}">Combos x programa ›</button><button class="btn sm" data-pga="${i}">Artes ›</button><button class="btn sm" data-pgr="${i}">Talleres ›</button></span></div>
    <div class="pgcards">${rows
      .map((r) => {
        const b = bomOf(r.pe),
          pct = r.prog && r.ped ? Math.round((r.prog / r.ped) * 100) : null;
        return `<article class="pgcard"><div class="pgt"><span class="av">${ctEsc(ini(r.marca))}</span><div><b>${NPK.hl(r.pe, PGQ)}</b><span>${ctEsc(r.marca)} <small>${ctEsc(r.cli)}</small></span></div></div>
        <div class="pgcol" title="${ctEsc(r.col)}">${NPK.hl(r.col, PGQ)}</div>
        <div class="kp"><div><small>Pedido</small><b>${r.ped}</b></div><div><small>Programado</small><b>${r.prog ?? '-'}</b>${pct ? `<em>${pct}%</em>` : ''}</div><div><small>Estilos</small><b>${r.est}</b></div><div><small>Con BOM textil</small><b>${b.ok}</b></div></div>
        <div class="bst ${b.tot && b.ok === b.tot ? 'ok' : ''}">● ${b.tot ? (b.ok === b.tot ? 'BOM COMPLETO' : 'BOM ' + b.ok + '/' + b.tot) : 'SIN BOM'}</div><div class="bbar"><i style="width:${b.tot ? Math.round((b.ok / b.tot) * 100) : 0}%"></i></div></article>`;
      })
      .join('')}</div></section>`;
    })
    .join('') || '<div class="empty">Ningún programa coincide.</div>'
}`;
}
/* ===== 1 · PLANTILLAS ===== */
function despEditor(c) {
  const l = c.desp;
  return `<div class="desp">${l.map((d, j) => `<div class="dp"><span class="br">[</span><input class="dq" type="number" min="1" value="${ctEsc(d.q)}" data-dq="${c.id}|${j}" aria-label="Cantidad"><span class="br">]</span><input class="dn" value="${ctEsc(d.n)}" data-dn="${c.id}|${j}" placeholder="Pieza" aria-label="Pieza"><button class="x" data-dx="${c.id}|${j}" aria-label="Quitar pieza">×</button></div>`).join('')}
<div class="dfoot"><button class="link" data-dadd="${c.id}">+ Pieza</button><span class="dtot" id="dtot-${c.id}">${l.reduce((a, d) => a + (+d.q || 0), 0)} piezas</span></div></div>`;
}
function headImg(m, big) {
  const img = S.mimg[m.id];
  return `<div><div class="imgbox ${big ? '' : 'sm'}">${img ? `<img src="${img}" alt="Imagen ${ctEsc(m.code)}">` : '<span class="ph">Sin imagen del molde<br>(CAD / flat)</span>'}</div>
${big ? `<div class="imgact"><label class="btn sm">${img ? 'Cambiar' : 'Subir'} imagen<input type="file" accept="image/*" data-upm hidden></label>${img ? '<button class="link del" data-rmimg>Quitar</button>' : ''}</div>` : ''}</div>`;
}
const estOfDesc = (d) => S.est.find((e) => e.d.toUpperCase() === String(d || '').toUpperCase());
const estLbl = (d) => {
  const e = estOfDesc(d);
  return e ? `${e.c} - ${e.d.toUpperCase()}` : d || '';
};
function findEstQ(q) {
  q = (q || '').trim().toUpperCase();
  if (!q) return null;
  const c = q.split(' - ')[0].trim();
  return (
    S.est.find((e) => e.c.toUpperCase() === c) ||
    S.est.find((e) => e.d.toUpperCase() === q) ||
    (() => {
      const f = S.est.filter((e) => (e.c + ' ' + e.d).toUpperCase().includes(q));
      return f.length === 1 ? f[0] : null;
    })()
  );
}
function estDL() {
  const dl = document.getElementById('estopts');
  if (dl)
    dl.innerHTML = S.est
      .map((e) => `<option value="${ctEsc(e.c + ' - ' + e.d.toUpperCase())}">`)
      .join('');
}
let NCD = IL;
function renderTpl() {
  estDL();
  const m = M(),
    c = comps(m),
    pr = tplProg(m);
  const warns = m.warns.length
    ? `<div class="warns"><b>Observaciones de la hoja de origen</b><ul>${m.warns.map((w) => `<li>${ctEsc(w)}</li>`).join('')}</ul></div>`
    : '';
  const rows = c
    .map(
      (x) => `<tr>
  <td style="width:190px"><input class="fi b" data-tf="${x.id}|comp" value="${ctEsc(x.comp)}" list="compopts" aria-label="Componente"></td>
  <td style="width:300px">${(() => {
    const e = estOfDesc(x.desc);
    return `<button class="pkt matb ${e ? '' : 'empty'}" data-pkmat="${x.id}"><span class="pkl"><b>${e ? ctEsc(e.c) : 'Elegir material…'}</b><small class="wrap">${ctEsc(e ? e.d.toUpperCase() : x.desc || '')}</small></span><i>⌕</i></button>`;
  })()}</td>
  <td>${despEditor(x)}</td>
  <td style="width:160px"><div style="display:flex;gap:6px;align-items:center"><input class="fi num ${has(x.cu) ? 'ok' : ''}" inputmode="decimal" data-cu="${x.id}" value="${ctEsc(x.cu)}" placeholder="0.000" aria-label="C.U."><select class="psel2" data-un="${x.id}" aria-label="Unidad">${CU_UN.map((u) => `<option${u === (x.un || 'kg') ? ' selected' : ''}>${u}</option>`).join('')}</select></div></td>
  <td style="width:60px"><button class="link del" data-cdel="${x.id}">Quitar</button></td></tr>`,
    )
    .join('');
  ct$('content').innerHTML =
    sideBtn() +
    `<div class="vh">${headImg(m, true)}<div class="grow"><div class="kicker">Plantilla de estilos · [CT] Corte</div><h1>${ctEsc(m.label)}</h1>
  <input class="fi sdesc" data-mdesc value="${ctEsc(S.mdesc[m.id] || '')}" placeholder="Descripción del estilo (ej. ENTERIZO CON CIERRE Y PIES)" aria-label="Descripción del estilo">
  <div class="meta" style="margin-top:6px">${c.length} componentes · C.U. ${pr.ok} de ${pr.tot}</div></div>
  <div class="pxe pxe2"><div class="lbl">Precio x estilo · por prenda · <span class="mut2">S/ = importe fijo · min = minutos (el valor minuto se pone en la OS)</span></div>${PROC_M.map(
    (k) => {
      const n = PROCS.find((p) => p[0] === k)[1],
        u = unitOf(m, k);
      return `<label><span class="pcode">${k}</span><span class="pn">${ctEsc(n)}</span><span class="pu2"><select class="usel" data-pu="${pmK(m, k)}" aria-label="Unidad ${k}"><option value="S"${u === 'S' ? ' selected' : ''}>S/</option><option value="MIN"${u === 'MIN' ? ' selected' : ''}>min</option></select><input class="fi num ${has(S.pM[pmK(m, k)]) ? 'ok' : ''}" data-pm="${pmK(m, k)}" value="${ctEsc(S.pM[pmK(m, k)] ?? '')}" placeholder="-" inputmode="decimal"></span></label>`;
    },
  ).join('')}</div></div>
  ${warns}
  <div class="tw"><table class="ed"><thead><tr><th>Componente</th><th>Código - descripción material</th><th>Despiece / cantidad</th><th>C.U. x componente / und</th><th></th></tr></thead><tbody>${rows || '<tr><td colspan="5" class="na">Sin componentes. Agrega el primero abajo.</td></tr>'}</tbody></table></div>
  <div class="addc"><b>Agregar componente</b><input class="fi" id="nc-comp" list="compopts" placeholder="Ej. TELA COMPLEMENTO D" style="min-width:220px"><button class="pkt matb" id="nc-desc" data-pkmat="__new" style="flex:1;min-width:240px"><span class="pkl"><b>${ctEsc((estOfDesc(NCD) || {}).c || '')}</b><small>${ctEsc((estOfDesc(NCD) || { d: NCD }).d.toUpperCase())}</small></span><i>⌕</i></button><button class="btn gold" id="nc-add">Agregar</button></div>
  <div class="foot"><span class="mut2" id="tpl-st">${S.tplG && S.tplG[m.id] ? `✓ Aprobado · grabado ${S.tplG[m.id]}` : 'Pendiente · al grabar queda aprobado'}</span><div style="display:flex;gap:8px"><button class="btn" data-nav="-1">Estilo anterior</button><button class="btn" data-nav="1">Siguiente estilo</button><button class="btn gold" id="tpl-save">Grabar</button></div></div>`;
}
const sideBtn = () =>
  S.hideSide
    ? '<button class="btn sm no-print" id="showSide" style="margin-bottom:10px">Estilos ›</button>'
    : '';

/* ===== 2 · COMBOS POR PROGRAMA ===== */
function telaInfo(tid) {
  const t = T_(tid),
    e = t && E_(t.e),
    c = t && C_(t.c);
  if (!t)
    return '<div class="tinfo na"><span class="th csw">-</span><span>Elige la tela: estructura, color y mínimo se cargan solos.</span></div>';
  return `<div class="tinfo"><span class="th csw" style="background:${c.h}"></span><div><b class="tcod">${ctEsc(e.c)}-${ctEsc(c.c)}</b><span class="tdesc">${ctEsc(e.d)}</span><span class="tcol"><b>${ctEsc(c.c)}</b> ${ctEsc(c.d)}${e.moq ? ` · mín. ${e.moq} kg x color` : ''}</span></div></div>`;
}
function printDL() {
  const dl = document.getElementById('printopts');
  if (dl)
    dl.innerHTML =
      '<option value="-">Sin print</option>' +
      S.prints
        .filter((p) => p.tipo === 'Estampado localizado')
        .map(
          (p) =>
            `<option value="${ctEsc(plabel(p))}">${ctEsc(p.cod)} · ${ctEsc(p.tec || '')} · ${ctEsc(p.estado || '')}</option>`,
        )
        .join('');
}
function findPrintQ(q) {
  q = (q || '').trim();
  if (!q || q === '-') return '-';
  const U = q.toUpperCase(),
    L = S.prints.filter((p) => p.tipo === 'Estampado localizado');
  return (
    (
      L.find((p) => plabel(p).toUpperCase() === U || p.cod.toUpperCase() === U) ||
      (() => {
        const f = L.filter((p) => (plabel(p) + ' ' + p.cod).toUpperCase().includes(U));
        return f.length === 1 ? f[0] : null;
      })() ||
      {}
    ).id || null
  );
}
const nidG = (a) => Math.max(0, ...a.map((x) => +x.id || 0)) + 1;
/* ===== Selector con búsqueda + panel (print, tela, material, avío, SKU, arte): usa el componente compartido NPK ===== */
function pkUsage(kind) {
  const u = {};
  Object.values(ctP().asg).forEach((a) =>
    Object.values(a).forEach((o) =>
      Object.values(o).forEach((v) => {
        const id = kind === 'print' ? v.p : v.tid;
        if (id && id !== '-') u[id] = (u[id] || 0) + 1;
      }),
    ),
  );
  return u;
}
const prItem = (p, u) => ({
  id: p.id,
  lbl: plabel(p),
  sub: `${p.cod} · ${p.tipo || ''}`,
  img: p.img,
  est: p.estado || '',
  hay: [plabel(p), p.cod, p.ref, p.tec, p.estado].join(' '),
  use: u[p.id] || 0,
});
const PK_SRC = {
  print: () => {
    const u = pkUsage('print');
    return {
      items: S.prints.filter((p) => p.tipo === 'Estampado localizado').map((p) => prItem(p, u)),
      none: { id: '-', lbl: 'Sin print', sub: 'La celda queda en "-"' },
      chips: [
        ['ap', 'Aprobados', (i) => i.est === 'Aprobado'],
        ['used', 'Usados en el programa', (i) => i.use],
        ['all', 'Todos', () => 1],
      ],
    };
  },
  arte: (c) => {
    const u = {};
    Object.values(S.arts).forEach((L) => L.forEach((a) => (u[a.id] = (u[a.id] || 0) + 1)));
    return {
      items: S.prints.filter((p) => p.tipo === c.tipo).map((p) => prItem(p, u)),
      chips: [
        ['ap', 'Aprobados', (i) => i.est === 'Aprobado'],
        ['used', 'Usados', (i) => i.use],
        ['all', 'Todos', () => 1],
      ],
    };
  },
  tela: () => {
    const u = pkUsage('tela');
    return {
      items: S.tela.map((t) => {
        const e = E_(t.e),
          c = C_(t.c);
        return {
          id: t.id,
          lbl: `${e.c}-${c.c}`,
          sub: `${e.d} · ${c.d}`,
          sw: c.h,
          hay: [e.c, e.d, c.c, c.d].join(' '),
          use: u[t.id] || 0,
        };
      }),
      chips: [
        ['all', 'Todas', () => 1],
        ['used', 'Usadas en el programa', (i) => i.use],
      ],
    };
  },
  mat: () => {
    const u = {};
    Object.values(S.tpl).forEach((T) =>
      T.comps.forEach((c) => {
        const e = estOfDesc(c.desc);
        if (e) u[e.id] = (u[e.id] || 0) + 1;
      }),
    );
    return {
      items: S.est.map((e) => ({
        id: e.id,
        lbl: e.c,
        sub: e.d.toUpperCase(),
        hay: e.c + ' ' + e.d,
        use: u[e.id] || 0,
      })),
      chips: [
        ['all', 'Todas', () => 1],
        ['used', 'Usadas en plantillas', (i) => i.use],
      ],
    };
  },
  avio: () => {
    const u = {};
    S.prints.forEach((p) => (p.cons || []).forEach((c) => (u[c.ins] = (u[c.ins] || 0) + 1)));
    return {
      items: AVD.av.map(([c, d, un]) => ({
        id: c,
        lbl: c,
        sub: `${d} · ${famOf(c)[0]} · ${un}`,
        tag: ctlOf(c),
        hay: [c, d, famOf(c)[0], un].join(' '),
        use: u[c] || 0,
        nsku: (SKBY[c] || []).length,
      })),
      chips: [
        ['all', 'Todos', () => 1],
        ['hilo', 'Hilos', (i) => i.id.startsWith('HI')],
        ['used', 'Usados en artes', (i) => i.use],
        ['sku', 'Con SKU', (i) => i.nsku],
      ],
    };
  },
  color: () => {
    const u = {};
    S.prints.forEach((p) => (p.cols || []).forEach((id) => (u[id] = (u[id] || 0) + 1)));
    return {
      items: S.col.map((c) => ({
        id: c.id,
        lbl: c.c,
        sub: c.d,
        sw: c.h,
        hay: c.c + ' ' + c.d,
        use: u[c.id] || 0,
      })),
      chips: [
        ['all', 'Todos', () => 1],
        ['used', 'Usados en artes', (i) => i.use],
      ],
    };
  },
  cli: () => {
    const u = {};
    S.prints.forEach((p) => {
      if (p.cli) u[p.cli] = (u[p.cli] || 0) + 1;
    });
    return {
      items: CLIENTES.map(([c, m]) => ({
        id: c,
        lbl: c,
        sub: m.trim(),
        hay: c + ' ' + m,
        use: u[c] || 0,
      })),
      chips: [
        ['all', 'Todos', () => 1],
        ['used', 'Con artes', (i) => i.use],
      ],
    };
  },
  sku: (c) => ({
    items: (SKBY[c.ins] || []).map((x) => ({
      id: x.id,
      lbl: x.id,
      sub: skuAttr(x) + (x.un ? ' · ' + x.un : ''),
      hay: x.id + ' ' + skuAttr(x),
      use: 0,
    })),
    chips: [],
  }),
};
function openPicker(cfg) {
  const extra =
    cfg.create === 'color'
      ? `<div class="pkcr"><b>Nuevo color / Pantone</b><input class="fi" id="nc-c" placeholder="Código (ej. 13-1520 TCX)"><input class="fi" id="nc-d" placeholder="Descripción (ej. Rosa cuarzo)"><input type="color" class="fi cpk2" id="nc-h" value="#E8B4B8" aria-label="Color"><button class="btn gold" id="nc-add2">Crear y elegir</button></div>`
      : cfg.create === 'tela'
        ? `<div class="pkcr"><b>Nueva tela</b><select class="fi" id="nt-e"><option value="">Estructura…</option>${S.est.map((e) => `<option value="${e.id}">${ctEsc(e.c)} · ${ctEsc(e.d)}</option>`).join('')}</select><select class="fi" id="nt-c"><option value="">Color…</option><option value="new">+ Nuevo color / Pantone</option>${S.col.map((c) => `<option value="${c.id}">${ctEsc(c.c)} · ${ctEsc(c.d)}</option>`).join('')}</select><span id="nt-new" hidden><input class="fi" id="nc-c" placeholder="Código / Pantone"><input class="fi" id="nc-d" placeholder="Descripción"><input type="color" class="fi cpk2" id="nc-h" value="#E8B4B8" aria-label="Color"></span><button class="btn gold" id="nt-add">Crear y elegir</button></div>`
        : '';
  NPK.open({ ...cfg, src: () => PK_SRC[cfg.kind](cfg.ctx), extra, onClick: pkCrear });
}
/* Crear color o tela desde el selector y elegirlo */
function pkCrear(b) {
  if (b.id !== 'nc-add2' && b.id !== 'nt-add') return;
  let cid;
  const needCol = b.id === 'nc-add2' || ct$('nt-c').value === 'new';
  if (needCol) {
    const c = (ct$('nc-c').value || '').trim().toUpperCase(),
      d = (ct$('nc-d').value || '').trim();
    if (!c || !d) {
      toast('Código y descripción del color son obligatorios', true);
      return;
    }
    const ex = S.col.find((x) => x.c === c);
    if (ex) cid = ex.id;
    else {
      cid = nidG(S.col);
      S.col.push({ id: cid, c, d, h: ct$('nc-h').value });
    }
  } else cid = +ct$('nt-c').value;
  if (b.id === 'nc-add2') {
    save();
    const c = C_(cid);
    NPK.pickItem({ id: cid, lbl: c.c, sub: c.d, sw: c.h });
    toast(c.c + ' agregado al maestro de colores');
    return;
  }
  const e = +ct$('nt-e').value;
  if (!e || !cid) {
    toast('Elige estructura y color', true);
    return;
  }
  let t = S.tela.find((x) => x.e === e && x.c === cid);
  if (!t) {
    t = { id: nidG(S.tela), e, c: cid };
    S.tela.push(t);
  }
  save();
  NPK.pickItem({ id: t.id, lbl: `${E_(e).c}-${C_(cid).c}`, sub: '' });
  toast('Tela ' + E_(e).c + '-' + C_(cid).c + ' creada');
}
document.addEventListener('change', (e) => {
  if (e.target.id === 'nt-c') {
    ct$('nt-new').hidden = e.target.value !== 'new';
  }
});
/* combos: print / tela */
function openPK(kind, cid, pe) {
  const m = M(),
    x = comps(m).find((c) => c.id === cid),
    v = cellOf(m, cid, pe),
    cur = kind === 'print' ? v.p : v.tid,
    col = (ctP().combos.find((c) => c.pe === pe) || {}).col || '';
  let f;
  if (kind === 'print' && cur && cur !== '-') {
    const p = prById(cur);
    if (p && p.estado !== 'Aprobado') f = 'all';
  }
  openPicker({
    kind,
    f,
    cur,
    create: kind === 'tela' ? 'tela' : null,
    title: kind === 'print' ? 'Elegir print' : 'Elegir tela',
    sub: `${x ? x.comp : ''} · ${pe} ${col}`,
    ph:
      kind === 'print'
        ? 'Buscar por nombre, código, técnica o estado…'
        : 'Buscar por estructura, código o color…',
    back: `[data-pk="${kind}|${cid}|${pe}"]`,
    scopes: [
      ['cell', 'Esta celda'],
      ['row', 'Toda la fila (todos los pedidos)'],
      ['col', 'Vacíos de ' + pe],
    ],
    onPick: (i, sc) => {
      let patch;
      if (kind === 'print') patch = { p: i.id };
      else {
        const tl = T_(i.id);
        patch = { tid: tl.id, t: E_(tl.e).d.toUpperCase(), c: C_(tl.c).c };
      }
      const empty = (c2, pe2) => {
        const w = cellOf(m, c2, pe2);
        return kind === 'print' ? !w.p || w.p === '-' : !T_(w.tid);
      };
      let n = 0;
      if (sc === 'row')
        applic(m).forEach((pe2) => {
          setCell(m, cid, pe2, patch);
          n++;
        });
      else if (sc === 'col')
        comps(m).forEach((c) => {
          if (c.id === cid || empty(c.id, pe)) {
            setCell(m, c.id, pe, patch);
            n++;
          }
        });
      else {
        setCell(m, cid, pe, patch);
        n = 1;
      }
      save();
      renderCmb();
      renderSide();
      toast(
        `${i.lbl} aplicado a ${n} celda${n > 1 ? 's' : ''}${i.est && i.est !== 'Aprobado' ? ' · ' + i.est : ''}`,
      );
    },
  });
}
function printOptions(sel) {
  return (
    `<option value="-"${sel === '-' ? ' selected' : ''}>-</option>` +
    S.prints
      .filter((p) => p.tipo === 'Estampado localizado' || p.id === sel)
      .map(
        (p) =>
          `<option value="${p.id}"${p.id === sel ? ' selected' : ''}>${ctEsc(plabel(p))}</option>`,
      )
      .join('')
  );
}
function renderColoresList() {
  const set = new Set(['WH001']);
  S.progs.forEach((pg) =>
    Object.values(pg.asg).forEach((a) =>
      Object.values(a).forEach((o) => Object.values(o).forEach((v) => v.c && set.add(v.c))),
    ),
  );
  ct$('colores').innerHTML = [...set].map((c) => `<option>${ctEsc(c)}</option>`).join('');
  const tl = new Set();
  Object.values(S.tpl).forEach((t) => t.comps.forEach((c) => c.desc && tl.add(c.desc)));
  S.progs.forEach((pg) =>
    Object.values(pg.asg).forEach((a) =>
      Object.values(a).forEach((o) => Object.values(o).forEach((v) => v.t && tl.add(v.t))),
    ),
  );
  ct$('telas').innerHTML = [...tl].map((t) => `<option>${ctEsc(t)}</option>`).join('');
}
const pgSel = () =>
  `<select class="psel2" id="progSel" aria-label="Programa" style="font-weight:700;max-width:320px">${progOpts()}</select>`;
function progOpts() {
  return S.progs
    .map(
      (p, i) =>
        `<option value="${i}"${i === S.pi ? ' selected' : ''}>${ctEsc(p.code)} · ${ctEsc(p.marca)} (${p.combos.length})</option>`,
    )
    .join('');
}
function renderCmb() {
  renderColoresList();
  printDL();
  const pg = ctP();
  if (!relevant(M()))
    S.sel = Math.max(
      0,
      MOLDES.findIndex((x) => relevant(x)),
    );
  const m = M(),
    ok = relevant(m),
    c = comps(m),
    pr = cmbProg(m),
    combos = pg.combos.filter((cb) => m.peds.includes(cb.pe));
  const head = `<div class="pghead no-print"><button class="btn sm" data-tab="prg">‹ Programas</button><div><b>${ctEsc(pg.code)}</b><span>${ctEsc(pg.marca)} · ${ctEsc(pg.cli)} · ${combos.length} pedido${combos.length > 1 ? 's' : ''}</span></div>${pgSel()}</div>`;
  if (!ok) {
    ct$('content').innerHTML =
      sideBtn() +
      head +
      '<div class="empty">Este programa no tiene estilos en la plantilla todavía.</div>';
    return;
  }
  const th = combos
    .map((cb) => `<th class="ccol"><span>${ctEsc(cb.pe)}</span><small>${ctEsc(cb.col)}</small></th>`)
    .join('');
  const rows = c
    .map(
      (x) =>
        `<tr><td class="compc fixc"><b>${ctEsc(x.comp)}</b><span>${x.desp
          .filter((d) => d.n)
          .map((d) => `[${d.q}] ${ctEsc(d.n)}`)
          .join(
            '<br>',
          )}</span>${combos.length > 1 ? `<button class="link" data-cpall="${x.id}" style="margin-top:6px" title="Copiar el primer pedido a todos">⇉ Copiar a todos</button>` : ''}</td>` +
        combos
          .map((cb) => {
            const v = cellOf(m, x.id, cb.pe),
              p = prById(v.p),
              k = x.id + '|' + ctEsc(cb.pe);
            return `<td class="cc ccol">
      ${(() => {
        const t = T_(v.tid),
          e = t && E_(t.e),
          c = t && C_(t.c);
        return `<button class="pkt pkt-t ${t ? '' : 'empty'}" data-pk="tela|${k}" aria-label="Elegir tela ${ctEsc(cb.pe)}">${t ? `<span class="th csw" style="background:${c.h}"></span><span class="pkl"><b>${ctEsc(e.c)}-${ctEsc(c.c)}</b><small class="wrap">${ctEsc(e.d)}</small><small><b>${ctEsc(c.d)}</b></small></span>` : '<span class="th csw">-</span><span class="pkl"><b>Elegir tela…</b></span>'}<i>⌕</i></button>`;
      })()}
      <button class="pkt pkt-p ${p ? (p.estado === 'Aprobado' ? '' : 'warn') : 'none'}" data-pk="print|${k}" aria-label="Elegir print ${ctEsc(cb.pe)}"><span class="th">${p && p.img ? `<img src="${p.img}" alt="">` : '-'}</span><span class="pkl"><b>${p ? ctEsc(plabel(p)) : 'Sin print'}</b><small>${p ? `${ctEsc(p.cod)} · ${ctEsc(p.tipo)}${p.estado !== 'Aprobado' ? ` · <em>${ctEsc(p.estado)}</em>` : ''}` : 'Buscar print…'}</small></span><i>⌕</i></button></td>`;
          })
          .join('') +
        `</tr>`,
    )
    .join('');
  ct$('content').innerHTML =
    sideBtn() +
    head +
    `<div class="vh">${headImg(m, false)}<div class="grow"><h1>${ctEsc(m.label)}</h1>${S.mdesc[m.id] ? `<div class="meta">${ctEsc(S.mdesc[m.id])}</div>` : ''}<div class="meta">${pr.ok}/${pr.tot} celdas con tela</div></div></div>
  <div class="tw cmbw"><table class="ed cmbt"><thead><tr><th class="fixc">Componente</th>${th}</tr></thead><tbody>${rows || `<tr><td class="fixc na">-</td>${combos.map(() => '<td></td>').join('')}</tr>`}</tbody></table></div>
  <div class="foot"><span class="mut2" id="cmb-st">${(S.cmbG || {})[pg.code + '|' + m.id] ? `✓ Grabado ${S.cmbG[pg.code + '|' + m.id]}` : 'Sin grabar'}</span><div style="display:flex;gap:8px"><button class="btn" data-nav="-1">Estilo anterior</button><button class="btn" data-nav="1">Siguiente estilo</button><button class="btn gold" id="cmb-save">Grabar</button></div></div>`;
}

/* ===== MAESTRO DE PRINTS ===== */
const blankPF = (t) => ({
  cons: [],
  id: null,
  ref: '',
  nombre: '',
  tipo: t || 'Estampado localizado',
  tec: ART_TEC[t || 'Estampado localizado'][0],
  temporada: '',
  sentido: 'Sin sentido',
  telaColor: 'WH001',
  ubic: '',
  estado: 'Solicitado',
  swatch: false,
  fSwatch: '',
  comCli: '',
  comUdp: '',
  img: null,
});
let PF = blankPF(),
  PMSG = '',
  PERR = false,
  PQ = '',
  PT = 'Todos';
const prefOf = (t) => (ART_TIPOS.find((x) => x[0] === t) || ['', 'P'])[1];
const seqK = (c, t) => cliN(c) + '|' + prefOf(t);
const seqOfC = (c, t) => {
  const k = seqK(c, t);
  if (S.aseq[k]) return S.aseq[k];
  const pre = cliN(c) + '-' + prefOf(t);
  const mx = S.prints
    .filter((p) => String(p.cod).startsWith(pre))
    .map((p) => parseInt(String(p.cod).slice(pre.length)) || 0);
  return Math.max(0, ...mx) + 1;
};
const defCli = () => {
  const pc = typeof ctP === 'function' && S.progs && ctP() ? String(ctP().cli || '') : '';
  return (CLIENTES.find((x) => x[0] === pc) ||
    CLIENTES.find((x) => cliN(x[0]) === cliN(pc)) ||
    CLIENTES[0] || [''])[0];
};
const nextCod = (t, c) => {
  c = c || PF.cli || defCli();
  return cliN(c) + '-' + prefOf(t) + String(seqOfC(c, t)).padStart(5, '0');
};
function usage(id) {
  let n = Object.values(S.arts || {}).reduce(
    (a, L) => a + L.filter((x) => x.id === id).length,
    0,
  );
  S.progs.forEach((pg) =>
    Object.values(pg.asg).forEach((a) =>
      Object.values(a).forEach((o) =>
        Object.values(o).forEach((v) => {
          if (v.p === id) n++;
        }),
      ),
    ),
  );
  return n;
}
const estCls = (e) =>
  e === 'Aprobado'
    ? 'ok'
    : e === 'En aprobación cliente'
      ? 'ap'
      : e === 'En desarrollo'
        ? 'dv'
        : 'so';
function consEditor() {
  const C = PF.cons || [],
    fm = consFmt(PF.tipo);
  if (!C.length)
    return '<p class="na">Sin consumos. Agrega hilos y otros avíos que usa este arte.</p>';
  return C.map((c, ci) => {
    const a = AVB[c.ins],
      hi = isHilo(c.ins) && fm !== 'uni',
      ctl = a ? ctlOf(c.ins) : '',
      un = hi ? 'MTS' : a ? a.u : '',
      nsk = c.items.filter((it) => it.sku).length;
    const it = c.items
      .map((x, ii) => {
        const s = SK[x.sku],
          cv = convOf(x.mh),
          tot = itCons(c.ins, x, fm);
        return `<div class="cit"><span class="cn">${ii + 1}</span>
    <button class="pkt cskb ${x.sku ? '' : 'empty'}" data-pksku="${ci}|${ii}"><span class="pkl"><b>${x.sku ? ctEsc(x.sku) : 'Elegir SKU…'}</b><small>${s ? ctEsc(skuAttr(s)) : (SKBY[c.ins] || []).length ? 'Buscar color / SKU' : 'Sin SKU en BD_AVIOS'}</small></span><i>⌕</i></button>
    ${
      hi
        ? `<div class="hrow"><label>Marca<select class="fi" data-ci2="${ci}|${ii}|mh"><option value="">-</option>${(S.hconv || []).map((h) => `<option${h.m === x.mh ? ' selected' : ''}>${ctEsc(h.m)}</option>`).join('')}</select></label><label>Hebras<input class="fi num" data-ci2="${ci}|${ii}|h" value="${ctEsc(x.h ?? '')}" inputmode="decimal"></label>${fm === 'smock' ? `<label>Carreras<input class="fi num" data-ci2="${ci}|${ii}|c" value="${ctEsc(x.c ?? '')}" inputmode="decimal"></label><label>Recorrido mts<input class="fi num" data-ci2="${ci}|${ii}|r" value="${ctEsc(x.r ?? '')}" inputmode="decimal"></label>` : `<label>Mts x und.<input class="fi num" data-ci2="${ci}|${ii}|mu" value="${ctEsc(x.mu ?? '')}" inputmode="decimal"></label>`}<span class="htot"><small>Total unit.</small><b>${tot ? fmin(tot) : '-'}</b> mts</span></div>${cv && convCap(cv) ? `<small class="hcv">1 ${ctEsc(cv.u)} ${ctEsc(cv.m)} = ${fmin(convCap(cv))} mts (${cv.h} hebras × ${cv.mt} m)</small>` : x.mh ? '<small class="hcv miss">Marca sin conversión</small>' : ''}`
        : `<div class="hrow"><label>Consumo único<input class="fi num" data-ci2="${ci}|${ii}|cons" value="${ctEsc(x.cons ?? '')}" inputmode="decimal" placeholder="0.00"></label><span class="htot"><small>Und</small><b>${ctEsc((s && s.un) || un || '-')}</b></span></div>`
    }
    ${c.items.length > 1 ? `<button class="x" data-cdeli="${ci}|${ii}" aria-label="Quitar color">×</button>` : ''}</div>`;
      })
      .join('');
    return `<div class="cav"><div class="cavh"><button class="pkt cavb ${a ? '' : 'empty'}" data-pkavio="${ci}"><span class="pkl"><b>${a ? ctEsc(c.ins) : 'Elegir avío…'} ${ctl ? `<span class="ctlb ${ctl}">${ctl.toLowerCase()}</span>` : ''} ${un ? `<span class="ctlb">${ctEsc(un)}</span>` : ''}</b><small>${a ? ctEsc(a.d) : 'Buscar en el catálogo de avíos'}</small></span><i>⌕</i></button>
    <span class="ast ${nsk === c.items.length && nsk ? 'ok' : 'no'}">${nsk} SKU</span><button class="x" data-cdelx="${ci}" aria-label="Quitar avío">×</button></div>
    ${a ? it + (ctl === 'COLOR' || hi ? `<button class="btn sm cadc" data-caddi="${ci}">+ Agregar color</button>` : '') : ''}</div>`;
  }).join('');
}
let PV = 'art';
function tpView() {
  const use = (id) =>
    S.prints.filter((p) => p.tp === id).length +
    Object.values(S.arts).reduce((a, L) => a + L.filter((x) => x.tp === id).length, 0);
  return `<div class="car-h"><h2>Tipos de precio <span>· S/ por prenda · se asignan al arte y se pueden cambiar por estilo en Asignación de artes</span></h2></div>
<div class="tpg">${(S.tprec || [])
  .map(
    (
      t,
    ) => `<div class="tpc"><div class="tph"><input class="fi b" data-tpf="${t.id}|n" value="${ctEsc(t.n)}" aria-label="Nombre"><select class="fi" data-tpf="${t.id}|modo"><option value="T"${t.modo !== 'P' ? ' selected' : ''}>Todas las tallas</option><option value="P"${t.modo === 'P' ? ' selected' : ''}>Por talla</option></select><button class="x" data-tpdel="${t.id}" ${use(t.id) ? 'disabled title="En uso"' : ''} aria-label="Eliminar">×</button></div>
  ${
    t.modo === 'P'
      ? `<table class="ed tpt"><thead><tr><th>Tallas (separa con /)</th><th class="num">Precio S/</th><th></th></tr></thead><tbody>${(t.rows || []).map((r, ri) => `<tr><td><input class="fi" data-tpr="${t.id}|${ri}|tl" value="${ctEsc(r.tl)}" placeholder="0-3M / 3-6M"></td><td><input class="fi num" data-tpr="${t.id}|${ri}|p" value="${ctEsc(r.p ?? '')}" inputmode="decimal"></td><td><button class="x" data-tprdel="${t.id}|${ri}">×</button></td></tr>`).join('')}
    <tr><td class="mut2">Resto de tallas (opcional)</td><td><input class="fi num" data-tpf="${t.id}|p" value="${ctEsc(t.p ?? '')}" inputmode="decimal" placeholder="-"></td><td></td></tr></tbody></table><button class="link" data-tpradd="${t.id}">+ Rango de tallas</button>`
      : `<label class="tpall">Precio todas las tallas S/ <input class="fi num" data-tpf="${t.id}|p" value="${ctEsc(t.p ?? '')}" inputmode="decimal"></label>`
  }
  <small class="mut2">Usado en ${use(t.id)} arte${use(t.id) === 1 ? '' : 's'} / asignaciones</small></div>`,
  )
  .join('')}</div>
<div class="addc"><b>Nuevo tipo de precio</b><input class="fi" id="tp-n" placeholder="Ej. SMOCK VESTIDO · 7 CARRERAS" style="flex:1"><select class="fi" id="tp-m" style="width:auto"><option value="T">Todas las tallas</option><option value="P">Por talla</option></select><button class="btn gold" id="tp-add">Crear</button></div>`;
}
function hcView() {
  return `<div class="car-h"><h2>Conversión de hilos <span>· unidades = metros requeridos ÷ (hebras × metros de la unidad)</span></h2></div>
<div class="tw"><table class="ed"><thead><tr><th>Detalle / marca</th><th class="num">Hebras</th><th class="num">Metros</th><th class="num">Total de metros</th><th>Und medida</th><th></th></tr></thead><tbody>${(S.hconv || []).map((h, i) => `<tr><td><input class="fi b" data-hcf="${i}|m" value="${ctEsc(h.m)}"></td><td><input class="fi num" data-hcf="${i}|h" value="${ctEsc(h.h)}" inputmode="decimal"></td><td><input class="fi num" data-hcf="${i}|mt" value="${ctEsc(h.mt)}" inputmode="decimal"></td><td class="num"><b>${convCap(h) ? fmin(convCap(h)) : '0'}</b></td><td><select class="fi" data-hcf="${i}|u">${['CONO', 'MADEJA', 'CARRETE', 'UND'].map((u) => `<option${u === h.u ? ' selected' : ''}>${u}</option>`).join('')}</select></td><td><button class="x" data-hcdel="${i}">×</button></td></tr>`).join('')}</tbody></table></div>
<button class="btn sm" id="hc-add" style="margin-top:10px">+ Agregar marca</button>`;
}
function renderPrn() {
  const dup = {};
  S.prints.forEach((p) => {
    if (p.ref) dup[p.ref] = (dup[p.ref] || 0) + 1;
  });
  const q = PQ.trim(),
    list = S.prints.filter(
      (p) =>
        (PT === 'Todos' || p.tipo === PT) &&
        (!q ||
          NPK.match(
            [plabel(p), p.cod, p.tec, p.estado, p.cli, (cliOf(p.cli) || [])[1]].join(' '),
            q,
          )),
    );
  const cnt = (t) => S.prints.filter((p) => t === 'Todos' || p.tipo === t).length;
  const isE = PF.tipo === 'Estampado localizado',
    f = (id, l, v, ph) =>
      `<div class="field"><label for="${id}">${l}</label><input class="fi" id="${id}" data-pf="${id.slice(3)}" value="${ctEsc(v)}" placeholder="${ph || ''}"></div>`;
  const sel = (id, l, opts, v) =>
    `<div class="field"><label for="${id}">${l}</label><select class="fi" id="${id}" data-pf="${id.slice(3)}">${opts.map((o) => `<option${o === v ? ' selected' : ''}>${ctEsc(o)}</option>`).join('')}</select></div>`;
  const op = opOfTipo(PF.tipo),
    fm = consFmt(PF.tipo);
  ct$('content').innerHTML =
    `<div class="prn"><aside class="panel"><div class="panel-h"><h2>${PF.id ? 'Editar arte' : 'Nuevo arte'}</h2>${PF.id ? '<button class="link del" id="pf-new">Nuevo</button>' : ''}</div><div class="panel-b pfg"><div class="pfcol pfcolL">
 <section class="pfs pfs-id"><h3>1 · Identificación</h3>
  <div class="pfid"><div class="imgcol"><div class="prev-img">${PF.img ? `<img src="${PF.img}" alt="">` : '<span class="na">Sin imagen</span>'}</div><div class="imgbt"><label class="btn sm">${PF.img ? 'Cambiar' : 'Subir'} imagen<input type="file" accept="image/*" data-upp hidden></label>${PF.img ? '<button class="link del" id="pf-rmimg">Quitar</button>' : ''}</div></div>
  <div class="pfidf"><div class="field"><label>Código Nuna</label><div class="pcodebig">${ctEsc(PF.id ? prById(PF.id).cod : nextCod(PF.tipo))}</div><small class="msub">${PF.id ? 'No se edita.' : 'Cliente + proceso + correlativo. Se asigna al crear.'}</small></div>
   <div class="field"><label>Cliente</label>${(() => {
     const c = cliOf(PF.cli || (PF.id ? prById(PF.id).cli || '' : '') || defCli());
     return `<button class="pkt clib" data-pfcli ${PF.id ? 'disabled title="El cliente no se cambia: define el código Nuna"' : ''}><span class="pkl"><b>${c ? ctEsc(c[0]) : 'Elegir cliente…'}</b><small>${c ? ctEsc(c[1].trim()) : 'PLAN DE VENTAS › CONFIG'}</small></span>${PF.id ? '' : '<i>⌕</i>'}</button>`;
   })()}</div>
   <div class="field"><label for="pf-tipo">Proceso</label><select class="fi" id="pf-tipo" data-pf="tipo">${ART_TIPOS.map(([n, , o]) => `<option value="${n}"${n === PF.tipo ? ' selected' : ''}>${o} · ${n}</option>`).join('')}</select></div>
   <div class="g2">${f('pf-ref', 'Código cliente', '' + PF.ref, 'Ej. PR07')}${f('pf-temporada', 'Temporada', PF.temporada, 'Ej. SS27')}</div>
   ${f('pf-nombre', 'Nombre / descripción', PF.nombre, 'Ej. SEASIDE')}
   <div class="g2">${sel('pf-estado', 'Estado aprobación', ART_EST, PF.estado)}<div class="field"><label>Tela base</label>${(() => {
     const t = T_(PF.tid),
       e = t && E_(t.e),
       c = t && C_(t.c);
     return `<button class="pkt pkt-t ${t ? '' : 'empty'}" data-pftela><span class="th csw" style="${c ? 'background:' + c.h : ''}">${c ? '' : '-'}</span><span class="pkl"><b>${t ? ctEsc(e.c) + '-' + ctEsc(c.c) : ctEsc(PF.telaColor || 'Elegir tela…')}</b><small>${t ? ctEsc(c.d) : 'Buscar tela'}</small></span><i>⌕</i></button>`;
   })()}</div></div>
   <div class="g2">${PF.tipo === 'Estampado localizado' ? sel('pf-sentido', 'Sentido', SENTIDO, PF.sentido) : f('pf-ubic', 'Ubicación', PF.ubic, 'Ej. Pecho centro')}<div class="field"><label>Swatch / strike-off</label><label class="opt" style="display:flex;gap:6px;align-items:center;font-size:12.5px;margin:6px 0 4px"><input type="checkbox" data-pfc="swatch" ${PF.swatch ? 'checked' : ''}> Requiere</label>${PF.swatch ? `<input class="fi" type="date" data-pf="fSwatch" value="${ctEsc(PF.fSwatch)}" aria-label="Fecha requerida swatch">` : ''}</div></div>
  </div></div></section>
 <section class="pfs pfs-co"><h3>3 · Consumos por prenda <span>· ${fm === 'smock' ? 'hilos: hebras × carreras × recorrido' : fm === 'bord' ? 'hilos: hebras × metros por unidad' : 'consumo único'}</span></h3>${consEditor()}<button class="btn sm" data-cadd>+ Agregar avío</button></section>
 </div><div class="pfcol pfcolR">
 <section class="pfs pfs-pr"><h3>2 · Precio por prenda <span>· S/ que se paga en la OS de ${ctEsc(op)}</span></h3>
  <div class="seg" role="radiogroup"><button class="${PF.pm !== 'P' ? 'on' : ''}" data-pfpm="T">Todas las tallas</button><button class="${PF.pm === 'P' ? 'on' : ''}" data-pfpm="P">Por talla</button></div>
  ${
    PF.pm === 'P'
      ? `<table class="ed tpt"><thead><tr><th>Descripción (tallas, separa con /)</th><th class="num">Precio S/</th><th></th></tr></thead><tbody>${(PF.prows || []).map((r, ri) => `<tr><td><input class="fi" data-pfr="${ri}|d" value="${ctEsc(r.d || '')}" placeholder="Ej. 0-3M / 3-6M"></td><td><input class="fi num" data-pfr="${ri}|p" value="${ctEsc(r.p ?? '')}" inputmode="decimal" placeholder="0.00"></td><td><button class="x" data-pfrdel="${ri}" aria-label="Quitar">×</button></td></tr>`).join('')}</tbody></table><button class="link" data-pfradd>+ Talla / rango</button>`
      : `<label class="tpall">Precio S/ <input class="fi num" data-pf="pt" value="${ctEsc(PF.pt ?? '')}" inputmode="decimal" placeholder="0.00"></label>`
  }
 </section>
 <section class="pfs pfs-cm"><h3>5 · Comentarios</h3><div class="g2">${f('pf-comCli', 'Comentario cliente', PF.comCli, '')}${f('pf-comUdp', 'Comentario UDP', PF.comUdp, '')}</div>
  <div class="field"><label>Así sale en la hoja de combinaciones</label><div class="ccell" style="font-size:12px"><span class="th">${PF.img ? `<img src="${PF.img}" alt="">` : '-'}</span><div><b>${ctEsc(PF.id ? prById(PF.id).cod : nextCod(PF.tipo))}</b><span id="pf-lbl">${ctEsc(plabel({ ref: PF.ref.trim().toUpperCase(), nombre: PF.nombre.trim().toUpperCase() }) || '-')}</span><small class="mut2">Tela ${ctEsc(PF.telaColor || 'WH001')}</small></div></div></div></section>
 <section class="pfs pfs-cl"><h3>4 · Colores / Pantone del arte <span>· tintas o hilos de color</span></h3>
  ${
    (PF.cols || []).length
      ? `<div class="clst">${PF.cols
          .map((id, i) => {
            const c = C_(id);
            return c
              ? `<div class="clc"><span class="th csw" style="background:${c.h}"></span><span class="pkl"><b>${ctEsc(c.c)}</b><small>${ctEsc(c.d)}</small></span><button class="x" data-pfcdel="${i}" aria-label="Quitar">×</button></div>`
              : '';
          })
          .join('')}</div>`
      : '<p class="na">Sin colores. Agrega los Pantone o colores que lleva el arte.</p>'
  }
  <button class="btn sm" data-pfcadd>+ Agregar color / Pantone</button></section>
 </div>
 <div class="pfsave"><button class="btn primary" id="pf-save">${PF.id ? 'Guardar cambios' : 'Crear arte'}</button>${PMSG ? `<div class="msg ${PERR ? 'err' : 'ok'}">${ctEsc(PMSG)}</div>` : ''}</div>
</div></aside>
<div><div class="chips mtabs" style="margin-bottom:12px">${[
  ['art', 'Artes', S.prints.length],
  ['hc', 'Conversión de hilos', (S.hconv || []).length],
]
  .map(
    ([k, t, n]) =>
      `<button class="chip" data-pv="${k}" aria-pressed="${PV === k}">${t} <small>${n}</small></button>`,
  )
  .join('')}</div>
${
  PV === 'hc'
    ? hcView()
    : `<div class="car-h"><h2>Maestro de artes <span>· ${S.prints.length} artes</span></h2><input class="search" style="max-width:260px" id="pq" type="search" value="${ctEsc(PQ)}" placeholder="Buscar código, nombre, técnica o estado" aria-label="Buscar arte"></div>
<div class="chips" style="margin-bottom:12px">${['Todos', ...ART_TIPOS.map((x) => x[0])]
  .map((t) => {
    const o = (ART_TIPOS.find((x) => x[0] === t) || [])[2];
    return `<button class="chip" data-pt="${t}" aria-pressed="${PT === t}">${o ? `<b>${o}</b> ` : ''}${t} <small>${cnt(t)}</small></button>`;
  })
  .join('')}</div>
<div class="pgrid">${
  list
    .map((p) => {
      const u = usage(p.id);
      return `<article class="pcard ${p.id === PF.id ? 'ed' : ''}"><div class="pi">${p.img ? `<img src="${p.img}" alt="${ctEsc(plabel(p))}">` : '<span class="na">Sin imagen</span>'}<span class="est ${estCls(p.estado)}">${ctEsc(p.estado)}</span></div>
  <div class="pb"><span class="pc2">${NPK.hl(p.cod, PQ)}</span><span class="pl">${NPK.hl(plabel(p), PQ)}</span><span class="pt">${ctEsc(p.tipo)}${p.tipo === 'Estampado localizado' ? ' · ' + ctEsc(p.sentido) : p.ubic ? ' · ' + ctEsc(p.ubic) : ''}</span><span class="pt">${(p.cons || []).length} consumo${(p.cons || []).length === 1 ? '' : 's'} · Usado en ${u} celda${u === 1 ? '' : 's'}${p.swatch ? ` · swatch ${ctEsc(p.fSwatch || 'sin fecha')}` : ''}</span>
  ${p.ref && dup[p.ref] > 1 ? `<span class="pw">Código cliente ${ctEsc(p.ref)} repetido en ${dup[p.ref]} artes</span>` : ''}${!p.ref ? '<span class="pw">Sin código cliente</span>' : ''}</div>
  <div class="pa"><button class="link" data-pedit="${p.id}">Editar</button><button class="link del" data-pdel="${p.id}" ${u ? 'disabled title="En uso: reemplázalo en los combos antes de eliminar"' : ''}>Eliminar</button></div></article>`;
    })
    .join('') || '<div class="empty">Ningún arte coincide.</div>'
}</div>`
}</div></div>`;
}

/* fin JsCombos2 */
window.__ctPartes = (window.__ctPartes || 0) + 1; (window.__ctOK = window.__ctOK || {})[2] = 1;
/* JsCombos3 · parte 3 de 4 del módulo Combos textil (archivo independiente, con sus propias etiquetas script) */
/* ===== 3 · REPORTE ===== */
const TIPO = { T: 'TELA', E: 'ENTR.', A: 'AVÍO' };
const defUnit = (n) => (/HILO|CINTA|EL[ÁA]STICO|ENTRETELA|COLA/.test(n) ? 'm' : 'und');
const defCU = (n) => (/ETIQUETA/.test(n) ? '1' : '');
const ak = (m, t, i) => m.id + '|' + t + '|' + i;
const getCU = (m, t, i, n) => S.avcu[ak(m, t, i)] ?? defCU(n);
const getUN = (m, t, i, n) => S.avun[ak(m, t, i)] || defUnit(n);
const nameOf = (x) => (x.t === 'T' ? x.r.comp : x.r[0]);
const ck = (x) => (x.t === 'T' ? 'T|' + x.r.desc : x.t + '|' + x.r[0]);
const pkey = (x) =>
  x.t === 'A'
    ? 'A|' + x.r[0] + '|' + x.r[1]
    : x.t === 'E'
      ? 'E|' + x.r[0] + '|' + x.r[2]
      : 'T|' + x.r.comp;
function defProc(x) {
  if (x.t === 'T') return 'CT';
  const n = x.r[0],
    u = x.t === 'A' ? x.r[1] : x.r[2];
  if (x.t === 'E') return /ENTRETELA|ADHESIVO|TRICOT/.test(n + ' ' + x.r[1]) ? 'CT' : 'CS';
  if (/BOT[OÓ]N|OJAL/.test(n + ' ' + u)) return 'OJ';
  if (/BATCH|TRANSFER/.test(n)) return 'AC';
  return 'CS';
}
function rowsOf(m) {
  return [
    ...comps(m).map((r, i) => ({ t: 'T', r, i })),
    ...m.ent.map((r, i) => ({ t: 'E', r, i })),
    ...m.avios.map((r, i) => ({ t: 'A', r, i })),
  ].map((x) => ({ ...x, p: S.pmap[pkey(x)] || defProc(x) }));
}
const atK = (pe, m) => pe + '|' + m.id;
const relM = () => MOLDES.filter((m) => relevant(m));
/* Ruta de prenda: viene de Comercial (DETALLE PEDIDOS col. Ruta Prenda, por código de modelo). Solo lectura. */
/* Ruta de prenda: DETALLE PEDIDOS col C (Comercial). Solo lectura. Sin ruta = básica (CT · CS · AC). */
const rutaSrc = (cm) => (RUTA_PLAN[cm] ? 'plan' : '');
const rutaCode = (cm) => {
  const v = String(RUTA_PLAN[cm] || '').trim();
  return v ? v.split(' ')[0].toUpperCase() : '';
};
const rutasOf = (pe, m) =>
  modelosOf(m, pe).map(([cm]) => ({ cm, code: rutaCode(cm), r: RT_(rutaCode(cm)) }));
const rutaOf = (pe, m) => {
  const rs = rutasOf(pe, m).filter((x) => x.r);
  return rs.length ? rs[0].r : null;
};
const seqOf = (pe, m) => {
  const rs = rutasOf(pe, m).filter((x) => x.r);
  if (!rs.length) return ['CT', 'CS', 'AC'];
  const set = new Set(rs.flatMap((x) => x.r.seq));
  return OPS.map((o) => o[0])
    .filter((c) => set.has(c))
    .sort((a, b) => {
      const ord = rs[0].r.seq;
      return (
        ord.indexOf(a) + 99 * (ord.indexOf(a) < 0) - (ord.indexOf(b) + 99 * (ord.indexOf(b) < 0))
      );
    });
};
const opApplies = (op, pe, m) => m.peds.includes(pe) && seqOf(pe, m).includes(op);
const asg = (op, pe, m) => (S.as[op] || {})[atK(pe, m)] || '';
const progOps = () => {
  const set = new Set(['CT', 'CS', 'AC']);
  relM().forEach((m) => applic(m).forEach((pe) => seqOf(pe, m).forEach((o) => set.add(o))));
  return OPS.map((o) => o[0]).filter((c) => set.has(c));
};
const ART_FOR = Object.fromEntries(ART_TIPOS.map(([n, , op]) => [op, n]));
/* ===== Avíos: catálogo del Almacén de avíos (mismo Sheet). Se arma desde los datos ya cargados por el módulo de avíos. ===== */
let FAM = {},
  MEDN = {},
  MARN = {},
  TALN = {},
  SK = {},
  SKBY = {},
  AVB = {},
  AVD = { av: [] },
  AVV = -1;
function buildAvios() {
  if (typeof A === 'undefined' || !A || !A.maestro) return;
  const M = A.maestro;
  FAM = {};
  M.familias.forEach((f) => (FAM[f.c] = [f.n, Number(f.merma) || 0, f.ctl || 'UNICO']));
  MEDN = Object.fromEntries(M.medidas.map((x) => [x.c, x.n]));
  MARN = Object.fromEntries(M.marcas.map((x) => [x.c, x.n]));
  TALN = Object.fromEntries((A.tallas || []).map((t) => [t.c, t.n]));
  SK = {};
  SKBY = {};
  M.skus
    .filter((s) => s.act)
    .forEach((s) => {
      const o = {
        id: s.id,
        cod: s.cod,
        mar: s.mar,
        tal: s.tal,
        med: s.med,
        un: s.un,
        col: s.col || '',
        coln: s.coln || '',
      };
      SK[s.id] = o;
      (SKBY[s.cod] = SKBY[s.cod] || []).push(o);
    });
  AVB = {};
  AVD = { av: M.avios.filter((a) => a.act).map((a) => [a.c, a.d, a.un, a.fam]) };
  AVD.av.forEach(([c, d, u, f]) => (AVB[c] = { c, d, u, f }));
}
const UN_ENT = ['UND', 'PAR', 'JGO'];
const famOf = (cod) => FAM[(AVB[cod] || {}).f || String(cod).slice(0, 2)] || ['-', 0, 'UNICO'];
const ctlOf = (cod) => famOf(cod)[2],
  mermaOf = (cod) => famOf(cod)[1];
const isHilo = (ins) =>
  String(ins || '')
    .toUpperCase()
    .startsWith('HI');
const opOfTipo = (t) => (ART_TIPOS.find((x) => x[0] === t) || [])[2] || '';
const consFmt = (t) => {
  const o = opOfTipo(t);
  return ['SM', 'SI', 'BS'].includes(o)
    ? 'smock'
    : ['BI', 'BM', 'CR'].includes(o)
      ? 'bord'
      : 'uni';
};
const convOf = (mh) => (S.hconv || []).find((x) => x.m === mh);
const convCap = (c) => (c && +c.h && +c.mt ? +c.h * +c.mt : 0);
const guessMH = (sku) => {
  const a = String(skuAttr(SK[sku] || {}) || '').toUpperCase();
  const c = (S.hconv || []).find((x) => x.m && a.includes(x.m));
  return c ? c.m : '';
};
const itCons = (ins, it, fm) =>
  isHilo(ins) && fm === 'smock'
    ? (+it.h || 0) * (+it.c || 0) * (+it.r || 0)
    : isHilo(ins) && fm === 'bord'
      ? (+it.h || 0) * (+it.mu || 0)
      : +it.cons || 0;
const itUnit = (ins, it, fm) =>
  isHilo(ins) && fm !== 'uni' ? 'MTS' : (SK[it.sku] || {}).un || (AVB[ins] || {}).u || '';
const tpById = (id) => (S.tprec || []).find((t) => t.id === id);
const tlN = (t) =>
  String(t || '')
    .toUpperCase()
    .replace(/\s+/g, '');
const tpTallas = (r) =>
  String(r.tl || '')
    .split(/[\/,;]/)
    .map(tlN)
    .filter(Boolean);
function tpPrice(tp, talla) {
  if (!tp) return null;
  if (tp.modo !== 'P') return has(tp.p) ? +tp.p : null;
  const t = tlN(talla),
    r = (tp.rows || []).find((r) => tpTallas(r).includes(t));
  return r && has(r.p) ? +r.p : has(tp.p) ? +tp.p : null;
}
const tpTxt = (tp) =>
  !tp
    ? '-'
    : tp.modo === 'P'
      ? (tp.rows || []).map((r) => `${r.tl}: S/ ${money(+r.p || 0)}`).join(' · ') +
        (has(tp.p) ? ` · resto S/ ${money(+tp.p)}` : '')
      : `Todas las tallas S/ ${has(tp.p) ? money(+tp.p) : '-'}`;
const artPr = (x) =>
  !x
    ? null
    : {
        n: plabel(x),
        modo: x.pm === 'P' ? 'P' : 'T',
        p: x.pm === 'P' ? '' : x.pt,
        rows: (x.prows || []).map((r) => ({ tl: r.d, p: r.p })),
      };
const artTp = (a) => {
  const x = prById(a.id);
  if (!x) return null;
  const t = artPr(x);
  return (t.modo === 'P' ? t.rows.some((r) => has(r.p)) : has(t.p)) ? t : null;
};
function tpLine(m, pe, op, ts) {
  const L = artsOf(atK(pe, m), op).filter((a) => artTp(a));
  if (!L.length) return null;
  let imp = 0,
    miss = 0;
  const per = {};
  Object.entries(ts).forEach(([t, q]) => {
    q = +q || 0;
    if (!q) return;
    let pr = 0,
      ok = true;
    L.forEach((a) => {
      const v = tpPrice(artTp(a), t);
      if (v == null) ok = false;
      else pr += v;
    });
    if (!ok) {
      miss++;
      per[t] = null;
      return;
    }
    per[t] = pr;
    imp += pr * q;
  });
  return { imp, per, miss, names: L.map((a) => artTp(a).n) };
}
const skuAttr = (s) =>
  s
    ? [
        s.mar && s.mar !== 'M000' ? MARN[s.mar] || s.mar : '',
        s.tal && s.tal !== 'T000' ? TALN[s.tal] || s.tal : '',
        s.med && s.med !== 'E000' ? MEDN[s.med] || s.med : '',
        s.col ? `${s.col} ${s.coln}` : '',
      ]
        .filter(Boolean)
        .join(' · ') || 'Sin atributos'
    : '';
const ctFq = (n, un) =>
  UN_ENT.includes(String(un).toUpperCase()) ? Math.ceil(n - 1e-9) : Math.round(n * 100) / 100;

const artsOf = (k, op) => (S.arts[k] || []).filter((a) => (!op || a.op === op) && prById(a.id));
const artOpsOf = (pe, m) => seqOf(pe, m).filter((o) => OP[o].art);
function artChips(k, op) {
  const L = artsOf(k, op);
  return `<div class="achips">${
    L.length
      ? L.map((a) => {
          const x = prById(a.id);
          return `<span class="ach">${x.img ? `<img src="${x.img}" alt="">` : ''}${ctEsc(x.cod)} <b>×${a.q}</b></span>`;
        }).join('')
      : '<span class="ach no">Sin arte</span>'
  }</div>`;
}
function renderArt() {
  const pg = ctP(),
    ms = relM().filter((m) => applic(m).some((pe) => artOpsOf(pe, m).length));
  const head = pg.combos
    .map(
      (c) => `<th class="ccol wide"><span>${ctEsc(c.pe)}</span><small>${ctEsc(c.col)}</small></th>`,
    )
    .join('');
  let tot = 0,
    ok = 0;
  const body = ms
    .map(
      (m) =>
        `<tr><td class="fixc"><div class="est"><span class="mth">${S.mimg[m.id] ? `<img src="${S.mimg[m.id]}" alt="">` : '<span>sin<br>imagen</span>'}</span><div><b>${ctEsc(m.label)}</b><small>${ctEsc(S.mdesc[m.id] || '')}</small></div></div></td>${pg.combos
          .map((c) => {
            if (!m.peds.includes(c.pe)) return '<td class="ccol wide na c-na">-</td>';
            const ops = artOpsOf(c.pe, m);
            if (!ops.length)
              return '<td class="ccol wide na c-na" title="La ruta no lleva operaciones con arte">-</td>';
            const k = atK(c.pe, m),
              L = S.arts[k] || [],
              q = qtyOf(m, c.pe);
            const falt = ops.filter((o) => !L.some((a) => a.op === o && prById(a.id)));
            tot += ops.length;
            ok += ops.length - falt.length;
            return `<td class="ccol wide"><div class="aops">${ops.map((o) => `<i class="${falt.includes(o) ? 'bad' : 'ok'}" title="${ctEsc(OP[o].n)}">${o}</i>`).join('')}<span class="qb ${q ? '' : 'z'}">${q}</span></div>
      ${L.map((a, i) => {
        const tp = ART_FOR[a.op],
          x = prById(a.id);
        return `<div class="arow"><select class="psel2" data-aop="${ctEsc(k)}|${i}" aria-label="Operación">${ops.map((o) => `<option value="${o}"${o === a.op ? ' selected' : ''}>${o}</option>`).join('')}</select>
        <span class="th">${x && x.img ? `<img src="${x.img}" alt="">` : '-'}</span>
        <button class="pkt aartb ${x ? (x.estado === 'Aprobado' ? '' : 'warn') : 'empty'}" data-pkart="${ctEsc(k)}|${i}"><span class="pkl"><b>${x ? ctEsc(plabel(x)) : 'Elegir arte…'}</b><small>${x ? ctEsc(x.cod) + (x.estado !== 'Aprobado' ? ' · <em>' + ctEsc(x.estado) + '</em>' : '') : 'Buscar ' + ctEsc(tp.toLowerCase())}</small></span><i>⌕</i></button>
        <label class="aq" title="Veces por prenda">×<input class="fi num" data-aq="${ctEsc(k)}|${i}" value="${ctEsc(a.q)}" inputmode="numeric"></label><button class="x" data-adel="${ctEsc(k)}|${i}" aria-label="Quitar">×</button></div>
        ${
          x
            ? (() => {
                const t = artTp(a);
                return `<div class="atp"><small>${t ? 'Precio: ' + ctEsc(tpTxt(t)) : '<span class="fx">Arte sin precio: cárgalo en Maestro de artes</span>'}</small></div>`;
              })()
            : ''
        }`;
      }).join('')}
      <button class="link" data-aadd="${ctEsc(k)}">+ Arte</button></td>`;
          })
          .join('')}</tr>`,
    )
    .join('');
  /* consumos de insumos de arte del programa */
  const req = {};
  ms.forEach((m) =>
    applic(m).forEach((pe) => {
      const q = qtyOf(m, pe);
      (S.arts[atK(pe, m)] || []).forEach((a) => {
        const x = prById(a.id);
        if (!x || !artOpsOf(pe, m).includes(a.op)) return;
        (x.cons || []).forEach((c) =>
          (c.items || []).forEach((it) => {
            const fm = consFmt(x.tipo),
              hi = isHilo(c.ins) && fm !== 'uni',
              key = [c.ins, it.sku, hi ? it.mh || '' : ''].join('|');
            req[key] = req[key] || {
              ins: c.ins,
              sku: it.sku,
              mh: it.mh || '',
              hi,
              un: itUnit(c.ins, it, fm),
              tot: 0,
              artes: new Set(),
            };
            req[key].tot += q * (+a.q || 0) * itCons(c.ins, it, fm);
            req[key].artes.add(x.cod);
          }),
        );
      });
    }),
  );
  const rq = Object.values(req).sort((a, b) => a.ins.localeCompare(b.ins));
  ct$('content').innerHTML =
    `<div class="pghead no-print"><div><b>${ctEsc(pg.code)}</b><span>${ctEsc(pg.marca)} · ${pg.combos.length} pedidos · ${ms.length} estilos con arte en ruta</span></div>${pgSel()}<button class="btn sm" data-tab="prg" style="margin-left:auto">‹ Programas</button></div>
${
  ms.length
    ? `<div class="panel blk"><div class="car-h"><h2>Asignación de artes <span>· estilo × pedido · operaciones de la ruta que requieren arte · cantidad = veces por prenda</span></h2><span class="kpi2 ${ok === tot ? 'ok' : ''}">${ok}/${tot} operaciones con arte</span></div>
  <div class="tw cmbw"><table class="ed cmbt asg"><thead><tr><th class="fixc">Estilo</th>${head}</tr></thead><tbody>${body}</tbody></table></div></div>
<div class="panel blk"><div class="car-h"><h2>Requerimiento de insumos de arte <span>· prendas × veces por prenda × consumo del arte × (1 + merma) · hilos: hebras × carreras × recorrido → conos/madejas según Conversión de hilos</span></h2></div>
  ${
    rq.length
      ? `<div class="tw"><table class="ed"><thead><tr><th>Avío</th><th>SKU / color</th><th>Artes</th><th class="num">Neto</th><th class="num">Merma</th><th class="num">Total</th><th>Und</th></tr></thead><tbody>${rq
          .map((r) => {
            const m = mermaOf(r.ins);
            if (r.hi) {
              const cv = convOf(r.mh),
                cap = convCap(cv),
                mts = r.tot * (1 + m);
              return `<tr><td><b>${ctEsc(r.ins)}</b><small class="mut2" style="display:block">${ctEsc((AVB[r.ins] || {}).d || '')}${r.mh ? ' · ' + ctEsc(r.mh) : ''}</small></td><td>${r.sku ? `${ctEsc(r.sku)} · ${ctEsc(skuAttr(SK[r.sku]))}` : '<span class="cq miss">Sin SKU</span>'}</td><td class="mut2">${[...r.artes].map(ctEsc).join(', ')}</td><td class="num">${fmin(r.tot)} mts</td><td class="num">${Math.round(m * 100)}%</td><td class="num">${cap ? `<b>${Math.ceil(mts / cap)}</b><small class="mut2" style="display:block">${fmin(mts)} mts</small>` : '<span class="cq miss">Sin conversión</span>'}</td><td>${cv && cap ? ctEsc(cv.u) : 'MTS'}</td></tr>`;
            }
            const t = ctFq(r.tot * (1 + m), r.un);
            return `<tr><td><b>${ctEsc(r.ins)}</b><small class="mut2" style="display:block">${ctEsc((AVB[r.ins] || {}).d || '')}</small></td><td>${r.sku ? `${ctEsc(r.sku)} · ${ctEsc(skuAttr(SK[r.sku]))}` : '<span class="cq miss">Sin SKU</span>'}</td><td class="mut2">${[...r.artes].map(ctEsc).join(', ')}</td><td class="num">${(Math.round(r.tot * 100) / 100).toLocaleString('es-PE')}</td><td class="num">${Math.round(m * 100)}%</td><td class="num"><b>${t.toLocaleString('es-PE')}</b></td><td>${ctEsc(r.un || '')}</td></tr>`;
          })
          .join('')}</tbody></table></div>`
      : '<p class="na">Sin consumos: asigna avíos a cada arte en el Maestro de artes y asigna artes arriba.</p>'
  }</div>`
    : '<div class="empty">Ningún estilo de este programa tiene en su ruta operaciones que requieran arte (ET, SI, SM, BS, BI, BM, CR).</div>'
}`;
}
function allPages(op) {
  const out = [],
    pg = ctP();
  relM().forEach((m) => {
    const by = {};
    applic(m).forEach((pe) => {
      if (!opApplies(op, pe, m)) return;
      const t = asg(op, pe, m);
      if (t && t !== 'NUNA') (by[t] = by[t] || []).push(pe);
    });
    S.talleres.forEach((t) => {
      if (by[t.id]) out.push({ tid: t.id, m, pes: by[t.id] });
    });
  });
  return out;
}
function pages() {
  return [];
}
function mainPrint(pe) {
  const cnt = {};
  relM().forEach((m) => {
    if (!m.peds.includes(pe)) return;
    const c = comps(m)[0];
    if (!c) return;
    const v = cellOf(m, c.id, pe);
    if (v.p && v.p !== '-') cnt[v.p] = (cnt[v.p] || 0) + 1;
  });
  const id = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a])[0];
  return id ? prById(id) : null;
}
function stats(pg) {
  const { m, pes } = pg,
    rows = rowsOf(m).filter((x) => S.procs.includes(x.p));
  let t = 0,
    to = 0,
    u = 0,
    uo = 0,
    a = 0,
    ao = 0;
  rows.forEach((x) => {
    if (x.t === 'T') {
      u++;
      if (has(x.r.cu)) uo++;
      pes.forEach((pe) => {
        t++;
        if (has(cellOf(m, x.r.id, pe).c)) to++;
      });
    } else {
      a++;
      if (has(getCU(m, x.t, x.i, x.r[0]))) ao++;
    }
  });
  const c = rows.length,
    co = rows.filter((x) => has(S.codes[ck(x)])).length;
  return { t, to, u, uo, a, ao, c, co };
}
const talById = (id) => S.talleres.find((t) => t.id === id);
const talName = (id) => (talById(id) || {}).nom || '-';
function renderRep() {
  const pg = ctP(),
    ms = relM(),
    ops = progOps();
  if (S.chip !== 'RUTA' && !ops.includes(S.chip)) S.chip = 'RUTA';
  const op = S.chip,
    O = OP[op];
  const tsel = (k, v, attr) =>
    `<select class="psel2 tsel" ${attr}="${ctEsc(k)}" aria-label="Taller"><option value="">-</option><option value="NUNA"${v === 'NUNA' ? ' selected' : ''}>Nuna (interno)</option>${S.talleres.map((t) => `<option value="${t.id}"${t.id === v ? ' selected' : ''}>${ctEsc(t.nom)}</option>`).join('')}</select>`;
  const asel = (k, v) => {
    const tp = ART_FOR[op];
    return `<select class="psel2 asel ${v ? 'ok' : 'warn'}" data-art="${ctEsc(k)}" aria-label="Arte"><option value="">Vincular arte…</option>${S.prints
      .filter((p) => p.tipo === tp)
      .map(
        (p) =>
          `<option value="${p.id}"${p.id === v ? ' selected' : ''}>${ctEsc(p.cod)} ${ctEsc(plabel(p))}</option>`,
      )
      .join('')}</select>`;
  };
  /* conteos por chip */
  const cnt = (c) => {
    let n = 0,
      a = 0;
    ms.forEach((m) =>
      applic(m).forEach((pe) => {
        if (c === 'RUTA') {
          n++;
          if (rutaOf(pe, m)) a++;
        } else if (opApplies(c, pe, m)) {
          n++;
          if (asg(c, pe, m)) a++;
        }
      }),
    );
    return [a, n];
  };
  const chips = ['RUTA', ...ops]
    .map((c) => {
      const [a, n] = cnt(c),
        o = OP[c];
      return `<button class="chip opchip ${a === n ? 'done' : ''}" data-opchip="${c}" aria-pressed="${S.chip === c}" title="${o ? ctEsc(o.n) + ' · ' + o.tipo + ' · precio ' + scopeTxt(c) : 'Ruta de prenda'}">${c === 'RUTA' ? 'Ruta prenda' : `<b>${c}</b> ${ctEsc(o.n)}`} <small>${a}/${n}</small></button>`;
    })
    .join('');
  const head = pg.combos
    .map((c) => {
      const p = mainPrint(c.pe),
        tot = ms.reduce((a, m) => a + (m.peds.includes(c.pe) ? qtyOf(m, c.pe) : 0), 0);
      const extra =
        op === 'RUTA'
          ? ''
          : tsel(c.pe, '', 'data-atc') +
            (O.ctl === 'P'
              ? `<label class="pph">S/ x prenda<input class="fi num ${has(S.pP[ppK(c.pe, op)]) ? 'ok' : ''}" data-pp="${ppK(c.pe, op)}" value="${ctEsc(S.pP[ppK(c.pe, op)] ?? '')}" placeholder="-" inputmode="decimal"></label>`
              : '');
      return `<th class="ccol"><span>${ctEsc(c.pe)}</span><small>${ctEsc(c.col)}</small><div class="mp"><span class="th">${p && p.img ? `<img src="${p.img}" alt="">` : '-'}</span><b>${p ? ctEsc(plabel(p)) : '-'}</b></div><div class="tq">${tot} prendas</div>${extra}</th>`;
    })
    .join('');
  const body = ms
    .map((m) => {
      const showRow = op === 'RUTA' || applic(m).some((pe) => opApplies(op, pe, m));
      if (!showRow) return '';
      const pm = O && O.ctl === 'E' ? S.pM[pmK(m, op)] : null;
      return `<tr><td class="fixc"><div class="est"><span class="mth">${S.mimg[m.id] ? `<img src="${S.mimg[m.id]}" alt="">` : '<span>sin<br>imagen</span>'}</span><div><b>${ctEsc(m.label)}</b><small>${ctEsc(S.mdesc[m.id] || '')}</small>${O && O.ctl === 'E' ? `<small class="${has(pm) ? 'pok' : 'pno'}">${has(pm) ? (unitOf(m, op) === 'MIN' ? ctEsc(pm) + ' min x prenda' : 'S/ ' + ctEsc(pm) + ' x prenda') : 'Sin precio ' + op + ' en plantilla'}</small>` : ''}</div></div></td>${pg.combos
        .map((c) => {
          if (!m.peds.includes(c.pe)) return '<td class="ccol na c-na">-</td>';
          const k = atK(c.pe, m),
            q = qtyOf(m, c.pe);
          if (op === 'RUTA') {
            const rs = rutasOf(c.pe, m);
            return `<td class="ccol"><div class="asc"><div class="rts">${rs.length ? rs.map((x) => `<div class="rt ${x.r ? '' : x.code ? 'bad' : 'none'} " title="${ctEsc(x.cm)}"><b>${ctEsc(x.cm)}</b> ${x.r ? ctEsc(x.r.c + ' · ' + x.r.n) : x.code ? ctEsc(x.code) + ' · no existe en catálogo' : 'Sin ruta en plan'}</div>`).join('') : '<div class="rt none">Sin código de modelo</div>'}</div><span class="qb ${q ? '' : 'z'}">${q}</span></div><div class="seq">${seqOf(
              c.pe,
              m,
            )
              .map((x) => `<i class="${OP[x].tipo === 'Opcional' ? 'o' : ''}">${x}</i>`)
              .join('')}</div></td>`;
          }
          if (!opApplies(op, (pe = c.pe), m))
            return '<td class="ccol na c-na" title="La ruta no incluye esta operación">-</td>';
          return `<td class="ccol"><div class="asc">${tsel(k, asg(op, c.pe, m), 'data-at')}<span class="qb ${q ? '' : 'z'}">${q}</span></div>${O.art ? artChips(atK(c.pe, m), op) : ''}</td>`;
        })
        .join('')}</tr>`;
    })
    .join('');
  const used =
    op === 'RUTA' ? [] : S.talleres.filter((t) => allPages(op).some((p) => p.tid === t.id));
  const nuna =
    op === 'RUTA'
      ? 0
      : ms.reduce(
          (a, m) =>
            a +
            applic(m).filter((pe) => opApplies(op, pe, m) && asg(op, pe, m) === 'NUNA').length,
          0,
        );
  const miss =
    op !== 'RUTA' && O.art
      ? ms.reduce(
          (a, m) =>
            a +
            applic(m).filter((pe) => opApplies(op, pe, m) && !artsOf(atK(pe, m), op).length)
              .length,
          0,
        )
      : 0;
  ct$('content').innerHTML =
    `<div class="pghead no-print"><div><b>${ctEsc(pg.code)}</b><span>${ctEsc(pg.marca)} · ${pg.combos.length} pedidos · ${ms.length} estilos</span></div>${pgSel()}<button class="btn sm" data-tab="prg" style="margin-left:auto">‹ Programas</button></div>
${
  ms.length
    ? `<div class="chips opchips no-print">${chips}</div>
<div class="panel no-print blk"><div class="car-h"><h2>${op === 'RUTA' ? 'Ruta de prenda <span>· asignada por Comercial en DETALLE PEDIDOS (por código de modelo) · solo lectura</span>' : `${op} · ${ctEsc(O.n)} <span>· ${O.tipo} · precio ${scopeTxt(op)}${O.art ? ' · requiere vincular arte' : ''}</span>`}</h2></div>
  ${op === 'RUTA' && cnt('RUTA')[0] < cnt('RUTA')[1] ? `<div class="warns"><b>${cnt('RUTA')[1] - cnt('RUTA')[0]} de ${cnt('RUTA')[1]} estilo × pedido sin ruta válida en el plan</b>Se tratan como ruta básica (CT · CS · AC). Comercial debe completar la Ruta Prenda en DETALLE PEDIDOS.</div>` : ''}
  ${miss ? `<div class="warns"><b>${miss} celda${miss > 1 ? 's' : ''} sin arte vinculado</b>Asígnalo en Asignación de artes antes de emitir la orden de ${ctEsc(O.n.toLowerCase())}.</div>` : ''}
  <div class="tw cmbw ${op === 'RUTA' ? 'scr2' : ''}"><table class="ed cmbt asg"><thead><tr><th class="fixc">Estilo</th>${head}</tr></thead><tbody>${body}</tbody></table></div></div>
${
  op === 'RUTA'
    ? ''
    : `<div class="talsum no-print">${used
        .map((t) => {
          const L = osLines(t.id, op);
          return `<div class="tsum ${(S.os || '').startsWith(t.id + '|' + op + '|') ? 'on' : ''}"><b>${ctEsc(t.nom)}</b><span>${op} · ${new Set(L.map((l) => l.m.id)).size} estilos · ${L.reduce((a, l) => a + l.q, 0)} prendas</span>${L.some((l) => unitOf(l.m, op) === 'MIN') ? `<label class="vmin">S/ x minuto<input class="fi num ${vminOf(t.id, op) ? 'ok' : ''}" data-vmin="${t.id}|${op}" value="${ctEsc((S.vmin || {})[t.id + '|' + op] ?? '')}" placeholder="0.00" inputmode="decimal"></label>` : ''}<button class="btn sm gold" data-ostal="${t.id}|${op}|S">Orden de servicio</button>${L.some((l) => unitOf(l.m, op) === 'MIN') ? `<button class="btn sm" data-ostal="${t.id}|${op}|MIN">OS en minutos</button>` : ''}</div>`;
        })
        .join(
          '',
        )}${nuna ? `<div class="tsum"><b>Nuna (interno)</b><span>${nuna} celdas · sin orden de servicio</span></div>` : ''}${!used.length && !nuna ? `<span class="na">Asigna talleres para ${ctEsc(O.n.toLowerCase())}.</span>` : ''}</div>`
}`
    : '<div class="empty">Este programa no tiene estilos en DETALLE_TALLAS.</div>'
}
<div class="preview" id="preview"></div>`;
  renderPreview();
}
function renderCards() {
  const ps = allPages(),
    inc = pages().length;
  ct$('ccount').textContent = `· ${inc} de ${ps.length} seleccionadas`;
  ct$('carousel').innerHTML = ps.length
    ? ps
        .map((pg) => {
          const st = stats(pg),
            out = ctP().out.includes(pg.key),
            on = pg.key === S.act,
            img = S.mimg[pg.m.id];
          const pr = PROCS.map((p) => p[0]).filter(
            (c) => S.procs.includes(c) && rowsOf(pg.m).some((x) => x.p === c),
          );
          return `<article class="card ${on ? 'on' : ''} ${out ? 'out' : ''}"><button class="card-main" data-pk="${ctEsc(pg.key)}" aria-pressed="${on}">
    <span class="c-img">${img ? `<img src="${img}" alt="">` : '<span class="ph">Sin imagen del molde</span>'}<span class="g">${ctEsc(talName(pg.tid))}</span></span>
    <span class="c-top">${ctEsc(pg.m.code)}${S.mdesc[pg.m.id] ? `<small class="cd">${ctEsc(S.mdesc[pg.m.id])}</small>` : ''}</span>
    <span class="c-body"><span class="c-peds">${pg.pes.map((pe) => `<i>${ctEsc(pe.replace('PE-', ''))} ${ctEsc(colOf(pe))}</i>`).join('')}</span>
    <span class="c-peds">${pr.map((c) => `<span class="pcode">${c}</span>`).join('')}</span>
    <span class="c-st"><span>Color tela</span><b class="${st.to === st.t ? 'ok' : ''}">${st.to}/${st.t}</b><span>C.U. telas</span><b class="${st.uo === st.u ? 'ok' : ''}">${st.uo}/${st.u}</b><span>C.U. avíos</span><b class="${st.ao === st.a ? 'ok' : ''}">${st.ao}/${st.a}</b><span>Códigos</span><b class="${st.co === st.c ? 'ok' : ''}">${st.co}/${st.c}</b></span>
    ${pg.m.warns.length ? `<span class="c-warn">${pg.m.warns.length} observación${pg.m.warns.length > 1 ? 'es' : ''} en la hoja</span>` : ''}</span></button>
    <label class="c-inc"><input type="checkbox" data-inc="${ctEsc(pg.key)}" ${out ? '' : 'checked'}> Imprimir</label></article>`;
        })
        .join('')
    : '<div class="empty" style="flex:1">Asigna estilos a talleres para generar las hojas.</div>';
  const pend = pages().reduce((n, pg) => {
    const s = stats(pg);
    return n + (s.t - s.to) + (s.u - s.uo) + (s.a - s.ao) + (s.c - s.co);
  }, 0);
  ct$('summary').innerHTML =
    `<strong>${inc} hojas</strong>A4 horizontal${pend ? `<br><span style="color:#8a8714;font-weight:700">${pend} datos pendientes saldrán como línea en blanco</span>` : '<br><span style="color:var(--teal);font-weight:700">Todo completo</span>'}`;
}
function cellTxt(v) {
  if (!has(v)) return '';
  const [a, b] = String(v).split('|');
  return b ? `<span class="pr">${ctEsc(a)}</span>${ctEsc(b)}` : ctEsc(a);
}
const UNITS = ['und', 'm', 'cm', 'cono', 'par'];
function cuCell(m, x) {
  const n = x.r[0],
    v = getCU(m, x.t, x.i, n),
    u = getUN(m, x.t, x.i, n),
    key = ak(m, x.t, x.i);
  return `<div class="sh-cu"><input class="sh-in num" data-avcu="${ctEsc(key)}" value="${ctEsc(v)}" placeholder="0.00" aria-label="C.U. ${ctEsc(n)}"><select class="sh-sel" data-avun="${ctEsc(key)}" aria-label="Unidad">${UNITS.map((o) => `<option${o === u ? ' selected' : ''}>${o}</option>`).join('')}</select></div>`;
}
function codeCell(x) {
  const key = ck(x);
  return `<input class="sh-in sh-code" data-code="${ctEsc(key)}" value="${ctEsc(S.codes[key] || '')}" placeholder="Código" aria-label="Código ${ctEsc(nameOf(x))}">`;
}
function procSel(x) {
  return `<select class="psel" data-pmap="${ctEsc(pkey(x))}" aria-label="Proceso">${PROCS.map(([c, n]) => `<option value="${c}"${c === x.p ? ' selected' : ''}>${c} · ${ctEsc(n)}</option>`).join('')}</select>`;
}
const unitOf = (m, c) => (PSCOPE[c] === 'M' && (S.pU || {})[pmK(m, c)] === 'MIN' ? 'MIN' : 'S');
const minOf = (m, c) => (unitOf(m, c) === 'MIN' ? +S.pM[pmK(m, c)] || 0 : 0);
const vminOf = (tid, op) => +(S.vmin || {})[tid + '|' + op] || 0;
const priceOf = (m, pe, c, tid) =>
  PSCOPE[c] === 'M'
    ? unitOf(m, c) === 'MIN'
      ? minOf(m, c) && vminOf(tid, c)
        ? Math.round(minOf(m, c) * vminOf(tid, c) * 10000) / 10000
        : ''
      : S.pM[pmK(m, c)]
    : S.pP[ppK(pe, c)];
function osLines(tid, op) {
  const L = [];
  allPages(op)
    .filter((p) => p.tid === tid)
    .forEach((p) =>
      p.pes.forEach((pe) => {
        const ms = modelosOf(p.m, pe),
          art = artsOf(atK(pe, p.m), op);
        if (ms.length)
          ms.forEach(([cm, d, cc, img, ts]) =>
            L.push({
              m: p.m,
              pe,
              cm,
              d,
              img,
              art,
              t: ts,
              q: Object.values(ts).reduce((a, b) => a + (+b || 0), 0),
            }),
          );
        else
          L.push({
            m: p.m,
            pe,
            cm: '-',
            d: '',
            img: '',
            art,
            t: tallasOf(p.m, pe),
            q: qtyOf(p.m, pe),
          });
      }),
    );
  return L;
}
const money = (n) =>
  n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function renderOS() {
  const [tid, op, md0] = S.os.split('|'),
    md = md0 === 'MIN' ? 'MIN' : 'S',
    O = OP[op],
    t = talById(tid),
    L = osLines(tid, op),
    today = new Date().toLocaleDateString('es-PE'),
    num =
      'OS-' + ctP().code.replace('PG-', '') + '-' + op + '-' + t.id + (md === 'MIN' ? '-MIN' : ''),
    vm = vminOf(tid, op);
  if (md === 'MIN') return renderOSMin(tid, op, O, t, L, today, num);
  let tq = 0,
    tv = 0,
    miss = 0,
    nmin = 0;
  const rows = L.map(({ m, pe, cm, d, img, art, q, t: ts }) => {
    const isM = unitOf(m, op) === 'MIN',
      tl0 = O.art ? tpLine(m, pe, op, ts) : null;
    let pu = +priceOf(m, pe, op, tid) || 0,
      imp = pu * q;
    if (tl0) {
      imp = tl0.imp;
      pu = q ? imp / q : 0;
      if (tl0.miss) pu = 0;
    }
    if (!pu) miss++;
    if (isM) nmin++;
    tq += q;
    tv += imp;
    const src = driveImg(img) || S.mimg[m.id] || '';
    const tl = Object.entries(ts).filter(([, v]) => +v);
    const grid = tl.length
      ? `<table class="tg"><tr>${tl.map(([k]) => `<th>${ctEsc(k)}</th>`).join('')}</tr><tr>${tl.map(([, v]) => `<td>${v}</td>`).join('')}</tr>${tl0 ? `<tr class="tgp">${tl.map(([k]) => `<td>${tl0.per[k] == null ? '<span class="fx">?</span>' : 'S/ ' + money(tl0.per[k])}</td>`).join('')}</tr>` : ''}</table>`
      : '-';
    return `<tr><td class="oi">${src ? `<img src="${src}" alt="" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode('-'))">` : '-'}</td><td class="oc">${ctEsc(cm)}<small>${ctEsc(m.code)}</small></td>
    <td><b>${ctEsc(d || S.mdesc[m.id] || m.code)}</b><small>${ctEsc(pe)} · ${ctEsc(colOf(pe))}</small>${
      O.art
        ? art.length
          ? art
              .map((a) => {
                const x = prById(a.id);
                return x
                  ? `<small class="oart">${x.img ? `<img src="${x.img}" alt="">` : ''}Arte ${ctEsc(x.cod)} ${ctEsc(plabel(x))} <b>× ${a.q}</b></small>`
                  : '';
              })
              .join('')
          : '<small class="oart"><span class="fx">Sin arte vinculado</span></small>'
        : ''
    }</td><td>${grid}</td>
    <td class="num"><b>${q}</b></td><td class="num">${pu ? money(pu) : '<span class="fx">falta</span>'}${tl0 && pu ? '<small class="omin">prom. · precio por talla</small>' : ''}${isM ? `<small class="omin">${minOf(m, op)} min × S/ ${vm ? money(vm) : '?'}</small>` : ''}</td><td class="num"><b>${pu ? money(imp) : '-'}</b></td></tr>`;
  }).join('');
  const igv = tv * 0.18,
    tot = tv + igv;
  ct$('preview').innerHTML =
    `<div class="osbar no-print"><b>Orden de servicio · ${ctEsc(O.n)} · ${ctEsc(t.nom)}</b><button class="btn sm primary" id="print">Imprimir / PDF</button><button class="btn sm" id="os-close">Cerrar</button></div>
${miss ? `<div class="warns no-print"><b>${miss} línea${miss > 1 ? 's' : ''} sin precio</b>${nmin && !vm ? 'Ingresa el valor S/ x minuto en la tarjeta del taller. ' : ''}${O.ctl === 'E' ? 'Carga el precio o los minutos ' + op + ' x estilo en Plantilla de estilos.' : 'Carga el precio ' + op + ' x pedido en la cabecera de cada pedido.'}</div>` : ''}
<section class="sheet on inc os2">
 <div class="o-hd"><div class="o-lg"><b>NUNA</b> COTTON</div><div class="o-tt"><b>Orden de servicio de ${ctEsc(O.n.toLowerCase())}</b><span>${ctEsc(num)} · Cliente ${ctEsc(ctP().marca)} · Programa ${ctEsc(ctP().code)}</span></div></div>
 <div class="o-box o4"><div><small>Proveedor</small><b>${ctEsc(t.rs || t.nom)}</b></div><div><small>RUC</small><b>${ctEsc(t.ruc || '-')}</b></div><div><small>Dirección</small><b>${ctEsc(t.zona || '-')}</b></div><div><small>Teléfono</small><b>${ctEsc(t.tel || '-')}</b></div></div>
 <div class="o-box o5"><div><small>Emitida por</small><b>NUNA COTTON SOURCING S.A.C.</b></div><div><small>RUC</small><b>20604349207</b></div><div><small>Fecha de emisión</small><b>${today}</b></div><div><small>Fecha inicio</small><i></i></div><div><small>Fecha final</small><i></i></div></div>
 <table class="o-tb"><thead><tr><th style="width:9%">Imagen</th><th style="width:10%">Código de modelo</th><th style="width:22%">Nombre de la prenda</th><th>Cantidad por talla</th><th class="num" style="width:7%">Cantidad total</th><th class="num" style="width:8%">Precio S/ x prenda</th><th class="num" style="width:9%">Importe S/</th></tr></thead>
 <tbody>${rows || '<tr><td colspan="7">-</td></tr>'}</tbody>
 <tfoot><tr><td></td><td><b>Total</b></td><td><b>${L.length} códigos</b></td><td></td><td class="num"><b>${tq}</b></td><td></td><td class="num"><b>${money(tv)}</b></td></tr></tfoot></table>
 <div class="o-ft"><div class="o-sum"><div><span>Valor venta</span><b>S/ ${money(tv)}</b></div><div><span>IGV 18%</span><b>S/ ${money(igv)}</b></div><div class="t"><span>Total factura</span><b>S/ ${money(tot)}</b></div></div></div>
</section>`;
}
function renderOSMin(tid, op, O, t, L, today, num) {
  let tq = 0,
    tm = 0,
    miss = 0;
  const rows = L.map(({ m, pe, cm, d, img, art, q, t: ts }) => {
    const isM = unitOf(m, op) === 'MIN',
      mn = isM ? minOf(m, op) : 0,
      tot = mn * q;
    if (!mn) miss++;
    tq += q;
    tm += tot;
    const src = driveImg(img) || S.mimg[m.id] || '',
      tl = Object.entries(ts).filter(([, v]) => +v);
    const grid = tl.length
      ? `<table class="tg"><tr>${tl.map(([k]) => `<th>${ctEsc(k)}</th>`).join('')}</tr><tr>${tl.map(([, v]) => `<td>${v}</td>`).join('')}</tr></table>`
      : '-';
    return `<tr><td class="oi">${src ? `<img src="${src}" alt="" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode('-'))">` : '-'}</td><td class="oc">${ctEsc(cm)}<small>${ctEsc(m.code)}</small></td>
    <td><b>${ctEsc(d || S.mdesc[m.id] || m.code)}</b><small>${ctEsc(pe)} · ${ctEsc(colOf(pe))}</small>${
      O.art
        ? art.length
          ? art
              .map((a) => {
                const x = prById(a.id);
                return x
                  ? `<small class="oart">${x.img ? `<img src="${x.img}" alt="">` : ''}Arte ${ctEsc(x.cod)} ${ctEsc(plabel(x))} <b>× ${a.q}</b></small>`
                  : '';
              })
              .join('')
          : '<small class="oart"><span class="fx">Sin arte vinculado</span></small>'
        : ''
    }</td><td>${grid}</td>
    <td class="num"><b>${q}</b></td><td class="num">${mn ? fmin(mn) : isM ? '<span class="fx">falta</span>' : '<span class="fx">importe fijo</span>'}</td><td class="num"><b>${mn ? fmin(tot) : '-'}</b></td></tr>`;
  }).join('');
  ct$('preview').innerHTML =
    `<div class="osbar no-print"><b>Orden de servicio en minutos · ${ctEsc(O.n)} · ${ctEsc(t.nom)}</b><button class="btn sm primary" id="print">Imprimir / PDF</button><button class="btn sm" id="os-close">Cerrar</button></div>
${miss ? `<div class="warns no-print"><b>${miss} línea${miss > 1 ? 's' : ''} sin minutos</b>Carga los minutos ${op} x estilo en Plantilla de estilos (unidad min).</div>` : ''}
<section class="sheet on inc os2">
 <div class="o-hd"><div class="o-lg"><b>NUNA</b> COTTON</div><div class="o-tt"><b>Orden de servicio de ${ctEsc(O.n.toLowerCase())} · minutos</b><span>${ctEsc(num)} · Cliente ${ctEsc(ctP().marca)} · Programa ${ctEsc(ctP().code)}</span></div></div>
 <div class="o-box o4"><div><small>Proveedor</small><b>${ctEsc(t.rs || t.nom)}</b></div><div><small>RUC</small><b>${ctEsc(t.ruc || '-')}</b></div><div><small>Dirección</small><b>${ctEsc(t.zona || '-')}</b></div><div><small>Teléfono</small><b>${ctEsc(t.tel || '-')}</b></div></div>
 <div class="o-box o5"><div><small>Emitida por</small><b>NUNA COTTON SOURCING S.A.C.</b></div><div><small>RUC</small><b>20604349207</b></div><div><small>Fecha de emisión</small><b>${today}</b></div><div><small>Fecha inicio</small><i></i></div><div><small>Fecha final</small><i></i></div></div>
 <table class="o-tb"><thead><tr><th style="width:9%">Imagen</th><th style="width:10%">Código de modelo</th><th style="width:22%">Nombre de la prenda</th><th>Cantidad por talla</th><th class="num" style="width:7%">Cantidad total</th><th class="num" style="width:8%">Minutos x prenda</th><th class="num" style="width:9%">Total minutos</th></tr></thead>
 <tbody>${rows || '<tr><td colspan="7">-</td></tr>'}</tbody>
 <tfoot><tr><td></td><td><b>Total</b></td><td><b>${L.length} códigos</b></td><td></td><td class="num"><b>${tq}</b></td><td></td><td class="num"><b>${fmin(tm)}</b></td></tr></tfoot></table>
 <div class="o-ft"><div class="o-sum"><div><span>Total minutos</span><b>${fmin(tm)} min</b></div><div class="t"><span>Total horas</span><b>${fmin(tm / 60)} h</b></div></div></div>
</section>`;
}
const fmin = (n) =>
  (Math.round(n * 100) / 100).toLocaleString('es-PE', { maximumFractionDigits: 2 });
function osRecalc() {}
function renderPreview() {
  if (S.os) {
    const [tid, op] = S.os.split('|');
    if (talById(tid) && OP[op] && osLines(tid, op).length) return renderOS();
    S.os = null;
  }
  ct$('preview').innerHTML = '';
}

/* ===== MAESTRO DE TALLERES ===== */
let TF = { nom: '', tipo: 'Costura', rs: '', ruc: '', zona: '', tel: '' },
  TMSG = '';
function renderTal() {
  const inp = (t, f, w, ph) =>
    `<input class="fi" data-tf2="${t.id}|${f}" value="${ctEsc(t[f] || '')}" placeholder="${ph || ''}" ${f === 'ruc' ? 'inputmode="numeric" maxlength="11"' : ''}>`;
  const ff = (f, l, ph, attr) =>
    `<label class="tf">${l}<input class="fi" data-tnew="${f}" value="${ctEsc(TF[f])}" placeholder="${ph || ''}" ${attr || ''}></label>`;
  ct$('content').innerHTML =
    `<div class="panel tform"><div class="panel-h"><h2>Nuevo proveedor</h2></div><div class="panel-b tfg">
  ${ff('nom', 'Nombre comercial *', 'Ej. Taller Rosa')}
  <label class="tf">Tipo<select class="fi" data-tnew="tipo">${['Costura', 'Bordado', 'Smock', 'Estampado', 'Crochet', 'Corte', 'Acabado', 'Otros'].map((x) => `<option${x === TF.tipo ? ' selected' : ''}>${x}</option>`).join('')}</select></label>
  ${ff('rs', 'Razón social *', 'Como figura en SUNAT')}${ff('ruc', 'RUC *', '11 dígitos', 'inputmode="numeric" maxlength="11"')}
  ${ff('zona', 'Dirección', '')}${ff('tel', 'Teléfono', '', 'inputmode="tel"')}
  <div class="tfa"><button class="btn gold" id="nt-add">Registrar proveedor</button>${TMSG ? `<span class="msg ${TMSG.startsWith('✓') ? 'ok' : 'err'}">${ctEsc(TMSG)}</span>` : ''}</div></div></div>
<div class="car-h" style="margin-top:16px"><h2>Maestro de talleres <span>· ${S.talleres.length}</span></h2></div>
<div class="tw"><table class="ed ttab"><thead><tr><th style="width:15%">Nombre</th><th style="width:9%">Tipo</th><th style="width:22%">Razón social</th><th style="width:11%">RUC</th><th>Dirección</th><th style="width:11%">Teléfono</th><th style="width:70px"></th></tr></thead>
<tbody>${S.talleres.map((t) => `<tr><td>${inp(t, 'nom')}</td><td><select class="fi" data-tf2="${t.id}|tipo">${['Costura', 'Bordado', 'Smock', 'Estampado', 'Crochet', 'Corte', 'Acabado', 'Otros'].map((x) => `<option${x === t.tipo ? ' selected' : ''}>${x}</option>`).join('')}</select></td><td>${inp(t, 'rs')}</td><td>${inp(t, 'ruc')}</td><td>${inp(t, 'zona')}</td><td>${inp(t, 'tel')}</td><td><button class="link del" data-tdel="${t.id}">Eliminar</button></td></tr>`).join('')}</tbody></table></div>`;
}
/* fin JsCombos3 */
window.__ctPartes = (window.__ctPartes || 0) + 1; (window.__ctOK = window.__ctOK || {})[3] = 1;
/* JsCombos4 · parte 4 de 4 del módulo Combos textil (archivo independiente, con sus propias etiquetas script) */
/* ===== MAESTRO DE TELAS ===== */
let TT = 'tela',
  TE = {},
  TMS = '';
function renderTel() {
  const tabs = [
    ['tela', 'Telas', S.tela.length],
    ['est', 'Estructuras', S.est.length],
    ['col', 'Colores', S.col.length],
  ];
  const use = (tid) => {
    let n = 0;
    S.progs.forEach((pg) =>
      Object.values(pg.asg).forEach((a) =>
        Object.values(a).forEach((o) =>
          Object.values(o).forEach((v) => {
            if (v.tid === tid) n++;
          }),
        ),
      ),
    );
    return n;
  };
  let form = '',
    table = '';
  if (TT === 'est') {
    form = `<label class="tf">Código *<input class="fi b" data-te="c" value="${ctEsc(TE.c || '')}" placeholder="Ej. IN0003"></label><label class="tf" style="grid-column:span 2">Descripción *<input class="fi" data-te="d" value="${ctEsc(TE.d || '')}" placeholder="Ej. INTERLOCK 50/1 100% PIMA COTTON 180 gr/m2"></label><label class="tf">Mín. compra x color (kg)<input class="fi num" data-te="moq" value="${ctEsc(TE.moq || '')}" inputmode="decimal"></label>`;
    table = `<thead><tr><th style="width:12%">Código</th><th>Descripción</th><th style="width:14%">Mín. compra (kg)</th><th style="width:10%">Colores</th><th style="width:70px"></th></tr></thead><tbody>${S.est.map((e) => `<tr><td><input class="fi b" data-me="est|${e.id}|c" value="${ctEsc(e.c)}"></td><td><input class="fi" data-me="est|${e.id}|d" value="${ctEsc(e.d)}"></td><td><input class="fi num" data-me="est|${e.id}|moq" value="${ctEsc(e.moq ?? '')}" inputmode="decimal"></td><td>${S.tela.filter((t) => t.e === e.id).length}</td><td><button class="link del" data-mdel="est|${e.id}">Eliminar</button></td></tr>`).join('')}</tbody>`;
  } else if (TT === 'col') {
    form = `<label class="tf">Código *<input class="fi b" data-te="c" value="${ctEsc(TE.c || '')}" placeholder="Ej. LB-102"></label><label class="tf" style="grid-column:span 2">Descripción *<input class="fi" data-te="d" value="${ctEsc(TE.d || '')}" placeholder="Ej. Celeste bebé"></label><label class="tf">Color de muestra<input type="color" class="fi cpk2" data-te="h" value="${ctEsc(TE.h || '#FFFFFF')}"></label>`;
    table = `<thead><tr><th style="width:60px"></th><th style="width:14%">Código</th><th>Descripción</th><th style="width:10%">Telas</th><th style="width:70px"></th></tr></thead><tbody>${S.col.map((c) => `<tr><td><input type="color" class="cpk" data-me="col|${c.id}|h" value="${ctEsc(c.h)}"></td><td><input class="fi b" data-me="col|${c.id}|c" value="${ctEsc(c.c)}"></td><td><input class="fi" data-me="col|${c.id}|d" value="${ctEsc(c.d)}"></td><td>${S.tela.filter((t) => t.c === c.id).length}</td><td><button class="link del" data-mdel="col|${c.id}">Eliminar</button></td></tr>`).join('')}</tbody>`;
  } else {
    form = `<label class="tf" style="grid-column:span 2">Estructura *<select class="fi" data-te="e"><option value="">Elegir…</option>${S.est.map((e) => `<option value="${e.id}"${+TE.e === e.id ? ' selected' : ''}>${ctEsc(e.c)} · ${ctEsc(e.d)}</option>`).join('')}</select></label><label class="tf" style="grid-column:span 2">Color *<select class="fi" data-te="c"><option value="">Elegir…</option>${S.col.map((c) => `<option value="${c.id}"${+TE.c === c.id ? ' selected' : ''}>${ctEsc(c.c)} · ${ctEsc(c.d)}</option>`).join('')}</select></label>`;
    table = `<thead><tr><th style="width:52px"></th><th style="width:30%">Estructura</th><th>Descripción</th><th style="width:20%">Color</th><th style="width:9%">Usos</th><th style="width:70px"></th></tr></thead><tbody>${S.tela
      .map((t) => {
        const e = E_(t.e),
          c = C_(t.c);
        return `<tr><td><span class="th csw" style="background:${c.h}"></span></td><td><b>${ctEsc(e.c)}</b></td><td class="mut2">${ctEsc(e.d)}</td><td><b>${ctEsc(c.c)}</b> <span class="mut2">${ctEsc(c.d)}</span></td><td>${use(t.id)}</td><td><button class="link del" data-mdel="tela|${t.id}">Eliminar</button></td></tr>`;
      })
      .join('')}</tbody>`;
  }
  const lbl = { tela: 'Nueva tela', est: 'Nueva estructura', col: 'Nuevo color' }[TT];
  ct$('content').innerHTML =
    `<div class="car-h"><h2>Maestro de telas <span>· Tela = estructura + color · es lo que se elige en Combos x programa</span></h2></div>
<div class="chips" style="margin-bottom:12px">${tabs.map(([k, l, n]) => `<button class="chip" data-tt="${k}" aria-pressed="${TT === k}">${l} <small>${n}</small></button>`).join('')}</div>
<div class="panel tform"><div class="panel-h"><h2>${lbl}</h2></div><div class="panel-b tfg">${form}<div class="tfa"><button class="btn gold" id="te-add">Registrar</button>${TMS ? `<span class="msg ${TMS.startsWith('✓') ? 'ok' : 'err'}">${ctEsc(TMS)}</span>` : ''}</div></div></div>
<div class="tw" style="margin-top:14px"><table class="ed ttab">${table}</table></div>`;
}
/* ===== navegación ===== */
function ctRender() {
  if (!S || ct$('ctRoot').hidden) return;
  if (typeof IX !== 'undefined' && IX.ver !== AVV) {
    buildAvios();
    AVV = IX.ver;
  }
  Shell.mark('ct:' + (S.tab === 'cmb' ? 'prg' : S.tab));
  renderSide();
  if (['cmb', 'art', 'rep'].includes(S.tab) && !ctP()) {
    ct$('content').innerHTML =
      '<div class="empty">No hay programas activos en PLAN DE VENTAS (status distinto de CERRADO / ANULADO).</div>';
    return;
  }
  if (S.tab === 'tpl' && !M()) {
    ct$('content').innerHTML =
      '<div class="empty">No hay moldes: DETALLE_TALLAS no tiene pedidos activos con código de molde.</div>';
    return;
  }
  (
    ({
      art: renderArt,
      prg: renderPrg,
      tpl: renderTpl,
      cmb: renderCmb,
      rep: renderRep,
      prn: renderPrn,
      tal: renderTal,
      tel: renderTel,
    })[S.tab] || renderPrg
  )();
}
const CU_UN = ['kg', 'm', 'cm', 'und'];
const comp = (m, id) => comps(m).find((c) => c.id === id);

/* ===== eventos ===== */
document.addEventListener('input', (e) => {
  if (!inCT(e.target) || !S) return;
  const t = e.target,
    m = M();
  if (t.id === 'q') {
    S.q = t.value;
    renderSide();
    saveUI();
    return;
  }
  if (t.id === 'pgq') {
    PGQ = t.value;
    renderPrg();
    const el = ct$('pgq');
    el.focus();
    el.setSelectionRange(PGQ.length, PGQ.length);
    return;
  }
  if (t.id === 'pq') {
    PQ = t.value;
    renderPrn();
    const el = ct$('pq');
    el.focus();
    el.setSelectionRange(PQ.length, PQ.length);
    return;
  }
  if (t.dataset.tf) {
    const [id, f] = t.dataset.tf.split('|');
    comp(m, id)[f] = t.value.toUpperCase();
    save();
    return;
  }
  if (t.dataset.dq || t.dataset.dn) {
    const [id, j] = (t.dataset.dq || t.dataset.dn).split('|'),
      c = comp(m, id);
    if (t.dataset.dq) c.desp[+j].q = Math.max(1, parseInt(t.value) || 1);
    else c.desp[+j].n = t.value.toUpperCase();
    save();
    const el = ct$('dtot-' + id);
    if (el) el.textContent = c.desp.reduce((a, d) => a + (+d.q || 0), 0) + ' piezas';
    return;
  }
  if (t.dataset.cu) {
    comp(m, t.dataset.cu).cu = t.value.trim();
    t.classList.toggle('ok', has(t.value.trim()));
    save();
    renderSide();
    return;
  }
  if (t.dataset.cc) {
    const [id, pe] = t.dataset.cc.split('|');
    setCell(m, id, pe, { c: t.value.trim().toUpperCase() });
    t.classList.toggle('ok', has(t.value.trim()));
    save();
    renderSide();
    return;
  }
  if (t.dataset.tf2 && t.tagName === 'INPUT') {
    const [id, f] = t.dataset.tf2.split('|');
    talById(id)[f] = ['nom', 'zona', 'tel'].includes(f) ? t.value : t.value.toUpperCase();
    save();
    return;
  }
  if (t.dataset.ci2) {
    const [ci, ii, f] = t.dataset.ci2.split('|'),
      c = PF.cons[+ci],
      it = c.items[+ii];
    it[f] = t.value;
    const tot = itCons(c.ins, it, consFmt(PF.tipo)),
      o = t.closest('.cit') && t.closest('.cit').querySelector('.htot b');
    if (o) o.textContent = tot ? fmin(tot) : '-';
    return;
  }
  if (t.dataset.pfr) {
    const [ri, f] = t.dataset.pfr.split('|');
    PF.prows[+ri][f] = t.value;
    return;
  }
  if (t.dataset.tpf && t.tagName === 'INPUT') {
    const [id, f] = t.dataset.tpf.split('|');
    tpById(id)[f] = f === 'n' ? t.value.toUpperCase() : t.value;
    save();
    return;
  }
  if (t.dataset.tpr) {
    const [id, ri, f] = t.dataset.tpr.split('|');
    tpById(id).rows[+ri][f] = f === 'tl' ? t.value.toUpperCase() : t.value;
    save();
    return;
  }
  if (t.dataset.hcf && t.tagName === 'INPUT') {
    const [i, f] = t.dataset.hcf.split('|');
    S.hconv[+i][f] = f === 'm' ? t.value.toUpperCase() : t.value;
    save();
    return;
  }
  if (t.dataset.aq) {
    const [pe, mid, i] = t.dataset.aq.split('|');
    S.arts[pe + '|' + mid][+i].q = Math.max(1, parseInt(t.value) || 1);
    save();
    return;
  }
  if (t.dataset.ci) {
    const [i, f] = t.dataset.ci.split('|');
    if (f !== 'ins') PF.cons[+i][f] = t.value;
    return;
  }
  if (t.dataset.te) {
    TE[t.dataset.te] = t.value;
    return;
  }
  if (t.dataset.me) {
    const [tb, id, f] = t.dataset.me.split('|'),
      o = S[tb].find((x) => x.id === +id);
    o[f] =
      f === 'h'
        ? t.value
        : f === 'moq'
          ? t.value.trim()
          : f === 'c'
            ? t.value.trim().toUpperCase()
            : t.value;
    save();
    return;
  }
  if (t.dataset.tnew) {
    TF[t.dataset.tnew] = t.value;
    return;
  }
  if (t.dataset.tm) {
    const v = t.value.trim();
    if (has(v)) S.tarM[t.dataset.tm] = v;
    else delete S.tarM[t.dataset.tm];
    t.classList.toggle('ok', has(v));
    save();
    return;
  }
  if (t.dataset.tpp) {
    const v = t.value.trim();
    if (has(v)) S.tarP[t.dataset.tpp] = v;
    else delete S.tarP[t.dataset.tpp];
    t.classList.toggle('ok', has(v));
    save();
    return;
  }
  if (t.hasAttribute('data-mdesc')) {
    S.mdesc[m.id] = t.value.toUpperCase();
    save();
    return;
  }
  if (t.dataset.vmin) {
    const v = t.value.trim();
    S.vmin = S.vmin || {};
    if (has(v)) S.vmin[t.dataset.vmin] = v;
    else delete S.vmin[t.dataset.vmin];
    t.classList.toggle('ok', has(v));
    save();
    return;
  }
  if (t.dataset.pm) {
    const v = t.value.trim();
    if (has(v)) S.pM[t.dataset.pm] = v;
    else delete S.pM[t.dataset.pm];
    t.classList.toggle('ok', has(v));
    save();
    return;
  }
  if (t.dataset.pp) {
    const v = t.value.trim();
    if (has(v)) S.pP[t.dataset.pp] = v;
    else delete S.pP[t.dataset.pp];
    t.classList.toggle('ok', has(v));
    save();
    return;
  }
  if (t.dataset.ct) {
    const [id, pe] = t.dataset.ct.split('|');
    setCell(m, id, pe, { t: t.value.trim().toUpperCase() });
    t.classList.toggle('ok', has(t.value.trim()));
    save();
    return;
  }
  if (t.dataset.osq) {
    S.osq[t.dataset.osq] = t.value.trim();
    save();
    osRecalc();
    return;
  }
  if (t.dataset.avcu) {
    S.avcu[t.dataset.avcu] = t.value.trim();
    save();
    renderCards();
    return;
  }
  if (t.dataset.code) {
    const key = t.dataset.code;
    S.codes[key] = t.value.trim().toUpperCase();
    document.querySelectorAll('[data-code]').forEach((el) => {
      if (el !== t && el.dataset.code === key) el.value = t.value;
    });
    save();
    renderCards();
    return;
  }
  if (t.dataset.pf && t.tagName === 'INPUT') {
    PF[t.dataset.pf] = t.value;
    const l = ct$('pf-lbl');
    if (l)
      l.textContent =
        plabel({ ref: PF.ref.trim().toUpperCase(), nombre: PF.nombre.trim().toUpperCase() }) ||
        '-';
    return;
  }
});
document.addEventListener('change', (e) => {
  if (!inCT(e.target) || !S) return;
  const t = e.target,
    m = M();
  if (t.dataset.un) {
    comp(m, t.dataset.un).un = t.value;
    save();
    return;
  }
  if (t.id === 'pgc') {
    PGC = t.value;
    renderPrg();
    return;
  }
  if (t.id === 'progSel') {
    S.pi = +t.value;
    S.act = null;
    S.os = null;
    save();
    ctRender();
    return;
  }
  if (t.dataset.pf && t.tagName === 'SELECT') {
    PF[t.dataset.pf] = t.value;
    if (t.dataset.pf === 'tipo') {
      PF.tec = ART_TEC[PF.tipo][0];
    }
    renderPrn();
    return;
  }
  if (t.dataset.pfc) {
    PF[t.dataset.pfc] = t.checked;
    renderPrn();
    return;
  }
  if (t.dataset.cx) {
    const [id, pe] = t.dataset.cx.split('|'),
      c = cellOf(m, id, pe).c;
    if (!has(c)) {
      toast('Escribe primero el código de color');
      renderCmb();
      return;
    }
    S.chex[c] = t.value;
    save();
    renderCmb();
    return;
  }
  if (t.dataset.ctid) {
    const [id, pe] = t.dataset.ctid.split('|'),
      tl = T_(t.value);
    setCell(M(), id, pe, {
      tid: tl ? tl.id : null,
      t: tl ? E_(tl.e).d.toUpperCase() : '',
      c: tl ? C_(tl.c).c : '',
    });
    save();
    renderCmb();
    renderSide();
    return;
  }
  if (t.dataset.tfe) {
    const e = findEstQ(t.value);
    if (!e) {
      toast('Material no encontrado en Maestro de telas › Estructuras');
      setTimeout(renderTpl);
      return;
    }
    comp(m, t.dataset.tfe).desc = e.d.toUpperCase();
    save();
    setTimeout(renderTpl);
    return;
  }
  if (t.dataset.cp) {
    const [id, pe] = t.dataset.cp.split('|'),
      pid = findPrintQ(t.value);
    if (!pid) {
      toast('Print no encontrado: escribe más del nombre o el código');
      setTimeout(renderCmb);
      return;
    }
    setCell(m, id, pe, { p: pid });
    save();
    setTimeout(renderCmb);
    return;
  }
  if (t.dataset.ap) {
    const pe = t.dataset.ap,
      ex = (ctP().excl[m.id] = ctP().excl[m.id] || []);
    ctP().excl[m.id] = t.checked ? ex.filter((x) => x !== pe) : [...ex, pe];
    save();
    renderSide();
    renderCmb();
    return;
  }
  if (t.dataset.pmap) {
    S.pmap[t.dataset.pmap] = t.value;
    save();
    if (S.tab === 'rep') renderRep();
    toast('Proceso actualizado en todos los moldes');
    return;
  }
  if (t.dataset.avun) {
    S.avun[t.dataset.avun] = t.value;
    save();
    return;
  }
  if (t.dataset.pu) {
    S.pU = S.pU || {};
    if (t.value === 'MIN') S.pU[t.dataset.pu] = 'MIN';
    else delete S.pU[t.dataset.pu];
    save();
    return;
  }
  if (t.dataset.vmin) {
    if (S.os) setTimeout(renderRep);
    return;
  }
  if (t.dataset.ci2) {
    const [ci, ii, f] = t.dataset.ci2.split('|');
    PF.cons[+ci].items[+ii][f] = t.value;
    if (t.tagName === 'SELECT') setTimeout(renderPrn);
    return;
  }
  if (t.dataset.tpf && t.tagName === 'SELECT') {
    const [id, f] = t.dataset.tpf.split('|'),
      tp = tpById(id);
    tp[f] = t.value;
    if (t.value === 'P' && !(tp.rows || []).length) tp.rows = [{ tl: '', p: '' }];
    save();
    renderPrn();
    return;
  }
  if (t.dataset.tpf || t.dataset.tpr || t.dataset.hcf) {
    if (t.dataset.hcf && t.tagName === 'SELECT') {
      const [i, f] = t.dataset.hcf.split('|');
      S.hconv[+i][f] = t.value;
      save();
    }
    setTimeout(renderPrn);
    return;
  }
  if (t.dataset.atp) {
    const [pe, mid, i] = t.dataset.atp.split('|'),
      a = S.arts[pe + '|' + mid][+i];
    if (t.value) a.tp = t.value;
    else delete a.tp;
    save();
    renderArt();
    return;
  }
  if (t.dataset.afil) {
    S.afil = S.afil || { ap: true, pe: true };
    S.afil[t.dataset.afil] = t.checked;
    save();
    renderSide();
    return;
  }
  if (t.dataset.ci) {
    const [i, f] = t.dataset.ci.split('|'),
      c = PF.cons[+i];
    if (f === 'ins') {
      c.ins = t.value.split(' · ')[0].trim().toUpperCase();
      const k = SKBY[c.ins] || [];
      c.sku = k.length === 1 ? k[0].id : '';
      c.un = (SK[c.sku] || {}).un || (AVB[c.ins] || {}).u || '';
      setTimeout(renderPrn);
      return;
    }
    c[f] = t.value;
    if (f === 'sku') {
      c.un = (SK[c.sku] || {}).un || (AVB[c.ins] || {}).u || '';
      setTimeout(renderPrn);
    }
    return;
  }
  if (t.dataset.te && t.tagName === 'SELECT') {
    TE[t.dataset.te] = t.value;
    return;
  }
  if (t.dataset.me && t.type === 'color') {
    const [tb, id] = t.dataset.me.split('|');
    S[tb].find((x) => x.id === +id).h = t.value;
    save();
    return;
  }
  if (t.dataset.tnew && t.tagName === 'SELECT') {
    TF.tipo = t.value;
    return;
  }
  if (t.dataset.tf2 && t.tagName === 'SELECT') {
    const [id, f] = t.dataset.tf2.split('|');
    talById(id)[f] = t.value;
    save();
    return;
  }
  if (t.dataset.gt !== undefined) {
    ctP().groups[+t.dataset.gt].tid = t.value;
    S.os = null;
    save();
    renderRep();
    return;
  }
  if (t.dataset.at) {
    const o = (S.as[S.chip] = S.as[S.chip] || {});
    if (t.value) o[t.dataset.at] = t.value;
    else delete o[t.dataset.at];
    S.os = null;
    save();
    renderRep();
    return;
  }
  if (t.dataset.atc) {
    const pe = t.dataset.atc,
      o = (S.as[S.chip] = S.as[S.chip] || {});
    relM().forEach((mm) => {
      if (!opApplies(S.chip, pe, mm)) return;
      if (t.value) o[atK(pe, mm)] = t.value;
      else delete o[atK(pe, mm)];
    });
    S.os = null;
    save();
    renderRep();
    return;
  }
  if (t.dataset.aop || t.dataset.aid) {
    const [pe, mid, i] = (t.dataset.aop || t.dataset.aid).split('|'),
      a = S.arts[pe + '|' + mid][+i];
    if (t.dataset.aop) {
      a.op = t.value;
      a.id = '';
    } else a.id = t.value;
    save();
    renderArt();
    return;
  }
  if (t.dataset.proc) {
    const c = t.dataset.proc;
    S.procs = t.checked ? [...S.procs, c] : S.procs.filter((x) => x !== c);
    save();
    renderCards();
    renderPreview();
    return;
  }
  if (t.dataset.inc) {
    const o = ctP().out;
    ctP().out = t.checked ? o.filter((x) => x !== t.dataset.inc) : [...o, t.dataset.inc];
    save();
    renderRep();
    return;
  }
  if (t.hasAttribute('data-upm') && t.files[0]) {
    const mm = m;
    readImg(t.files[0], 800, (src) =>
      subirImg(src, 'molde ' + mm.code)
        .then((url) => {
          S.mimg[mm.id] = url;
          save();
          ctRender();
          toast('Imagen del molde guardada en Drive');
        })
        .catch(() => {}),
    );
    return;
  }
  if (t.hasAttribute('data-upp') && t.files[0]) {
    readImg(t.files[0], 600, (src) =>
      subirImg(src, 'arte ' + (PF.nombre || PF.ref || ''))
        .then((url) => {
          PF.img = url;
          renderPrn();
          toast('Imagen del arte subida: recuerda guardar el arte');
        })
        .catch(() => {}),
    );
    return;
  }
});
document.addEventListener('click', async (e) => {
  if (!inCT(e.target) || !S) return;
  const b = e.target.closest('button');
  if (!b) return;
  const m = M();
  if (b.dataset.ctref !== undefined) {
    recargar();
    return;
  }
  if (b.dataset.pga !== undefined) {
    S.pi = +b.dataset.pga;
    S.tab = 'art';
    save();
    ctRender();
    window.scrollTo(0, 0);
    return;
  }
  if (b.dataset.pgr !== undefined) {
    S.pi = +b.dataset.pgr;
    S.os = null;
    S.tab = 'rep';
    save();
    ctRender();
    window.scrollTo(0, 0);
    return;
  }
  if (b.dataset.pgo !== undefined) {
    S.pi = +b.dataset.pgo;
    S.act = null;
    S.os = null;
    S.tab = 'cmb';
    const f = MOLDES.findIndex((m) => applic(m).length);
    if (f > -1) S.sel = f;
    save();
    ctRender();
    window.scrollTo(0, 0);
    return;
  }
  if (b.id === 'togSide' || b.id === 'showSide') {
    S.hideSide = !S.hideSide;
    save();
    ctRender();
    return;
  }
  if (b.dataset.tab) {
    S.tab = b.dataset.tab;
    save();
    ctRender();
    window.scrollTo(0, 0);
    return;
  }
  if (b.dataset.i !== undefined) {
    S.sel = +b.dataset.i;
    save();
    ctRender();
    return;
  }
  if (b.id === 'cmb-save') {
    const pr = cmbProg(m);
    S.cmbG = S.cmbG || {};
    S.cmbG[ctP().code + '|' + m.id] = new Date().toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    save();
    renderCmb();
    toast(
      `Combos ${m.code} grabados · ${pr.ok}/${pr.tot} celdas con tela` +
        (pr.ok < pr.tot ? ' (faltan telas)' : ''),
    );
    return;
  }
  if (b.id === 'tpl-save') {
    const m = M();
    S.tplG = S.tplG || {};
    S.tplG[m.id] = new Date().toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    save();
    ctRender();
    toast(`Plantilla ${m.code} grabada y aprobada`);
    return;
  }
  if (b.dataset.nav) {
    let i = S.sel;
    for (let k = 0; k < MOLDES.length; k++) {
      i = (i + +b.dataset.nav + MOLDES.length) % MOLDES.length;
      if (S.tab !== 'cmb' || relevant(MOLDES[i])) break;
    }
    S.sel = i;
    save();
    ctRender();
    return;
  }
  if (b.hasAttribute('data-rmimg')) {
    delete S.mimg[m.id];
    save();
    ctRender();
    return;
  }
  /* plantilla */
  if (b.dataset.dadd) {
    comp(m, b.dataset.dadd).desp.push({ q: 1, n: '' });
    save();
    renderTpl();
    const ins = document.querySelectorAll(`[data-dn^="${b.dataset.dadd}|"]`);
    ins[ins.length - 1]?.focus();
    return;
  }
  if (b.dataset.dx) {
    const [id, j] = b.dataset.dx.split('|');
    comp(m, id).desp.splice(+j, 1);
    save();
    renderTpl();
    return;
  }
  if (b.dataset.cdel) {
    const c = comp(m, b.dataset.cdel);
    if (
      !(await confirmar(
        `¿Quitar ${c.comp} de la plantilla ${m.code}? Sus colores asignados en los programas también se dejan de usar.`,
        'Quitar',
      ))
    )
      return;
    S.tpl[m.id].comps = comps(m).filter((x) => x.id !== c.id);
    save();
    ctRender();
    toast(c.comp + ' quitado');
    return;
  }
  if (b.id === 'nc-add') {
    const name = ct$('nc-comp').value.trim().toUpperCase();
    if (!name) {
      toast('Escribe el nombre del componente');
      ct$('nc-comp').focus();
      return;
    }
    const T = S.tpl[m.id],
      id = 'c' + T.seq++;
    T.comps.push({
      id,
      comp: name,
      desc: String(NCD || IL).toUpperCase(),
      desp: [{ q: 1, n: '' }],
      cu: '',
    });
    save();
    ctRender();
    toast(name + ' agregado a la plantilla');
    document.querySelector(`[data-dn^="${id}|"]`)?.focus();
    return;
  }
  /* combos */
  if (b.dataset.apx || b.dataset.apa) {
    const pe = b.dataset.apx || b.dataset.apa,
      ex = (ctP().excl[m.id] = ctP().excl[m.id] || []);
    ctP().excl[m.id] = b.dataset.apa ? ex.filter((x) => x !== pe) : [...ex, pe];
    save();
    ctRender();
    return;
  }
  if (b.dataset.pkmat) {
    const id = b.dataset.pkmat,
      cur = id === '__new' ? estOfDesc(NCD) : estOfDesc((comp(m, id) || {}).desc);
    openPicker({
      kind: 'mat',
      cur: cur && cur.id,
      title: 'Código - descripción material',
      sub: id === '__new' ? 'Nuevo componente' : (comp(m, id) || {}).comp,
      ph: 'Buscar código, fibra, gramaje…',
      back: `[data-pkmat="${id}"]`,
      onPick: (i) => {
        const e = S.est.find((x) => x.id === i.id);
        if (id === '__new') NCD = e.d.toUpperCase();
        else comp(m, id).desc = e.d.toUpperCase();
        save();
        renderTpl();
      },
    });
    return;
  }
  if (b.dataset.pkart) {
    const [pe, mid, ix] = b.dataset.pkart.split('|'),
      a = S.arts[pe + '|' + mid][+ix],
      mm = MOLDES.find((x) => x.id === mid);
    openPicker({
      kind: 'arte',
      ctx: { tipo: ART_FOR[a.op] },
      cur: a.id,
      title: 'Elegir arte · ' + OP[a.op].n,
      sub: `${mm ? mm.label : ''} · ${pe}`,
      ph: 'Buscar por nombre, código o estado…',
      back: `[data-pkart="${b.dataset.pkart}"]`,
      onPick: (i) => {
        a.id = i.id;
        save();
        renderArt();
        toast(i.lbl + ' asignado' + (i.est !== 'Aprobado' ? ' · ' + i.est : ''));
      },
    });
    return;
  }
  if (b.dataset.pkavio) {
    const ci = +b.dataset.pkavio,
      c = PF.cons[ci];
    openPicker({
      kind: 'avio',
      cur: c.ins,
      title: 'Elegir avío',
      sub: 'Consumos del arte',
      ph: 'Buscar código, descripción o familia…',
      back: `[data-pkavio="${ci}"]`,
      onPick: (i) => {
        c.ins = i.id;
        const k = SKBY[i.id] || [];
        c.items = [{ sku: k.length === 1 ? k[0].id : '', cons: '', h: '', c: '', r: '', mh: '' }];
        if (k.length === 1 && isHilo(i.id)) c.items[0].mh = guessMH(k[0].id);
        renderPrn();
      },
    });
    return;
  }
  if (b.dataset.pksku) {
    const [ci, ii] = b.dataset.pksku.split('|').map(Number),
      c = PF.cons[ci],
      it = c.items[ii];
    if (!(SKBY[c.ins] || []).length) {
      toast('Este avío no tiene SKU en BD_AVIOS');
      return;
    }
    openPicker({
      kind: 'sku',
      ctx: { ins: c.ins },
      cur: it.sku,
      title: 'Elegir SKU · ' + c.ins,
      sub: (AVB[c.ins] || {}).d || '',
      ph: 'Buscar color o código…',
      back: `[data-pksku="${ci}|${ii}"]`,
      onPick: (i) => {
        it.sku = i.id;
        if (isHilo(c.ins) && !it.mh) it.mh = guessMH(i.id);
        renderPrn();
      },
    });
    return;
  }
  if (b.dataset.caddi !== undefined) {
    const c = PF.cons[+b.dataset.caddi],
      l = c.items[c.items.length - 1] || {};
    c.items.push({
      sku: '',
      cons: l.cons ?? '',
      h: l.h ?? '',
      c: l.c ?? '',
      r: l.r ?? '',
      mh: l.mh || '',
    });
    renderPrn();
    return;
  }
  if (b.dataset.cdeli) {
    const [ci, ii] = b.dataset.cdeli.split('|').map(Number);
    PF.cons[ci].items.splice(ii, 1);
    renderPrn();
    return;
  }
  if (b.dataset.pfcli !== undefined) {
    openPicker({
      kind: 'cli',
      cur: PF.cli || defCli(),
      title: 'Cliente del arte',
      sub: 'PLAN DE VENTAS › CONFIG (col A, B)',
      ph: 'Buscar código o marca…',
      back: '[data-pfcli]',
      onPick: (i) => {
        PF.cli = i.id;
        renderPrn();
      },
    });
    return;
  }
  if (b.dataset.pftela !== undefined) {
    openPicker({
      kind: 'tela',
      create: 'tela',
      cur: PF.tid,
      title: 'Tela base del arte',
      sub: PF.nombre || 'Nuevo arte',
      ph: 'Buscar por estructura, código o color…',
      back: '[data-pftela]',
      onPick: (i) => {
        const t = T_(i.id);
        PF.tid = t.id;
        PF.telaColor = C_(t.c).c;
        renderPrn();
      },
    });
    return;
  }
  if (b.dataset.pfcadd !== undefined) {
    openPicker({
      kind: 'color',
      create: 'color',
      title: 'Agregar color / Pantone',
      sub: PF.nombre || 'Nuevo arte',
      ph: 'Buscar código Pantone o color…',
      back: '[data-pfcadd]',
      onPick: (i) => {
        PF.cols = PF.cols || [];
        if (!PF.cols.includes(i.id)) PF.cols.push(i.id);
        renderPrn();
      },
    });
    return;
  }
  if (b.dataset.pfcdel !== undefined) {
    PF.cols.splice(+b.dataset.pfcdel, 1);
    renderPrn();
    return;
  }
  if (b.dataset.pfpm) {
    PF.pm = b.dataset.pfpm;
    if (PF.pm === 'P' && !(PF.prows || []).length) PF.prows = [{ d: '', p: '' }];
    renderPrn();
    return;
  }
  if (b.dataset.pfradd !== undefined) {
    PF.prows = PF.prows || [];
    PF.prows.push({ d: '', p: '' });
    renderPrn();
    return;
  }
  if (b.dataset.pfrdel !== undefined) {
    PF.prows.splice(+b.dataset.pfrdel, 1);
    renderPrn();
    return;
  }
  if (b.dataset.pv) {
    PV = b.dataset.pv;
    renderPrn();
    return;
  }
  if (b.id === 'tp-add') {
    const n = ct$('tp-n').value.trim().toUpperCase();
    if (!n) {
      toast('Escribe el nombre del tipo de precio');
      return;
    }
    const mo = ct$('tp-m').value;
    S.tprec.push({
      id: 'TP' + Date.now().toString(36),
      n,
      modo: mo,
      p: '',
      rows: mo === 'P' ? [{ tl: '', p: '' }] : [],
    });
    save();
    renderPrn();
    toast(n + ' creado');
    return;
  }
  if (b.dataset.tpdel) {
    S.tprec = S.tprec.filter((t) => t.id !== b.dataset.tpdel);
    save();
    renderPrn();
    return;
  }
  if (b.dataset.tpradd) {
    const t = tpById(b.dataset.tpradd);
    t.rows.push({ tl: '', p: '' });
    save();
    renderPrn();
    return;
  }
  if (b.dataset.tprdel) {
    const [id, ri] = b.dataset.tprdel.split('|');
    tpById(id).rows.splice(+ri, 1);
    save();
    renderPrn();
    return;
  }
  if (b.id === 'hc-add') {
    S.hconv.push({ m: '', h: '', mt: '', u: 'CONO' });
    save();
    renderPrn();
    return;
  }
  if (b.dataset.hcdel !== undefined) {
    S.hconv.splice(+b.dataset.hcdel, 1);
    save();
    renderPrn();
    return;
  }
  if (b.dataset.pk && /^(tela|print)\|/.test(b.dataset.pk)) {
    const [kind, cid, pe] = b.dataset.pk.split('|');
    openPK(kind, cid, pe);
    return;
  }
  if (b.dataset.cpall) {
    const id = b.dataset.cpall,
      ap = applic(m);
    if (!ap.length) return;
    const v = cellOf(m, id, ap[0]);
    ap.slice(1).forEach((pe) => setCell(m, id, pe, { ...v }));
    save();
    ctRender();
    toast('Copiado a ' + (ap.length - 1) + ' combos');
    return;
  }
  /* maestro prints */
  if (b.dataset.pt) {
    PT = b.dataset.pt;
    renderPrn();
    return;
  }
  if (b.id === 'pf-new') {
    PF = blankPF(PT === 'Todos' ? 'Estampado localizado' : PT);
    PMSG = '';
    renderPrn();
    return;
  }
  if (b.id === 'pf-rmimg') {
    PF.img = null;
    renderPrn();
    return;
  }
  if (b.dataset.pedit) {
    PF = { ...prById(b.dataset.pedit) };
    PF.cons = JSON.parse(JSON.stringify(PF.cons || []));
    PF.prows = JSON.parse(JSON.stringify(PF.prows || []));
    PF.cols = [...(PF.cols || [])];
    PMSG = '';
    renderPrn();
    window.scrollTo(0, 0);
    return;
  }
  if (b.dataset.pdel) {
    const p = prById(b.dataset.pdel);
    if (!(await confirmar(`¿Eliminar ${p.cod} ${plabel(p)} del maestro?`, 'Eliminar'))) return;
    S.prints = S.prints.filter((x) => x.id !== p.id);
    if (PF.id === p.id) PF = blankPF();
    save();
    PMSG = 'Arte eliminado.';
    PERR = false;
    renderPrn();
    return;
  }
  if (b.id === 'pf-save') {
    const ref = PF.ref.trim().toUpperCase(),
      nombre = PF.nombre.trim().toUpperCase();
    if (!nombre) {
      PMSG = 'El nombre es obligatorio.';
      PERR = true;
      return renderPrn();
    }
    if (
      S.prints.some((p) => p.id !== PF.id && p.ref === ref && norm(p.nombre) === norm(nombre))
    ) {
      PMSG = `Ya existe ${plabel({ ref, nombre })}.`;
      PERR = true;
      return renderPrn();
    }
    const rp = ref && S.prints.some((p) => p.id !== PF.id && p.ref === ref);
    const data = { ...PF, ref, nombre, telaColor: PF.telaColor.trim().toUpperCase() };
    const cs = (PF.cons || []).filter((c) => has(c.ins));
    const fm = consFmt(PF.tipo),
      bad = cs.find((c) => c.items.some((it) => !itCons(c.ins, it, fm)));
    if (bad) {
      PMSG = `${bad.ins}: falta consumo${isHilo(bad.ins) && fm === 'smock' ? ' (hebras × carreras × recorrido)' : isHilo(bad.ins) && fm === 'bord' ? ' (hebras × metros por unidad)' : ''}.`;
      PERR = true;
      return renderPrn();
    }
    data.cons = cs.map((c) => ({ ins: c.ins, items: c.items.map((it) => ({ ...it })) }));
    data.pm = PF.pm === 'P' ? 'P' : 'T';
    data.prows = (PF.prows || [])
      .filter((r) => has(r.d) || has(r.p))
      .map((r) => ({
        d: String(r.d || '')
          .toUpperCase()
          .trim(),
        p: r.p,
      }));
    if (PF.id) {
      const o = prById(PF.id);
      Object.assign(o, { ...data, id: o.id, cod: o.cod });
      PMSG = `${o.cod} actualizado.`;
    } else {
      const c = PF.cli || defCli(),
        cod = nextCod(PF.tipo, c);
      S.aseq[seqK(c, PF.tipo)] = seqOfC(c, PF.tipo) + 1;
      data.cli = c;
      const id = 'A' + Date.now().toString(36);
      S.prints.push({ ...data, id, cod });
      PF = blankPF(PF.tipo);
      PF.cli = c;
      PMSG = `${cod} ${plabel({ ref, nombre })} creado.`;
    }
    if (rp) PMSG += ` Ojo: el código cliente ${ref} ya lo usa otro arte.`;
    PERR = false;
    save();
    renderPrn();
    return;
  }
  /* reporte */
  if (b.dataset.delg !== undefined) {
    ctP().groups.splice(+b.dataset.delg, 1);
    ctP().groups.forEach((g, i) => (g.id = 'T' + (i + 1)));
    S.os = null;
    save();
    renderRep();
    return;
  }
  if (b.dataset.tpr) {
    const [id, c] = b.dataset.tpr.split('|'),
      tl = talById(id);
    tl.procs = tl.procs.includes(c) ? tl.procs.filter((x) => x !== c) : [...tl.procs, c];
    save();
    renderTal();
    return;
  }
  if (b.dataset.tview !== undefined) {
    S.tview = b.dataset.tview || null;
    save();
    renderTal();
    if (S.tview)
      setTimeout(
        () => document.querySelector('.targ')?.scrollIntoView({ behavior: 'smooth' }),
        50,
      );
    return;
  }
  if (b.dataset.aadd) {
    const k = b.dataset.aadd,
      [pe, mid] = k.split('|'),
      m = MOLDES.find((x) => x.id === mid),
      ops = artOpsOf(pe, m),
      L = (S.arts[k] = S.arts[k] || []);
    const op = ops.find((o) => !L.some((a) => a.op === o)) || ops[0];
    L.push({ op, id: '', q: 1 });
    save();
    renderArt();
    return;
  }
  if (b.dataset.adel) {
    const [pe, mid, i] = b.dataset.adel.split('|');
    S.arts[pe + '|' + mid].splice(+i, 1);
    save();
    renderArt();
    return;
  }
  if (b.dataset.cadd !== undefined) {
    PF.cons = PF.cons || [];
    PF.cons.push({ ins: '', items: [{ sku: '', cons: '' }] });
    renderPrn();
    setTimeout(() => {
      const x = document.querySelector(`[data-pkavio="${PF.cons.length - 1}"]`);
      if (x) x.click();
    });
    return;
  }
  if (b.dataset.cdelx !== undefined) {
    PF.cons.splice(+b.dataset.cdelx, 1);
    renderPrn();
    return;
  }
  if (b.dataset.tt) {
    TT = b.dataset.tt;
    TE = {};
    TMS = '';
    renderTel();
    return;
  }
  if (b.id === 'te-add') {
    const nid = (a) => Math.max(0, ...a.map((x) => x.id)) + 1;
    if (TT === 'est') {
      const c = (TE.c || '').trim().toUpperCase(),
        d = (TE.d || '').trim();
      if (!c || !d) {
        TMS = 'Código y descripción son obligatorios.';
        return renderTel();
      }
      if (S.est.some((x) => x.c === c)) {
        TMS = 'El código ' + c + ' ya existe.';
        return renderTel();
      }
      S.est.push({ id: nid(S.est), c, d, moq: (TE.moq || '').trim() });
      TMS = '✓ Estructura ' + c + ' registrada.';
    } else if (TT === 'col') {
      const c = (TE.c || '').trim().toUpperCase(),
        d = (TE.d || '').trim();
      if (!c || !d) {
        TMS = 'Código y descripción son obligatorios.';
        return renderTel();
      }
      if (S.col.some((x) => x.c === c)) {
        TMS = 'El código ' + c + ' ya existe.';
        return renderTel();
      }
      S.col.push({ id: nid(S.col), c, d, h: TE.h || '#FFFFFF' });
      TMS = '✓ Color ' + c + ' registrado.';
    } else {
      const e = +TE.e,
        c = +TE.c;
      if (!e || !c) {
        TMS = 'Elige estructura y color.';
        return renderTel();
      }
      if (S.tela.some((x) => x.e === e && x.c === c)) {
        TMS = 'Esa tela ya existe.';
        return renderTel();
      }
      S.tela.push({ id: nid(S.tela), e, c });
      TMS = '✓ Tela ' + E_(e).c + ' · ' + C_(c).c + ' registrada.';
    }
    TE = {};
    save();
    renderTel();
    return;
  }
  if (b.dataset.mdel) {
    const [tb, id] = b.dataset.mdel.split('|'),
      n = +id;
    const usedT = (tid) =>
      S.progs.some((pg) =>
        Object.values(pg.asg).some((a) =>
          Object.values(a).some((o) => Object.values(o).some((v) => v.tid === tid)),
        ),
      );
    if (tb === 'est' && S.tela.some((t) => t.e === n)) {
      toast('La estructura tiene telas; elimínalas primero');
      return;
    }
    if (tb === 'col' && S.tela.some((t) => t.c === n)) {
      toast('El color tiene telas; elimínalas primero');
      return;
    }
    if (tb === 'tela' && usedT(n)) {
      toast('La tela está asignada en combos; no se puede eliminar');
      return;
    }
    S[tb] = S[tb].filter((x) => x.id !== n);
    save();
    renderTel();
    return;
  }
  if (b.id === 'nt-add') {
    const nom = TF.nom.trim(),
      rs = TF.rs.trim().toUpperCase(),
      ruc = TF.ruc.trim();
    if (!nom || !rs) {
      TMSG = 'Nombre y razón social son obligatorios.';
      renderTal();
      return;
    }
    if (!/^(10|20)\d{9}$/.test(ruc)) {
      TMSG = 'RUC inválido: 11 dígitos, empieza con 10 o 20.';
      renderTal();
      return;
    }
    if (S.talleres.some((t) => t.ruc === ruc)) {
      TMSG = 'Ese RUC ya está registrado.';
      renderTal();
      return;
    }
    let id =
      nom
        .toUpperCase()
        .replace(/^TALLER\s+/, '')
        .replace(/[^A-Z0-9]/g, '')
        .slice(0, 12) || 'T';
    while (talById(id)) id += '2';
    S.talleres.push({
      id,
      nom,
      tipo: TF.tipo,
      rs,
      ruc,
      zona: TF.zona.trim(),
      tel: TF.tel.trim(),
      precios: {},
      procs: [],
    });
    TF = { nom: '', tipo: 'Costura', rs: '', ruc: '', zona: '', tel: '' };
    TMSG = '✓ ' + nom + ' registrado.';
    save();
    renderTal();
    return;
  }
  if (b.dataset.tdel) {
    const t = talById(b.dataset.tdel);
    if (Object.values(S.as || {}).some((o) => Object.values(o || {}).includes(t.id))) {
      toast(t.nom + ' tiene estilos asignados; quítalos antes', true);
      return;
    }
    if (!(await confirmar('¿Eliminar ' + t.nom + '?', 'Eliminar'))) return;
    S.talleres = S.talleres.filter((x) => x !== t);
    save();
    renderTal();
    return;
  }
  if (b.id === 'addg') {
    const used = ctP().groups.map((g) => g.tid),
      f = S.talleres.find((t) => t.tipo === 'Costura' && !used.includes(t.id));
    ctP().groups.push({ id: 'T' + (ctP().groups.length + 1), tid: f ? f.id : '', pes: [] });
    save();
    renderRep();
    return;
  }
  if (b.dataset.opchip) {
    S.chip = b.dataset.opchip;
    S.os = null;
    save();
    renderRep();
    return;
  }
  if (b.dataset.ostal) {
    S.os = b.dataset.ostal;
    renderRep();
    document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (b.id === 'os-close') {
    S.os = null;
    renderRep();
    return;
  }
  if (b.dataset.pk) {
    S.act = b.dataset.pk;
    save();
    renderCards();
    renderPreview();
    document
      .querySelector('.card.on')
      ?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
    return;
  }
  if (b.id === 'cprev' || b.id === 'cnext') {
    ct$('carousel').scrollBy({ left: (b.id === 'cnext' ? 1 : -1) * 480, behavior: 'smooth' });
    return;
  }
  if (b.id === 'call') {
    ctP().out = [];
    save();
    renderRep();
    return;
  }
  if (b.id === 'cnone') {
    ctP().out = allPages().map((p) => p.key);
    save();
    renderRep();
    return;
  }
  if (b.id === 'print') {
    if (!S.os) {
      toast('Abre la orden de servicio de un taller');
      return;
    }
    window.print();
    return;
  }
});
document.addEventListener('keydown', (e) => {
  if (e.target.id === 'q' && e.key === 'Enter') {
    document.querySelector('#mlist button')?.click();
  }
});

/* ===== Carga y API del módulo ===== */
function subirImg(src, nombre) {
  return new Promise((ok, ko) => {
    toast('Subiendo imagen a Drive…');
    google.script.run
      .withSuccessHandler(ok)
      .withFailureHandler((err) => {
        toast('No se pudo subir la imagen: ' + ((err && err.message) || err), true);
        ko(err);
      })
      .subirImagen(src, nombre);
  });
}
function cargar(refrescar) {
  /* dos llamadas en paralelo: plan de ventas y datos guardados; si una falla se sabe cuál */
  const llamar = (fn, arg) =>
    new Promise((ok, ko) => google.script.run.withSuccessHandler(ok).withFailureHandler((e) => ko(new Error(fn + ': ' + ((e && e.message) || e))))[fn](arg));
  return Promise.all([llamar('getCombosPlan', !!refrescar), llamar('getCombosEstado')])
    .then(([rp, re]) => {
      const D = Object.assign(JSON.parse(rp), JSON.parse(re));
      buildData(D);
      cargarEstado(D.estado || []);
      LOADED = true;
      if (SEEDED) save();
      else Shell.sync('Guardado ✓', 'ok');
      return true;
    })
    .catch((err) => {
      ct$('content').innerHTML = `<div class="empty">No se pudo cargar Combos · ${ctEsc((err && err.message) || err)}</div>`;
      return false;
    });
}
let carga = null;
function ensure() {
  if (LOADED) return Promise.resolve(true);
  if (!carga) {
    ct$('content').innerHTML =
      '<div class="empty">Cargando programas, moldes y tallas de PLAN DE VENTAS…</div>';
    carga = cargar(false).then((ok) => {
      if (!ok) carga = null;
      return ok;
    });
  }
  return carga;
}
async function recargar() {
  if (pend || saving) {
    toast('Espera a que termine de guardar y vuelve a intentar.', true);
    return;
  }
  const tab = S.tab;
  ct$('content').innerHTML = '<div class="empty">Actualizando desde PLAN DE VENTAS…</div>';
  if (await cargar(true)) {
    S.tab = tab;
    ctRender();
    toast('Programas y combos actualizados.');
  }
}
const CT = {
  async show(tab) {
    if (!(await ensure())) return;
    S.tab = tab;
    if (tab === 'cmb' && !ctP()) S.tab = 'prg';
    saveUI();
    ctRender();
  },
  recargar,
  _estado: () => ({ S, PF, MOLDES }),
};
/* fin JsCombos4 */
window.__ctPartes = (window.__ctPartes || 0) + 1; (window.__ctOK = window.__ctOK || {})[4] = 1;

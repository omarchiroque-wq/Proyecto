#!/usr/bin/env bash
# build-combos.sh — Regenera src/CodigoCombos1..4.js desde src_combos/combos.js
#
# El fuente es UN archivo con 4 partes. Cada parte empieza con su cabecera
#   /* JsCombosN · parte N de 4 ... */
# y termina con su contador
#   window.__ctPartes = ... [N] = 1;
# El navegador ejecuta cada parte como <script> separado: un corte no puede caer
# a mitad de una función o sentencia. El build valida eso con `node --check` por parte.
#
# Uso:
#   ./build-combos.sh           regenera los 4 trozos
#   ./build-combos.sh --check   no escribe; falla si los trozos no coinciden con el fuente
#                               (úsalo antes de clasp push)
set -euo pipefail
cd "$(dirname "$0")"

command -v node >/dev/null || { echo "Falta node (el mismo que usa clasp)." >&2; exit 1; }

MODE="${1:-build}"
SRC="src_combos/combos.js"
OUT="src"
[[ -f "$SRC" ]] || { echo "No existe $SRC" >&2; exit 1; }

node - "$SRC" "$OUT" "$MODE" <<'NODE'
const fs = require('fs'), path = require('path'), crypto = require('crypto'), os = require('os');
const { execFileSync } = require('child_process');
const [src, out, mode] = process.argv.slice(2);
const N = 4, ANCHO = 1500;   // 4 partes (Combos.js las espera fijas); 1500 chars base64 por línea
const fail = m => { console.error('ERROR: ' + m); process.exit(1); };

const buf = fs.readFileSync(src);
if (buf.includes(0x0d)) fail(src + ' tiene saltos de línea CRLF; guárdalo con LF.');
const txt = buf.toString('utf8');

// Cortes en las cabeceras "/* JsCombosN · parte N de 4"
const re = /^\/\* JsCombos(\d+) · parte (\d+) de (\d+)/gm;
const marcas = [...txt.matchAll(re)];
if (marcas.length !== N) fail(`Se esperaban ${N} cabeceras "/* JsCombosN · parte N de ${N}", hay ${marcas.length}.`);
if (marcas[0].index !== 0) fail('El archivo debe empezar con la cabecera de la parte 1.');
marcas.forEach((m, i) => {
  if (+m[1] !== i + 1 || +m[2] !== i + 1 || +m[3] !== N) fail(`Cabecera fuera de orden en la posición ${i + 1}: "${m[0]}".`);
});

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'combos-'));
let difiere = [], escribir = [];
try {
  marcas.forEach((m, i) => {
    const n = i + 1;
    const parte = txt.slice(m.index, i + 1 < N ? marcas[i + 1].index : txt.length);
    const pie = `(window.__ctOK = window.__ctOK || {})[${n}] = 1;`;
    if (!parte.trimEnd().endsWith(pie)) fail(`La parte ${n} debe terminar con: window.__ctPartes = (window.__ctPartes || 0) + 1; ${pie}`);

    // Cada parte debe ser JS válido por sí sola
    const f = path.join(tmp, `parte${n}.js`);
    fs.writeFileSync(f, parte);
    try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); }
    catch (e) {
      const inicio = txt.slice(0, m.index).split('\n').length - 1;   // líneas antes de esta parte
      const err = String(e.stderr || e.message).replace(f + ':', '').trim().split('\n');
      const ln = parseInt(err[0], 10);
      fail(`Parte ${n} no compila sola` + (ln ? ` (≈ línea ${inicio + ln} de ${src})` : '') + ':\n' +
           err.filter(l => /Error/.test(l))[0] + '\nRevisa llaves/paréntesis sin cerrar. No se escribió ningún trozo.');
    }

    const bytes = Buffer.from(parte, 'utf8');
    const b64 = bytes.toString('base64');
    const huella = crypto.createHash('md5').update(bytes).digest('hex').slice(0, 10);
    const lineas = b64.match(new RegExp(`.{1,${ANCHO}}`, 'g')).map(l => `'${l}'`).join(',\n');
    const gs =
`/**
 * CodigoCombos${n}.gs — parte ${n} de ${N} del JS del módulo Combos textil, en base64.
 * GENERADO: no editar a mano. Fuente: src_combos/combos.js → ./build-combos.sh
 * La app lo descarga con getCodigoCombos() y lo ejecuta en el navegador.
 * Bytes originales: ${bytes.length} · huella: ${huella}
 */
var COMBOS_JS_${n}_BYTES = ${bytes.length};
var COMBOS_JS_${n} = [
${lineas}
].join('');`;

    const destino = path.join(out, `CodigoCombos${n}.js`);
    const actual = fs.existsSync(destino) ? fs.readFileSync(destino, 'utf8') : null;
    if (mode === '--check') {
      if (actual !== gs) difiere.push(destino);
    } else {
      escribir.push({ destino, gs, igual: actual === gs, info: `${bytes.length} bytes · ${huella}` });
    }
  });
  // Solo se escribe si las 4 partes pasaron la validación
  escribir.forEach(w => {
    if (!w.igual) fs.writeFileSync(w.destino, w.gs);
    console.log(`  ${w.igual ? '=' : '✓'} ${w.destino}  ${w.info}${w.igual ? ' (sin cambios)' : ''}`);
  });
} finally { fs.rmSync(tmp, { recursive: true, force: true }); }

if (mode === '--check') {
  if (difiere.length) fail('Trozos desactualizados respecto a ' + src + ': ' + difiere.join(', ') + '\nCorre ./build-combos.sh');
  console.log('OK: los 4 trozos coinciden con ' + src);
}
NODE

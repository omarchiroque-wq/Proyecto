# NUNA COTTON · Consumos y Avíos — Apps Script

Web app Apps Script (v4.0.0) vinculada al Sheet "NUNA · CONSUMOS Y AVÍOS": almacén de avíos (kardex, reservas,
BOM por estilo) + módulo Combos textil. Responde en español; el código y los comentarios del proyecto están en español.

## Reglas no negociables

- **Antes de codificar, proponer un plan y esperar el OK de Omar.** Plan corto: qué archivos se tocan, qué cambia y el
  riesgo principal. No editar código hasta recibir el OK explícito. Leer, buscar y correr lint/typecheck sí se puede.
- **Nunca hacer deploy.** Prohibido `clasp deploy`, `clasp redeploy`, `clasp undeploy`, `clasp version` o crear/editar
  implementaciones. Las implementaciones las gestiona Omar.
- **`clasp push` solo cuando Omar lo pida explícitamente**, y es el único comando que sube código (usar `npm run push`,
  que verifica antes los trozos de Combos). Un OK al plan no autoriza el push.
- **PLAN DE VENTAS es de solo lectura** (`PLAN_ID` en `src/Code.js`). Nunca escribir, borrar, formatear ni crear hojas
  en ese Spreadsheet: solo `getValues`/lecturas. Todo lo que se escribe va al Sheet propio de la app.
- **Combos se edita solo en el fuente.** El JS de Combos vive en `src_combos/combos.js`. `src/CodigoCombos1..4.js`
  son generados (base64): no editarlos a mano. Tras cambiar el fuente, correr `./build-combos.sh` y commitear fuente + trozos.
- **No hacer `clasp pull` sobre cambios locales sin commitear**: pisa `src/` sin preguntar.

## Plataforma

- Runtime **V8** (`src/appsscript.json`), zona horaria **America/Lima**. Fechas con
  `Utilities.formatDate(d, 'America/Lima', ...)`; no depender de la zona del navegador ni de UTC.
- `rootDir` de clasp = `src/`. Solo `src/` se sube. Al editar `.claspignore` recordar que **reemplaza** las reglas
  por defecto de clasp (por eso repite la lista blanca de extensiones).
- Todos los `.js` de `src/` comparten un único scope global (así funciona Apps Script): no hay `import`/`export`,
  y los nombres top-level no pueden repetirse entre archivos.

## Estructura: .gs y .html separados

- **Servidor** (`src/*.js` = `.gs` en el editor): `Code.js` (avíos), `Combos.js` (backend Combos),
  `CodigoCombos1..4.js` (generados).
- **Cliente** (`src/*.html`): `Index.html` arma la página con `include()`; CSS en `Css*.html`, JS en `Js*.html`.
  No mezclar lógica de servidor en los `.html` ni HTML/CSS dentro de los `.js`.
- El cliente llama al servidor solo con `google.script.run`. Funciones privadas del servidor terminan en `_`
  (no invocables desde el cliente); las públicas son la API de la app.
- Combos se carga en diferido: `getCodigoCombos()` envía las 4 partes en base64; `JsComun.html` las decodifica,
  verifica bytes y ejecuta cada una como `<script>` separado.

## Combos: reglas del fuente (`src_combos/combos.js`)

- 4 partes, en orden. Cada una empieza con `/* JsCombosN · parte N de 4 ... */` y termina con
  `window.__ctPartes = ...; (window.__ctOK = ...)[N] = 1;`.
- Cada parte debe compilar sola (se ejecuta como script independiente): ninguna función o bloque cruza el corte.
- Siguen siendo 4 partes fijas (`Combos.js` las espera así). Si una crece demasiado, mover código a la vecina.

## Comandos

```bash
npm run lint            # ESLint (no-undef lo cubre typecheck)
npm run typecheck       # tsc sobre src/ (tipos GAS) y src_combos/ (DOM)
npm run format:check    # Prettier, sin escribir
./build-combos.sh       # regenera src/CodigoCombos1..4.js
npm run push            # build-combos --check + clasp push — SOLO si Omar lo pide
```

- `app.js`, `index.html` y `styles.css` en la raíz son el "Hub Comercial", otra app estática: no son parte del
  Apps Script ni se suben con clasp.
- No reformatear archivos enteros con Prettier sin que se pida: ensucia el diff.

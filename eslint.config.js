// ESLint (flat config). Los nombres no definidos los revisa TypeScript (npm run typecheck),
// que sí ve todos los archivos de src/ juntos como Apps Script; ESLint analiza archivo por archivo.
const js = require('@eslint/js');
const globals = require('globals');

const comunes = {
  'no-undef': 'off',
  // En Apps Script lo top-level es global (doGet, funciones llamadas por google.script.run): no es "sin uso".
  'no-unused-vars': ['error', { vars: 'local', args: 'after-used', caughtErrors: 'none' }],
};

module.exports = [
  {
    ignores: ['node_modules/**', '.claude/**', 'src/CodigoCombos*.js'],  // CodigoCombos*: generados por build-combos.sh
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { ecmaVersion: 2020, sourceType: 'script', globals: {} },
    rules: comunes,
  },
  {
    files: ['src_combos/**/*.js', 'app.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'script', globals: { ...globals.browser, google: 'readonly' } },
    rules: comunes,
  },
  {
    files: ['eslint.config.js'],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
  },
];

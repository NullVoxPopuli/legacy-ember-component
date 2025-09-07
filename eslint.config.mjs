import { configs } from '@nullvoxpopuli/eslint-configs';

// accommodates: JS, TS, App, Addon, and V2 Addon
export default [
  ...configs.ember(import.meta.dirname),
  {
    name: 'local overrides',
    files: ['**/*'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'ember/classic-decorator-hooks': 'off',
      'ember/no-runloop': 'off',
    },
  },
];

import astroPlugin from 'eslint-plugin-astro';

import sharedConfig from '../../configs/eslint/eslint.config.mjs';

export default [
  ...sharedConfig,
  {
    files: ['**/*.astro'], // Astro files
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
    },
    plugins: {
      astro: astroPlugin,
    },
    processor: astroPlugin.processors['.astro'],
    rules: {
      'astro/no-set-html-directive': 'warn',
    },
  },
  {
    files: ['**/*.mjs'], // Target .mjs files, including astro.config.mjs
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        project: null, // Disable TypeScript project checking for .mjs files
      },
    },
    rules: {
      'no-console': 'off', // Adjust rules as needed for config files
      'no-unused-vars': 'off', // Useful for dynamic imports and unused parameters
    },
  },
];

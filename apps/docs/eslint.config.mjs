import astroPlugin from 'eslint-plugin-astro';

import sharedConfig from '../../configs/eslint/eslint.config.mjs';

export default [
  ...sharedConfig, // Use shared ESLint configuration
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
    files: ['astro.config.mjs', 'eslint.config.mjs'], // Target .mjs config files
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        project: null, // Disable TypeScript project checking
      },
    },
    rules: {
      // Add any additional rules for .mjs files if necessary
    },
  },
];

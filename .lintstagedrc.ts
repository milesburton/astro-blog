import { type Config } from 'lint-staged';

const config: Config = {
  // Run type check on all staged TypeScript files
  '*.{ts,tsx}': () => 'pnpm type-check',
  
  // Lint and format TypeScript/JavaScript files
  '*.{js,jsx,ts,tsx}': [
    'pnpm eslint --fix',
    'pnpm prettier --write'
  ],
  
  // Format other files
  '*.{md,mdx,json}': [
    'pnpm prettier --write'
  ]
};

export default config;
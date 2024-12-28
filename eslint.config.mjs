import sharedConfig from "./configs/eslint/eslint.config.mjs";

export default [
  ...sharedConfig, // Use shared config as the base
  {
    files: ["apps/docs/**/*.{ts,tsx,astro}"], // Add specific rules for Astro or subprojects
    rules: {
      "astro/no-set-html-directive": "warn", // Example of Astro-specific rule
    },
  },
];

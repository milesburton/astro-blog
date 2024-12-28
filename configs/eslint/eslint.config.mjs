import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";

export default [
  {
    languageOptions: {
      ecmaVersion: 2023, // Modern JavaScript features
      sourceType: "module", // Enable ECMAScript modules
      parser: tsParser, // Use the imported TypeScript parser directly
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    rules: {
      // General Rules
      "no-console": "warn",

      // TypeScript-Specific Rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // Prettier Rules
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
          semi: true,
          printWidth: 80,
          tabWidth: 2,
        },
      ],

      // Import Rules
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
  },
];

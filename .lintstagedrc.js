module.exports = {
  "*.{ts,tsx}": () => "pnpm type-check",
  "*.{js,jsx,ts,tsx}": ["pnpm eslint --fix", "pnpm prettier --write"],
  "*.{md,mdx,json}": ["pnpm prettier --write"],
};

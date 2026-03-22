import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "legacy-src/**",
      "legacy-archive-root/**",
      "public/**",
      "coverage/**"
    ]
  }
];

export default config;

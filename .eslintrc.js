{
  "root": true,
  "ignorePatterns": ["node_modules/**/*"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  "env": {
    "node": true,
    "jest": true
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "no-duplicate-imports": 1,
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/ban-ts-comment": ["off", { "ts-ignore": "off" }]
      }
    }
  ]
}

module.exports = {
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "import/no-extraneous-dependencies": [
          error,
          {
            devDependencies: ["**/*.spec.*", "**/webpack.js"]
          }
        ]
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "react/default-props-match-prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-wrap-multilines": 2,
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/function-component-definition": "off",
        "no-param-reassign": [
          "error",
          {
            "props": false
          }
        ],
        "@typescript-eslint/comma-dangle": [
          "error",
          {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
          }
        ],
        "import/prefer-default-export": "off"
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks"
      ],
      "rules": {
        "react/jsx-wrap-multilines": 2,
        "no-param-reassign": [
          "error",
          {
            "props": false
          }
        ],
        "comma-dangle": [
          "error",
          {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
          }
        ],
        "import/prefer-default-export": "off"
      }
    },
    {
      "files": "*.json",
      "parser": "jsonc-eslint-parser",
      "rules": {}
    }
  ]
}

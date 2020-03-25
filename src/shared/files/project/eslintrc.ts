#!/usr/bin/env node

module.exports = () => {
  return `{
  "extends": ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:jsx-a11y/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "spread": true,
      "restParams": true,
      "legacyDecorators": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
    "max-len": [1, 120, 2],
    "quotes": 0,
    "semi": 1,
    "strict": 0,
    "require-jsdoc": 0,
    "global-require": 0,
    "skipBlankLines": 0,
    "func-call-spacing": ["error", "never"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "multiline-ternary": 0,
    "one-var": ["error", { "initialized": "never" }],
    "guard-for-in": 0,
    "no-invalid-this": 0,
    "eqeqeq": [1, "smart"],
    "no-var": 2,
    "no-alert": 2,
    "no-console": 2,
    "no-debugger": 2,
    "no-return-await": 2,
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "array-bracket-spacing": [
      0,
      "never",
      {
        "objectsInArrays": false
      }
    ],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }]
  }
}  
`;
};

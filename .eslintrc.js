/*
 * @Author: objectivezt
 * @Date: 2021-02-16 17:47:42
 * @Last Modified by: objectivezt
 * @Last Modified time: 2021-02-16 21:03:31
 */
const NORMAL_MODE = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin: react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    },
    ecmaVersion: 2018,
    sourceType:'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-extra-boolean-cast': 0,
    'react/no-deprecated': 0
  }
};

const STRICT_MODE = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    // append in 20210216
    'airbnb-typescript',
    'prettier/@typescript-eslint',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  plugins: [
    'react',
    'jest',
    'prettier',
    'jsx-a11y',
    'import',
    // append in 20210216
    '@typescript-eslint',
    'eslint-comments',
    'unicorn',
    'react-hooks',
  ],
  // append in 20210216
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  rules: {
    'array-callback-return': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'generator-star-spacing': 0,
    'global-require': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-default-export': [0, 'camel-case'],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^@/',
          '^@assets/',
          '^@common/',
          '^@components/',
          '^@containers/',
          '^@layouts/',
          '^@models/',
          '^@services/',
          '^@styles/',
          '^@utils/',
        ],
      },
    ],
    'import/order': 1,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'no-else-return': 0,
    'no-extra-boolean-cast': 0,
    'no-param-reassign': 1,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-useless-escape': 0,
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'prettier/prettier': 2,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-fragments': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-deprecated': 0,
    'react/prop-types': 0,
    'react/sort-comp': 1,
    'react/static-property-placement': 0,
    'space-before-function-paren': 0,
    'unicorn/prevent-abbreviations': 0,


    // append 20200216
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    'eslint-comments/no-unlimited-disable': 1,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
  },
};

const { LINT_CONFIG } = process.env

module.exports = LINT_CONFIG === 'STRICT_MODE' ? STRICT_MODE : NORMAL_MODE;

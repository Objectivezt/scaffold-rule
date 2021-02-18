/*
 * @Author: objectivezt
 * @Date: 2021-02-16 17:47:42
 * @Last Modified by: objectivezt
 * @Last Modified time: 2021-02-17 14:26:29
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
    // append in 20210217
    'plugin:jsdoc/recommended',
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
    // append in 20210217
    'jsdoc'
  ],
  // append in 20210216
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  rules: {
    // reference umi
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

    /**
     * ---------圈复杂度-----------
     */
    complexity: [
        'warn',
        { max: 20 }
    ],

    /**
     * ---------JSDOC-----------
     */
    // 检测无效的填充块
    'jsdoc/check-indentation': 1,
    // *号必须按标准对齐
    "jsdoc/check-alignment": 1,
    // 检测example中的js代码是否符合eslint规则
    "jsdoc/check-examples": 1,
    // 检测无效的填充块
    "jsdoc/check-indentation": 1,
    // 检测param的名称是否与函数中的参数名称一致
    "jsdoc/check-param-names": 1,
    "jsdoc/check-syntax": 1,
    // 检测块标记名称是否正确，例如@paramsss是错误的
    "jsdoc/check-tag-names": 1,
    // 检测参数类型是否正确，例如{object},可自动修复大小写
    "jsdoc/check-types": 1,
    "jsdoc/implements-on-classes": 1,
    // 通过正则表达式限制描述的内容
    // 比如限制只能使用英文，首字母大写等场景
    "jsdoc/match-description": 1,
    // 强制描述的内容后面必须有一个空行，也可以配置没有
    "jsdoc/newline-after-description": 1,
    "jsdoc/no-types": 1,
    // 不允许出现未定义的参数类型，例如{strrrrr}
    "jsdoc/no-undefined-types": 1,
    // 要求所有函数都要有描述
    "jsdoc/require-description": 1,
    // 要求完整的标记，例如描述必须使用@description，而不是直接文字描述
    "jsdoc/require-description-complete-sentence": 1,
    // 要求所有函数必须要有example
    "jsdoc/require-example": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    // 检查类声明和函数上是否有jsdoc注释
    "jsdoc/require-jsdoc": 1,
    // 要求函数所有参数写param
    "jsdoc/require-param": 1,
    "jsdoc/require-param-description": 1,
    // 要求每个@param标签都要有description
    "jsdoc/require-param-name": 1,
    // 要求每一个@param标签都要有type类型参数
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns": 1,
    // 当使用@returns后，检测函数中是否有符合条件的返回值
    "jsdoc/require-returns-check": 1,
    // @returns必须要有description
    "jsdoc/require-returns-description": 1,
    // @returns必须要有返回类型参数
    "jsdoc/require-returns-type": 1,
    // 验证类型的有效性
    "jsdoc/valid-types": 1
  },
};

const { LINT_CONFIG } = process.env

module.exports = LINT_CONFIG === 'STRICT_MODE' ? STRICT_MODE : NORMAL_MODE;

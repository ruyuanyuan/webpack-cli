// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    es6: true,
    worker: true,
    commonjs: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['typescript'],
  rules: {
    'no-console': "warn", 
    'no-debugger': "warn", 
    eqeqeq: ['error', 'always'], // 强等于
    semi: ['error', 'never'], // 不加引号
    quotes: ['error', 'single'],
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'never',
      },
    ],
  },
};

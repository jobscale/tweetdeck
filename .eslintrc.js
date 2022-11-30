// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.config.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    indent: ['error', 2, { MemberExpression: 0 }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-parens': 'off',
    'no-return-assign': 'off',
    'no-plusplus': 'off',
    'no-confusing-arrow': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'import/prefer-default-export': 'off',
    'no-bitwise': ['error', { 'int32Hint': true }],
  },
};

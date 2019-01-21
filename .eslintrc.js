module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  extends: 'airbnb-base',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
};

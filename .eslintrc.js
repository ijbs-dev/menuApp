module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['module:metro-react-native-babel-preset'],
    },
  },
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};

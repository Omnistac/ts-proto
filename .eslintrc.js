module.exports = {
  root: true,
  extends: ['airbnb-typescript/base', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-shadow': 'warn',

    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    
    'max-len': ['error', { code: 120 }],
    
    'no-bitwise': 'off',
  },
};

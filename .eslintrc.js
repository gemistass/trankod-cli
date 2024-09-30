module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
    },
};

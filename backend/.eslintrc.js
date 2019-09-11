module.exports = {
    env: {
        node: true,
        es6: true
    },
    extends: ['airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        camelcase: 'off',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-console': ['off'],
        'no-unused-vars': ['error', { argsIgnorePattern: '^(_|next)$' }],
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off'
    }
};

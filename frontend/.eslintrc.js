module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        camelcase: 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
        'import/prefer-default-export': 'off',
        'no-console': ['error', { allow: ['tron'] }],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off'
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src'
            }
        }
    }
};

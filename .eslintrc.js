module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:mdx/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['import', 'react', 'react-hooks'],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['external', 'internal'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'import/no-unresolved': ['error'],
        'jsx-a11y/anchor-is-valid': 'off',
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/no-array-index-key': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-multi-comp': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/jsx-sort-props': ['error', { callbacksLast: true }],
        'react/jsx-wrap-multilines': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'sort-imports': [
            'warn',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
    },
}

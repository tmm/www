module.exports = {
    parser: 'babel-eslint',
    extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:mdx/recommended',
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
        'import/no-unresolved': ['error', { ignore: ['^@/'] }],
        'jsx-a11y/anchor-is-valid': 'off',
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/no-array-index-key': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-multi-comp': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
            },
        ],
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
    overrides: [
        {
            files: ['*.md'],
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'markdown',
                    },
                ],
            },
        },
        {
            files: ['*.mdx'],
            extends: ['plugin:mdx/overrides'],
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
}

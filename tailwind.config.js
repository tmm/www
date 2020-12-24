module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        extend: {
            borderColor: (theme) => ({
                ...theme('colors'),
                DEFAULT: theme('colors.border', 'currentColor'),
            }),
            borderRadius: {
                lg: '0.44rem',
            },
            colors: {
                background: 'var(--color-background)',
                body: 'var(--color-body)',
                border: 'var(--color-border)',
                fill: 'var(--color-fill)',
                mark: 'var(--color-mark)',
                muted: 'var(--color-muted)',
                transparent: 'transparent',
            },
            fontFamily: {
                mono: 'var(--font-mono)',
                sans: 'var(--font-sans)',
                serif: 'var(--font-serif)',
            },
            listStyleType: {
                square: 'square',
            },
            maxWidth: {
                container: '35.5rem',
                subscribe: '22.25rem',
            },
        },
    },
    variants: {
        outline: ['focus-within'],
    },
}

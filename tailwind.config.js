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
                heading: 'var(--color-heading)',
                muted: 'var(--color-muted)',
                transparent: 'transparent',
            },
            fontFamily: {
                mono: 'var(--font-mono)',
                sans: 'var(--font-sans)',
            },
            listStyleType: {
                square: 'square',
            },
            maxWidth: {
                container: '35.5rem',
                subscribe: '22rem',
            },
            screens: {
                print: { raw: 'print' },
            },
        },
    },
    variants: {
        extend: {
            outline: ['focus-within'],
            padding: ['hover'],
        },
    },
}

module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        extend: {
            borderColor: (theme) => ({
                ...theme('colors'),
                DEFAULT: theme('colors.border', 'currentColor'),
            }),
            colors: {
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                body: 'var(--color-body)',
                border: 'var(--color-border)',
                fill: 'var(--color-fill)',
                heading: 'var(--color-heading)',
                muted: 'var(--color-muted)',
                shadow: 'var(--color-shadow)',
                transparent: 'transparent',
            },
            fontFamily: {
                sans: 'var(--font-sans)',
                mono: 'var(--font-mono)',
            },
            listStyleType: {
                square: 'square',
            },
            maxWidth: {
                8: '2rem',
            },
        },
    },
    variants: {
        opacity: ({ after }) => after(['focus-within']),
    },
}

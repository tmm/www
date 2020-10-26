module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        extend: {
            borderColor: (theme) => ({
                ...theme('colors'),
                default: theme('colors.border', 'currentColor'),
            }),
            colors: {
                accent: 'var(--colors-accent)',
                background: 'var(--colors-background)',
                border: 'var(--colors-border)',
                heading: 'var(--colors-heading)',
                body: 'var(--colors-body)',
                fill: 'var(--colors-fill)',
                muted: 'var(--colors-muted)',
                shadow: 'var(--colors-shadow)',
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
                item: '5rem',
            },
        },
    },
    variants: {
        opacity: ({ after }) => after(['focus-within']),
    },
}

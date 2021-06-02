module.exports = {
    mode: 'jit',
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',
                selection: 'var(--color-selection)',
                gray: {
                    5: 'var(--color-gray-5)',
                    10: 'var(--color-gray-10)',
                    20: 'var(--color-gray-20)',
                    30: 'var(--color-gray-30)',
                    40: 'var(--color-gray-40)',
                    50: 'var(--color-gray-50)',
                    60: 'var(--color-gray-60)',
                    70: 'var(--color-gray-70)',
                    80: 'var(--color-gray-80)',
                    90: 'var(--color-gray-90)',
                },
            },
            fontFamily: {
                display: 'var(--font-display)',
                sans: 'var(--font-sans)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

import { useTheme } from 'next-themes'

export const ThemeButton: React.FC = () => {
    const { theme, themes, setTheme } = useTheme()

    function changeTheme() {
        const index = themes.findIndex((x) => x === theme)
        const nextTheme =
            index === themes.length - 1 ? themes[0] : themes[index + 1]
        setTheme(nextTheme)
    }

    return (
        <button
            className="hidden leading-tight no-link hover:text-accent"
            onClick={changeTheme}
        >
            <svg className="h-4 w-4" fill="currentcolor" viewBox="0 0 32 32">
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    stroke="currentcolor"
                    strokeWidth="4"
                />
                <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
            </svg>
        </button>
    )
}

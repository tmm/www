import { useTheme } from 'next-themes'

import { Link } from './link'

export const Nav: React.FC = () => {
    const { theme, themes, setTheme } = useTheme()

    function changeTheme() {
        const index = themes.findIndex((x) => x === theme)
        const nextTheme =
            index === themes.length - 1 ? themes[0] : themes[index + 1]
        setTheme(nextTheme)
    }

    return (
        <nav className="flex justify-between items-center mt-10 text-sm text-muted">
            <section className="font-medium space-x-3">
                <Link className="no-link" href="/">
                    Home
                </Link>
                <Link className="no-link" href="/archive">
                    Archive
                </Link>
                <Link className="no-link" href="/about">
                    About
                </Link>
                <Link className="no-link" href="/about">
                    Email
                </Link>
                <Link className="no-link" href="/about">
                    Twitter
                </Link>
                <Link className="no-link" external href="/rss.xml">
                    RSS
                </Link>
            </section>

            <button
                className="leading-tight no-link hover:text-accent"
                onClick={changeTheme}
            >
                <svg
                    className="h-4 w-4"
                    fill="currentcolor"
                    viewBox="0 0 32 32"
                >
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
        </nav>
    )
}

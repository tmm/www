import { useTheme } from 'next-themes'

import Link from './link'

type Props = {}

const Footer: React.FC<Props> = () => {
    const { theme, themes, setTheme } = useTheme()

    function changeTheme() {
        const index = themes.findIndex((x) => x === theme)
        const nextTheme =
            index === themes.length - 1 ? themes[0] : themes[index + 1]
        setTheme(nextTheme)
    }

    return (
        <footer
            className="
                duration-200
                flex
                justify-between
                mt-5
                text-muted
                text-sm
                transition-opacity
            "
        >
            <section>
                <Link className="mr-3" href="/">
                    Home
                </Link>
                <Link className="mr-3" href="/colophon">
                    Colophon
                </Link>
                <Link external href="/rss.xml">
                    RSS
                </Link>
            </section>

            <section>
                <div>
                    Theme:{' '}
                    <button
                        className="
                            capitalize
                            leading-tight
                            hover:text-accent
                            underlined
                        "
                        onClick={changeTheme}
                    >
                        {theme}
                    </button>
                </div>
            </section>
        </footer>
    )
}

export default Footer

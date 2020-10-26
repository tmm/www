import Link from './link'

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <footer
            className="
                    duration-200
                    mt-5
                    text-muted
                    text-sm
                    transition-opacity
                    md:opacity-50
                    hover:opacity-100
                "
        >
            <Link className="mr-3" href="/">
                Home
            </Link>
            <Link className="mr-3" href="/colophon">
                Colophon
            </Link>
            <Link external href="/rss.xml">
                RSS
            </Link>
        </footer>
    )
}

export default Footer

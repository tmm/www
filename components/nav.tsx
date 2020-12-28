import { Link } from './link'

export const Nav: React.FC = () => {
    return (
        <nav
            className="
                absolute
                md:fixed
                font-medium
                font-sans
                print-hidden
                left-4
                space-x-2
                text-muted
                text-xs
                top-2
                tracking-wide
            "
        >
            <Link className="no-underline" href="/">
                Home
            </Link>
            <Link className="no-underline" href="/archive">
                Archive
            </Link>
            <Link className="no-underline" href="/about">
                About
            </Link>
        </nav>
    )
}

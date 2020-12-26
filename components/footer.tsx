import { Link } from './link'
import { Subscribe } from './subscribe'

export const Footer: React.FC = () => {
    return (
        <footer className="mt-32 pb-40 print:hidden">
            <Subscribe />

            <ul
                className="
                    flex 
                    justify-center 
                    list-none 
                    mb-4 
                    mt-8 
                    p-0 
                    space-x-2 
                    sm:space-x-3 
                    text-muted
                    text-sm 
                    sm:text-base
                "
            >
                <li>
                    <Link className="no-underline hover:underline" href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="no-underline hover:underline"
                        href="/archive"
                    >
                        Archive
                    </Link>
                </li>
                <li>
                    <Link
                        className="no-underline hover:underline"
                        href="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link className="no-underline hover:underline" href="/now">
                        Now
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

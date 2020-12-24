import { config } from '@/lib/config'

import { Link } from './link'
import { Subscribe } from './subscribe'

export const Footer: React.FC = () => {
    return (
        <footer className="mt-32 pb-40">
            <Subscribe />

            <ul className="flex justify-center list-none mb-4 mt-8 p-0 space-x-2 text-sm">
                <li>
                    <Link className="no-underline" href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="no-underline" href="/archive">
                        Archive
                    </Link>
                </li>
                <li>
                    <Link className="no-underline" href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="no-underline" href="now">
                        Now
                    </Link>
                </li>
                <li>
                    <Link
                        className="no-underline"
                        external
                        href={`mailto:${config.email}`}
                    >
                        Email
                    </Link>
                </li>
                <li>
                    <Link
                        className="no-underline"
                        external
                        href={`https://twitter.com/${config.twitter}`}
                    >
                        Twitter
                    </Link>
                </li>
                <li>
                    <Link
                        className="no-underline"
                        external
                        href={`https://github.com/${config.github}`}
                    >
                        GitHub
                    </Link>
                </li>
            </ul>

            <aside className="md:max-w-subscribe mx-auto text-muted text-center text-serif text-sm">
                If you’ve made it this far, send an email to{' '}
                <Link
                    className="no-underline"
                    external
                    href={`mailto:${config.email}`}
                >
                    {config.email}
                </Link>{' '}
                with the answer to “What’s your favorite color?”
            </aside>
        </footer>
    )
}

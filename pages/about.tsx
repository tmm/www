import { NextPage } from 'next'

import { Layout, Link } from '@/components'
import { config } from '@/lib/config'

const Page: NextPage = () => {
    return (
        <Layout showTipButton title="About">
            <article>
                <header className="mb-8">
                    <h1>About</h1>
                </header>

                <p>
                    My name is Tom Meagher (MAH-hur). I&rsquo;m a Brooklyn-based
                    software engineer, originally from the suburbs of Boston.
                </p>

                <p>
                    Currently, I work at{' '}
                    <Link external href="https://locallaboratory.co">
                        Local Laboratory
                    </Link>
                    . Previously, I worked at{' '}
                    <Link external href="https://patreon.com">
                        Patreon
                    </Link>
                    ,{' '}
                    <Link external href="https://kit.co">
                        Kit
                    </Link>
                    , and{' '}
                    <Link external href="https://sapient.com">
                        Sapient
                    </Link>
                    . In my free time, I go for walks around the neighborhood,
                    cook new (hopefully <em>tasty</em>) things, and hack on side
                    projects, like{' '}
                    <Link external href="https://mute.vc">
                        Mute.vc
                    </Link>{' '}
                    and{' '}
                    <Link external href="https://notational.co">
                        Notational
                    </Link>
                    .
                </p>

                <p>
                    Read more about what I&rsquo;m up to{' '}
                    <Link href="/now">now</Link> or how this site{' '}
                    <Link href="/colophon">is built</Link>.
                </p>

                <h3 id="#contact">
                    <a href="#contact">Contact</a>
                </h3>

                <p>
                    Email{' '}
                    <Link external href={`mailto:${config.email}`}>
                        ({config.email})
                    </Link>{' '}
                    and Twitter both{' '}
                    <Link
                        external
                        href={`https://twitter.com/${config.twitter}`}
                    >
                        (@{config.twitter})
                    </Link>{' '}
                    work fine.
                </p>

                <h3 id="elsewhere">
                    <a href="elsewhere">Elsewhere</a>
                </h3>

                <ul>
                    <li>
                        <Link
                            external
                            href={`https://github.com/${config.github}`}
                        >
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link
                            external
                            href={`https://twitter.com/${config.twitter}`}
                        >
                            Twitter
                        </Link>
                    </li>
                    <li>
                        <Link external href="https://futureland.tv/tmm">
                            Futureland
                        </Link>
                    </li>
                    <li>
                        <Link external href="https://are.na/tmm">
                            Are.na
                        </Link>
                    </li>
                    <li>
                        <Link
                            external
                            href="https://news.ycombinator.com/user?id=meagher"
                        >
                            Hacker News
                        </Link>
                    </li>
                </ul>

                <p className="text-muted">
                    If you made it this far, send an email to{' '}
                    <Link
                        external
                        href={`mailto:${config.email}?subject=Favorite Color&body=My name is [your name] and my favorite color is [your favorite color] ...`}
                    >
                        {config.email}
                    </Link>{' '}
                    with the answer to “What’s your favorite color?”
                </p>
            </article>
        </Layout>
    )
}

export default Page

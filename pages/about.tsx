import { NextPage } from 'next'

import { Layout, Link } from '@/components'
import { config } from '@/lib/config'

const Page: NextPage = () => {
    return (
        <Layout title="About">
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
                    <Link external href="https://locallaboratory.com">
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
                    <Link href="/now">now</Link>.
                </p>

                <h3 id="colophon">
                    <a href="colophon">Colophon</a>
                </h3>

                <p>
                    This website is built with{' '}
                    <Link external href="https://nextjs.org">
                        Next.js
                    </Link>{' '}
                    and typeset in{' '}
                    <Link
                        external
                        href="https://github.com/adobe-fonts/source-sans-pro"
                    >
                        Source Sans Pro
                    </Link>
                    . Other technologies, products, and doodads include:
                </p>

                <ul>
                    <li>
                        <Link external href="https://www.dynadot.com">
                            Dynadot
                        </Link>{' '}
                        for registering <code>meagher.co</code>
                    </li>
                    <li>
                        <Link external href="https://vercel.com">
                            Vercel
                        </Link>{' '}
                        for hosting
                    </li>
                    <li>
                        <Link external href="https://cloudflare.com">
                            Cloudflare
                        </Link>{' '}
                        for all DNS-related needs
                    </li>
                    <li>
                        <Link
                            external
                            href="https://referral.simpleanalytics.com/tmm"
                        >
                            Simple Analytics
                        </Link>{' '}
                        for collecting analytics
                    </li>
                </ul>

                <p>
                    My writing and the design of this website is{' '}
                    <Link
                        external
                        href="https://www.copyright.gov/help/faq/faq-general.html#mywork"
                    >
                        copyrighted
                    </Link>
                    . Feel free to ask if you want to reuse any content beyond
                    the bounds of{' '}
                    <Link
                        external
                        href="https://www.copyright.gov/fair-use/more-info.html"
                    >
                        fair use
                    </Link>
                    .
                </p>

                <p>
                    For more info on how the sausage is made, view the source{' '}
                    <Link external href="https://github.com/tmm/www">
                        on GitHub
                    </Link>
                    .
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

                <p className="text-muted">
                    If you’ve made it this far, send an email to{' '}
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

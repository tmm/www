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

                <p>Image and some info about Tom</p>

                <p>
                    Typeset in{' '}
                    <Link
                        external
                        href="https://github.com/adobe-fonts/source-sans-pro"
                    >
                        Source Sans Pro
                    </Link>
                    ,{' '}
                    <Link
                        external
                        href="https://github.com/adobe-fonts/source-serif-pro"
                    >
                        Source Serif Pro
                    </Link>
                    , and{' '}
                    <Link
                        external
                        href="https://github.com/adobe-fonts/source-code-pro"
                    >
                        Source Code Pro
                    </Link>
                    . Built with{' '}
                    <Link external href="https://nextjs.org">
                        Next.js
                    </Link>{' '}
                    and some{' '}
                    <Link
                        external
                        href="https://github.com/tmm/www/blob/master/package.json"
                    >
                        other packages
                    </Link>
                    . Deployed on{' '}
                    <Link external href="https://vercel.com">
                        Vercel
                    </Link>
                    . DNS managed with{' '}
                    <Link external href="https://cloudflare.com">
                        Cloudflare
                    </Link>
                    . Domain name registered on{' '}
                    <Link external href="https://www.dynadot.com">
                        Dynadot
                    </Link>
                    . Analytics collected with{' '}
                    <Link
                        external
                        href="https://referral.simpleanalytics.com/tmm"
                    >
                        Simple Analytics
                    </Link>
                    . Licensed under the{' '}
                    <Link
                        external
                        href="https://github.com/tmm/www/blob/master/.github/LICENSE.md"
                    >
                        MIT License
                    </Link>
                    .
                </p>

                <p>
                    For more info on how the sausage is made, view the source on{' '}
                    <Link external href="https://github.com/tmm/www">
                        GitHub
                    </Link>
                    .
                </p>

                <p>
                    If you’ve made it this far, send an email to{' '}
                    <Link external href={`mailto:${config.email}`}>
                        {config.email}
                    </Link>{' '}
                    with the answer to “What’s your favorite color?”
                </p>
            </article>
        </Layout>
    )
}

export default Page

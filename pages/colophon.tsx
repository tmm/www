import { NextPage } from 'next'

import { CopyEmailButton, Layout, Link } from '@/components'

type Props = {}

const Page: NextPage<Props> = () => {
    const title = 'Colophon'
    return (
        <Layout description="How the sausage is made" title={title}>
            <article>
                <h1>{title}</h1>
                <p>
                    Typeset in{' '}
                    <Link external href="https://rsms.me/inter">
                        Inter
                    </Link>{' '}
                    and{' '}
                    <Link external href="https://www.jetbrains.com/lp/mono">
                        JetBrains Mono
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
                    . Privacy respected using{' '}
                    <Link external href="https://simpleanalytics.com">
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
                    . Send comments, questions, or feedback to{' '}
                    <CopyEmailButton />.
                </p>
            </article>
        </Layout>
    )
}

export default Page

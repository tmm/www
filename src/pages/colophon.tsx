import React from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '@/layouts'
import { CopyEmailButton } from '@/components'

const Colophon = () => (
    <Layout footer>
        <Helmet title="Colophon" />
        <section>
            <h1 className="mb-4">Colophon</h1>

            <p>
                Typeset in <a href="https://rsms.me/inter">Inter</a> and{' '}
                <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>.{' '}
                Built with <a href="https://gatsbyjs.org">Gatsby</a> and some{' '}
                <a href="https://github.com/tmm/www/blob/master/package.json">
                    other packages
                </a>
                . Deployed on <a href="https://vercel.com">Vercel</a>. DNS
                managed with <a href="https://cloudflare.com">Cloudflare</a>.{' '}
                Domain name registered on{' '}
                <a href="https://www.dynadot.com">Dynadot</a>. Privacy respected
                using <a href="https://simpleanalytics.com">Simple Analytics</a>
                . Licensed under the{' '}
                <a href="https://github.com/tmm/www/blob/master/.github/LICENSE.md">
                    MIT License
                </a>
                .
            </p>

            <p>
                For more info on how the sausage is made, view the source on{' '}
                <a href="https://github.com/tmm/www">GitHub</a>. Comments,
                questions, or feedback can be directed to <CopyEmailButton />.
            </p>
        </section>
    </Layout>
)

export default Colophon

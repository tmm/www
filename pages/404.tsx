import { NextPageWithLayout } from 'next'
import Head from 'next/head'

import { Link } from '~/components'
import { getLayout } from '~/layouts/site'

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <main className="max-w-lg pt-20 px-4 md:ml-20">
                <article className="space-y-6">
                    <h1 className="font-display">404</h1>

                    <p>
                        Page not found. <Link href="/">Back to home.</Link>
                    </p>
                </article>
            </main>
        </>
    )
}

Page.getLayout = getLayout

export default Page

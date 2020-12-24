import { NextPage } from 'next'

import { Layout } from '@/components'

const Page: NextPage = () => {
    const title = 'Now'
    return (
        <Layout className="max-w-container mx-auto pt-36 px-4" title={title}>
            <article>
                <header className="mb-8">
                    <h1 className="font-normal mb-0 text-base text-center">
                        {title}
                    </h1>
                </header>
                <p>What now</p>
            </article>
        </Layout>
    )
}

export default Page

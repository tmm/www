import { NextPage } from 'next'

import { Layout } from '@/components'

interface Props {
    status?: number | null
}

const Error: NextPage<Props> = () => {
    const title = 'Something went wrong'
    return (
        <Layout hideFooter title={title}>
            <article>
                <header className="mb-8">
                    <h1>{title}</h1>
                </header>
                <p>An error occurred.</p>
            </article>
        </Layout>
    )
}

Error.getInitialProps = async (context) => {
    const { res, err } = context
    const status = res ? res.statusCode : err ? err.statusCode : null
    return { status }
}

export default Error

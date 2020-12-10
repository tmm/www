import { GetStaticProps, NextPage } from 'next'

import { Card, CopyEmailButton, Layout, Link } from '@/components'

import { config } from '@/lib/config'
import { generateFeed } from '@/lib/rss'
import { getPosts } from '@/lib/posts'

type Props = {
    posts: Post[]
}

const Page: NextPage<Props> = (props) => {
    return (
        <Layout>
            <section className="mb-12">
                <p>
                    <span className="font-semibold">Welcome.</span> Tom is a
                    Internet generalist based in Brooklyn, trying to fix bad
                    technology with good technology. Currently, he works at{' '}
                    <Link external href="https://patreon.com">
                        Patreon
                    </Link>
                    . To keep updated with his work, subscribe via{' '}
                    <Link external href="https://buttondown.email/tmm">
                        email
                    </Link>
                    ,{' '}
                    <Link
                        external
                        href={`https://twitter.com/${config.twitter}`}
                    >
                        Twitter
                    </Link>
                    , or{' '}
                    <Link external href="/rss.xml">
                        RSS
                    </Link>
                    .
                </p>
            </section>

            <section className="mb-12">
                {props.posts.map((x) => (
                    <Card
                        body={x.body}
                        excerpt={x.excerpt}
                        key={x.frontmatter.title}
                        {...x.frontmatter}
                    />
                ))}
            </section>

            <section>
                <p>
                    If you’ve made it this far, I would love to get to know you.
                    Send an email to <CopyEmailButton /> with the answer to
                    “What’s your favorite color?”
                </p>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts()
    await generateFeed(posts)
    return {
        props: {
            posts,
        },
    }
}

export default Page

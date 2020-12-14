import { GetStaticProps, NextPage } from 'next'

import { Card, Layout } from '@/components'

import { generateFeed } from '@/lib/rss'
import { getPosts } from '@/lib/posts'

type Props = {
    posts: Post[]
}

const Page: NextPage<Props> = (props) => {
    return (
        <Layout>
            <section className="mb-14">
                <p className="text-center text-lg">
                    <span className="font-semibold">Welcome.</span> Tom is a
                    Internet generalist based in Brooklyn.
                </p>
            </section>

            <section>
                {props.posts.map((x) => (
                    <Card
                        body={x.body}
                        excerpt={x.excerpt}
                        key={x.frontmatter.title}
                        {...x.frontmatter}
                    />
                ))}
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

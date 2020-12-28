import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { getPosts } from '@/lib/posts'
import { Layout, Post } from '@/components'

interface Props {
    body: string
    date: string
    description: string
    next: Post | null
    previous: Post | null
    published: boolean
    slug: string
    title: string
}

const Page: NextPage<Props> = (props) => {
    return (
        <Layout description={props.description} title={props.title}>
            <Post {...props} date={new Date(props.date)} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await getPosts({ includeContent: true, includeDrafts: true })
    const slug = context.params?.slug as string
    const index = posts.findIndex((x) => x.frontmatter.slug === slug)
    const post = posts[index]
    return {
        props: {
            previous: posts[index + 1] ?? null,
            next: posts[index - 1] ?? null,
            ...post.frontmatter,
            body: post.body,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts({ includeContent: true, includeDrafts: true })
    return {
        paths: posts.map((p) => `/${p.frontmatter.slug}`),
        fallback: false,
    }
}

export default Page

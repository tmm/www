import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { format } from 'date-fns'

import _posts from '@/lib/posts'
import markdown from '@/lib/markdown'
import { Layout, Post } from '@/components'

interface Props {
    title: string
    description: string
    slug: string
    date: string
    published: boolean
    previous: Post | null
    next: Post | null
    html: string
}

const Page: NextPage<Props> = (props) => {
    return (
        <Layout description={props.description} title={props.title}>
            <Post
                {...props}
                date={format(new Date(props.date), 'MMM dd yyyy')}
            />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = _posts.list()
    const slug = context.params?.slug as string
    const index = posts.findIndex((x) => x.frontmatter.slug === slug)
    const post = posts[index]
    const html = await markdown.toHTML(post.body || '')

    return {
        props: {
            previous: posts[index + 1] ?? null,
            next: posts[index - 1] ?? null,
            ...post.frontmatter,
            html,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = _posts.list()
    return {
        paths: posts.map((p) => `/${p.frontmatter.slug}`),
        fallback: false,
    }
}

export default Page

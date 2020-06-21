import { PageProps, graphql } from 'gatsby'

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '@/layouts'
import { Post } from '@/components'

interface Props extends PageProps {
    data: {
        mdx: Post
    }
}

const Template: FC<Props> = (props) => {
    const post = props.data.mdx
    const description = post.frontmatter.description || post.excerpt
    const title = post.frontmatter.title
    return (
        <Layout footer subscribe>
            <Helmet title={title}>
                <meta content={description} name="description" />
                <meta content={title} name="twitter:title" />
            </Helmet>

            <Post key={post.id} post={post} />
        </Layout>
    )
}

export const query = graphql`
    query PostQuery($path: String!) {
        mdx(fields: { slug: { eq: $path } }) {
            body
            excerpt
            fields {
                slug
            }
            frontmatter {
                date(formatString: "ddd MMM DD YYYY")
                description
                title
            }
        }
    }
`

export default Template

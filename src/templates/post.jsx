import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Post from '@/components/post'
import Subscribe from '@/components/subscribe'
import Layout from '@/layouts/default'

const Template = ({ data: { mdx: post } }) => {
    const description = post.frontmatter.description || post.excerpt
    const title = post.frontmatter.title
    return (
        <Layout>
            <Helmet title={title}>
                <meta content={description} name="description" />
                <meta content={title} name="twitter:title" />
            </Helmet>
            <Post key={post.id} post={post} />
            <Subscribe />
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
                date(formatString: "MM.DD.YYYY")
                description
                title
            }
        }
    }
`

export default Template

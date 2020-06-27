import { PageProps, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout, Subscribe } from '@/components'

interface Props extends PageProps {
    data: {
        mdx: Post
    }
}

const Template: FC<Props> = (props) => {
    const post = props.data.mdx
    const {
        body,
        frontmatter: { date, title },
    } = post
    const description = post.frontmatter.description || post.excerpt

    return (
        <Layout>
            <Helmet title={title}>
                <meta content={description} name="description" />
                <meta content={title} name="twitter:title" />
            </Helmet>

            <article>
                <h1>{title}</h1>

                <MDXRenderer>{body}</MDXRenderer>

                <div className="italic mb-10 mt-4 text-muted">
                    Published <time>{date}</time>
                </div>
            </article>

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
                date(formatString: "ddd MMM DD YYYY")
                description
                title
            }
        }
    }
`

export default Template

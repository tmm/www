import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { MDXProvider } from '@mdx-js/react'

import React, { FC } from 'react'

import { CopyEmailButton } from '@/components'

const shortcodes = { CopyEmailButton }

interface Props {
    post: Post
}

const Post: FC<Props> = (props) => {
    const {
        post: {
            body,
            fields: { slug },
            frontmatter: { date, title },
        },
    } = props
    return (
        <MDXProvider components={shortcodes}>
            <article>
                <header className="mb-4">
                    <h1>
                        <Link className="no-underline" to={slug}>
                            {title}
                        </Link>
                    </h1>
                </header>

                <MDXRenderer>{body}</MDXRenderer>

                <div className="italic mb-10 mt-5 text-muted">
                    Published <time>{date}</time>
                </div>
            </article>
        </MDXProvider>
    )
}

export default Post

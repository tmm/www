import { Link } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import { MDXProvider } from '@mdx-js/react'

import React, { FC } from 'react'

import CopyEmailButton from '@/components/copy-email-button'
import Thanks from '@/components/thanks'

const shortcodes = { CopyEmailButton, Thanks }

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
            <article className="mb-12 mt-20">
                <header className="mb-4">
                    <h1>
                        <Link className="no-underline" to={slug}>
                            {title}
                        </Link>
                    </h1>
                </header>

                <MDXRenderer>{body}</MDXRenderer>

                <div className="mt-4 text-muted text-sm">
                    Posted on <time>{date}</time>
                </div>
            </article>
        </MDXProvider>
    )
}

export default Post

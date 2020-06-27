import { PageProps } from 'gatsby'

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '@/components'

interface Props extends PageProps {}

const Template: FC<Props> = (props) => {
    // @ts-ignore
    const frontmatter = props.pageContext?.frontmatter
    const title = frontmatter?.title || props.uri
    const description = frontmatter?.description

    return (
        <Layout>
            <Helmet title={title}>
                {description && (
                    <meta content={description} name="description" />
                )}
                <meta content={title} name="twitter:title" />
            </Helmet>

            <h1>{title}</h1>

            {props.children}
        </Layout>
    )
}

export default Template

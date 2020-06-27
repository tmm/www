import { PageProps } from 'gatsby'

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '@/components'

interface Props extends PageProps {}

const Template: FC<Props> = (props) => {
    // @ts-ignore
    const title = props.pageContext?.frontmatter?.title

    return (
        <Layout>
            <Helmet title={title} />

            {title && <h1>{title}</h1>}

            {props.children}
        </Layout>
    )
}

export default Template

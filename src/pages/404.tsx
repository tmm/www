import { Link } from 'gatsby'

import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '@/layouts/default'

const NotFoundPage = () => (
    <Layout>
        <Helmet title="Page Not Found" />
        <section className="mb-8 mt-20">
            <h1 className="mb-4">Page Not Found</h1>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </section>
    </Layout>
)

export default NotFoundPage

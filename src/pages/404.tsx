import React from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '@/layouts'
import { CopyEmailButton } from '@/components'

const NotFoundPage = () => (
    <Layout footer>
        <Helmet title="Page Not Found" />
        <section>
            <h1 className="mb-4">Page Not Found</h1>
            <p>
                Sorry about that. Link rot sucks. You might be looking for my
                old blog, which you can access{' '}
                <a href="https://github.com/tmm/www/tree/e1a673aab9fdcaa4889195db4dc1de59de123b82/blog/_posts">
                    here
                </a>
                . Still not satisfied? Email <CopyEmailButton /> to complain
                about this error.
            </p>
        </section>
    </Layout>
)

export default NotFoundPage

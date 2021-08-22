import { GetLayout, NextLayout } from 'next'
import Head from 'next/head'

import { config } from '~/lib/config'

const Layout: NextLayout = ({ children }) => {
  return (
    <>
      <Head>
        {/* General */}
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <title>{config.siteTitle}</title>

        {/* Preload font */}
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/surt/Surt-RegularExp.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/inter/Inter-roman.var.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>

      {children}
    </>
  )
}

export const getLayout: GetLayout = (page) => <Layout>{page}</Layout>

export default Layout

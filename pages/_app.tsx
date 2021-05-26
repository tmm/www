import { AppProps } from 'next'

import { getLayout as getSiteLayout } from '~/layouts/site'

import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
    const getLayout = Component.getLayout || getSiteLayout
    return getLayout(<Component {...pageProps} />)
}

export default App

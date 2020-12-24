import { AppProps } from 'next/app'

import '@/styles/tailwind.css'
import '@/styles/globals.css'

const App = (props: AppProps) => {
    const { Component, pageProps } = props
    return <Component {...pageProps} />
}

export default App

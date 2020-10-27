import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/index.css'

const App = (props: AppProps) => {
    const { Component, pageProps } = props
    return (
        <ThemeProvider defaultTheme="dark">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App

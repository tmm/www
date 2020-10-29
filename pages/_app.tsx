import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/global.css'

const App = (props: AppProps) => {
    const { Component, pageProps } = props
    return (
        <ThemeProvider defaultTheme="dark">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App

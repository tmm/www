import {
    Head,
    Html,
    Main,
    default as NextDocument,
    NextScript,
} from 'next/document'

import { config } from '@/lib/config'

class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    <script
                        async
                        defer
                        src={`https://sa.${config.url}/latest.js`}
                    />
                    <noscript>
                        <img
                            alt=""
                            src={`https://sa.${config.url}/noscript.gif`}
                        />
                    </noscript>
                </body>
            </Html>
        )
    }
}

export default Document

import {Html, Head, Main, NextScript} from 'next/document'

export default function DocumentPage(){
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
            </Head>
            <body>
                <h1>My Web Application</h1>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
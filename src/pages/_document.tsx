import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.2.0/css/all.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

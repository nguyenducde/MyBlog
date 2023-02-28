import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PersistGate } from 'redux-persist/integration/react'
import '../assets/scss/index.scss'
import Layout from '../components/Layout'
import store, { persistor } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
      once: true,
    })
  }, [])
  return (
    <>
      <Head>
        <title>Nguyễn Đức Đề - Blog</title>
        <meta name='description' content='Nguyễn Đức Đề - Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp

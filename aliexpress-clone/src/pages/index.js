import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import IconArrowRight from '~icons/dashicons/arrow-right.jsx'
import Layout from './components/layout'
import { Provider } from 'react-redux'
import { Store } from './app/redux/store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Provider store={Store}>
        <Head>
          <title>Simple meets Aliexpress</title>
          <meta name="description" content="Aliexpress clone, focus on user interface and functionality" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {/* <main  className='bg-red-600'>
            my children
          </main> */}
        </Layout>
      </Provider>
    </>
  )
}


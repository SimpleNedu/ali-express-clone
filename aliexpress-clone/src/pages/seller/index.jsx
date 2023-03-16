import Head from 'next/head'
import { useSelector } from 'react-redux'
import { ThemeToggler } from '../components/common/themeToggler'

function Seller() {
  const Theme = useSelector((state)=>state.Theme.theme)
  return (
    <>
        <Head>
            <title>Seller page</title>
        </Head>
        <main>
          na sellers still dey here
         </main>
    </>
  )
}

export default Seller
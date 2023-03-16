import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { Store } from './app/redux/store'

export default function App({ Component, pageProps }) {
  return <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
}


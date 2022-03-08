import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/global'

import 'swiper/css';

import { Data } from"../data/server"
import { UseCartProvider } from '../hooks/useCart';



function MyApp({ Component, pageProps }: AppProps) {
  Data()
  
  return (
        <>
          <UseCartProvider>
            <GlobalStyle/>
            <Component {...pageProps} />      
          </UseCartProvider>
        </>
  ) 
}

export default MyApp


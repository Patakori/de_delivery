import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/global'

import 'swiper/css';

import { Data } from"../data/server"
import { ContextModal } from '../hooks/ContextModal';


function MyApp({ Component, pageProps }: AppProps) {
  Data()
  
  return (
 
    <ContextModal>
      <GlobalStyle/>
      <Component {...pageProps} />      
    </ContextModal>
  ) 
}

export default MyApp


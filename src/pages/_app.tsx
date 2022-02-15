import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/global'

import 'swiper/css';

import { Data } from"../data/server"


function MyApp({ Component, pageProps }: AppProps) {

  const data = Data()
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp


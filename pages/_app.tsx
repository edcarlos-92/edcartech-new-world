import '../styles/globals.css'
import '../styles/style.css'
import '../styles/tailwind.css'
//import 'flowbite';
import {ThemeProvider} from 'next-themes'


import type { AppProps } from 'next/app'
import { Html, Main, NextScript } from 'next/document';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
  
}

export default MyApp

import '../styles/globals.css'
import '../styles/style.css'
import '../styles/tailwind.css'
import '../styles/about.css'
import '../styles/portfolio.css'
//import 'flowbite';
import {ThemeProvider} from 'next-themes'
import { ApolloProvider } from '@apollo/client'



import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/prism-overrides.css";




import type { AppProps } from 'next/app'
import { client } from '../lib/apolloGraphQl'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ApolloProvider client={client} >
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
  
}

export default MyApp

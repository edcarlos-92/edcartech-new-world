import '../styles/globals.css'
import '../styles/style.css'
import '../styles/tailwind.css'
//import 'flowbite';
import {ThemeProvider} from 'next-themes'
import { ApolloProvider } from '@apollo/client'



import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/prism-overrides.css";




import type { AppProps } from 'next/app'
import { Html, Main, NextScript } from 'next/document';
import { client } from '../lib/apolloGraphQl'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>

  {/* <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      > */}
      {/* <PrismicPreview repositoryName={repositoryName}> */}



      <ApolloProvider client={client} >
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>



      {/* </PrismicPreview> */}
      {/* </PrismicProvider> */}
    </>
  )
  
}

export default MyApp

import * as React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
// import createEmotionServer from '@emotion/server/create-instance';
// import createEmotionCache from '../createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className="dark">
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content='#0A8FDC' />
          <link  rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        </Head>
        <body className="dark:bg-gray-800">
          <Main />
          <div id='root' />
          <NextScript />
        </body>
      </Html>
      
    );
  }
}

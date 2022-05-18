import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview();
  }
});

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Fathom.load('MYJRAPAB', {
      includedDomains: ['www.aqtiongame.com']
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

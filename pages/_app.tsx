import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const fathomSiteId: string = process.env.FATHOM_SITE_ID ?? '';

  useEffect(() => {
    Fathom.load(fathomSiteId, {
      includedDomains: ['www.aqtiongame.com'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

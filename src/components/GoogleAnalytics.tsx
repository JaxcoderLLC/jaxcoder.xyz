'use client';

import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6N2PTHKQXG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6N2PTHKQXG');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics; 
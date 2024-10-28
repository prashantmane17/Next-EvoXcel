import "./globals.css";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Script from "next/script";
import Head from "next/head";
import Footers from "./components/Footers";
// import GoogleAnalytics from "./components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta property="og:siteName" content="EvoXcel" />
      </Head>
      <body>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-KFZVZTJH`}
          strategy="afterInteractive"
        />

        {/* Google Analytics initialization */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-NC8WGKLC');
        `}
        </Script>
        <Nav />
        {children}
        {/* <Footer /> */}
        <Footers />
        <Script
          src="https://kit.fontawesome.com/a32e229695.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

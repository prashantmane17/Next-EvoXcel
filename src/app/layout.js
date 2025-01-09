import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import Footers from "./components/Footers";
import NewNav from "./components/NewNav";
import Chatbot from "./components/Chatbot";
import { GeistSans } from "geist/font/sans";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
// import { GeistMono } from "geist/font/mono";

// import GoogleAnalytics from "./components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <Head>
        <meta charSet="UTF-8" />
        <meta property="og:site_Name" content="EvoXcel" />
        <title>EvoXcel</title>
      </Head>
      <body className="bg-black">
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
        <div className="container bg-black m-auto">

          {/* <NewNav /> */}
          <Nav />
          {children}
        </div>
        {/* <Footer /> */}
        <Footers />
        <Chatbot />
        <Script
          src="https://kit.fontawesome.com/a32e229695.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

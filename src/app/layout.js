import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Evoxcel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </Head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Script
          src="https://kit.fontawesome.com/a32e229695.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}

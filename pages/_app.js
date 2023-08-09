import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("UA-149258136-1");
    ReactGA.pageview("/");
  }, []);

  if (typeof window !== "undefined") {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/60494e1f385de407571ed24a/1f0f5j7i9";
      s1.charset = "UTF-8";
      s1.setAttribute("crossOrigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo-copia.png" />
        <meta name="google-site-verification" content="uPeVjw4M8K7n7qTtHKDwKjewwEiSZ-In0dbeu7ZVveo"/>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

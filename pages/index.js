import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import ImagenPrincipal from "../components/layout/ImagenPrincipal";
import Servicios from "../components/layout/Servicios";
import Renta from "../components/layout/RentaEquipo";
import Reparacion from "../components/layout/ReparacionEquipo";
import Venta from "../components/layout/VentaEquipo";
import Clientes from "../components/layout/Clientes";
import VideosSection from "../components/layout/VideosSection";
import Perfil from "../components/layout/Perfil";
import Contacto from "../components/layout/Contacto";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="ya">
      <Head>
        <meta name="google-site-verification" content="uPeVjw4M8K7n7qTtHKDwKjewwEiSZ-ln0dbeu7ZVveo" />
        <html lang="es" />
        <title>
          Handheld|Renta, Reparación y Venta|Impresoras Zebra|PDA|Lectores de
          Códigos de Barras
        </title>
        <meta
          name="description"
          content="Renta, reparación y venta de handheld, terminal portátil, PDA, fácil y rápido. Lector de código de barras e impresoras de etiquetas Honeywell y Zebra. ¡Atención inmediata!"
        />
        <link rel="shortcut icon" href="/logo-copia.png" />
        <meta
          name="keywords"
          content="Handheld, hand held, PDA, terminal portátil, venta, Jalisco, Guadalajara, Monterrey, Nuevo León, compra, renta, reparación, mantenimiento,  impresoras, impresoras de etiquetas, lector de códigos de barras, accesorios y consumibles, honeywell, intermec, symbol, motorola, zebra, telxon, lxe, newland, handheld products, psion, pólizas de reparación, pólizas de servicio, equipo de uso rudo, equipo para venta en ruta, impresoras móviles, alquiler, inventario, diagnostico gratis, cotización gratis, arrendamiento, soluciones móviles, smartphone uso rudo, impresoras de credenciales, handheld repair"
        />
        <meta name="robots" content="index,follow,all" />
        <meta
          property="og:title"
          content="Handheld|Renta, Reparación y Venta|Impresoras Zebra|PDA|Lectores de Códigos de Barras"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/42K3Zdn/logo-copia.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Renta, reparación y venta de handheld, terminal portátil, PDA, fácil y rápido. Lector de código de barras e impresoras de etiquetas Honeywell y Zebra. ¡Atención inmediata!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="icon"
          type="image/png"
          sizes="160x99"
          href="https://i.ibb.co/42K3Zdn/logo-copia.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
      

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXHWDC2');`,
          }}
        ></script>
      
        {/* Esto es para tawk */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-728249895"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-728249895');`,
          }}
        ></script>
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KXHWDC2"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
<script src="jquery.min.js"></script>
      <Layout>
        <ImagenPrincipal />

        <Servicios />

        <Renta />

        <Reparacion />

        <Venta />

        <VideosSection />

        <Clientes />

        <Perfil />

        <Contacto />

        <Footer />
      </Layout>
      
      <script src= "/static/contextmenu.js"></script>
      <script src= "/static/cut copy paste.js"></script>
    </div>
  );
};

export default Home;

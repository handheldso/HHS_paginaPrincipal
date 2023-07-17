import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/layout/Header";
import VentaI from "../components/pestanas/VentaI";
import IconosVentaGeneral from "../components/pestanas/IconosVentaGeneral";
import Form from "../components/pestanas/Form";
import Ubicacion from "../components/pestanas/Ubicacion";
import Servicios from "../components/pestanas/DnuestrosS";
import MapaDuns from "../components/pestanas/MapaDuns";
import BotonesMovilCinco from "../components/pestanas/BotonesMovilCinco";
import Footer from "../components/layout/Footer";
import { Modal, Button } from "react-bootstrap";

const VImpresoras = () => {
  const ContenedorFlexa = styled.div`
    display: flex;

    @media (max-width: 995px) {
      display: block;
    }
  `;

  const ContenedorFlex = styled.div`
    display: flex;

    @media (max-width: 700px) {
      display: block;
    }
  `;

  const ContenedorBotona = styled.div`
    @media (max-width: 995px) {
      display: block;
    }
  `;

  const ImgModal = styled.img`
    max-width: 100% !important;
    min-width: 100% !important;
    max-height: 100% !important;
    min-height: 100% !important;
    cursor: pointer;
  `;

  const [abiertoAnuncios, cambiarAbiertoAnuncios] = useState(false);
  const [abiertoCupon, cambiarAbiertoCupon] = useState(true);

  const cerrarModal = () => {
    cambiarAbiertoAnuncios(false);
  };

  //  const cerrarModalCupon = () => {
  //    cambiarAbiertoCupon(false);
  //    setTimeout(() => {
  //      cambiarAbiertoAnuncios(true);
  //    }, 6000);
  //  };

  useEffect(() => {
    setTimeout(() => {
      cambiarAbiertoAnuncios(true);
    }, 6000);
  }, [])
  return (
    <div className="ya">
      <Head>
        <html lang="es" />
        <title>
          Venta De Impresoras de Etiquetas | Impresoras de Etiquetas Industriales |
          Impresoras de Etiquetas Portátiles
        </title>
        <meta
          property="title"
          content="Venta De Impresoras de Etiquetas | Impresoras de Etiquetas Industriales | Impresoras de Etiquetas Portátiles"
        />
        <meta
          name="description"
          content="Venta de Impresoras de Etiquetas Industriales Zebra a los Mejores Precios. Impresoras de Etiquetas Portátiles y de Escritorio a Precios Accesibles. ¡Asesoría Inmediata! Seguimiento Hombro con Hombro Durante Pruebas e Instalaciones. ¡Cotice Ahora!"
        />
        <meta
          name="keywords"
          content="Venta, compra, precio, impresora industrial, impresora móvil, impresora portátil, impresora de escritorio, impresora de credenciales, zebra, Honeywell, intermec, symbol, motorola, impresoras térmicas"
        />
        <meta name="robots" content="index,follow,all" />
        <link rel="shortcut icon" href="/logo-copia.png" />
        <meta
          property="og:title"
          content="Venta De Impresoras de Etiquetas | Impresoras de Etiquetas Industriales | Impresoras de Etiquetas Portátiles"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/42K3Zdn/logo-copia.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Venta de Impresoras de Etiquetas Industriales Zebra a los Mejores Precios. Impresoras de Etiquetas Portátiles y de Escritorio a Precios Accesibles. ¡Asesoría Inmediata! Seguimiento Hombro con Hombro Durante Pruebas e Instalaciones. ¡Cotice Ahora!"
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

      <Header />

      <VentaI />

      <ContenedorFlexa>
        <IconosVentaGeneral
          unoi="/img/Contamos con impresoras de etiquetas para códigos 1D y 2D.webp"
          unom="Contamos con impresoras de etiquetas para códigos 1D y 2D."
          dosm="¿Necesita dar mantenimiento a sus impresoras?."
          tresm="¿Necesita un plan de renta para impresoras?."
          luno="reparacion-de-impresoras-de-etiquetas"
          ldos="renta-de-impresoras-de-etiquetas"
        />
        <Form />
      </ContenedorFlexa>

      <ContenedorBotona>
        <BotonesMovilCinco
          muno="¿Necesita dar mantenimiento a sus impresoras?."
          mdos="¡Conozca nuestro servicio de Reparación!"
          mtres="¿Necesita un plan de renta para impresoras?."
          mcuatro="¡Conozca nuestro servicio de Renta!"
          mcinco="Adquiera los accesorios y consumibles que necesita."
          mseis="¡Contáctenos!"
          msiete='Ponemos a su disposición la solución "DSD" para venta en ruta.'
          mocho="¡Conózcalo!"
          mnueve="Contamos con fundas diseñadas a la medida para cumplir con sus necesidades."
          mdiez="¡Adquiera la protección que sus equipos necesitan!"
          luno="reparacion-de-impresoras-de-etiquetas"
          ldos="renta-de-impresoras-de-etiquetas"
          ltres="venta-de-accesorios-y-consumibles"
          lcuatro="DSD-venta-en-ruta"
          lcinco="venta-fundas-handheld-impresora-portatil"
        />
      </ContenedorBotona>

      <ContenedorFlex>
        <Ubicacion />
        <Servicios />
      </ContenedorFlex>

      <MapaDuns />

      <Footer />

{/* {      <Modal
        show={abiertoCupon}
        onHide={cerrarModalCupon}
        keyboard={false}
        size="md"
        className="modal-altura ppp "
      >
        <Modal.Body>
          <ImgModal src="img/cupon.webp" alt="cupon hand held" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalCupon}>
            Cerrar
          </Button>
        </Modal.Footer>
</Modal>} */}

      <Modal
        show={abiertoAnuncios}
        onHide={cerrarModal}
        keyboard={false}
        size="lg"
        className="modal-altura ppp "
      >
        <Modal.Body>
          <Link href="/renta-de-impresoras-de-etiquetas">
            <ImgModal
              src="img/RVimpresoras.webp"
              alt="enlace renta venta de impresoras"
            />
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VImpresoras;

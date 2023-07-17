import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/layout/Header";
import VentaH from "../components/pestanas/VentaH";
import IconosVentaGeneral from "../components/pestanas/IconosVentaGeneral";
import Form from "../components/pestanas/Form";
import Ubicacion from "../components/pestanas/Ubicacion";
import Servicios from "../components/pestanas/DnuestrosS";
import MapaDuns from "../components/pestanas/MapaDuns";
import BotonesMovilCinco from "../components/pestanas/BotonesMovilCinco";
import Footer from "../components/layout/Footer";
import { Modal, Button } from "react-bootstrap";

const Vhandhelds = () => {
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
          Venta de Handhelds | Terminal Portátil a Precios Accesibles | PDA
          para inventarios
        </title>
        <meta
          property="title"
          content="Venta de Handhelds | Terminal Portátil a Precios Accesibles | PDA para inventarios"
        />
        <meta
          name="description"
          content="Venta de Terminal Portátil, Handheld, PDA Zebra y Honeywell ¡Asesoría para Seleccionar la Terminal Portátil Adecuada! ¡Handheld Demo Sin Costo para Pruebas en sus Instalaciones! Contamos con PDA con Sistema Operativo Android y Windows Mobile."
        />
        <link rel="shortcut icon" href="/logo-copia.png" />
        <meta
          name="keywords"
          content="Venta, Handheldproducts, precio, hand held, handheld, PDA, terminal portátil, terminal de datos, honeywell, intermec, symbol, motorola, zebra, dispositivos móviles, equipo de uso rudo"
        />
        <meta name="robots" content="index,follow,all" />
        <meta
          property="og:title"
          content="Venta de Handhelds | Terminal Portátil a Precios Accesibles | PDA para inventarios"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/42K3Zdn/logo-copia.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Venta de Terminal Portátil, Handheld, PDA Zebra y Honeywell ¡Asesoría para Seleccionar la Terminal Portátil Adecuada! ¡Handheld Demo Sin Costo para Pruebas en sus Instalaciones! Contamos con PDA con Sistema Operativo Android y Windows Mobile."
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

      <VentaH />

      <ContenedorFlexa>
        <IconosVentaGeneral
          unoi="/img/Handhelds adecuadas con sistema operativo Android y Windows Mobile.webp"
          unom="Handhelds adecuadas con sistema operativo Android y Windows
        Mobile."
          dosm="¿Necesita dar mantenimiento a sus handhelds?."
          tresm="¿Necesita un plan de renta para handhelds?."
          luno="reparacion-de-handhelds"
          ldos="renta-de-handhelds"
        />
        <Form />
      </ContenedorFlexa>

      <ContenedorBotona>
        <BotonesMovilCinco
          muno="¿Necesita dar mantenimiento a sus handhelds?."
          mdos="¡Conozca nuestro servicio de Reparación!"
          mtres="¿Necesita un plan de renta para handhelds?."
          mcuatro="¡Conozca nuestro servicio de Renta!"
          mcinco="Adquiera los accesorios y consumibles que necesita."
          mseis="¡Contáctenos!"
          msiete='Ponemos a su disposición la solución "DSD" para venta en ruta.'
          mocho="¡Conózcalo!"
          mnueve="Contamos con fundas diseñadas a la medida para cumplir con sus necesidades."
          mdiez="¡Adquiera la protección que sus equipos necesitan!"
          luno="reparacion-de-handhelds"
          ldos="renta-de-handhelds"
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

      {/* {<Modal
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
          <Link href="/renta-de-handhelds">
            <ImgModal
              src="img/RVhandhelds.webp"
              alt="enlace renta venta de hand held"
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

export default Vhandhelds;

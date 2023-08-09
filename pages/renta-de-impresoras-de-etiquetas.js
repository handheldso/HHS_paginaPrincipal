import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "../components/layout/Header";
import RentaI from "../components/pestanas/RentaI";
import IconosRentaGeneral from "../components/pestanas/IconosRentaGeneral";
import Form from "../components/pestanas/Form";
import Ubicacion from "../components/pestanas/Ubicacion";
import Servicios from "../components/pestanas/DnuestrosS";
import MapaDuns from "../components/pestanas/MapaDuns";
import BotonesMovilCinco from "../components/pestanas/BotonesMovilCinco";
import { Modal, Button, Carousel } from "react-bootstrap";
import Footer from "../components/layout/Footer";

const RImpresoras = () => {
  const ContenedorFlexa = styled.div`
    display: flex;
    margin-top: -110px;

    @media (max-width: 995px) {
      display: block;
    }

    @media (max-width: 1300px) {
      margin-top: -50px;
    }

    @media (max-width: 698px) {
      margin-top: 0px;
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
  `;

  const Puntero = styled.a`
    cursor: pointer;
  `;

  const Redirigir = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#reparacion";
  };

  const [abiertoAnuncios, cambiarAbiertoAnuncios] = useState(false);
  const [abiertoCupon, cambiarAbiertoCupon] = useState(true);

  const cerrarModal = () => {
    cambiarAbiertoAnuncios(false);
  };

   const cerrarModalCupon = () => {
     cambiarAbiertoCupon(false);
     setTimeout(() => {
       cambiarAbiertoAnuncios(true);
     }, 6000);
   };

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
          Renta de Impresoras de Etiquetas | Arrendamiento de Impresoras
          Portátiles | Impresoras Zebra
        </title>
        <meta
          name="description"
          content="Renta de Impresoras de Etiquetas. ¡Crédito Inicial y Esquemas de Pagos!, Primero Tendrá los Equipos en Operación y Después Realizará el Pago. ¡Contamos con Pólizas de Reparación Contra Daños!, Alquiler de Impresoras Zebra y Honeywell por Semanas, Meses o Años. Contamos con Equipos de Respaldo para Asegurar Tiempos de Operación. ¡Llame Ahora!"
        />
        <link rel="shortcut icon" href="/logo-copia.png" />
        <meta
          name="keywords"
          content="Renta, arrendamiento, alquiler, leasing, impresoras zebra, impresora de etiquetas, impresora portátil, impresora industrial, impresora de escritorio, impresora de credenciales, impresora de tickets, Honeywell, motorola, symbol, intermec, impresoras térmicas"
        />
        <meta name="robots" content="index,follow,all" />
        <meta
          property="og:title"
          content="Renta de Impresoras de Etiquetas | Arrendamiento de Impresoras Portátiles | Impresoras Zebra"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/42K3Zdn/logo-copia.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Renta de Impresoras de Etiquetas. ¡Crédito Inicial y Esquemas de Pagos!, Primero Tendrá los Equipos en Operación y Después Realizará el Pago. ¡Contamos con Pólizas de Reparación Contra Daños!, Alquiler de Impresoras Zebra y Honeywell por Semanas, Meses o Años. Contamos con Equipos de Respaldo para Asegurar Tiempos de Operación. ¡Llame Ahora!"
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

      <RentaI />

      <ContenedorFlexa>
        <IconosRentaGeneral
          unom="Crédito y esquemas de pagos."
          dosm="Equipo de respaldo para asegurar su operación."
          tresm="Póliza de reparación contra accidentes mayores y uso normal."
          cuatrom="Facilidades para su operación"
          cincom="Equipo demo sin costo, para pruebas en sus instalaciones."
          seism="100% deducible de impuestos."
          sietem="Envío gratis a toda la República Mexicana."
          ochom="¿Necesita dar mantenimiento a sus impresoras?."
          nuevem="¡Conozca nuestro servicio de Reparación!"
          diezm="Adquiera las impresoras que mejor se adapten a sus
        necesidades."
          oncem="¡Conozca nuestro servicio de Venta!"
          docem="Adquiera los accesorios y consumibles que necesita."
          trecem="¡Contáctenos!"
          catorcem='Ponemos a su disposición la solución "DSD" para venta en ruta.'
          quincem="¡Conózcalo!"
          diezseism="Contamos con fundas diseñadas a la medida para cumplir con sus necesidades."
          diezsietem="¡Adquiera la protección que sus equipos necesitan!"
          luno="reparacion-de-impresoras-de-etiquetas"
          ldos="venta-de-impresoras-de-etiquetas"
          ltres="venta-de-accesorios-y-consumibles"
          lcuatro="DSD-venta-en-ruta"
          lcinco="venta-fundas-handheld-impresora-portatil"
          ecuatro="impresion-credenciales-tarjetas-gafetes-pvc"
          ecem="Conozca nuestro servicio de impresion de credenciales"
        />
        <Form />
      </ContenedorFlexa>

      <ContenedorBotona>
        <BotonesMovilCinco
          muno="¿Necesita dar mantenimiento a sus impresoras?."
          mdos="¡Conozca nuestro servicio de Reparación!"
          mtres="Adquiera las impresoras que mejor se adapten a sus necesidades."
          mcuatro="¡Conozca nuestro servicio de Venta!"
          mcinco="Adquiera los accesorios y consumibles que necesita."
          mseis="¡Contáctenos!"
          msiete='Ponemos a su disposición la solución "DSD" para venta en ruta.'
          mocho="¡Conózcalo!"
          mnueve="Contamos con fundas diseñadas a la medida para cumplir con sus necesidades."
          mdiez="¡Adquiera la protección que sus equipos necesitan!"
          luno="reparacion-de-impresoras-de-etiquetas"
          ldos="venta-de-impresoras-de-etiquetas"
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

    {/*  { <Modal
        show={abiertoCupon}
        onHide={cerrarModalCupon}
        keyboard={false}
        size="md"
        className="modal-altura ppp "
      >
        <Modal.Body>
          <ImgModal src="img/cupon2022.webp" alt="cupon hand held" />
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
        className="modal-altura ppp"
      >
        <Modal.Header closeButton>
          <Modal.Title>Noticias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
          <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Lector Syble XB-6266MBT.png"
                alt="Lector de códigos XB-6266MBT"
              />
            </Carousel.Item>
          <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Handheld EDA52.png"
                alt="Handheld EDA52"
              />
            </Carousel.Item>
          <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/CT40 Honeywell.png"
                alt="Handheld CT40"
              />
            </Carousel.Item>
          <Carousel.Item>
          <a
                  className="clicks"
                  href="https://www.youtube.com/embed/cYzumXlnZ54"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImgModal
                    className="d-block "
                    src="/img/Impresora de credenciales Primacy 2.png"
                    alt="Impresora de credenciales"
                  />
                </a>
              </Carousel.Item>
            {/* <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Banner Promo 3x2.gif"
                alt="Banner Promo 3x2"
              />
            </Carousel.Item>
            <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/cupon de descuento 2022.gif"
                alt="cupon de descuento 2022"
              />
            </Carousel.Item> */}
          <Carousel.Item>
                <a
                  className="clicks"
                  href="https://www.youtube.com/embed/_N1aq8YJkc4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImgModal
                    className="d-block "
                    src="/img/Handheld MC2200 y MC2700.gif"
                    alt="Handhelds MC2200 y MC2700"
                  />
                </a>
              </Carousel.Item>
          <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Renta de handheld MC33.webp"
                alt="Renta de handheld MC33"
              />
            </Carousel.Item>
          <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Renta de handheld CK65.webp"
                alt="Renta de handheld CK65"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/Promoción_mc9090_funcional_po83sk.webp"
                alt="Hand Held MC9090"
              />
            </Carousel.Item>
          {/* <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Promoción_ds2278.webp"
                alt="Lector de Códigos DS2278"
              />
            </Carousel.Item> */}
            <Carousel.Item>
              <ImgModal
                className="d-block "
                src="/img/Promoción_CN51.webp"
                alt="Hand Held Intermec Honeywell CN51"
              />
            </Carousel.Item>
          {/* <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Promoción_CK65.webp"
                alt="Promoción CK65"
              />
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/evolis_adikio.webp"
                alt="evolis adikio"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/evolis_impresoras.webp"
                alt="evolis impresoras"
              />
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/impresora_IMZ320.webp"
                alt="Renta de Impresorade etiquetas IMZ320"
              />
            </Carousel.Item> */}
            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/Promoción_MC9190_sricb6.webp"
                alt="Hand Held MC9190"
              />
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/IMAGEN_ZEBRA_BANNER_800X500_lyqnpu.webp"
                alt="Zebra Hand Held Impresoras Lectores"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Puntero onClick={Redirigir}>
                <ImgModal
                  className="d-block "
                  src="/img/Copia_de_pólizas_reparación_sg0xim.webp"
                  alt="Polizas de reparacion handheld impresoras de etiquetas y lectores"
                />
              </Puntero>
            </Carousel.Item>
            {/* <Carousel.Item>
              <a
                className="clicks"
                href="https://res.cloudinary.com/dihawqrnt/image/upload/v1623098014/banner/publicaci%C3%B3n_nuevo_lanzamiento_ec50_y_ec55_fmwnhz.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgModal
                  className="d-block "
                  src="/img/Copia_de_ec50_y_ec55_en_web_kyx6mp.webp"
                  alt="Zebra Handheld EC50 EC55"
                />
              </a>
            </Carousel.Item> */}
            <Carousel.Item>
              <ImgModal
                className="d-block "
                src="/img/IMAGEN_ZEBRA_BANNER_800X500_vr6p1d.webp"
                alt="Zebra Hand Held Impresoras Lectores"
              />
            </Carousel.Item>
            {/* <Carousel.Item>
              <Puntero
                href="https://res.cloudinary.com/dihawqrnt/image/upload/v1623098012/banner/EDA61K_FB_o2obod.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgModal
                  className="d-block "
                  src="/img/EDA61K_WEB_luqnfs.webp"
                  alt="Hand Held EDA61K Zebra"
                />
              </Puntero>
            </Carousel.Item> */}
            {/* <Carousel.Item>
              <Puntero
                href="https://res.cloudinary.com/dihawqrnt/image/upload/v1623098010/banner/ck65_FB_1_rj8z3u.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgModal
                  className="d-block "
                  src="/img/CK65_WEB_l9akm3.webp"
                  alt="Hand Held CK65 Zebra"
                />
              </Puntero>
            </Carousel.Item> */}
          </Carousel>
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

export default RImpresoras;

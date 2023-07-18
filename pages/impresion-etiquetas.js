import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "../components/layout/Header";
import EtiquetasH from "../components/pestanas/EtiquetasH";
import TextoEtiquetas from "../components/pestanas/TextoEtiquetas";
import FormEtiquetas from "../components/pestanas/FormEtiquetas";
import BotonFundas from "../components/pestanas/BotonFundas";
import Ubicacion from "../components/pestanas/Ubicacion";
import Servicios from "../components/pestanas/ServiciosCredenciales";
import MapaDuns from "../components/pestanas/MapaDuns";
import Footer from "../components/layout/Footer";

import { Modal, Button, Carousel } from "react-bootstrap";

const Etiquetas = () => {
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

  // const cerrarModalCupon = () => {
  //   cambiarAbiertoCupon(false);
  //   setTimeout(() => {
  //     cambiarAbiertoAnuncios(true);
  //   }, 6000);
  // };

  useEffect(() => {
    setTimeout(() => {
      cambiarAbiertoAnuncios(true);
    }, 6000);
  }, [])

  return (
    <>
      <Head>
        <html lang="es" />
        <title>
        Impresión de Etiquetas | Etiquetas Adhesivas | Fabricación de Etiquetas
        </title>
        <meta
          name="description"
          content="Somos especialistas en la impresión de etiquetas. Impresión térmico directo y transferencia térmica. Impresión de etiquetas en poliolefina, polipropileno, poliéster, poliamida y papel. Impresión de etiquetas para el sector automotriz, control de productos, manufactura, salud, textil y más. Impresión de etiquetas con adhesivos permanentes, removibles y de alta adherencia. Impresión de etiquetas capaces de resistir bajas y altas temperaturas.¡LLame ahora, asistencia inmediata! "
        />
        <link rel="shortcut icon" href="/logo-copia.png" />
        <meta
          name="keywords"
          content="Impresión, etiquetas, adhesivas, fabricacion, policarbonato, PET, holograma de seguridad, credencialización, tarjetas plásticas, elaboración, diseño, impresiones, Certificado, covid, código QR, empresas, instituciones educativas, asociaciones, eventos, control de acceso, materiales resistentes, materiales duraderos, a domicilio, cotización, identificación."
        />
        <meta name="robots" content="index,follow,all" />
        <meta
          property="og:title"
          content="Hand held para Inventarios | Renta de PDA | Arrendamiento de HandHelds | Terminales Portátiles"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/42K3Zdn/logo-copia.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Somos especialistas en la impresión de etiquetas. Impresión térmico directo y transferencia térmica. Impresión de etiquetas en poliolefina, polipropileno, poliéster, poliamida y papel. Impresión de etiquetas para el sector automotriz, control de productos, manufactura, salud, textil y más. Impresión de etiquetas con adhesivos permanentes, removibles y de alta adherencia. Impresión de etiquetas capaces de resistir bajas y altas temperaturas.¡LLame ahora, asistencia inmediata!"
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
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KXHWDC2');`,
          }}
        ></script>*/}

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

      <EtiquetasH />

      <ContenedorFlexa>
        <TextoEtiquetas />
        <FormEtiquetas />
      </ContenedorFlexa>

      <ContenedorBotona>
        <BotonFundas />
      </ContenedorBotona>

      <ContenedorFlex>
        <Ubicacion />
        <Servicios />
      </ContenedorFlex>
      <MapaDuns />
      <Footer />

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
          {/* <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/cupon de descuento 2022.gif"
                alt="cupon de descuento 2022"
              />
            </Carousel.Item>
            <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Banner Promo 3x2.gif"
                alt="Banner Promo 3x2"
              />
            </Carousel.Item>
            <Carousel.Item>
               <img
                className="d-block w-100"
                src="/img/Banner Promo 2x1.gif"
                alt="Banner Promo 2x1"
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
                alt="Renta de Impresora de etiquetas IMZ320"
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
           {/*  <Carousel.Item>
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
    
    </>
  );
};

export default Etiquetas;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Modal, Carousel, Button } from "react-bootstrap";
import styled from "@emotion/styled";
import Router from "next/router";

const Layout = (props) => {
  const Puntero = styled.a`
    cursor: pointer;
  `;

  const ImgModal = styled.img`
    max-width: 100% !important;
    min-width: 100% !important;
    max-height: 100% !important;
    min-height: 100% !important;
  `;

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
    const URLactual = window.location;
    const primera = URLactual.hash;

    const redirigirH = () => {
      Router.push("#home");

    };



    /* const LS = () => { codigo para cuando se quiten los cupones se descomenta esto

            if(!sessionStorage.getItem('mostrarModal')){
                sessionStorage.setItem("mostrarModal","no");
                //cambiarAbiertoCupon(true);

                setTimeout(() => {
                    cambiarAbiertoAnuncios(true);
                }, 10000);
                
                return;
            }
        }*/

    if (
      primera === "#renta" ||
      primera === "#reparacion" ||
      primera === "#venta"
    ) {
      return;
    } else {
      redirigirH();
    }
    //LS();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      cambiarAbiertoAnuncios(true);
    }, 7000);
  }, [])


  const Redirigir = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#reparacion";
  };

  return (
    <>
      <Header />

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
                  href="https://www.youtube.com/embed/X8g7RBSSzCc"
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
                alt="Lector de códigos DS2278"
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
                alt="Hand Held MC9090"
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
                  alt="evolis impresoras de credenciales"
                />
              </Carousel.Item>
          {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/impresora_IMZ320.webp"
                  alt="Renta de Impresora  de etiquetas IMZ320"
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
                href="/img/Promoción_mc9090_funcional_po83sk.webp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgModal
                  className="d-block "
                  src="/img/Copia_de_ec50_y_ec55_en_web_kyx6mp.webp"
                  alt="Zebra EC50 EC55"
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
                  className="d-block"
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

     {/* { <Modal
        show={abiertoCupon}
        onHide={cerrarModalCupon}
        keyboard={false}
        size="md"
        className="modal-altura ppp"
      >
        <Modal.Body>
          <ImgModal src="img/cupon2022.webp" alt="cupon hand held" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalCupon}>
            Cerrar
          </Button>
        </Modal.Footer>
     </Modal> } */}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

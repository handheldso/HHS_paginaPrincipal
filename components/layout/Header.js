import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/head";
import Tarjeta from "../layout/Tarjeta";
import TarjetaDos from "../layout/TarjetaDos";
import { Modal, Carousel, Button, Navbar, Nav, NavDropdown, Item } from "react-bootstrap";
import Router from "next/router";

import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const Bienvenido = styled.div`
    min-width: 100% !important;
    background-color: #0076c0;
    display: flex;
    padding-top: 11px;
  `;

  const TextoBienvenido = styled.h1`
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-left: 25px;
    margin-top: 4px;
    font-family: "Raleway", sans-serif;

    @media (max-width: 1950px) {
        font-size: 19px;
    }

    @media (max-width: 881px) {
      margin-top: 0px;
    }
  `;

  const SocialMedia = styled.div`
    height: 100%;
    display: flex;
    margin-bottom: 10px;

    @media (max-width: 481px) {
      margin-bottom: 0px;
    }

    @media (max-width: 428px) {
      margin-bottom: 8px;
    }
  `;

  const LogoRedes = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 25px;

    @media (max-width: 1950px) {
        width: 25px;
        height: 25px;
    }
  `;

  const LogoRedesYT = styled.img`
    width: 50px;
    height: 40px;
    margin-right: 25px;

    @media (max-width: 1950px) {
        width: 30px;
        height: 25px;
    }
  `;

  const HeaderContacto = styled.div`
    background-color: white;
    min-width: 100% !important;
  `;

  const Logo = styled.img`
    height: 93px;

    @media (max-width: 1950px) {
        height: 120px;
    }

    @media (max-width: 450px) {
      height: 80px;
    }

    @media (max-width: 350px) {
      height: 65px;
    }
  `;
  const LogoC= styled.img`
    height: 93px;

    @media (max-width: 1950px) {
        height: 120px;
    }

    @media (max-width: 450px) {
      height: 80px;
    }

    @media (max-width: 350px) {
      height: 60px;
    }
  `;

  const Llamanos = styled.p`
    font-size: 20px;
    color: black;
    font-weight: bold;
    text-align: center;
    padding-top: 5px;
    margin:0px;
    

    @media (max-width: 1950px) {
        font-size: 18px;
        padding-top: 0px;
    }

    @media (max-width: 991px) {
      margin-right: 11px;
      margin-left: 0px;
    }

    @media (max-width: 781px) {
      font-size: 18px;
      margin-right: 11px;
      margin-left: 22px;
    }

    @media (max-width: 450px) {
      font-size: 12px;
      margin-right: 5px;
      margin-left: 19px;
    }

    @media (max-width: 300px) {
      margin-right: 5px;
      margin-left: 0px;
    }
  `;

  const Numero = styled.a`
    width: 100%;
    margin-top: 15px;
    margin-bottom: 10px;
    
  `;

  const NumeroResponsive = styled.a`
    margin-top: 0px;
    margin-bottom: 10px;

    @media (max-width: 781px) {
      width: 100%;
      font-size: 13px !important;
    }

    @media (max-width: 540px) {
      width: 100%;
      font-size: 11px !important;
    }

    @media (max-width: 450px) {
      width: 46%;
      font-size: 9px !important;
    }
  `;

  const BotonCorreo = styled.a`
    text-align: center;
    font-size: 17px;
    height: auto;
    width: 64%;
    margin: 0px auto;
    font-weight: bold;

    @media (max-width: 1950px) {
        font-size: 16px !important;
    }
  `;

  const BotonCorreoResponsive = styled.a`
    text-align: center;
    font-size: 17px;
    height: auto;
    width: 64%;
    margin: 0px auto;
    font-weight: bold;

    @media (max-width: 781px) {
      width: 43%;
      font-size: 13px !important;
      height: 32px;
    }

    @media (max-width: 540px) {
      width: 39%;
      font-size: 11px !important;
    }

    @media (max-width: 450px) {
      width: 40%;
      font-size: 9px !important;
      height: 26px;
    }
  `;

  const Direccion = styled.p`
    background-color:black
    padding-top: 11px;
    text-align: center;
    width: 100%;
    heigth: auto !important;
    margin: 10px auto;
    font-size: 12pt !important;
    font-weight:bold;
    color:#007ac0;
    text-transform:uppercase;

    @media (max-width: 1950px) {
      font-size: 14px;
    }
  `;

  const Menu = styled.div`
    height: auto;
    background-color: black;
    padding-top: 5px;

    @media (max-width: 1950px) {
      height: auto;
      padding-top: 3px;
    }

  `;

  const MenuRes = styled.div`
    height: 37px;
    background-color: black;
    padding-top: 5px;
  `;

  const Pestanas = styled.nav`
    justify-content: center;
    margin-top: -4px;
    max-height: 50px;
  `;

  const PestanasLista = styled.ul`
    display: flex;
    height: auto;
    justify-content: center;
    text-decoration: none;
    list-style: none;
  `;

  const Puntero = styled.a`
    cursor: pointer;
  `;

  const ImgModal = styled.img`
    max-width: 100% !important;
    min-width: 100% !important;
    max-height: 100% !important;
    min-height: 100% !important;
  `;

  const TitulosHeader = styled.p`
    margin-top: 0px !important;
  `;

  const size = useWindowSize();

  const [abiertoAnuncios, cambiarAbiertoAnuncios] = useState(false);
  const [abiertoPromociones, cambiarPromociones] = useState(false);

  const abrirModal = () => {
    cambiarAbiertoAnuncios(true);
  };

  const cerrarModal = () => {
    cambiarAbiertoAnuncios(false);
  };

  const abrirModalPromociones = () => {
    cambiarPromociones(true);
  };

  const cerrarModalPromociones = () => {
    cambiarPromociones(false);
  };

  const Redirigir = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#reparacion";
  };

  const RedirigirContacto = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#contacto";

    Router.push("#home");
  };

  const RedirigirVideos = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#videos";

    Router.push("#home");
  };

  const RedirigirIMG = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#puntoa";

    Router.push("#home");
  };

  const RedirigirInicio = (e) => {
    e.preventDefault();

    cambiarAbiertoAnuncios(false);

    document.location.href = "/#puntoa";

    Router.push("#home");
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </Head>
      <span id="puntoa"></span>
      <section id="header" className="sticky-top">
        <div id="headerdos">
          <Bienvenido className="justify-content-between">
            <div className="divBienvenido">
              <TextoBienvenido id="welcome">
                Bienvenido a Hand Held Solutions
              </TextoBienvenido>
            </div>
            <SocialMedia>
              <div id="wa">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/message/KZSHX5FOWASGF1"
                >
                  <LogoRedes
                    className="redes"
                    src="/img/whats_lstqed.webp"
                    alt="logo whatsapp"
                  />
                </a>
              </div>
              <div id="fb">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/HandHeldSolutionsOficial"
                >
                  <LogoRedes
                    className="redes"
                    src="/img/2_rr6fgz.webp"
                    alt="logo facebook"
                  />
                </a>
              </div>
              <div id="in">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/handheldsolutions/"
                >
                  <LogoRedes
                    className="redes"
                    src="/img/in_wfa2x2.webp"
                    alt="logo linkedin"
                  />
                </a>
              </div>
              <div id="yt">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCjVPKTVVs0N-oVpuLizEFaw"
                >
                  <LogoRedesYT
                    className="redes"
                    src="/img/youtube_o75y4f.webp"
                    alt="logo youtube"
                  />
                </a>
              </div>

              <div id="tiktok">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@handheldsolutionshhs"
                >
                  <LogoRedes
                    className="redes"
                    src="/img/tiktok-icon.webp"
                    alt="logo tiktok"
                  />
                </a>
              </div>
			  
              <div id="instagram">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hand_held_solutions/"
                >
                  <LogoRedes
                    className="redes"
                    src="/img/instagram-icon.webp"
                    alt="logo instagram"
                  />
                </a>
              </div>
              <div id="Twitter">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/HandHSolutions"
                >
                  <LogoRedes
                    className="redes"
                    src="/img/Twitter-logo.webp"
                    alt="logo instagram"
                  />
                </a>
              </div>

            </SocialMedia>
          </Bienvenido>
          <HeaderContacto>
            <div className="separacion">
              <div>
                <a onClick={RedirigirIMG}>
                  <Logo
                    src="/img/LOGO-HHS.webp"
                    alt="Logo hand held solutions"
                  />
                </a>
              </div>
              {size < 991 ? (
                <div className="address">
                  <div className="haber">
                    <Llamanos><label>¡Llámanos!</label></Llamanos>
                    <NumeroResponsive
                      className="btn btn-primary"
                      role="button"
                      href="tel: (55) 55 5115 6043"
                    >
                      <strong>(+52) 55 5115 6043</strong>
                    </NumeroResponsive><br/>
                    <BotonCorreoResponsive
                    className="btn btn-primary btn-block b-cont"
                    href="#contacto"
                  >
                    <strong>contacto@handheldsolutions.com.mx</strong>
                    </BotonCorreoResponsive>
                  </div>
                  <LogoC
                    src="/img/Logotipo Centro de Servicio Autorizado.png"
                    alt="Centro de Servicio Autorizado"
                  />
                  
                </div>
              ) : (
                <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="llamanos">
                    <Llamanos><label>¡Llámanos!</label></Llamanos>
                    <Numero
                      className="btn btn-primary numno"
                      role="button"
                      href="tel:(55) 55 5115 6043"
                    >
                      <strong>(+52) 55 5115 6043</strong>
                    </Numero><br />
                    <BotonCorreo
                      href="#contacto"
                      className="btn btn-primary btn-block b-cont tam"
                    >
                      <strong>contacto@handheldsolutions.com.mx</strong>
                    </BotonCorreo>
                  </div>
                  <div className="address">
                   
                      {/* <Direccion className="le">
                      
                        <strong>
                        <div className="a">
                          <p>Dirección:</p>
                        </div>
                          Calle: Heriberto Frías #249, Col. Narvarte Poniente, <br />
                          Alcaldía: Benito Juarez C.P. 03020, CDMX México
                        </strong>
                        <br></br>
        
                        <br></br> 
                      </Direccion>*/}
                  </div>
                  <LogoC
                    src="/img/Logotipo Centro de Servicio Autorizado.png"
                    alt="Centro de Servicio Autorizado"
                  />
                </>
              )}
            </div>
          </HeaderContacto>
          {size < 800 ? <TarjetaDos /> : <Tarjeta />}
          
            {size < 995 ? 
            <MenuRes>
            <Navbar collapseOnSelect  expand='xxl' bg='dark' variant='dark' >
                <Navbar.Toggle aria-controls='responsive-navbar-nav' className="navbau"/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <NavDropdown title="Renta" id="basic-nav-dropdown" >
                      <NavDropdown.Item href="renta-de-handhelds">Handhelds</NavDropdown.Item>
                      <NavDropdown.Item href="renta-de-impresoras-de-etiquetas">Impresoras</NavDropdown.Item>
                      <NavDropdown.Item href="renta-de-lectores-de-codigos-de-barras">Lectores</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reparación" id="basic-nav-dropdown">
                      <NavDropdown.Item href="reparacion-de-handhelds">Handhelds</NavDropdown.Item>
                      <NavDropdown.Item href="reparacion-de-impresoras-de-etiquetas">Impresoras</NavDropdown.Item>
                      <NavDropdown.Item href="reparacion-de-lectores-de-codigos-de-barras">Lectores</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Venta" id="basic-nav-dropdown">
                      <NavDropdown.Item href="venta-de-handhelds">Handhelds</NavDropdown.Item>
                      <NavDropdown.Item href="venta-de-impresoras-de-etiquetas">Impresoras</NavDropdown.Item>
                      <NavDropdown.Item href="venta-de-lectores-de-codigos-de-barras">Lectores</NavDropdown.Item>
                      <NavDropdown.Item href="venta-de-accesorios-y-consumibles">Accesorios y Consumibles</NavDropdown.Item>
                      <NavDropdown.Item href="venta-fundas-handheld-impresora-portatil">Fundas</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link href="/DSD-venta-en-ruta">Solución DSD</Nav.Link>
                    <Nav.Link href="/venta-fundas-handheld-impresora-portatil">Fundas</Nav.Link>
                    <Nav.Link href="/impresion-credenciales-tarjetas-gafetes-pvc">Impresión de credenciales</Nav.Link>
                    <Nav.Link href="/impresion-etiquetas">Impresión de etiquetas</Nav.Link>
                    <Nav className="responmenu" onClick={abrirModalPromociones}>Promociones</Nav>
                    <Nav className="responmenu" onClick={abrirModal}>Anuncios</Nav>
                    <Nav className="responmenu" onClick={RedirigirVideos}>Videos</Nav>
                    <Nav className="responmenu" onClick={RedirigirContacto}>Contacto</Nav>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
          </MenuRes>
            : 
            <Menu>
            <Pestanas id="menu">
              <PestanasLista>
                <li>
                  <TitulosHeader className="enlaces" onClick={RedirigirInicio}>
                    Inicio
                  </TitulosHeader>
                </li>
                <li>
                  <TitulosHeader className="enlaces">Renta</TitulosHeader>
                  <ul>
                    <li>
                      <Link href="/renta-de-handhelds">
                        <a className="letras-enlaces">Handhelds</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/renta-de-impresoras-de-etiquetas">
                        <a className="letras-enlaces">Impresoras</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/renta-de-lectores-de-codigos-de-barras">
                        <a className="letras-enlaces">Lectores</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <TitulosHeader className="enlaces">Reparación</TitulosHeader>
                  <ul>
                    <li>
                      <Link href="/reparacion-de-handhelds">
                        <a className="letras-enlaces">Handhelds</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/reparacion-de-impresoras-de-etiquetas">
                        <a className="letras-enlaces">Impresoras</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/reparacion-de-lectores-de-codigos-de-barras">
                        <a className="letras-enlaces">Lectores</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <TitulosHeader className="enlaces">Venta</TitulosHeader>
                  <ul>
                    <li>
                      <Link href="/venta-de-handhelds">
                        <a className="letras-enlaces">Handhelds</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/venta-de-impresoras-de-etiquetas">
                        <a className="letras-enlaces">Impresoras</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/venta-de-lectores-de-codigos-de-barras">
                        <a className="letras-enlaces">Lectores</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/venta-de-accesorios-y-consumibles">
                        <a className="letras-enlaces">Accesorios y Consumibles</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/venta-fundas-handheld-impresora-portatil">
                        <a className="letras-enlaces">Fundas</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/DSD-venta-en-ruta">
                    <TitulosHeader className="enlaces">
                      Solución DSD
                    </TitulosHeader>
                  </Link>
                </li>
                <li>
                  <Link href="/venta-fundas-handheld-impresora-portatil">
                    <TitulosHeader className="enlaces">
                      Fundas
                    </TitulosHeader>
                  </Link>
                </li>
                <li>
                  <Link href="/impresion-credenciales-tarjetas-gafetes-pvc">
                    <TitulosHeader className="enlaces">
                    Impresión credenciales
                    </TitulosHeader>
                  </Link>
                </li>
                <li>
                  <Link href="/impresion-etiquetas">
                    <TitulosHeader className="enlaces">
                    Impresión etiquetas
                    </TitulosHeader>
                  </Link>
                </li>
                <li>
                  <TitulosHeader
                    className="enlaces"
                    onClick={abrirModalPromociones}
                  >
                    Promociones
                  </TitulosHeader>
                </li>
                <li>
                  <TitulosHeader className="enlaces" onClick={abrirModal}>
                    Anuncios
                  </TitulosHeader>
                </li>
                <li>
                  <TitulosHeader
                    className="enlaces"
                    onClick={RedirigirVideos}
                  >
                    Videos
                  </TitulosHeader>
                </li>

                <li>
                  <TitulosHeader
                    className="enlaces"
                    onClick={RedirigirContacto}
                  >
                    Contacto
                  </TitulosHeader>
                </li>
              </PestanasLista>
            </Pestanas>
            </Menu>
            }
          
        </div>

        <Modal
          show={abiertoAnuncios}
          onHide={cerrarModal}
          keyboard={false}
          size="lg"
          className="modal-altura"
        >
          <Modal.Header closeButton>
            <Modal.Title> Anuncios</Modal.Title>
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
                src="/img/CT40 Honeywell.png"
                alt="Handheld CT40"
              />
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
                src="/img/Banner Promo 2x1.gif"
                alt="Banner Promo 2x1"
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
                  src="/img/impresoras_epson.webp"
                  alt="Impresoras Epson"
                />
              </Carousel.Item>
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
                  alt="Renta de Impresora IMZ320"
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

        <Modal
          show={abiertoPromociones}
          onHide={cerrarModalPromociones}
          keyboard={false}
          size="lg"
          className="modal-altura"
        >
          <Modal.Header closeButton>
            <Modal.Title>Promociones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
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
                src="/img/Banner Promo 2x1.gif"
                alt="Banner Promo 2x1"
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
                src="/img/cupon de descuento 2022.gif"
                alt="cupon de descuento 2022"
              />
            </Carousel.Item> */}
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
                src="/img/Renta de handheld MC33.webp"
                alt="Renta de handheld MC33"
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
                alt="Lector DS2278"
              />
            </Carousel.Item> */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/Promoción_CN51.webp"
                  alt="Hand Held Intermec Honeywell CN51"
                />
              </Carousel.Item>
            {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/Promoción_CK65.webp"
                  alt="Hand Held CK65"
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/cuponbanner.webp"
                  alt="Hand Held MC9190"
                />
              </Carousel.Item> */}
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/Promoción_MC9190_sricb6.webp"
                  alt="Hand Held MC9190"
                />
              </Carousel.Item> */}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={cerrarModalPromociones}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default Header;

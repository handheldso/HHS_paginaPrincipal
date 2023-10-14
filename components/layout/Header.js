import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Head from "next/head";
import Tarjeta from "../layout/Tarjeta";
import TarjetaDos from "../layout/TarjetaDos";
import { Modal, Carousel, Button, Navbar, Nav, NavDropdown, Item} from "react-bootstrap";
import Router from "next/router";

import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  useEffect(()=>{
    const body = document.body;
    const sup = "scroll-up"
    const sdown = "scroll-down"

    window.addEventListener("scroll",()=>{
      const b = window.pageYOffset;
      if(b == 0){
        body.classList.remove(sdown);
        body.classList.add(sup);
        return;
      }else{
        body.classList.remove(sup)
        body.classList.add(sdown)
      }
    })
    
  })
  const ImgRedes = styled.img`
    width: 30px;
    aspect-ratio: 3/2;
    object-fit: contain;
  `
  const ImgBandera = styled.img`
  width: 25px;
  margin:5px

`
  const ImgLogos = styled.img`
    width: 150px;
    aspect-ratio: 3/2;
    object-fit: contain;
  `

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

  @media (max-width: 1950px) {
      font-size: 18px;
      padding-top: 0px;
  }

  @media (max-width: 991px) {
    margin-right: 11px;
    margin-left: 32px;
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
  margin-top: -15px;
  
`;

const NumeroResponsive = styled.a`
  margin-top: 0px;
  margin-bottom: 10px;

  @media (max-width: 781px) {
    width: 44%;
    font-size: 13px !important;
  }

  @media (max-width: 540px) {
    width: 45%;
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
  height: 38px;
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
  height: 38px;
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
  font-size: 14px;
  padding-top: 11px;
  text-align: center;
  width: 100%;
  margin: 0px auto;

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

  
  return(
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
    <header id="header">
      <nav className={` nav_redes navbar navbar-expand-lg bg-dark border-bottom border-body nav_redes nav_donw`}>
        
        <div className="container-fluid">
        <button type="button" class="btn btn-outline-light navbar-brand col-12 order-sm-12 order-lg-0 col-lg-2 col-xl-2 order-12 order-lg-0" >
        <ImgBandera
          className={``}
          src="https://res.cloudinary.com/dihawqrnt/image/upload/v1691015774/HHSv2.1/banderas/bandera_mexico.png"
          alt="icono de la bandera mexico"
        />
          <strong><label>Tel.: 55 51 15 60 43</label></strong></button>
          <div className={`nav collapse navbar-collapse d-block nav_redes col-xl-6`} id="navbarSupportedContent">
                <Link href="https://wa.me/message/KZSHX5FOWASGF1" target='_blank'>
                    <ImgRedes
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wtapp"
                        alt="icono de whatsapp"
                    />
                </Link>
                <Link href="https://www.facebook.com/HandHeldSolutionsOficial" target='_blank'>
                    <ImgRedes
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/fb"
                        alt="icono facebook"
                    />
                </Link>
                <Link href="https://www.linkedin.com/company/handheldsolutions/" target='_blank'>
                    <ImgRedes
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/In"
                        alt="icono linkedin"
                    />
                </Link>
                <Link href="https://www.youtube.com/channel/UCjVPKTVVs0N-oVpuLizEFaw" target='_blank'>
                    <ImgBandera
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/v1690997560/HHSv2.1/Logos-redes/yt_blanco.png"
                        alt="icono youtube"
                    />
                </Link>
                <Link href="https://www.tiktok.com/@handheldsolutionshhs" target='_blank'>
                    <ImgRedes
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tiktok"
                        alt="icono tiktok"
                    />
                </Link>
                <Link href="https://www.instagram.com/hand_held_solutions/" target='_blank'>
                    <ImgRedes
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/ig"
                        alt="icono instagram"
                     />
                </Link>
                <Link href="https://twitter.com/HandHSolutions" target='_blank'>
                    <ImgRedes
                        className={``}
                        src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/twitter"
                        alt="icono twitter"
                    />
                </Link>       
            </div>
            <button type="button" class="btn btn-outline-light col-12 col-lg-2 col-xl-3" href="#contacto"><strong>contacto@handheldsolutions.com.mx</strong></button>
        </div>
    </nav>
    <nav className={` navbar navbar-expand-lg bg-body-tertiary navbarmenu nav_menu nav_contacto`} id="nav_menu">
            <div className="container-fluid ">
                <ImgLogos src='https://res.cloudinary.com/dihawqrnt/image/upload/v1690567675/HHSv2.1/logo_hhs.webp' alt='Logo HandHeldSolutions' className={` navbar-brand `}/>
                <div className='order-sm-12 order-12 order-lg-0' id="navbarNav">
                <strong>
                  <h4>Direccion:</h4>
                        Calle. Palenque,&nbsp;Col. Letrán Valle, Alcaldía Benito
                        Juárez&nbsp;CDMX, C.P. 03650, México
                </strong>
                      
                </div>
                <div className="d-flex">
                    <ImgLogos src='https://res.cloudinary.com/dihawqrnt/image/upload/v1690567956/HHSv2.1/logo_newland.png' alt='Logo Newland' className={`navbar-brand`} />
                </div>
            </div>
    </nav>
    <Tarjeta className="" />
     <Navbar id="nav-menu" className="nav_donw" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
        <Nav.Item>
        <Nav.Link eventKey="1" href="/">
          Inicio
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Renta" id="nav-dropdown">
        <NavDropdown.Item href="renta-de-handhelds">HandHelds</NavDropdown.Item>
        <NavDropdown.Item href="renta-de-impresoras-de-etiquetas">Impresoras</NavDropdown.Item>
        <NavDropdown.Item href="renta-de-lectores-de-codigos-de-barras">Lectores</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Venta" id="nav-dropdown">
        <NavDropdown.Item href="venta-de-handhelds">HandHelds</NavDropdown.Item>
        <NavDropdown.Item href="venta-de-impresoras-de-etiquetas">Impresoras</NavDropdown.Item>
        <NavDropdown.Item href="venta-de-lectores-de-codigos-de-barras">Lectores</NavDropdown.Item>
        <NavDropdown.Item href="venta-de-accesorios-y-consumibles">Accesorios y Consumibles</NavDropdown.Item>
        <NavDropdown.Item href="venta-fundas-handheld-impresora-portatil">Fundas</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Reparacion" id="nav-dropdown">
        <NavDropdown.Item href="reparacion-de-handhelds">HandHelds</NavDropdown.Item>
        <NavDropdown.Item href="reparacion-de-impresoras-de-etiquetas">Impresoras</NavDropdown.Item>
        <NavDropdown.Item href="reparacion-de-lectores-de-codigos-de-barras">Lectores</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link href="/DSD-venta-en-ruta">
          Solucion DSD
        </Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/venta-fundas-handheld-impresora-portatil" >
          Fundas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/impresion-credenciales-tarjetas-gafetes-pvc" >
          Impresiones Credenciales
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/impresion-etiquetas" >
          Impresiones Etiquetas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={abrirModal} >
          Promociones
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={RedirigirVideos} >
          Videos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={RedirigirContacto} >
          Contacto
        </Nav.Link>
      </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
   
    </header>
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
                src="/img/Handheld EDA52.png"
                alt="Handheld EDA52"
              />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/Promoción_mc9090_funcional_po83sk.webp"
                  alt="Hand Held MC9090"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/Promoción_CN51.webp"
                  alt="Hand Held Intermec Honeywell CN51"
                />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={cerrarModal}>
              Cerrar
            </Button>
          </Modal.Footer>
    </Modal>
    </>
)}
export default Header;

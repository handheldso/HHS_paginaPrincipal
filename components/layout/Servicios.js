import React, { useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button, Carousel } from "react-bootstrap";

const Servicios = () => {
  const Servicios = styled.div`
    margin-top: 2rem;
  `;

  const ServiciosDif = styled.div`
    text-align: center;
    font-size: 18px;
  `;

  const Eslogan = styled.p`
    font-weight: bold;
    font-size: 25px;
  `;

  const Sello = styled.div`
    width: 100%;
    margin-bottom: 3.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  `;

  const IMG = styled.img`
    width: 35%;

    @media (max-width: 650px) {
      width: 60%;
    }

    @media (max-width: 410px) {
      width: 70%;
    }
  `;

  const IMGDSD = styled.img`
    width: 30%;
    cursor: pointer;

    @media (max-width: 650px) {
      width: 60%;
    }
  `;

  const IMGID = styled.img`
    width: 30%;
    cursor: pointer;

    @media (max-width: 650px) {
      width: 60%;
    }
  `;

  const RRV = styled.div`
    margin-top: 2rem;
    width: 100%;
    margin: auto;
    //border: 1px solid red;
  `;

  const Card = styled.div`
    margin-bottom: 20px;
    width: 20%;

    margin: auto;

    @media (max-width: 1409px) {
      width: 80%;
    }

    @media (max-width: 900px) {
      margin-bottom: 3.5rem;
    }
  `;

  const CardImg = styled.img`
    box-shadow: 0px 1px 5px black;
    border-radius: 1rem !important;
    width: 70%;
    max-height: 160px;
  `;

  const CardTitulo = styled.h5`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 26px;
  `;

  const CardTexto = styled.p`
    font-size: 16px;
    text-align: left;

    @media (max-width: 1409px) {
      text-align: center;
      padding: 5px;
    }

    @media (max-width: 992px) {
      text-align: center;
    }

    @media (max-width: 585px) {
      font-size: 15px;
    }
  `;

  const Informacion = styled.a`
    font-size: 18px;
    max-width: 100% !important;
    color:#fff !important;
  `;

  const TextDiv = styled.div`
    width: 40%;
    margin: 0px auto;

    @media (max-width: 1400px) {
      width: 100%;
    }

    @media (max-width: 960px) {
      width: 70%;
    }

    @media (max-width: 634px) {
      width: 60%;
    }

    @media (max-width: 450px) {
      width: 75%;
    }
  `;

  const Text = styled.p`
    font-size: 19px;
    font-weight: bold;

    @media (max-width: 960px) {
      font-size: 16px;
    }

    @media (max-width: 899px) {
      font-size: 14px;
    }

    @media (max-width: 699px) {
      font-size: 12px;
    }

    @media (max-width: 450px) {
      font-size: 10px;
    }
  `;

  const [abiertoModal, cambiarAbiertoModal] = useState(false);
  const [abiertoModalD, cambiarAbiertoModalD] = useState(false);
  const [abiertoModalE, cambiarAbiertoModalE] = useState(false);
  const [abiertoModalTg, cambiarAbiertoModalTg] = useState(false);

  const abrirModal = () => {
    cambiarAbiertoModal(true);
  };

  const cerrarModal = () => {
    cambiarAbiertoModal(false);
  };

  const abrirModalD = () => {
    cambiarAbiertoModalD(true);
  };

  const cerrarModalD = () => {
    cambiarAbiertoModalD(false);
  };

  const abrirModalE = () => {
    cambiarAbiertoModalE(true);
  };

  const cerrarModalE = () => {
    cambiarAbiertoModalE(false);
  };

  const abrirModalTg = () => {
    cambiarAbiertoModalTg(true);
  };

  const cerrarModalTg = () => {
    cambiarAbiertoModalTg(false);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>
      <section>
        <Servicios>
          <ServiciosDif>
            <p>
              Hand Held Solutions cuenta con años de experiencia ofreciendo los
              servicios de renta, reparación y venta de Hand Held´s, lectores de
              códigos 1D y 2D, impresoras industriales, de escritorio y
              portátiles. Contamos con los accesorios y consumibles adecuados
              para cada equipo.
              <br />  
            </p>
            <Sello>
              <div className="idsd mtoop">
                <IMGDSD
                  src="/img/iconodsd.webp"
                  alt="garanti hand held"
                  onClick={abrirModal}
                />
                <TextDiv>
                  <Text>Conozca nuestra "Solución DSD" para venta en ruta</Text>
                </TextDiv>
              </div>
              <div className="idsd mtoop">
                <IMGDSD
                  src="/img/impresión de credenciales.webp"
                  alt="garanti hand held"
                  onClick={abrirModalE}
                />
                <TextDiv>
                  <Text>Impresion de Credenciales</Text>
                </TextDiv>
              </div>

              {/* ICONO GARANTIA
              <div className="idsd">
                <IMG src="/img/sellogarantia.webp" alt="garanti hand held" />
              </div>
             */}

              
              {
              <div className="idsd mtoop">
                <IMGDSD
                  src="/img/Icono_etiquetas.webp"
                  alt="garanti hand held"
                  onClick={abrirModalTg}
                />
                <TextDiv>
                  <Text>Impresion de Etiquetas</Text>
                </TextDiv>
              </div>
            }
              
              <div className="idsd mtoop">
                <IMGID
                  src="/img/funda.webp"
                  alt="garanti hand held"
                  onClick={abrirModalD}
                />
                <TextDiv>
                  <Text>Venta de fundas</Text>
                </TextDiv>
              </div>
            </Sello>
            <Eslogan>¡FÁCIL, RÁPIDO Y FLEXIBLE!</Eslogan>
          </ServiciosDif>
          <RRV className=" mt-5">
            <div className="cardds">
              <Card className="text-center">
                <CardImg
                  src="/img/Renta handheld lector de codigos.webp"
                  alt="Renta de Hand Held Impresoras de Etiquetas y Lectores de codigo de barras"
                />
                <CardTitulo className="text-center pt-2">
                  Renta de equipo
                </CardTitulo>
                <CardTexto className="pt-3">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  ¡Primero tendrá el equipo en operación y después realizará el
                  pago! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Sin depósito inicial
                  e incluye todos los accesorios necesarios! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Reparaciones por uso
                  normal y accidentes sin costo adicional! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Puede cancelar en
                  cualquier momento y sin penalización! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Renta de handhelds, lectores de códigos de barras,
                  impresoras de etiquetas y credenciales! <br />
                </CardTexto>
                <Informacion
                  className="btn btn-primary btn-lg mt-3 mim"
                  role="button"
                  href="#renta"
                >
                  Más Información
                </Informacion>
              </Card>

              <Card className=" text-center">
                <CardImg
                  src="/img/Reparacion handheld lector de codigos.webp"
                  alt="Reparacion de Hand Held Impresoras de Etiquetas y Lectores de codigo de barras"
                />
                <CardTitulo className="text-center pt-2">
                  Reparación de equipo
                </CardTitulo>
                <CardTexto className="pt-3">
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Diagnóstico sin
                  costo y reparaciones en tres días!
                  <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Primero le reparamos
                  y entregamos su equipo y después realiza el pago! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Reparación
                  en sus instalaciones sin costo adicional! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Nuestras
                  reparaciones cuenta con garantía 100! (100 días de garantía)!
                  <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Soporte técnico en sitio, sin costo, 
                  dentro del área metropolitana! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Reparación de handhelds, lectores de códigos de barras,
                  impresoras de etiquetas y credenciales! <br />
                </CardTexto>
                <Informacion
                  className="btn btn-primary btn-lg mt-3 mim"
                  role="button"
                  href="#reparacion"
                >
                  Más Información
                </Informacion>
              </Card>

              <Card className=" text-center">
                <CardImg
                  src="/img/Venta handheld lector de códigos.webp"
                  alt="Venta de Hand Held Impresoras de Etiquetas y Lectores de codigo de barras"
                />
                <CardTitulo className="text-center pt-2">
                  Venta de equipo
                </CardTitulo>
                <CardTexto className="pt-3">
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Los mejores precios,
                  crédito y planes de financiamiento! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Equipo demo sin
                  costo para pruebas en sus instalaciones! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Seguimiento hombro a
                  hombro durante pruebas e implementaciones! <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Soporte técnico
                  preventa y postventa con línea directa las 24 horas!
                  <br />
                  <br />
                  <FontAwesomeIcon icon={faCheckCircle} /> ¡Venta de handhelds, lectores de códigos de barras,
                  impresoras de etiquetas y credenciales! <br />
                </CardTexto>
                <Informacion
                  className="btn btn-primary btn-lg mt-3 mim"
                  role="button"
                  href="#venta"
                >
                  Más Información
                </Informacion>
              </Card>
            </div>
          </RRV>
        </Servicios>
      </section>

      <Modal
        show={abiertoModal}
        onHide={cerrarModal}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Conozca nuestra "Solución DSD" para venta en ruta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Adquiera la "Solución DSD" para venta en ruta. Herramienta tecnológica
          que le permitirá administrar sus visitas, tiempos de entrega e
          inventario en todo momento de la ruta. Controle a su fuerza de ventas
          y monitoree su desempeño con nuestra aplicación "Direct Store
          Delivery". Implemente el software que cumplirá con sus necesidades y
          disponga sin costo adicional de la renta de una handheld e impresora
          portátil.
          <div className="botmodal">
            <Link href="/DSD-venta-en-ruta">
              <Button color="primary" w-50>
                ¡Conozcalo!
              </Button>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalD}
        onHide={cerrarModalD}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Venta de fundas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fabricamos las mejores fundas del mercado, diseñadas para cubrir sus
          necesidades. Adquiera la protección que sus equipos necesitan. Diseños
          de la mejor calidad, hechos con materiales de primera. Fundas
          fabricadas a las medidas de diferentes marcas y modelos, protección
          indispensable que ayudará a sus equipos a soportar caídas o daños
          accidentales.
          <div className="botmodal">
            <Link href="/venta-fundas-handheld-impresora-portatil">
              <Button color="primary" w-50>
                ¡Adquiera las fundas que necesite!
              </Button>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalD}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalTg}
        onHide={cerrarModalTg}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Conozca nuestro servicio para la Impresion de Etiquetas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Somos especialistas en la impresión de etiquetas. Impresión térmico directo y transferencia térmica. Impresión de etiquetas en poliolefina, polipropileno, poliéster, poliamida y papel. Impresión de etiquetas para el sector automotriz, manufactura, salud, textil, control de productos y más. Impresión de etiquetas con adhesivos permanentes, removibles y de alta adherencia. Impresión de etiquetas capaces de resistir bajas y altas temperaturas.
 ¡Llame ahora, asistencia inmediata! 
          <div className="botmodal">
            <Link href="/impresion-etiquetas">
              <Button color="primary" w-50>
              ¡Imprima las etiquetas que necesite!
              </Button>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalTg}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={abiertoModalE}
        onHide={cerrarModalE}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Impresion de credenciales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Somos especialistas en la elaboración, diseño e impresión de credenciales. 
        Contamos con tecnología avanzada para imprimir tarjetas con materiales altamente resistentes y duraderos, 
        que le dan a cada credencial una larga vida de uso. Impresión en PVC, PET y policarbonato. 
        Impresión de gafetes con holograma de seguridad para evitar falsificaciones y prevenir desgastes o malos usos. 
        Contamos con el beneficio de impresión de credenciales con un código QR para validar el certificado de vacunación 
        contra COVID-19. Credenciales ideales para empresas, instituciones educativas, asociaciones, eventos, seguridad y control de acceso. 
        Contamos con el beneficio de imprimir sus credenciales a domicilio. ¡Llame para más información!
          <div className="botmodal">
            <Link href="/impresion-credenciales-tarjetas-gafetes-pvc">
              <Button color="primary" w-50>
                ¡Imprima las credenciales que necesite!
              </Button>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalE}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Servicios;

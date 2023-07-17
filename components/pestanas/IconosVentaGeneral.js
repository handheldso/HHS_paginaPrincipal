import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

const IconosVentaGeneral = ({ unoi, unom, dosm, tresm, luno, ldos }) => {
  const Contenedor = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  `;

  const ContenedorD = styled.div`
    width: 100%;
    margin-top: 4rem;

    @media (max-width: 995px) {
      display: none;
    }
  `;

  const IconoDiv = styled.div`
    width: 60%;
    text-align: center;
    margin: 0px auto;
  `;

  const Icono = styled.img`
    width: 70%;
    cursor: pointer;
  `;

  const IconoDiv2 = styled.div`
    width: 47%;
    text-align: center;
  `;

  const Icono2 = styled.img`
    width: 46% !important;
    cursor: pointer;

    @media (max-width: 1400px) {
      width: 50% !important;
    }
  `;

  const TextDiv = styled.div`
    width: 80%;
    margin: 0px auto;

    @media (max-width: 1400px) {
      width: 100%;
    }
  `;

  const Text = styled.p`
    font-size: 19px;
    font-weight: bold;

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

  const OvaTexDiv = styled.div`
    width: 78%;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;
    margin: auto;
    cursor: pointer;

    @media (max-width: 899px) {
      display: none;
    }
  `;

  const OvaTex = styled.p`
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    color: white;

    @media (max-width: 1500px) {
      font-size: 19px;
    }

    @media (max-width: 1355px) {
      font-size: 17px;
    }

    @media (max-width: 1250px) {
      font-size: 15px;
    }
  `;

  const [abiertoModal, cambiarAbiertoModal] = useState(false);
  const [abiertoModalD, cambiarAbiertoModalD] = useState(false);
  const [abiertoModalT, cambiarAbiertoModalT] = useState(false);
  const [abiertoModalC, cambiarAbiertoModalC] = useState(false);
  const [abiertoModalCI, cambiarAbiertoModalCI] = useState(false);
  const [abiertoModalS, cambiarAbiertoModalS] = useState(false);
  const [abiertoModalSI, cambiarAbiertoModalSI] = useState(false);

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

  const abrirModalT = () => {
    cambiarAbiertoModalT(true);
  };

  const cerrarModalT = () => {
    cambiarAbiertoModalT(false);
  };

  const abrirModalC = () => {
    cambiarAbiertoModalC(true);
  };

  const cerrarModalC = () => {
    cambiarAbiertoModalC(false);
  };

  const abrirModalCI = () => {
    cambiarAbiertoModalCI(true);
  };

  const cerrarModalCI = () => {
    cambiarAbiertoModalCI(false);
  };

  const abrirModalS = () => {
    cambiarAbiertoModalS(true);
  };

  const cerrarModalS = () => {
    cambiarAbiertoModalS(false);
  };

  const abrirModalSI = () => {
    cambiarAbiertoModalSI(true);
  };

  const cerrarModalSI = () => {
    cambiarAbiertoModalSI(false);
  };

  return (
    <>
      <div className="otro">
        <Contenedor>
          <IconoDiv className="icon">
            <Icono
              src="/img/Crédito inicial y soporte técnico postventa.webp"
              alt="Crédito inicial y soporte técnico"
              onClick={abrirModal}
            />
            <TextDiv>
              <Text>
                Crédito y soporte <br />
                técnico postventa.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="i">
            <Icono
              src={unoi}
              alt="Sistema Operativo Android y Windows Mobile"
              onClick={abrirModalD}
            />
            <TextDiv>
              <Text>{unom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Asesoría comercial y técnica previa.webp"
              alt="Asesoría comercial y técnica"
              onClick={abrirModalT}
            />
            <TextDiv>
              <Text>
                Asesoría comercial y <br />
                técnica previa.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Seguimiento  hombro con  hombro durante pruebas e instalaciones.webp"
              alt="Pruebas e instalaciones"
              onClick={abrirModalC}
            />
            <TextDiv>
              <Text>
                Seguimiento hombro con hombro durante pruebas e implementación.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Equipo demo sin costo, para pruebas en sus instalaciones.webp"
              alt="Equipo demo sin costo"
              onClick={abrirModalCI}
            />
            <TextDiv>
              <Text>
                Equipo demo sin costo, <br />
                para pruebas en sus <br />
                instalaciones.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Los mejores precios del mercado.webp"
              alt="Mejores precios"
              onClick={abrirModalS}
            />
            <TextDiv>
              <Text>Los mejores precios del mercado.</Text>
            </TextDiv>
          </IconoDiv>
        </Contenedor>
        <div className="iconodivdos">
          <IconoDiv2 className="iconul top">
            <Icono2
              src="/img/Envio gratis.webp"
              alt="Envío gratis"
              onClick={abrirModalSI}
            />
            <TextDiv>
              <Text>
                Envío gratis
                <br /> a toda la República Mexicana.
              </Text>
            </TextDiv>
          </IconoDiv2>
        </div>
        <div className="DivR">
          <ContenedorD>
            <Link href={luno}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {dosm}
                  <br />
                  <span className="n">
                    ¡Conozca nuestro servicio de Reparación!
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={ldos}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {tresm}
                  <br />
                  <span className="n">¡Conozca nuestro servicio de Renta!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/venta-de-accesorios-y-consumibles">
              <OvaTexDiv className="b">
                <OvaTex>
                  Adquiera los accesorios y consumibles que necesita.
                  <br />
                  <span className="n">¡Contáctenos!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/DSD-venta-en-ruta">
              <OvaTexDiv className="b">
                <OvaTex>
                  Ponemos a su disposición la solución "DSD" para venta en ruta.
                  <br />
                  <span className="n">¡Conózcalo!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/impresion-credenciales-tarjetas-gafetes-pvc">
              <OvaTexDiv className="b">
                <OvaTex>
                Conozca nuestro servicio de impresion de credenciales
                  <br />
                  <span className="n">¡Conózcalo!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/venta-fundas-handheld-impresora-portatil">
              <OvaTexDiv>
                <OvaTex>
                  Contamos con fundas diseñadas a la medida para cumplir con sus
                  necesidades.
                  <br />
                  <span className="n">
                    ¡Adquiera la protección que sus equipos necesitan!
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
          </ContenedorD>
        </div>
      </div>

      <Modal
        show={abiertoModal}
        onHide={cerrarModal}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Crédito y soporte técnico postventa.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le otorgamos facilidades de pago, diferentes esquemas de
          financiamiento y tendrá a su disposición asistencia técnica sin costo,
          en todo momento.
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
          <Modal.Title>
            Handhelds adecuadas con sistema operativo Android y Windows Mobile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ponemos a su disposición handhelds con el sistema operativo que
          requiera, de esta forma se puedan adaptar adecuadamente a sus
          operaciones.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalD}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalT}
        onHide={cerrarModalT}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Asesoría comercial y técnica previa.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contamos con asesoría comercial y técnica personalizada en todo
          momento, para apoyarlo en la elección del equipo que mejor se adapte a
          sus necesidades y presupuesto. Nuestros asesores e ingenieros le
          brindarán una asistencia inmediata sin costo adicional y resolverán
          todas sus dudas.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalT}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalC}
        onHide={cerrarModalC}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Seguimiento hombro con hombro durante pruebas e implementación.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nos comprometemos a brindarle asistencia técnica y comercial sin costo
          en todo momento, para que pueda realizar las pruebas correspondientes
          y la implementación de cada equipo sea adecuada a sus necesidades.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalC}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalCI}
        onHide={cerrarModalCI}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Equipo demo sin costo, para pruebas en sus instalaciones.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ponemos a su disposición equipos demo sin costo, que le permitirán
          realizar pruebas en sus instalaciones. Nosotros lo asesoraremos para
          la elección del modelo que mejor se adapte a sus necesidades y
          funcione en su operación.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalCI}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalS}
        onHide={cerrarModalS}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Los mejores precios del mercado.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En Hand Held Solutions, nos comprometemos a brindarle los mejores
          precios, para nosotros es importante que cuente con los equipos
          requeridos a un precio accesible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalS}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={abiertoModalSI}
        onHide={cerrarModalSI}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Envío gratis a toda la República Mexicana.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contamos con envío gratis a toda la República Mexicana, nosotros le
          mandamos sin costo alguno, los equipos que vaya a rentar,
          diagnosticar, reparar o adquirir.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalSI}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IconosVentaGeneral;

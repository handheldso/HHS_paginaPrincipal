import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

const IconosRentaGeneral = ({
  unom,
  dosm,
  tresm,
  cuatrom,
  cincom,
  seism,
  sietem,
  ochom,
  nuevem,
  diezm,
  oncem,
  docem,
  trecem,
  catorcem,
  quincem,
  diezseism,
  diezsietem,
  luno,
  ldos,
  ltres,
  lcuatro,
  lcinco,
  ecem,
  ecuatro
}) => {
  const Contenedor = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 1700px) {
      margin-top: 4rem;
    }

    @media (max-width: 995px) {
      margin-top: 1rem;
    }
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
              src="/img/Crédito inicial y esquemas de pago.webp"
              alt="Crédito inicial y esquemas de pagos"
              onClick={abrirModal}
            />
            <TextDiv>
              <Text>{unom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="i">
            <Icono
              src="/img/Equipo de respaldo para asegurar los tiempos de reparación.webp"
              alt="Equipo de respaldo"
              onClick={abrirModalD}
            />
            <TextDiv>
              <Text>{dosm}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Póliza de reparación contra daños por uso normal y accidentes.webp"
              alt="Póliza de reparación Hand Held Impresora de Etiqueta y Lectores de Codigos"
              onClick={abrirModalT}
            />
            <TextDiv>
              <Text>{tresm}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Primero tendrá el equipo operando en sus instalaciones y después se tramitará el pago.webp"
              alt="Equipo operando en sus instalaciones"
              onClick={abrirModalC}
            />
            <TextDiv>
              <Text>{cuatrom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Equipo demo sin costo, para pruebas en sus instalaciones.webp"
              alt="Equipo demo sin costo"
              onClick={abrirModalCI}
            />
            <TextDiv>
              <Text>{cincom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/deducible de impuestos.webp"
              alt="100% deducible de impuestos"
              onClick={abrirModalS}
            />
            <TextDiv>
              <Text>{seism}</Text>
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
              <Text>{sietem}</Text>
            </TextDiv>
          </IconoDiv2>
        </div>
        <div className="DivR">
          <ContenedorD>
            <Link href={luno}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {ochom}
                  <br />
                  <span className="n">{nuevem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={ldos}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {diezm}
                  <br />
                  <span className="n">{oncem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={ltres}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {docem}
                  <br />
                  <span className="n">{trecem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={lcuatro}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {catorcem}
                  <br />
                  <span className="n">{quincem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>

            <Link href={ecuatro}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {ecem}
                  <br />
                  <span className="n">{quincem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>

            <Link href={lcinco}>
              <OvaTexDiv>
                <OvaTex>
                  {diezseism}
                  <br />
                  <span className="n">{diezsietem}</span>
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
          <Modal.Title>Crédito y esquemas de pagos.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En Hand Held Solutions le otorgamos facilidades y contamos con
          diferentes esquemas de financiamiento.
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
            Equipo de respaldo para asegurar su operación.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le otorgamos sin costo equipo de respaldo, en caso de que alguno de
          los equipos que está rentando o mande a reparación con nosotros,
          presente algún problema.
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
          <Modal.Title>
            Póliza de reparación contra accidentes mayores y uso normal.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nuestras pólizas le ofrecen mantenimiento preventivo y reparación de
          equipos ante fallas o accidentes mayores y caídas sobre concreto.
          Cuenta con reparaciones ilimitadas y soporte técnico vía telefónica
          para cualquier asistencia en fallas de configuración.
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
          <Modal.Title>Facilidades para su operación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Primero nos encargaremos de que usted cuente con los equipos
          requeridos lo antes posible y después tramitaremos el pago. En Hand
          Held Solutions nuestra prioridad siempre ha sido brindar a nuestros
          clientes la facilidad de realizar sus operaciones con lo último en
          tecnología.
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
          <Modal.Title>100% deducible de impuestos.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nuestro servicio de renta le permitirá contar con los equipos que
          requiera con una mínima inversión.
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
        w
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

export default IconosRentaGeneral;

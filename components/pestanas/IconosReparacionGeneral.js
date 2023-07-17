import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

const IconosReparacionGeneral = ({
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
  diezochom,
  luno,
  ldos,
  ltres,
  lcuatro,
  lcinco,
  euno,
  ecuatro
}) => {
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

  const Texto = styled.p`
    font-size: 25px;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 20px;
    }

    @media (max-width: 397px) {
      font-size: 18px;
    }

    @media (max-width: 350px) {
      font-size: 15px;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 70%;
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
  const [abiertoModalO, cambiarAbiertoModalO] = useState(false);

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

  const abrirModalO = () => {
    cambiarAbiertoModalO(true);
  };

  const cerrarModalO = () => {
    cambiarAbiertoModalO(false);
  };

  return (
    <>
      <div className="otro repmar">
        <Contenedor>
          <IconoDiv className="icon">
            <TextDiv>
              <Texto>Evento único</Texto>
            </TextDiv>
            <Icono
              src="/img/Crédito inicial y esquemas de pago.webp"
              alt="Crédito inicial"
              onClick={abrirModal}
            />
            <TextDiv>
              <Text>{unom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="i">
            <TextDiv>
              <Texto>Póliza</Texto>
            </TextDiv>
            <Icono
              src="/img/Reparación de equipo en sus instalaciones.webp"
              alt="Reparación de equipo"
              onClick={abrirModalD}
            />
            <TextDiv>
              <Text>{dosm}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Recolección y entrega de equipo sin costo.webp"
              alt="Recolección y entrega de equipo"
              onClick={abrirModalT}
            />
            <TextDiv>
              <Text>{tresm}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Póliza de reparación contra daños por uso normal y accidentes.webp"
              alt="Póliza de reparación Hand Held Impresora de Etiqueta y Lectores de Codigos"
              onClick={abrirModalC}
            />
            <TextDiv>
              <Text>{cuatrom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Diagnóstico sin costo en sus instalaciones..webp"
              alt="Diagnóstico sin costo"
              onClick={abrirModalCI}
            />
            <TextDiv>
              <Text>{cincom}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Equipo de respaldo para asegurar los tiempos de reparación.webp"
              alt="Equipo de respaldo"
              onClick={abrirModalS}
            />
            <TextDiv>
              <Text>{seism}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Envio gratis.webp"
              alt="Envío gratis"
              onClick={abrirModalSI}
            />
            <TextDiv>
              <Text>{sietem}</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Mantenimiento correctivo y preventivo.webp"
              alt="Mantenimiento preventivo y correctivo"
              onClick={abrirModalO}
            />
            <TextDiv>
              <Text>{ochom}</Text>
            </TextDiv>
          </IconoDiv>
        </Contenedor>

        <div className="DivR">
          <ContenedorD>
            <Link href={luno}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {nuevem}
                  <br />
                  <span className="n">{diezm}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={ldos}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {oncem}
                  <br />
                  <span className="n">{docem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={ltres}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {trecem}
                  <br />
                  <span className="n">{catorcem}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href={lcuatro}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {quincem}
                  <br />
                  <span className="n">{diezseism}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>

            <Link href={ecuatro}>
              <OvaTexDiv className="b">
                <OvaTex>
                  {euno}
                  <br />
                  <span className="n">{diezseism}</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>

            <Link href={lcinco}>
              <OvaTexDiv>
                <OvaTex>
                  {diezsietem}
                  <br />
                  <span className="n">{diezochom}</span>
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
          <Modal.Title>Reparación de equipo en sus instalaciones.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nosotros asistimos a sus instalaciones sin costo adicional a
          diagnosticar o reparar sus equipos si usted lo requiere, para que
          nunca detenga su operación.
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
          <Modal.Title>Recolección y entrega de equipo sin costo.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Recolectamos y entregamos equipos sin costo alguno a toda la República
          Mexicana.
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
          <Modal.Title>Diagnóstico sin costo en sus instalaciones.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Diagnosticamos sin costo sus equipos, nuestros ingenieros de servicio
          analizarán detalladamente las fallas que presenten, asistirán a sus
          instalaciones si así lo requiere y sin costo adicional.
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
      <Modal
        show={abiertoModalO}
        onHide={cerrarModalO}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Mantenimiento preventivo y correctivo.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Brindamos mantenimientos para revisar el funcionamiento de sus
          equipos, previniendo posibles fallas en el futuro o en su defecto
          cambiar las refacciones correspondientes, dejándolos en óptimas
          condiciones para una excelente operación.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalO}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IconosReparacionGeneral;

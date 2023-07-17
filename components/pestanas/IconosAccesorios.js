import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

const IAyC = () => {
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

  return (
    <>
      <div className="otro">
        <Contenedor>
          <IconoDiv className="icon">
            <Icono
              src="/img/Los mejores precios del mercado.webp"
              alt="Mejores precios"
              onClick={abrirModal}
            />
            <TextDiv>
              <Text>Los mejores precios del mercado.</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="i">
            <Icono
              src="/img/Seguimiento  hombro con  hombro durante pruebas e instalaciones.webp"
              alt="Pruebas e instalaciones de Hand Helds Impresoras de Etiquetas y Lectores de Codigo de Barras"
              onClick={abrirModalD}
            />
            <TextDiv>
              <Text>
                Seguimiento hombro con hombro durante pruebas e implementación.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Asesoría comercial y técnica previa.webp"
              alt="Asesoría comercial y técnica"
              onClick={abrirModalT}
            />
            <TextDiv>
              <Text>Asesoría comercial y técnica previa.</Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Accesorios y consumibles  precisos para cada equipo y necesidad.webp"
              alt="Accesorios y Consumibles Hand Helds Impresoras de Etiquetas y Lectores de Codigo de Barras"
              onClick={abrirModalC}
            />
            <TextDiv>
              <Text>
                Accesorios y consumibles para cada equipo y necesidad.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="icon top">
            <Icono
              src="/img/Soporte técnico postventa.webp"
              alt="Soporte Tecnico PostVenta"
              onClick={abrirModalCI}
            />
            <TextDiv>
              <Text>
                Soporte técnico
                <br /> postventa.
              </Text>
            </TextDiv>
          </IconoDiv>
          <IconoDiv className="top i">
            <Icono
              src="/img/Envio gratis.webp"
              alt="Envío gratis"
              onClick={abrirModalS}
            />
            <TextDiv>
              <Text>
                Envío gratis
                <br /> a toda la República Mexicana.
              </Text>
            </TextDiv>
          </IconoDiv>
        </Contenedor>
        <div className="DivR">
          <ContenedorD>
            <div className="cen">
              <Link href="/#renta">
                <OvaTexDiv className="b">
                  <OvaTex>
                    <span className="n">
                      ¡Conozca nuestro servicio de Renta!
                    </span>
                  </OvaTex>
                </OvaTexDiv>
              </Link>
              <Link href="/#reparacion">
                <OvaTexDiv className="b">
                  <OvaTex>
                    <span className="n">
                      ¡Conozca nuestro servicio de Reparación!
                    </span>
                  </OvaTex>
                </OvaTexDiv>
              </Link>
              <Link href="/#venta">
                <OvaTexDiv className="b">
                  <OvaTex>
                    <span className="n">
                      ¡Conozca nuestro servicio de Venta!
                    </span>
                  </OvaTex>
                </OvaTexDiv>
              </Link>
              <Link href="/DSD-venta-en-ruta">
                <OvaTexDiv className="b">
                  <OvaTex>
                    Ponemos a su disposición la solución "DSD" para venta en
                    ruta.
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
                    Contamos con fundas diseñadas a la medida para cumplir con
                    sus necesidades.
                    <br />
                    <span className="n">
                      ¡Adquiera la protección que sus equipos necesitan!
                    </span>
                  </OvaTex>
                </OvaTexDiv>
              </Link>
            </div>
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
          <Modal.Title>Los mejores precios del mercado.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En Hand Held Solutions, nos comprometemos a brindarle los mejores
          precios, para nosotros es importante que cuente con los equipos
          requeridos a un precio accesible.
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
            Seguimiento hombro con hombro durante pruebas e implementación.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nos comprometemos a brindarle asistencia técnica y comercial sin costo
          en todo momento, para que pueda realizar las pruebas correspondientes
          y la implementación de cada equipo sea adecuada a sus necesidades.
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
            Accesorios y consumibles para cada equipo y necesidad.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ponemos a su disposición los complementos adecuados que le permitirán
          a sus equipos operar en las mejores condiciones. Contamos con:
          baterías, fundas, mangos para PDA, fuentes de carga, stylus, carcasas,
          ribbons, rollos de etiquetas, correas y más. Todo lo que usted
          necesita para sus handhelds, impresoras y lectores de códigos.
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
          <Modal.Title>Soporte técnico postventa.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En todo momento contará con un técnico a su disposición por vía
          telefónica, aún después de haber concluido la implementación de los
          equipos y el proceso de compra, de esta manera poder asesorarlo ante
          cualquier duda.
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
          <Modal.Title>Envío gratis a toda la República Mexicana.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contamos con envío gratis a toda la República Mexicana, nosotros le
          mandamos sin costo alguno, los equipos que vaya a rentar,
          diagnosticar, reparar o adquirir.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalS}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IAyC;

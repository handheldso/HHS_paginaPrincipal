import React, { useState } from "react";
import styled from "@emotion/styled";
import { Modal, Button } from "react-bootstrap";
import Politicas from "../../static/PoliticaTex";
import FormHandHeld from "../../config/FormHandHeld";
import useWindowSize from "../../hooks/useWindowSize";

const FormEtiquetas = () => {
  const ContenedorGrid = styled.div`
    width: 50%;
    margin-top: 2rem;

    @media (max-width: 995px) {
      width: 100%;
      margin-top: 3rem;
    }
  `;

  const DivSello = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 0rem;
  `;

  const Img = styled.img`
    width: 70%;
    height: 90%;

    @media (max-width: 375px) {
      width: 70%;
      height: 90%;
    }
  `;

  const TitDiv = styled.div`
    text-align: center;
    width: 100%;
    height: 3rem;
  `;

  const Tit = styled.h1`
    font-weight: bold;

    @media (max-width: 833px) {
      font-size: 35px !important;
    }

    @media (max-width: 550px) {
      font-size: 28px !important;
    }
  `;

  const Contenedor = styled.div`
    width: 86%;
    margin: 2rem auto;
  `;

  const FormularioDiv = styled.div`
    width: 100%;
    background-color: #0076c0;
    color: white;
    padding: 10px;
    border-radius: 0.5rem;
  `;

  const PoliticasDiv = styled.div`
    margin-top: 1rem;
    width: 100%;
  `;

  const DivTarjeta = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;
  `;

  const IMGTarjeta = styled.img`
    margin: auto !important;
    width: 23%;

    @media (max-width: 500px) {
      width: 33%;
    }
  `;

  const IMGTarjetaD = styled.img`
    cursor: pointer;
    width: 37%;

    @media (max-width: 605px) {
      width: 38%;
    }

    @media (max-width: 500px) {
      width: 56%;
    }
  `;

  const IMGLogos = styled.img`
    margin: auto !important;

    @media (max-width: 1500px) {
      width: 65%;
    }

    @media (max-width: 1100px) {
      width: 80%;
    }

    @media (max-width: 800px) {
      height: 8rem !important;
    }

    @media (max-width: 500px) {
      height: 5.5rem !important;
    }
  `;

  const TxtTarjeta = styled.p`
    font-size: 19px;
    font-weight: bold;
  `;

  const DivIconos = styled.div`
    display: flex;
    margin-top: 4.5rem;
    justify-content: space-around;
    text-align: center;
  `;

  const Icon = styled.div`
    width: 100%;
  `;

  const [abiertoAnuncios, cambiarAbiertoAnuncios] = useState(false);

  const abrirModal = () => {
    cambiarAbiertoAnuncios(true);
  };

  const cerrarModal = () => {
    cambiarAbiertoAnuncios(false);
  };

  const size = useWindowSize();

  const [abiertoModalT, cambiarAbiertoModal] = useState(false);
  const [abiertoModalD, cambiarAbiertoModalD] = useState(false);

  const abrirModalT = () => {
    cambiarAbiertoModal(true);
  };

  const cerrarModalT = () => {
    cambiarAbiertoModal(false);
  };

  const abrirModalD = () => {
    cambiarAbiertoModalD(true);
  };

  const cerrarModalD = () => {
    cambiarAbiertoModalD(false);
  };

  return (
    <>
      <span id="contacto"></span>
      <ContenedorGrid>
        
        <DivSello>
          <div className="DivImg">
            <Img
              src="img/sellogarantia.webp"
              alt="Sello de Garantia Hand Held Solutions"
            />
          </div>
        </DivSello>
        <TitDiv>
          <Tit>¡Cotice ahora!</Tit>
        </TitDiv>
        <Contenedor>
          <FormularioDiv>
            <FormHandHeld />
            <PoliticasDiv>
              <p className="politicas">
                Al dar click en el botón de enviar se esta aceptando nuestra{" "}
                <a onClick={abrirModal}>política de privacidad.</a>
              </p>
            </PoliticasDiv>
          </FormularioDiv>

          <Modal
            show={abiertoAnuncios}
            onHide={cerrarModal}
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Anuncios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Politicas />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={cerrarModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </Contenedor>
        <DivIconos>
          <Icon>
            <IMGTarjetaD
              className="creicon"
              src="/img/Envio gratis.webp"
              alt="Envios Gratis"
              onClick={abrirModalT}
            />
            <TxtTarjeta>
            Envio GRATIS a toda la Republica Mexicana.
            </TxtTarjeta>
          </Icon>
          <Icon>
            <IMGTarjetaD
              className="creicon"
              src="/img/Los mejores precios del mercado.webp"
              alt="Icono Mejores Precios"
              onClick={abrirModalD}
            />
            <TxtTarjeta>
            Mejores precios acordes a su economía.
            </TxtTarjeta>
          </Icon>
        </DivIconos>
        <div>
          <DivTarjeta>
            <IMGTarjeta
              src="/img/Pago con tarjeta.webp"
              alt="Icono_Pago"
            />
            <TxtTarjeta>¡Aceptamos pago con tarjeta!</TxtTarjeta>
            <IMGLogos
              src="https://res.cloudinary.com/dihawqrnt/image/upload/v1625761069/Iconos/metodos_de_pago_500x120_1_zkuoyc.png"
              alt="Imagen_LogoPago"
            />
          </DivTarjeta>
        </div>
      </ContenedorGrid>

      <Modal
        show={abiertoModalT}
        onHide={cerrarModalT}
        keyboard={false}
        size="lg"
        className="modal-altura"
      >
        <Modal.Header closeButton>
          <Modal.Title>Envío gratis a toda la República Mexicana.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Contamos con envío gratis a toda la República Mexicana, nosotros le mandamos sin cargo adicional, 
            las etiquetas que necesite. Impresión de etiquetas en poliolefina, polipropileno, poliéster, poliamida y papel. 
            Impresión de etiquetas capaces de resistir bajas y altas temperaturas.
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
          <Modal.Title>Mejores precios acordes a su economía.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        En Hand Held Solutions, nos comprometemos a brindarle los mejores precios, 
        para nosotros es importante que cuente con etiquetas que cubran sus necesidades a precios accesibles.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalD}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormEtiquetas;

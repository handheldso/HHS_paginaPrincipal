import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

const TextoFundas = () => {
  const Contenedor = styled.div`
    width: 100%;
    text-align: center;

    @media (max-width: 456px) {
      margin-top: 5rem;
    }

    @media (max-width: 410px) {
      margin-top: -2rem;
    }
  `;

  const ContenedorD = styled.div`
    width: 100%;
    margin-top: 4rem;

    @media (max-width: 995px) {
      display: none;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 78%;
    height: 4.5rem;
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

    @media (max-width: 1100px) {
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

  const DivIMG = styled.div`
    width: 100%;
    margin-top: 0rem;
  `;

  const IMG = styled.img`
    width: 80%;
    height: 100%;

    @media (max-width: 850px) {
      width: 68%;
    }

    @media (max-width: 500px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 89%;
    }
  `;

  const DivTexto = styled.div`
    width: 100%;
    margin-top: 4rem;
  `;

  const TextoIMG = styled.p`
    font-size: 35px;
    font-weight: bold;
    padding: 25px;
    text-align: justify;

    @media (max-width: 1750px) {
      font-size: 30px;
    }

    @media (max-width: 1550px) {
      padding-top: 4rem;
      font-size: 25px;
    }
  `;

  const TituloBeneficios = styled.p`
    font-size: 35px;
    font-weight: bold;
    text-align: left;
    padding: 25px;

    @media (max-width: 1750px) {
      font-size: 30px;
    }

    @media (max-width: 1550px) {
      padding-top: 4rem;
      font-size: 25px;
    }
  `;

  const Beneficios = styled.ul`
    font-size: 30px;
    text-align: left;
    margin-left: 25px;

    @media (max-width: 1750px) {
      font-size: 20px;
    }
  `;

  const BeneficiosLista = styled.li`
    list-style: outside;
  `;

  const ContenedorIcono = styled.div`
    text-align: center;
    padding-top: 3rem;
    display: flex;
    justify-content: space-around;

    @media (min-width: 1101px) {
      padding-left: 3.5rem;
    }

    @media (max-width: 1100px) {
      display: grid;
    }

    @media (max-width: 995px) {
      padding-left: 0rem;
      display: flex;
    }

    @media (max-width: 450px) {
      display: grid;
    }
  `;

  const Icono = styled.img`
    cursor: pointer;

    @media (max-width: 1440px) {
      width: 12rem;
    }

    @media (max-width: 1100px) {
      width: 9rem;
    }

    @media (max-width: 995px) {
      width: 12rem;
    }

    @media (max-width: 708px) {
      width: 9rem;
    }

    @media (max-width: 538px) {
      width: 8rem;
    }
  `;

  /*const ContenedorIconoD = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    @media(min-width: 1101px) {
      padding-left: 3.5rem;
    }

    @media(max-width: 995px) {
     padding-left: 0rem;
    }
  `;
*/
  const [abiertoModal, cambiarAbiertoModal] = useState(false);
  const [abiertoModalD, cambiarAbiertoModalD] = useState(false);
  const [abiertoModalT, cambiarAbiertoModalT] = useState(false);

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

  return (
    <>
      <div className="otro">
        <Contenedor>
          <DivTexto>
            <TituloBeneficios>
              Beneficios fundas HHS: <br />
            </TituloBeneficios>
            <Beneficios>
              <BeneficiosLista>
                Fabricamos las mejores fundas del mercado, diseñadas para cubrir
                sus necesidades.
              </BeneficiosLista>
              <BeneficiosLista>
                Fundas ideales para handhelds, impresoras de etiquetas
                portátiles y lectores de códigos.
              </BeneficiosLista>
              <BeneficiosLista>
                Protección indispensable que ayudará a sus equipos a soportar
                caídas o daños accidentales.
              </BeneficiosLista>
              <BeneficiosLista>
                Fundas fabricadas con los mejores materiales, diseñadas a las
                medidas, características, especificaciones de cada marca y
                modelo.
              </BeneficiosLista>
              <BeneficiosLista>
                Adquiera la seguridad que sus equipos necesitan a precios
                accesibles.
              </BeneficiosLista>
            </Beneficios>
          </DivTexto>
        </Contenedor>
        <ContenedorIcono>
          <div className="espi">
            <Icono
              src="/img/Envio gratis.webp"
              alt="Icono Fundas Envio Gratis"
              onClick={abrirModal}
            />
            <TextDiv>
              <Text>
                Envío gratis
                <br /> a toda la República Mexicana.
              </Text>
            </TextDiv>
          </div>
          <div className="espi">
            <Icono
              src="/img/Los mejores precios del mercado.webp"
              alt="Icono Mejores Precios Fundas"
              onClick={abrirModalD}
            />
            <TextDiv>
              <Text>Los mejores precios del mercado.</Text>
            </TextDiv>
          </div>
        </ContenedorIcono>
        {/*   <ContenedorIconoD>
          <div>
          <Icono src="https://res.cloudinary.com/dihawqrnt/image/upload/v1625762458/Nuevos%20Iconos/Mejores_precios_acordes_a_su_econom%C3%ADa_x5x6zl.png" alt="Icono Mejores Precios Fundas" onClick={abrirModalT}/>
          <TextDiv>
              <Text>
              Los mejores precios del mercado.
              </Text>
            </TextDiv>
          </div>
     </ContenedorIconoD>   */}
        <div className="DivR">
          <ContenedorD>
            <Link href="/#renta">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">¡Conozca nuestro servicio de Renta!</span>
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
                  <span className="n">¡Conozca nuestro servicio de Venta!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/venta-de-accesorios-y-consumibles">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">
                    ¡Adquiera los accesorios y consumibles que necesita!
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/DSD-venta-en-ruta">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">
                    ¡Conozca nuestra solución "DSD" para venta en ruta!
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/impresion-credenciales-tarjetas-gafetes-pvc">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">
                  Conozca nuestro servicio de impresion de credenciales
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
          <Modal.Title>Envío gratis a toda la República Mexicana.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contamos con envío gratis a toda la República Mexicana, nosotros le
          mandamos sin cargo adicional, las fundas que necesite, hechas a la
          medida, adecuadas para cada marca y modelo del mercado.
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
          <Modal.Title>Los mejores precios del mercado.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          En Hand Held Solutions, nos comprometemos a brindarle los mejores
          precios, para nosotros es importante que cuente con fundas que cubran
          sus necesidades y protejan sus equipos a precios accesibles.
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
          <Modal.Title>Los mejores precios del mercado.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fabricamos las mejores fundas del mercado, diseñadas para cubrir sus
          necesidades. Adquiera la protección que sus equipos necesitan. Diseños
          de la mejor calidad, hechos con materiales de primera. Fundas
          fabricadas a las medidas de diferentes marcas y modelos, protección
          indispensable que ayudará a sus equipos a soportar caídas o daños
          accidentales.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={cerrarModalT}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TextoFundas;

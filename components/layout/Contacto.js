import React, { useState } from "react";
import styled from "@emotion/styled";
import FormEmail from "../../config/FormEmail";
import Iframe from "react-iframe";
import { Modal, Button } from "react-bootstrap";

import Politicas from "../../static/PoliticaTex";

const Contacto = () => {
  const Contenedor = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 805px) {
      display: grid;
      width: 100%;
      justify-content: center;
    }
  `;

  const FormularioDiv = styled.div`
    width: 44%;
    background-color: #0076c0;
    margin-top: 4rem;
    border-radius: 1rem;
    color: white;
    padding: 10px;
    margin-left: 5.3rem;

    @media (max-width: 1350px) {
      width: 40%;
    }

    @media (max-width: 1110px) {
      width: 37%;
    }

    @media (max-width: 805px) {
      margin-left: 0;
      width: 100%;
    }

    @media (max-width: 700px) {
      width: 70%;
      margin: 4rem auto;
    }
  `;

  const PoliticasDiv = styled.div`
    margin-top: 1rem;
    width: 100%;
  `;

  const Dire = styled.div`
    width: 100%;
  `;

  const DireTitDiv = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  `;

  const DireTit = styled.h1`
    font-size: 24px;
  `;

  const DireDiv = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  `;

  const DireTex = styled.p`
    font-size: 12pt;
    line-height: 24px;
    margin: 0px;
  `;

  const MapDiv = styled.div`
    margin-top: 4rem;
    width: 46%;
    margin-left: 2.5rem;

    @media (max-width: 805px) {
      margin-left: 0;
      width: 100%;
    }

    @media (max-width: 700px) {
      width: 70%;
      margin: 0rem auto;
    }
  `;

  const [abiertoAnuncios, cambiarAbiertoAnuncios] = useState(false);

  const abrirModal = () => {
    cambiarAbiertoAnuncios(true);
  };

  const cerrarModal = () => {
    cambiarAbiertoAnuncios(false);
  };

  return (
    <>
      <section id="contacto" className="con">
        <Contenedor>
          <FormularioDiv>
            <FormEmail />
            <PoliticasDiv>
              <p className="politicas">
                Al dar click en el botón de enviar se esta aceptando nuestra{" "}
                <a onClick={abrirModal}>política de privacidad.</a>
              </p>
            </PoliticasDiv>
          </FormularioDiv>
          <MapDiv>
            <Dire>
              <DireTitDiv>
                <DireTit>Ubicación</DireTit>
              </DireTitDiv>
              <DireDiv>
                <DireTex>
                  {/* Calle. Heriberto Frías #249, Col. Narvarte Poniente, Alcaldía: Benito Juarez C.P. 03020, CDMX México */}
                   Teléfono: (+52) 55 7599 6272 / (+52) 55 5115 6043<br />
                  Horarios de atención de Lunes a Viernes de 9:00 AM a 6:00 PM
                  <br />
                  <br />
                  Tenemos cobertura a toda la República Mexicana: Ciudad de México, Jalisco, Toluca, Nuevo León, Guanajuato, Puebla, Veracruz, Queretaro, Michoacan, Coahuila, Yucatan, Chihuahua, Tabasco, Chiapas, San Luis Potosí
                  Hidalgo, Aguascalientes, Guerrero, Morelos, Quintana Roo, Oaxaca, Tamaulipas, Sinaloa, Sonora, Baja California, Campeche, Tlaxcala, Colima, Durango, Nayarit, Zacatecas, Baja California Sur. 
                  <br />
                </DireTex>
              </DireDiv>
            </Dire>
            {/* <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.3162005892946!2d-99.1620983896174!3d19.39873928179781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff11b32782eb%3A0x2ceb2e6a33117147!2sHeriberto%20Fr%C3%ADas%20249%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1694638722555!5m2!1ses-419!2smx"
            width="100%"
            height="350"
            frameborder="0"
            aria-hidden="false"
            tabindex="0"></Iframe> */}
          </MapDiv>
        </Contenedor>
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
      </section>
    </>
  );
};

export default Contacto;

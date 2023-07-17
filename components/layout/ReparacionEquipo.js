import React from "react";
import styled from "@emotion/styled";

const Reparacion = () => {
  const Fondo = styled.div`
    background-color: white;
    width: 100%;
  `;

  const Titulo = styled.div`
    text-align: center;
    margin: 0px auto;
    padding-top: 10px;
    width: 100%;
  `;

  const TituloTexto = styled.p`
    font-weight: bold;
    font-size: 33px;
  `;

  const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-bottom: 26px;

    @media (max-width: 1000px) {
      display: grid;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 0rem;
    }
  `;

  const ImagenDiv = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    width: 44%;
    margin-right: 2rem;
    display: grid;
    align-items: center;

    @media (min-width: 1001px) {
      margin-left: 2rem;
    }

    @media (max-width: 1000px) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-right: 0rem;
    }
  `;

  const Imagen = styled.img`
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
    width: 95%;

    @media (max-width: 1100px) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-right: 0rem;
    }

    @media (max-width: 1000px) {
      width: 65%;
      display: flex;
      justify-content: center;
      margin-right: 0rem;
    }
  `;

  const TexTiDiv = styled.div`
    text-align: center;
    margin: 0px auto;
    width: 100%;
    margin-top: 3rem;
  `;

  const Texti = styled.p`
    font-weight: bold;
    font-size: 1.25rem;
  `;

  const Info = styled.div`
    width: 45%;
    margin-left: 5.3rem;

    @media (max-width: 1000px) {
      display: grid;
      width: 75%;
      margin: 0px auto;
    }
  `;

  const TextoDiv = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    text-align: justify;
  `;

  const Texto = styled.p`
    font-size: 16px;
  `;

  return (
    <>
      <section id="reparacion">
        <Fondo className="mt-5">
          <Titulo>
            <TituloTexto>Reparación de Equipo</TituloTexto>
          </Titulo>
          <Contenedor className="mt-5">
            <Info>
              <TexTiDiv>
                <Texti>PÓLIZAS DE SERVICIO</Texti>
              </TexTiDiv>
              <TextoDiv>
                <Texto>
                  Contamos con pólizas anuales de reparación integral para sus handhelds e impresoras de etiquetas, que
                  consideran reparar sus equipos en pocos días o incluso el
                  mismo, por daños causados por uso normal y sobre todo ¡Por
                  accidentes! Las pólizas aseguran la rápida rehabilitación de
                  sus equipos y la continuidad de su operación, evitando las
                  pérdidas que representa tenerlos fuera de uso. ¡Nuestras
                  pólizas incluyen mantenimientos preventivos sin costo
                  adicional! Además, las puede cancelar en cualquier momento y
                  ¡Sin penalizaciones!
                  <br />
                </Texto>
              </TextoDiv>
              <TexTiDiv>
                <Texti>REPARACIÓN POR EVENTO ÚNICO</Texti>
              </TexTiDiv>
              <TextoDiv>
                <Texto>
                  Si no cuenta con una póliza de reparación, sabemos que usted
                  necesita que sus handhelds, lectores de códigos de barras e impresoras de etiquetas, se rehabiliten rápidamente, sin
                  trámites engorrosos, así que brindamos primero repararlos y
                  después realizar los trámites de pago. ¡Sin costo por
                  diagnóstico y con atención en sitio!
                  <br />
                  <br />
                  Aun sin póliza de servicio, los tiempos de diagnóstico son de
                  2 días y los tiempos de reparación de 3 días, con entrega sin
                  costo. También en caso de ser necesario, contamos con servicio
                  de recolección y reparación en sitio sin cargo adicional
                  dentro del área metropolitana de la Ciudad de México. Además,
                  lo respaldamos con soporte técnico telefónico en cualquier
                  momento y <b>GARANTÍA de 100 días.</b>
                </Texto>
              </TextoDiv>
            </Info>
            <ImagenDiv>
              <Imagen
                src="/img/servicio-poliza-reparacion.webp"
                alt="Reparacion de Handheld, Impresoras de Etiquetas y Lectores de codigo de barras"
              />
            </ImagenDiv>
          </Contenedor>
        </Fondo>
      </section>
    </>
  );
};

export default Reparacion;

import React from "react";
import styled from "@emotion/styled";

const Renta = () => {
  const Fondo = styled.div`
    background-color: #0076c0;
    width: 100%;
  `;

  const Titulo = styled.div`
    text-align: center;
    margin: 0px auto;
    padding-top: 10px;
    width: 18rem;
  `;

  const TituloTexto = styled.p`
    color: white;
    font-weight: bold;
    font-size: 33px;
  `;

  const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-bottom: 26px;

    @media (max-width: 991px) {
      display: grid;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 0rem;
    }
  `;

  const ImagenDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 44%;
    margin-left: 5.3rem;

    @media (max-width: 991px) {
      display: flex;
      min-width: 100%;
      margin-left: 0px;
    }
  `;

  const Imagen = styled.img`
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
    width: 100%;

    @media (max-width: 991px) {
      width: 53%;
      margin: 0px auto;
    }

    @media (max-width: 850px) {
      width: 63%;
      margin: 0px auto;
      height: 100%;
    }
  `;

  const TextoDiv = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 42%;
    text-align: justify;
    margin-right: 7rem;
    margin-left: 2rem;
    align-items: center;

    @media (max-width: 991px) {
      display: flex;
      min-width: 52%;
      margin-left: 0px;
      min-width: 100%;
      margin-right: 0px;
    }
  `;

  const Texto = styled.p`
    font-size: 16px;
    color: white;

    @media (max-width: 1290px) {
      font-size: 14px;
    }

    @media (max-width: 1170px) {
      font-size: 12px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
      width: 63%;
      margin: 0px auto;
    }
  `;

  return (
    <>
      <section id="renta">
        <Fondo className="mt-5">
          <Titulo>
            <TituloTexto>Renta de Equipo</TituloTexto>
          </Titulo>
          <Contenedor>
            <ImagenDiv>
              <Imagen
                src="/img/srenta.webp"
                alt="Renta de Hand Held Impresoras de Etiquetas y Lectores de codigo de barras"
              />
            </ImagenDiv>
            <TextoDiv>
              <Texto className="text-justify">
                Rentamos handhelds, impresoras de etiquetas, lectores de códigos e impresoras de credenciales por periodos cortos y largos. Desde un día, semana, mes
                y hasta años. Rentar equipo le permitirá disponerlos de un día
                para otro, sin depósitos, ni trámites tardados. Incluyen todos
                los accesorios que se requieren y cuentan con póliza de
                reparación permanente. Si un equipo falla, se repara
                directamente y de inmediato, sin costos adicionales,
                diagnósticos previos o cotizaciones costosas.
                <br />
                <br />
                Si le sigue siendo funcional, brindamos la opción de que el
                equipo pase a ser de su propiedad por medio de leasing o
                arrendamiento puro, siendo 100% deducible de impuestos y
                evitando descapitalizarse. Los arrendamientos a largo plazo
                permiten cambiar los equipos si fuera necesario. ¡Es la solución
                que la industria mexicana requiere!
                <br />
              </Texto>
            </TextoDiv>
          </Contenedor>
        </Fondo>
      </section>
    </>
  );
};

export default Renta;

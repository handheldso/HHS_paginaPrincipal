import React from "react";
import styled from "@emotion/styled";

const Venta = () => {
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
      <section id="venta">
        <Fondo className=" mt-5 pt-5">
          <Titulo>
            <TituloTexto>Venta de Equipo</TituloTexto>
          </Titulo>
          <Contenedor>
            <ImagenDiv>
              <Imagen
                src="/img/IMAGEN_VENTAS.webp"
                alt="Venta de Hand Held Impresoras de Etiquetas y Lectores de codigo de barras"
              />
            </ImagenDiv>
            <TextoDiv>
              <Texto className="text-justify">
                Somos distribuidores autorizados de handhelds, lectores de códigos, impresoras de etiquetas e impresoras de credenciales.
                Proporcionamos asesoría sin costo para seleccionar el equipo que
                se ajuste a sus necesidades y presupuesto, después de ello, le
                hacemos llegar equipo demo para realizar las pruebas necesarias,
                asegurando que su elección sea totalmente funcional y adecuada.
                Tanto para almacén, picking, inventario, entradas y salidas,
                supervisión y venta en ruta. Trabajamos en conjunto con los más
                reconocidos fabricantes para brindar soporte preventa, postventa
                y garantías.&nbsp;
                <br />
              </Texto>
            </TextoDiv>
          </Contenedor>
        </Fondo>
      </section>
    </>
  );
};

export default Venta;

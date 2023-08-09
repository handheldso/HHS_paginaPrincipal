import React from "react";
import styled from "@emotion/styled";

const Clientes = () => {
  const TituloDiv = styled.div`
    width: 100%;
    text-align: center;
    margin: 0px auto;
  `;

  const Titulo = styled.p`
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 750px) {
      font-size: 16px;
    }

    @media (max-width: 550px) {
      font-size: 14px;
    }

    @media (max-width: 436px) {
      font-size: 12px;
    }
  `;

  const ImagenDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `;

  const Imagen = styled.img`
    width: 85%;

    @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
    }
  `;

  const DunsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 600px) {
      display: grid;
    }
  `;

  const DunsImgDiv = styled.div`
    width: 18%;

    @media (max-width: 1200px) {
      width: 22%;
    }

    @media (max-width: 900px) {
      width: 32%;
    }

    @media (max-width: 600px) {
      width: 45%;
      margin: 0px auto;
    }
  `;

  const DunsImagen = styled.img`
    width: 100%;
  `;

  const DunsTexDiv = styled.div`
    width: 32%;
    padding: 20px;
    @media (max-width: 600px) {
      width: 50%;
      margin: 0px auto;
      margin-top: 10px;
    }
  `;

  const DunsTexto = styled.p`
    font-size: 16px;
    text-align: justify;
    font-weight: bold;
    opacity: 0.5;

    @media (max-width: 750px) {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  `;

  return (
    <>
      <section>
        <TituloDiv className="mt-5">
          <Titulo>
            ¡MÁS QUE CLIENTES, CREAMOS RELACIONES!
            <br />
            ALGUNAS DE ESTAS RELACIONES SON CON EMPRESAS COMO:
          </Titulo>
        </TituloDiv>
        <ImagenDiv>
          <Imagen
            src="/img/anner_de_clientes_p195161gina_web_4_.webp"
            alt="clientes de hand held solutions"
          />
        </ImagenDiv>
        <DunsDiv className="mt-5">
          <DunsImgDiv>
            <DunsImagen
              src="/img/Dise195177o_sin_t195173tulo.webp"
              alt="certificado duns"
            />
          </DunsImgDiv>
          <DunsTexDiv>
            <DunsTexto>
              Hand Held Solutions cuenta con certificación D-U-N-S 951590903
              (emitido por la institución internacional Cial Dun & Branstreet,
              quién evalúa la fiabilidad y estabilidad financiera de nuestra
              empresa para realizar un archivo de crédito comercial
              internacional.
            </DunsTexto>
          </DunsTexDiv>
          <DunsImgDiv>
            <DunsImagen
              src="/img/Certificado ISN.png"
              alt="certificado ISN"
            />
          </DunsImgDiv>
          <DunsTexDiv>
            <DunsTexto>
              Hand Held Solutions cuenta con certificación ISNetworld, cumpliendo
              requisitos internos y gubernamentales en materia de salud, seguridad,
              calidad y riesgo.
            </DunsTexto>
          </DunsTexDiv>
        </DunsDiv>
      </section>
    </>
  );
};

export default Clientes;

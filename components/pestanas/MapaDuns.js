import React from "react";
import styled from "@emotion/styled";
import Iframe from "react-iframe";

import useWindowSize from "../../hooks/useWindowSize";

const MapaDuns = () => {
  const Contenedor = styled.div`
    display: flex;

    @media (max-width: 991px) {
      display: block;
    }
  `;

  const DivFrame = styled.div`
    margin-top: 4rem;
    margin-left: 4rem;
    width: 50%;

    @media (max-width: 991px) {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-left: 0rem;
    }
  `;

  const DunsDiv = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin-right: 4rem;

    @media (max-width: 991px) {
      width: 100%;
    }
  `;

  const DunsImagen = styled.img`
    width: 100%;
  `;

  const DunsTexDiv = styled.div`
    width: 55%;
  `;

  const DunsImgDiv = styled.div`
    width: 38%;
  `;

  const DunsTexto = styled.p`
    font-size: 16px;
    text-align: justify;
    font-weight: bold;
    opacity: 0.5;
  `;

  const size = useWindowSize();

  return (
    <>
      <Contenedor>
        {size > 991 ? (
          <>
            <DivFrame>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.9648016914055!2d-99.15541637077204!3d19.375248064335118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc4ad02be539%3A0x2eadb37c290dea52!2sHand%20Held%20Solutions!5e0!3m2!1ses-419!2smx!4v1594188393220!5m2!1ses-419!2smx"
                width="80%"
                height="350"
                frameborder="0"
                aria-hidden="false"
                tabindex="0"
              />
            </DivFrame>
            <DunsDiv className="mt-5">
              <DunsImgDiv>
                <DunsImagen
                  src="/img/Dise195177o_sin_t195173tulo.webp"
                  alt="Certificado Duns"
                />
              </DunsImgDiv>
              <DunsTexDiv>
                <DunsTexto>
                  Hand Held Solutions cuenta con certificación D-U-N-S 951590903
                  (emitido por la institución internacional Cial Dun &
                  Branstreet, quién evalúa la fiabilidad y estabilidad
                  financiera de nuestra empresa para realizar un archivo de
                  crédito comercial internacional.)
                </DunsTexto>
              </DunsTexDiv>
            </DunsDiv>
          </>
        ) : (
          <>
            <DunsDiv className="mt-5">
              <DunsImgDiv>
                <DunsImagen
                  src="/img/Dise195177o_sin_t195173tulo.webp"
                  alt="Certificado Duns"
                />
              </DunsImgDiv>
              <DunsTexDiv>
                <DunsTexto>
                  Hand Held Solutions cuenta con certificación D-U-N-S 951590903
                  (emitido por la institución internacional Cial Dun &
                  Branstreet, quién evalúa la fiabilidad y estabilidad
                  financiera de nuestra empresa para realizar un archivo de
                  crédito comercial internacional.)
                </DunsTexto>
              </DunsTexDiv>
            </DunsDiv>
            <DivFrame>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.9648016914055!2d-99.15541637077204!3d19.375248064335118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc4ad02be539%3A0x2eadb37c290dea52!2sHand%20Held%20Solutions!5e0!3m2!1ses-419!2smx!4v1594188393220!5m2!1ses-419!2smx"
                width="80%"
                height="350"
                frameborder="0"
                aria-hidden="false"
                tabindex="0"
              />
            </DivFrame>
          </>
        )}
      </Contenedor>
    </>
  );
};

export default MapaDuns;

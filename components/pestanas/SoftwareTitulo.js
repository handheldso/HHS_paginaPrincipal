import React from "react";
import styled from "@emotion/styled";

const SoftwareTitulo = () => {
  const TitImgDiv = styled.div`
    width: 100% !important;
    display: flex;

    @media (max-width: 995px) {
      margin-bottom: 5rem;
      display: grid;
    }

    @media (max-width: 550px) {
      margin-bottom: 2rem;
    }
  `;

  const MitadIzq = styled.div`
    width: 50%;

    @media (max-width: 995px) {
      width: 100%;
      text-align: center;
      margin: auto;
    }
  `;

  const MitadDer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    margin-right: 0px;

    @media (max-width: 995px) {
      width: 100%;
    }
  `;

  const LemaDiv = styled.div`
    background-color: #0076c0;
    width: 55%;
    min-height: 40px;
    text-align: center;
    margin-top: 1rem !important;
    margin-left: 8rem;

    @media (max-width: 1100px) {
      margin-left: 7rem;
      align-items: center;
      display: grid;
      margin-top: 1rem;
    }

    @media (max-width: 1008px) {
      margin-left: 6rem;
    }

    @media (max-width: 995px) {
      margin: auto;
    }
  `;

  const Lema = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding-top: 8px;

    @media (max-width: 1100px) {
      font-size: 18px;
    }

    @media (max-width: 1008px) {
      font-size: 16px;
    }

    @media (max-width: 781px) {
      font-size: 14px;
    }

    @media (max-width: 698px) {
      font-size: 12px;
    }

    @media (max-width: 620px) {
      font-size: 11px;
    }

    @media (max-width: 542px) {
      font-size: 9px;
    }

    @media (max-width: 456px) {
      font-size: 7px;
    }
  `;

  const RDHDiv = styled.div`
    width: 100%;
    margin: 2.5rem auto;

    margin-left: 3rem;
    margin-top: 2.5rem;
    border-left: 8px solid #0076c0;
    height: 125px;
    border-radius: 5px 5px 5px 5px;

    @media (max-width: 2500px) {
      margin-left: 1.8rem;
    }

    @media (max-width: 1829px) {
      height: 300px;
    }

    @media (max-width: 1344px) {
      height: 230px;
    }

    @media (max-width: 995px) {
      height: 105px;
      width: 100%;
      border-left: none;
      text-align: center;
      margin-left: 0rem;
      text-align: center;
    }

    @media (max-width: 873px) {
      height: 90px;
    }

    @media (max-width: 420px) {
      height: 190px;
    }
  `;

  const RDHTit = styled.h1`
    width: 100% !important;
    padding-left: 1rem;
    font-weight: bold;
    font-size: 60px;
    border-bottom: 8px solid #0076c0;
    border-radius: 0px 0px 5px;

    @media (max-width: 1825px) {
      font-size: 65px;
      width: 73%;
    }

    @media (max-width: 1739px) {
      font-size: 60px;
    }

    @media (max-width: 1650px) {
      font-size: 60px;
      width: 78%;
    }

    @media (max-width: 1563px) {
      width: 83%;
    }

    @media (max-width: 1470px) {
      font-size: 55px;
      width: 83%;
    }

    @media (max-width: 1344px) {
      font-size: 50px;
    }

    @media (max-width: 1215px) {
      width: 86%;
    }

    @media (max-width: 1149px) {
      font-size: 42px;
      width: 83%;
    }

    @media (max-width: 1008px) {
      font-size: 36px;
    }

    @media (max-width: 873px) {
      font-size: 32px;
    }

    @media (max-width: 781px) {
      font-size: 28px;
      margin-left: -0.1rem;
    }

    @media (max-width: 698px) {
      font-size: 24px;
    }

    @media (max-width: 620px) {
      font-size: 28px;
    }

    @media (max-width: 512px) {
      font-size: 25px;
    }
  `;

  const ServicioDiv = styled.div`
    width: 82% !important;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: #0076c0;
    border-radius: 0px 50px 50px 0px;
    color: white;

    @media (max-width: 995px) {
      margin: 1.5rem auto;
    }

    @media (max-width: 733px) {
      width: 82%;
    }

    @media (max-width: 512px) {
      width: 79%;
    }
  `;

  const ServicioDivTxt = styled.p`
    font-size: 30px;
    padding-left: 1rem;

    @media (max-width: 1825px) {
      font-size: 30px;
    }

    @media (max-width: 1470px) {
      font-size: 26px;
    }

    @media (max-width: 1344px) {
      font-size: 23px;
    }

    @media (max-width: 1100px) {
      font-size: 21px;
    }

    @media (max-width: 1008px) {
      font-size: 19px;
    }

    @media (max-width: 873px) {
      font-size: 16px;
    }

    @media (max-width: 733px) {
      font-size: 15px;
    }
  `;

  const Video = styled.div`
    width: 85%;
    height: 95%;
    padding-top: 6rem;
    margin-bottom: 2rem;

    @media (max-width: 542px) {
      padding-top: 5rem;
    }

    @media (max-width: 420px) {
      padding-top: 1.5rem;
    }
  `;

  return (
    <>
      <TitImgDiv>
        <MitadIzq>
          <LemaDiv>
            <Lema>¡FÁCIL, RÁPIDO Y FLEXIBLE!</Lema>
          </LemaDiv>
          <RDHDiv>
            <RDHTit>Solución DSD para venta en ruta</RDHTit>
            <ServicioDiv>
              <div className="sd">
                <ServicioDivTxt>
                  Ponemos a su disposición la implementación de la herramienta
                  tecnológica que le permitirá administrar sus visitas, tiempos
                  de entrega e inventario en todo momento de la ruta.
                </ServicioDivTxt>
              </div>
            </ServicioDiv>
          </RDHDiv>
        </MitadIzq>
        <MitadDer>
          <Video>
            <iframe
              className="fra"
              width="100%"
              height="460"
              src="https://www.youtube.com/embed/ZM_MKew9IO0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Video>
        </MitadDer>
      </TitImgDiv>
    </>
  );
};

export default SoftwareTitulo;

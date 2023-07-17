import React from "react";
import styled from "@emotion/styled";

const VentaL = () => {
  const TitImgDiv = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 2500px) {
      margin-bottom: 13rem;
    }

    @media (max-width: 1780px) {
      margin-bottom: 10rem;
    }

    @media (max-width: 1470px) {
      margin-bottom: 6rem;
    }

    @media (max-width: 1300px) {
      margin-bottom: 3rem;
    }

    @media (max-width: 830px) {
      margin-bottom: 7rem;
    }
  `;

  const MitadIzq = styled.div`
    width: 50%;
  `;

  const MitadDer = styled.div`
    width: 50%;
    text-align: center;
  `;

  const LemaDiv = styled.div`
    background-color: #0076c0;
    width: 55%;
    min-height: 40px;
    text-align: center;
    margin-top: 3rem;
    margin-left: 12rem;

    @media (max-width: 1100px) {
      margin-left: 7rem;
      align-items: center;
      display: grid;
      margin-top: 1rem;
    }

    @media (max-width: 1008px) {
      margin-left: 6rem;
    }

    @media (max-width: 782px) {
      margin-left: 5.2rem;
    }

    @media (max-width: 542px) {
      margin-left: 4.2rem;
    }

    @media (max-width: 456px) {
      margin-left: 2.8rem;
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
      font-size: 8px;
    }

    @media (max-width: 456px) {
      font-size: 7px;
    }
  `;

  const RDHDiv = styled.div`
    width: 88%;
    margin-left: 1.8rem;
    margin-top: 2.5rem;
    border-left: 8px solid #0076c0;
    height: 225px;
    border-radius: 5px 5px 5px 5px;

    @media (max-width: 2500px) {
      margin-left: 1.8rem;
    }

    @media (max-width: 1850px) {
      height: 165px;
    }

    @media (max-width: 1825px) {
      height: 320px;
    }

    @media (max-width: 1400px) {
      height: 280px;
    }

    @media (max-width: 1149px) {
      height: 210px;
    }

    @media (max-width: 1009px) {
      height: 210px;
    }

    @media (max-width: 873px) {
      height: 120px;
    }

    @media (max-width: 639px) {
      height: 190px;
    }

    @media (max-width: 620px) {
      height: 98px;
    }

    @media (max-width: 512px) {
      height: 150px;
    }

    @media (max-width: 490px) {
      height: 170px;
    }

    @media (max-width: 782px) {
      margin-left: 1.8rem;
    }

    @media (max-width: 456px) {
      margin-left: 0.8rem;
    }
  `;

  const RDHTit = styled.h1`
    width: 90% !important;
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
      font-size: 26px;
    }

    @media (max-width: 620px) {
      font-size: 21px;
    }

    @media (max-width: 550px) {
      width: 100% !important;
    }

    @media (max-width: 542px) {
      font-size: 21px;
      padding-left: 0.5rem;
    }

    @media (max-width: 512px) {
      font-size: 25px;
    }

    @media (max-width: 476px) {
      width: 90%;
    }
  `;

  const ServicioDiv = styled.div`
    width: 90% !important;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: #0076c0;
    border-radius: 0px 50px 50px 0px;

    @media (max-width: 1400px) {
      width: 85%;
    }

    @media (max-width: 670px) {
      width: 95%;
    }

    @media (max-width: 542px) {
      margin-left: 0.5rem;
    }

    @media (max-width: 512px) {
      width: 79%;
    }

    @media (max-width: 550px) {
      width: 90%;
    }
  `;

  const ServicioDivTxt = styled.p`
    font-size: 30px;
    padding-left: 1rem;
    color: white;

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
      font-size: 14px;
    }

    @media (max-width: 542px) {
      font-size: 14px;
    }

    @media (max-width: 512px) {
      font-size: 12px;
      padding-left: 0.5rem;
    }

    @media (max-width: 456px) {
      font-size: 11px;
    }

    @media (max-width: 415px) {
      font-size: 9.5px;
    }

    @media (max-width: 350px) {
      font-size: 8.5px;
    }
  `;

  const IMG = styled.img`
    width: 85%;
    height: 100%;
    margin-top: 1rem;
    border-radius: 25px 25px 25px 25px;
  `;

  return (
    <>
      <TitImgDiv>
        <MitadIzq>
          <LemaDiv>
            <Lema>LECTORES DE CÓDIGOS 2022 
            <br />
              ¡FÁCIL, RÁPIDO Y FLEXIBLE!</Lema>
          </LemaDiv>
          <RDHDiv>
            <RDHTit>Venta de lectores de códigos 1D y 2D</RDHTit>
            <ServicioDiv>
              <div className="sd">
                <ServicioDivTxt>
                  Venta de lectores de códigos 1D y 2D alámbricos e
                  inalámbricos. <br />
                  Beneficios:
                </ServicioDivTxt>
              </div>
            </ServicioDiv>
          </RDHDiv>
        </MitadIzq>
        <MitadDer>
          <IMG
            src="/img/VENTA LECTORES.webp"
            alt="Venta de Lectores de Codigos de Barras"
          />
        </MitadDer>
      </TitImgDiv>
    </>
  );
};

export default VentaL;

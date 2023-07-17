import React from "react";
import styled from "@emotion/styled";

const RentaL = () => {
  const TitImgDiv = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 4rem;

    @media (max-width: 2500px) {
      margin-bottom: 7rem !important;
    }

    @media (max-width: 995px) {
      margin-bottom: 7rem;
    }
  `;

  const MitadIzq = styled.div`
    width: 50%;
  `;

  const MitadDer = styled.div`
    width: 50%;
    text-align: center;
    padding-right: 1rem;
  `;

  const LemaDiv = styled.div`
    background-color: #0076c0;
    width: 55%;
    min-height: 40px;
    text-align: center;
    margin-top: 3rem;
    margin-left: 6rem;

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
      margin-left: 4.8rem;
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
    margin-left: 1rem;
    margin-top: 2.5rem;
    border-left: 8px solid #0076c0;
    height: 215px;
    border-radius: 5px 5px 5px 5px;

    @media (max-width: 2500px) {
      margin-left: 1.8rem;
    }

    @media (max-width: 1700px) {
      height: 190px;
    }

    @media (max-width: 1500px) {
      margin-left: 1.8rem;
      height: 160px;
    }

    @media (max-width: 1009px) {
      height: 140px;
    }

    @media (max-width: 873px) {
      height: 120px;
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
      font-size: 55px;
      width: 98%;
    }

    @media (max-width: 1712px) {
      font-size: 50px;
      width: 95%;
    }

    @media (max-width: 1674px) {
      font-size: 45px;
    }

    @media (max-width: 1563px) {
      width: 98%;
    }

    @media (max-width: 1235px) {
      font-size: 35px;
    }

    @media (max-width: 873px) {
      font-size: 32px;
    }

    @media (max-width: 861px) {
      padding-left: 0.5rem;
    }

    @media (max-width: 781px) {
      font-size: 28px;
      margin-left: -0.1rem;
    }

    @media (max-width: 698px) {
      font-size: 24px;
    }

    @media (max-width: 620px) {
      font-size: 21px;
    }

    @media (max-width: 542px) {
      font-size: 21px;
      padding-left: 0.5rem;
    }

    @media (max-width: 512px) {
      font-size: 19px;
    }

    @media (max-width: 420px) {
      font-size: 17px;
    }
  `;

  const ServicioDiv = styled.div`
    width: 90% !important;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: #0076c0;
    border-radius: 0px 50px 50px 0px;

    @media (max-width: 1825px) {
      width: 98%;
    }

    @media (max-width: 1680px) {
      width: 88%;
    }

    @media (max-width: 1581px) {
      width: 95%;
    }

    @media (max-width: 1480px) {
      width: 98%;
    }

    @media (max-width: 1216px) {
      width: 98%;
    }

    @media (max-width: 861px) {
      margin-left: 0.5rem;
    }

    @media (max-width: 600px) {
      width: 100%;
    }

    @media (max-width: 512px) {
      width: 99% !important;
    }
  `;

  const ServicioDivTxt = styled.p`
    font-size: 30px;
    padding-left: 1rem;
    margin-right: 10px;
    color: white;

    @media (max-width: 1825px) {
      font-size: 30px;
    }

    @media (max-width: 1580px) {
      font-size: 25px;
    }

    @media (max-width: 1336px) {
      font-size: 23px;
    }

    @media (max-width: 994px) {
      font-size: 18px;
    }

    @media (max-width: 861px) {
      font-size: 15px;
      padding-left: 0.2rem;
    }

    @media (max-width: 763px) {
      font-size: 13px;
    }

    @media (max-width: 616px) {
      font-size: 11px;
    }

    @media (max-width: 598px) {
      font-size: 11px;
      padding-left: 0.5rem;
    }

    @media (max-width: 537px) {
      font-size: 10px;
      padding-left: 0.5rem;
    }

    @media (max-width: 512px) {
      font-size: 9px;
      padding-left: 0.5rem;
    }

    @media (max-width: 490px) {
      font-size: 11px;
    }

    @media (max-width: 456px) {
      font-size: 11px;
    }

    @media (max-width: 415px) {
      font-size: 10px;
    }

    @media (max-width: 370px) {
      font-size: 6.5px;
    }
  `;

  const IMG = styled.img`
    width: 85%;
    height: 90%;
    margin-top: 1rem;
    border-radius: 25px 25px 25px 25px;

    @media (max-width: 510px) {
      margin-top: 2.5rem;
    }

    @media (max-width: 400px) {
      margin-top: 5rem;
      width: 95%;
      height: 80%;
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
            <RDHTit>Renta de lectores de códigos 1D y 2D</RDHTit>
            <ServicioDiv>
              <div className="sd">
                <ServicioDivTxt>
                  Renta de lectores de códigos, baratos y económicos 1D y 2D por
                  días/semanas/meses/años.
                  <br />
                  Beneficios:
                </ServicioDivTxt>
              </div>
            </ServicioDiv>
          </RDHDiv>
        </MitadIzq>
        <MitadDer>
          <IMG
            src="/img/RENTA LECTORES.webp"
            alt="Renta de Lectores de Codigos de barras"
          />
        </MitadDer>
      </TitImgDiv>
    </>
  );
};

export default RentaL;

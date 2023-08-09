import React from "react";
import styled from "@emotion/styled";

const ReparacionH = () => {
  const TitImgDiv = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 4rem;

    @media (max-width: 1230px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 995px) {
      margin-bottom: 7rem;
    }

    @media (max-width: 720px) {
      margin-bottom: 3rem;
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
    width: 95%;
    margin-left: 7rem;
    margin-top: 2.5rem;
    border-left: 8px solid #0076c0;
    height: 215px;
    border-radius: 5px 5px 5px 5px;

    @media (max-width: 2500px) {
      margin-left: 1.8rem;
    }

    @media (max-width: 1009px) {
      height: 100px;
    }

    @media (max-width: 873px) {
      height: 80px;
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
      font-size: 25px;
    }

    @media (max-width: 448px) {
      font-size: 22px;
    }

    @media (max-width: 399px) {
      font-size: 20px;
    }
  `;

  const ServicioDiv = styled.div`
    width: 90% !important;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: #0076c0;
    border-radius: 0px 50px 50px 0px;

    @media (max-width: 542px) {
      margin-left: 0.5rem;
    }

    @media (max-width: 512px) {
      width: 86%;
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

    @media (max-width: 733px) {
      font-size: 11px;
    }

    @media (max-width: 542px) {
      font-size: 10px;
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
  `;

  const IMG = styled.img`
    width: 85%;
    height: 91%;
    margin-top: 1rem;
    border-radius: 25px 25px 25px 25px;
  `;

  return (
    <>
      <TitImgDiv>
        <MitadIzq>
          <LemaDiv>
            <Lema>¡FÁCIL, RÁPIDO Y FLEXIBLE!</Lema>
          </LemaDiv>
          <RDHDiv>
            <RDHTit>Reparación de Handhelds</RDHTit>
            <ServicioDiv>
              <div className="sd">
                <ServicioDivTxt>
                  Servicio de reparación por evento único y por pólizas de
                  reparación.
                  <br />
                  Beneficios:
                </ServicioDivTxt>
              </div>
            </ServicioDiv>
          </RDHDiv>
        </MitadIzq>
        <MitadDer>
          <IMG
            src="https://res.cloudinary.com/dihawqrnt/image/upload/v1691175251/HHSv2.1/reparaiones.png"
            alt="Reparacion de HandHelds"
          />
        </MitadDer>
      </TitImgDiv>
    </>
  );
};

export default ReparacionH;

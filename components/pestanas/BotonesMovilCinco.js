import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const BotonRentaH = ({
  muno,
  mdos,
  mtres,
  mcuatro,
  mcinco,
  mseis,
  msiete,
  mocho,
  mnueve,
  mdiez,
  luno,
  ldos,
  ltres,
  lcuatro,
  lcinco,
}) => {
  const ContenedorD = styled.div`
    width: 100%;
    text-align: center;

    @media (min-width: 996px) {
      display: none;
    }
  `;

  const OvaTexDiv = styled.div`
    padding: 5px;
    width: 65%;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;
    margin: 4rem auto;
    cursor: pointer;

    @media (max-width: 665px) {
      width: 90%;
    }

    @media (max-width: 450px) {
      padding: 10px;
    }
  `;

  const OvaTex = styled.p`
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;

    @media (max-width: 995px) {
      font-size: 20px;
    }

    @media (max-width: 780px) {
      font-size: 16px;
    }

    @media (max-width: 430px) {
      font-size: 14px;
    }

    @media (max-width: 350px) {
      font-size: 11.5px;
    }
  `;

  return (
    <>
      <ContenedorD>
        <Link href={luno}>
          <OvaTexDiv className="b">
            <OvaTex>
              {muno}
              <br />
              <span className="n">{mdos}</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href={ldos}>
          <OvaTexDiv>
            <OvaTex>
              {mtres}
              <br />
              <span className="n">{mcuatro}</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href={ltres}>
          <OvaTexDiv className="b">
            <OvaTex>
              {mcinco}
              <br />
              <span className="n">{mseis}</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href={lcuatro}>
          <OvaTexDiv className="b">
            <OvaTex>
              {msiete}
              <br />
              <span className="n">{mocho}</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href={lcinco}>
          <OvaTexDiv>
            <OvaTex>
              {mnueve}
              <br />
              <span className="n">{mdiez}</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        
        {/*<Link href={lseis}>
          <OvaTexDiv>
            <OvaTex>
              {monce}
              <br />
              <span className="n">{mdoce}</span>
            </OvaTex>
          </OvaTexDiv>
  </Link>*/}
      </ContenedorD>
    </>
  );
};

export default BotonRentaH;

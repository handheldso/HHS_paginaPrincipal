import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const BotonesMovil = ({
  mensaje,
  smensaje,
  tmensaje,
  cmensaje,
  cimensaje,
  semensaje,
}) => {
  const ContenedorD = styled.div`
    width: 100%;
    text-align: center;

    @media (min-width: 996px) {
      display: none;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 70%;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;
    margin: 1rem auto;
    cursor: pointer;

    @media (max-width: 665px) {
      width: 90%;
    }
  `;

  const OvaTex = styled.p`
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 5px;
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
  `;

  return (
    <>
      <ContenedorD>
        <div className="cen">
          <Link href="/#renta">
            <OvaTexDiv className="b">
              <OvaTex>
                <span className="n">{mensaje}</span>
              </OvaTex>
            </OvaTexDiv>
          </Link>
          <Link href="/#reparacion">
            <OvaTexDiv className="b">
              <OvaTex>
                <span className="n">{smensaje}</span>
              </OvaTex>
            </OvaTexDiv>
          </Link>
          <Link href="/DSD-venta-en-ruta">
            <OvaTexDiv className="b">
              <OvaTex>
                {tmensaje}
                <br />
                <span className="n">{cmensaje}</span>
              </OvaTex>
            </OvaTexDiv>
          </Link>
        </div>
        <Link href="/venta-fundas-handheld-impresora-portatil">
          <OvaTexDiv>
            <OvaTex>
              {cimensaje}
              <br />
              <span className="n">{semensaje}</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        
      </ContenedorD>
    </>
  );
};

export default BotonesMovil;

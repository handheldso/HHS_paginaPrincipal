import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const BotonFundas = () => {
  const ContenedorD = styled.div`
    width: 100%;
    text-align: center;

    @media (min-width: 996px) {
      display: none;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 60%;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;
    margin: 4rem auto;
    cursor: pointer;
    padding: 11px;

    @media (max-width: 851px) {
      width: 70%;
    }

    @media (max-width: 698px) {
      width: 90%;
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

    @media (max-width: 478px) {
      padding: 5px;
      font-size: 14px;
    }

    @media (max-width: 403px) {
      padding: 8px;
      font-size: 13px;
    }

    @media (max-width: 374px) {
      padding: 8px;
      font-size: 12px;
    }
  `;

  return (
    <>
      <ContenedorD>
      
        <Link href="/#renta">
          <OvaTexDiv className="b">
            <OvaTex>
              <span className="n">¡Conozca nuestro servicio de Renta!</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href="#reparacion">
          <OvaTexDiv className="b">
            <OvaTex>
              <span className="n">
                ¡Conozca nuestro servicio de Reparación!
              </span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href="/#venta">
          <OvaTexDiv>
            <OvaTex>
              <span className="n">¡Conozca nuestro servicio de Venta!</span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href="/venta-de-accesorios-y-consumibles">
          <OvaTexDiv className="b">
            <OvaTex>
              <span className="n">
                ¡Conozca nuestro servicio de accesorios y consumibles!
              </span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href="/DSD-venta-en-ruta">
          <OvaTexDiv className="b">
            <OvaTex>
              <span className="n">
                ¡Conozca nuestra solución "DSD" para venta en ruta!
              </span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href="/venta-fundas-handheld-impresora-portatil">
          <OvaTexDiv className="b">
            <OvaTex>
              Contamos con fundas diseñadas a la medida para cumplir con sus
              necesidades.
              <br />
              <span className="n">
                ¡Adquiera la protección que sus equipos necesitan!
              </span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        <Link href="/impresion-credenciales-tarjetas-gafetes-pvc">
          <OvaTexDiv className="b">
            <OvaTex>
              <span className="n">
                ¡Conozca nuestro servicio de impresión de credenciales!
              </span>
            </OvaTex>
          </OvaTexDiv>
        </Link>
        
      </ContenedorD>
    </>
  );
};

export default BotonFundas;

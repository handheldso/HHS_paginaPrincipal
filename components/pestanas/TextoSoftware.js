import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const TextoSoftware = () => {
  const Contenedor = styled.div`
    width: 100%;
    text-align: center;
  `;

  const ContenedorD = styled.div`
    width: 100%;
    margin-top: 4rem;

    @media (max-width: 995px) {
      display: none;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 78%;
    height: 5.5rem;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;
    margin: auto;
    cursor: pointer;

    @media (max-width: 899px) {
      display: none;
    }
  `;

  const OvaTex = styled.p`
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 10px;
    color: white;

    @media (max-width: 1500px) {
      font-size: 19px;
    }

    @media (max-width: 1355px) {
      font-size: 17px;
    }

    @media (max-width: 1250px) {
      font-size: 15px;
    }
  `;

  const OvaTexU = styled.p`
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    color: white;

    @media (max-width: 1830px) {
      padding: 4px;
      padding-top: 15px;
      font-size: 19px;
    }

    @media (max-width: 1730px) {
      padding-top: 3px;
      font-size: 19px;
    }

    @media (max-width: 1500px) {
      font-size: 17px;
    }

    @media (max-width: 1355px) {
      font-size: 17px;
    }

    @media (max-width: 1250px) {
      font-size: 15px;
      padding-top: 10px;
    }
  `;

  const DivIMG = styled.div`
    width: 100%;
    margin-top: 0rem;
  `;

  const IMG = styled.img`
    width: 80%;
    height: 100%;

    @media (max-width: 850px) {
      width: 68%;
    }

    @media (max-width: 500px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 89%;
    }
  `;

  const DivTexto = styled.div`
    width: 100%;
    margin-top: 4rem;
  `;

  const TextoIMG = styled.p`
    font-size: 35px;
    font-weight: bold;
    padding: 25px;
    text-align: justify;

    @media (max-width: 1750px) {
      font-size: 30px;
    }

    @media (max-width: 1550px) {
      padding-top: 4rem;
      font-size: 25px;
    }
  `;

  const TituloBeneficios = styled.p`
    font-size: 35px;
    font-weight: bold;
    text-align: left;
    padding: 25px;

    @media (max-width: 1750px) {
      font-size: 30px;
    }

    @media (max-width: 1550px) {
      padding-top: 4rem;
      font-size: 25px;
    }
  `;

  const Beneficios = styled.ul`
    font-size: 30px;
    text-align: left;
    margin-left: 25px;

    @media (max-width: 1750px) {
      font-size: 20px;
    }
  `;

  const BeneficiosLista = styled.li`
    list-style: outside;
  `;

  return (
    <>
      <div className="otro">
        <Contenedor>
          <DivIMG>
            <IMG
              src="/img/Software para venta en ruta.png"
              alt="Software Venta en Ruta Hand Held"
            />
          </DivIMG>
          <DivTexto>
            <TextoIMG>
              Aplicación "Direct Store Delivery" (DSD), basada en tecnologías
              móviles, capaz de habilitar los procesos de venta abordo, preventa
              y reparto. Herramienta que controla la fuerza de ventas y
              monitorea su desempeño.
            </TextoIMG>
            <TituloBeneficios>
              Beneficios: <br />
            </TituloBeneficios>
            <Beneficios>
              <BeneficiosLista>
                Adquiera la "Solución DSD" y disponga sin costo adicional de la
                renta de una handheld e impresora portátil.
              </BeneficiosLista>
              <BeneficiosLista>Control de inventarios</BeneficiosLista>
              <BeneficiosLista>Gestión de pedidos.</BeneficiosLista>
              <BeneficiosLista>Programación de visitas.</BeneficiosLista>
              <BeneficiosLista>
                Control total del proceso de ruta.
              </BeneficiosLista>
              <BeneficiosLista>
                Compatibilidad con diferentes modelos de handhelds.
              </BeneficiosLista>
              <BeneficiosLista>
                Implementación rápida y sencilla.
              </BeneficiosLista>
            </Beneficios>
          </DivTexto>
        </Contenedor>
        <div className="DivR">
          <ContenedorD>
            <Link href="/#renta">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">¡Conozca nuestro servicio de Renta!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/#reparacion">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">
                    ¡Conozca nuestro servicio de Reparación!
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/#venta">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">¡Conozca nuestro servicio de Venta!</span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/venta-de-accesorios-y-consumibles">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">
                    ¡Adquiera los accesorios y consumibles que necesita!
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>
            <Link href="/venta-fundas-handheld-impresora-portatil">
              <OvaTexDiv className="b">
                <OvaTex>
                  <span className="n">
                  Conozca nuestro servicio de impresion de credenciales
                  </span>
                </OvaTex>
              </OvaTexDiv>
            </Link>

            <Link href="/venta-fundas-handheld-impresora-portatil">
              <OvaTexDiv>
                <OvaTexU>
                  Contamos con fundas diseñadas a la medida para cumplir con sus
                  necesidades.
                  <br />
                  <span className="n">
                    ¡Adquiera la protección que sus equipos necesitan!
                  </span>
                </OvaTexU>
              </OvaTexDiv>
            </Link>
          </ContenedorD>
        </div>
      </div>
    </>
  );
};

export default TextoSoftware;

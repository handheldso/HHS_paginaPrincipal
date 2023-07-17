import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";

const TextoCredenciales = () => {
  const Contenedor = styled.div`
    width: 50%;

    @media (max-width: 995px) {
      width: 100%;
    }
  `;

  const DivTresImgText = styled.div`
    display: flex;
    margin-top: 7rem;

    @media (max-width: 1900px) {
      margin-top: 4rem;
    }

    @media (max-width: 1816px) {
      margin-top: 12rem;
    }

    @media (max-width: 1619px) {
      margin-top: 18rem;
    }
  `;

  const DivTresImgTextSinFlex = styled.div`
    display: grid;
    margin: 15rem auto;
  `;

  const Beneficios = styled.ul`
    font-size: 20px;
    text-align: left;
    margin-left: 25px;
    display: grid;
    align-items: center;

    @media (max-width: 1750px) {
      font-size: 20px;
    }

    @media (max-width: 1400px) {
      width: 100%;
      height: 100%;
      padding-top: 2rem;
    }

    @media (max-width: 995px) {
      width: 90%;
      height: 100%;
    }

    @media (max-width: 530px) {
      font-size: 15px;
    }
  `;

  const BeneficiosLista = styled.li`
    list-style: outside;
    align-items: center;
    font-size: 20px;

    @media (max-width: 530px) {
      font-size: 15px;
    }
  `;

  const IMGTC = styled.div`
    width: 52%;
    height: 70%;
    margin-top: 0px;
    padding-left: 2rem;

    @media (max-width: 1786px) {
      width: 65%;
    }

    @media (max-width: 1400px) {
      width: 100%;
      height: 100%;
      text-align: center;
    }

    @media (max-width: 530px) {
      padding-left: 0px;
    }
  `;

  const DivSegundoTexto = styled.div`
    width: 100%;
    padding: 2rem;
    margin-top: 3rem;

    @media (max-width: 1400px) {
      margin-top: -212px;
    }

    @media (max-width: 530px) {
      padding: 1rem;
    }
  `;

  const DivTercerTexto = styled.div`
    width: 100%;
    padding-left: 2rem;
    margin-top: 3rem;
    display: flex;

    @media (max-width: 530px) {
      padding: 1rem;
    }
  `;

  const TextoSegundoDiv = styled.p`
    font-size: 20px;

    @media (max-width: 530px) {
      font-size: 15px;
    }
  `;

  const TextoTercerDiv = styled.div`
    font-size: 20px;
    display: grid;
    align-items: center;

    @media (max-width: 530px) {
      font-size: 15px;
    }
  `;

  const DivPVC = styled.div`
    margin-top: 4rem;
    padding-left: 2rem;

    @media (max-width: 530px) {
      padding: 1rem;
    }
  `;

  const TituloImpresion = styled.h2`
    text-align: center;

    font-size: 20px;
  `;

  const TituloImpresionDos = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-top: 2.5rem;
  `;

  const OvaTexDiv = styled.div`
    width: 78%;
    height: 4.5rem;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;
    margin: auto;
    cursor: pointer;

    @media (max-width: 899px) {
      display: none;
    }
  `;

  const OvaTexDivD = styled.div`
    width: 78%;

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
    padding-top: 20px;
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

  const TextDiv = styled.div`
    width: 80%;
    margin: 0px auto;

    @media (max-width: 1400px) {
      width: 100%;
    }
  `;

  const ContenedorD = styled.div`
    width: 100%;
    margin-top: 4rem;

    @media (max-width: 995px) {
      display: none;
    }
  `;

  const IMGCER = styled.img`
    @media (max-width: 1200px) {
      width: 50% !important;
    }

    @media (max-width: 1070px) {
      width: 45% !important;
    }

    @media (max-width: 995px) {
      width: 60% !important;
    }
  `;

  const size = useWindowSize();

  return (
    <>
      <Contenedor>
        {size > 1400 ? (
          <DivTresImgText>
            <IMGTC>
              <img src="/img/TresCredenciales.webp" alt="Credenciales" />
            </IMGTC>

            <Beneficios>
              <div>
                <h3>
                  <b>Garantizamos:</b>
                </h3>
              </div>
              <BeneficiosLista>
                Impresión de credenciales a color.
              </BeneficiosLista>
              <BeneficiosLista>
                Impresión de credenciales a blanco y negro.
              </BeneficiosLista>
              <BeneficiosLista>
                Impresión de credenciales a 1 y 2 caras.
              </BeneficiosLista>
              <BeneficiosLista>
                Impresión de credenciales con holograma de seguridad.{" "}
              </BeneficiosLista>
            </Beneficios>
          </DivTresImgText>
        ) : (
          <DivTresImgTextSinFlex>
            {size < 995 ? (
              <div className="cente">
                <h2 className="fonthd">
                  Impresión de credenciales a domicilio para empresas e
                  instituciones educativas.
                  <br />
                  <b>¡Llame para más información!</b>
                </h2>
              </div>
            ) : (
              <> </>
            )}
            <IMGTC>
              <img
                className="imgresce"
                src="/img/TresCredenciales.webp"
                alt="Credenciales"
              />
            </IMGTC>
            <Beneficios>
              <div className="garan">
                <h3>
                  <b>Garantizamos</b>
                </h3>
              </div>
              <BeneficiosLista>
                Impresión de credenciales a color.
              </BeneficiosLista>
              <BeneficiosLista>
                Impresión de credenciales a blanco y negro.
              </BeneficiosLista>
              <BeneficiosLista>
                Impresión de credenciales a 1 y 2 caras
              </BeneficiosLista>
              <BeneficiosLista>
                Impresión de credenciales con holograma de seguridad.
              </BeneficiosLista>
            </Beneficios>
          </DivTresImgTextSinFlex>
        )}

        <DivSegundoTexto>
          <TextoSegundoDiv>
            Nuestras credenciales son impresas en materiales, altamente
            resistentes y duraderos, que le dan a cada tarjeta y gafete una
            larga vida de uso. Contamos con impresión en PVC, PET y
            policarbonato. Garantizamos una excelente calidad de impresión,
            tenga la seguridad de que sus credenciales contarán con un holograma
            de seguridad para prevenir desgastes y evitar falsificaciones.
          </TextoSegundoDiv>
        </DivSegundoTexto>
        <DivTercerTexto>
          <TextoTercerDiv>
            Es indispensable que cada institución y empresa tenga el
            conocimiento de la salud de sus colaboradores. Contamos con la impresión de credenciales con un código QR para
            verificar y validar el certificado de vacunación contra <br/>COVID-19.
          </TextoTercerDiv>
          <IMGCER src="/img/Certificado.webp" alt="Certificado de Vacunación" />
        </DivTercerTexto>
        <DivPVC>
          <TituloImpresion>
            Impresión de credenciales en PVC, PET y policarbonato:
          </TituloImpresion>
          <ol className="esol">
          <BeneficiosLista>Credenciales con un código QR para verificar el certificado de vacunación contra COVID-19.</BeneficiosLista>
            <BeneficiosLista>Credenciales para empresas.</BeneficiosLista>
            <BeneficiosLista>
              Credenciales para instituciones educativas.
            </BeneficiosLista>
            <BeneficiosLista>
              Credenciales para exposiciones y eventos.
            </BeneficiosLista>
            <BeneficiosLista>
              Credenciales para el control de acceso.
            </BeneficiosLista>
            <BeneficiosLista>Gafetes para personal.</BeneficiosLista>
            <BeneficiosLista>
              Credenciales para clubes deportivos y asociaciones.
            </BeneficiosLista>
          </ol>
          <TituloImpresionDos>
            Contamos con el beneficio de imprimir sus credenciales con un
            holograma de seguridad para proteger su información.{" "}
          </TituloImpresionDos>
        </DivPVC>

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
              <OvaTexDivD className="b">
                <OvaTex>
                  Contamos con fundas diseñadas a la medida para cumplir con sus
                  necesidades.
                  <br />
                  <span className="n">
                    ¡Adquiera la protección que sus equipos necesitan!
                  </span>
                </OvaTex>
              </OvaTexDivD>
            </Link>
          </ContenedorD>
        </div>
      </Contenedor>
    </>
  );
};

export default TextoCredenciales;

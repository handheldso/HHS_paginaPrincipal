import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";

const TextoEtiquetas = () => {
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
      margin-top: 1rem;
    }

    @media (max-width: 1816px) {
      margin-top: 2rem;
    }

    @media (max-width: 1619px) {
      margin-top: 3rem;
    }
  `;

  const DivTresImgTextSinFlex = styled.div`
    display: grid;
    margin: 0px auto;
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
    border-radius: 15px;

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

  const IMGET= styled.div`
    max-width:500px;
    height: 70%;
    margin-top: 0px;
    padding-left: 2rem;
    border-radius: 15px;

    img{
      max-width:inherit;
      
    }
  `;


  const DivSegundoTexto = styled.div`
    width: 100%;
    padding: 2rem;
    margin-top: 3rem;
    display:contents;
    
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
    
    display: flex;

    @media (max-width: 830px) {
      padding: 1rem;
      flex-direction:column;
    }
  `;



  const TextoSegundoDiv = styled.p`
    font-size: 20px;
    padding: 2rem;

    @media (max-width: 530px) {
      font-size: 15px;
      padding: 15px;
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
    margin-top: 2rem;
    padding-left: 2rem;

    @media (max-width: 530px) {
      padding: 1rem;
      margin-top: 1rem;
    }
  `;

  const TituloImpresion = styled.h2`
    text-align: left;

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
    border-radius:15px;
    object-fit: contain;
    margin-top:5rem;

    @media (max-width: 1200px) {
      width: 50% !important;
    }

    @media (max-width: 1070px) {
      width: 45% !important;
    }

    @media (max-width: 995px) {
      margin: 0px auto;
      width: 60% !important;
    }
  `;

  const size = useWindowSize();

  return (
    <>
      <Contenedor>
        {size > 1400 ? (
          
          <DivTresImgText>
          
            <Beneficios>
            <div>
                <h3>
                  <b>Impresion de etiquetas con diferentes tipos de adhesivos:</b>
                </h3>
              </div>  
              <BeneficiosLista>
                Permanente.
              </BeneficiosLista>
              <BeneficiosLista>
                Removible.
              </BeneficiosLista>
              <BeneficiosLista>
                De alta adherencia.
              </BeneficiosLista>
              <BeneficiosLista>
                Acrílico.{" "}
              </BeneficiosLista>
            </Beneficios>
            <IMGET>
              <img src="/img/img.-pestaña-etiquetas-2.webp" alt="Etiquetas" width="500px"/>
            </IMGET>
          </DivTresImgText>
        ) : (
          <DivTresImgTextSinFlex>
            
            
            <Beneficios>
              <div className="garan">
                <h3>
                  <b>Impresión de etiquetas con diferentes tipos de adhesivos</b>
                </h3>
              </div>
              <BeneficiosLista>
                Permanente.
              </BeneficiosLista>
              <BeneficiosLista>
                Removible.
              </BeneficiosLista>
              <BeneficiosLista>
                De alta adherencia.
              </BeneficiosLista>
              <BeneficiosLista>
                Acrílico
              </BeneficiosLista>
            </Beneficios>

            <IMGET>
              <img
                className="imgresce"
                src="/img/img.-pestaña-etiquetas-2.webp"
                alt="Etiquetas"
              />
            </IMGET>

          </DivTresImgTextSinFlex>
        )}

        <DivSegundoTexto>
          <TextoSegundoDiv>
          <TituloImpresion>
          <b>Impresion de etiquetas en los mejores materiales como lo son:</b>
          </TituloImpresion>
          <BeneficiosLista>Poliolefina: Adecuada para etiquetas colocadas en superficies asperas e irregulares</BeneficiosLista>
          <BeneficiosLista>Polipropileno: Adecuado para etiquetar zonas curvas e irregulares, capaz de soportar bajas temperaturas.</BeneficiosLista>
          <BeneficiosLista>Poliester: Alta resitencia y durabilidad </BeneficiosLista>
          <BeneficiosLista>Poliamida: Adecuada para etiquetas capaces de resistir altas temperaturas.</BeneficiosLista>
          <BeneficiosLista>Papel: Adecuado para impresion de etiquetas de uso general y especialidades(resistencia a altas temperaturas, ultra removible, alta adherencia y más.)</BeneficiosLista>
            
          </TextoSegundoDiv> 
        </DivSegundoTexto>
        
                

        <DivTercerTexto>
        <DivPVC>
          <TituloImpresion>
          <b>Impresion de etiquetas para diferentes procesos</b>
          </TituloImpresion>
          <ol className="esol">
          <BeneficiosLista>Etiquetas textiles.</BeneficiosLista>
          <BeneficiosLista>Etiquetas para el sector automotriz.</BeneficiosLista>
          <BeneficiosLista>Etiquetas para el control de productos. </BeneficiosLista>
          <BeneficiosLista>Etiquetas para el sector de manufactura.</BeneficiosLista>
          <BeneficiosLista>Etiquetas para el sector salud.</BeneficiosLista>
          </ol>
        </DivPVC>
          <IMGCER src="/img/img.-pestaña-etiquetas.webp" alt="Etiquetas Muestra" width="30%"/>
        </DivTercerTexto>
        

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
            <Link href="/impresion-credenciales-tarjetas-gafetes-pvc">
              <OvaTexDivD className="b">
                <OvaTex>
                <span className="n">
                  ¡Conozca nuestro servicio de impresion de credenciales!
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

export default TextoEtiquetas;

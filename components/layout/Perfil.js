import React from "react";
import styled from "@emotion/styled";

const Perfil = () => {
  const Fondo = styled.div`
    background-color: #0076c0;
    width: 100%;
    color: white;
  `;

  const TituloDiv = styled.div`
    width: 100%;
    text-align: center;
    margin: 0px auto;
  `;

  const Titulo = styled.p`
    color: white;
    font-weight: bold;
    font-size: 33px;
  `;

  const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-bottom: 26px;

    @media (max-width: 900px) {
      display: grid;
    }
  `;

  const TexTiDiv = styled.div`
    text-align: center;
    margin: 0px auto;
    width: 100%;
    margin-left: 0;

    @media (max-width: 900px) {
      width: 80%;
      text-align: center;
      margin: 0px auto;
    }
  `;

  const Texti = styled.p`
    font-weight: bold;
    font-size: 1.25rem;
  `;

  const Info = styled.div`
    width: 100%;
    margin-left: 5.3rem;
    margin-top: 4rem;

    @media (max-width: 900px) {
      margin-left: 0rem;
    }
  `;

  const TextoDiv = styled.div`
    width: 100%;
    text-align: justify;

    @media (max-width: 900px) {
      width: 80%;
      margin: 0px auto;
    }
  `;

  const Texto = styled.p`
    font-size: 14px;
    line-height: 14px;
  `;

  const ImagenDiv = styled.div`
    width: 84%;
    margin-right: 6rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 6rem;

    @media (max-width: 1290px) {
      margin-right: 0rem;
      width: 100%;
      margin: 0px auto;
      padding-left: 2rem;
    }

    @media (max-width: 900px) {
      margin-right: 0rem;
      padding-left: 0rem;
    }
  `;

  const Imagen = styled.img`
    border-radius: 15px 15px 15px 15px;
    width: 94%;

    @media (max-width: 900px) {
      width: 74%;
      margin-top: 2rem;
    }

    @media (max-width: 600px) {
      width: 75%;
      margin-top: 2rem;
    }

    @media (max-width: 450px) {
      width: 85%;
      margin-top: 2rem;
    }
  `;

  const BotonDescarga = styled.a`
    display: flex;
    text-decoration: none;
    color: #0d73a7 !important;
    margin: auto;
    align-items: center;
  `;

  return (
    <>
      <section className="mt-5">
        <Fondo>
          <TituloDiv className="pt-3">
            <Titulo>Perfil Corporativo</Titulo>
          </TituloDiv>
          <Contenedor>
            <Info>
              <TexTiDiv>
                <Texti>OBJETIVO</Texti>
              </TexTiDiv>
              <TextoDiv>
                <Texto>
                Ser la empresa de hardware en la industria de soluciones en
                  handheld e impresoras portátiles y de etiquetas, predilecta en
                  el mercado mexicano. Para lograr esta condición, creceremos a
                  través del cumplimiento de los objetivos de nuestros clientes,
                  con una comprometida actitud de servicio y adaptándonos a las
                  necesidades que el sector industrial ha venido desarrollando.
                  Nuestros diferenciadores estarán en el servicio y atención al
                  cliente.
                </Texto>
              </TextoDiv>
              <TexTiDiv>
                <Texti>MISIÓN</Texti>
              </TexTiDiv>
              <TextoDiv>
                <Texto>
                  Somos la empresa mexicana dedicada a brindar soluciones
                  innovadoras en necesidades de handhelds e impresoras
                  portátiles, contando con personal apasionado y alineado a
                  equilibrio laboral.
                </Texto>
              </TextoDiv>
              <TexTiDiv>
                <Texti>VISIÓN</Texti>
              </TexTiDiv>
              <TextoDiv>
                <Texto>
                  Ser la empresa en la industria de soluciones en handelds e
                  impresoras portátiles predilecta.
                </Texto>
              </TextoDiv>
              <TexTiDiv>
                <Texti>VALORES</Texti>
              </TexTiDiv>
              <TextoDiv>
                <Texto>
                  Responsabilidad, Compromiso, Congruencia, Empatía y
                  Flexibilidad.
                </Texto>
              </TextoDiv>
              <div className="boto">
                <BotonDescarga
                  type="button"
                  className="btn btn-light mt-2 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/13zQzLmO33zkGCWzry3tUufd4vjxPw9C8/view?usp=sharing"
                >
                  ¡Descargue nuestros servicios!
                </BotonDescarga>
              </div>
            </Info>
            <ImagenDiv>
              <Imagen
                src="/img/Hand Held Solutions.webp"
                alt="Hand Held Solutions"
              />
            </ImagenDiv>
          </Contenedor>
        </Fondo>
      </section>
    </>
  );
};

export default Perfil;

import React from "react";
import styled from "@emotion/styled";


const ImagenPrincipal = () => {
  const Imagen = styled.img`
    width: 100%;
  `;
  const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;
  margin: auto;
  `;
  const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;


  return (
    <>
      <section>
    <section>
    {/* <img src="https://res.cloudinary.com/dihawqrnt/image/upload/v1694706323/NuevaPagina/oficina.png" class="d-block w-100" alt="banner de temporada alta" /> 
    <br />*/}
    <Imagen
          src="https://res.cloudinary.com/dihawqrnt/image/upload/v1694196156/NuevaPagina/barners/banner_temporada_alta.png"
          alt="Banner de temporada alta"
        />
        <br />

      <VideoContainer>
      <Video
            src="https://www.youtube.com/embed/66rAuvCWMmw?autoplay=1&controls=0&showinfo=0&rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video>
      </VideoContainer>
    </section>
        <br />
        <Imagen
          src="/img/Handheld.png"
          alt="Impresoras de credenciales"
        />
        <br />
        <br />
        <Imagen
          src="/img/Banner1.png"
          alt="Renta Handheld"
        />
        {/* <Imagen
          src="/img/Fabricantes banner pagina web.gif"
          alt="Honeywell Intermec Symbol Motorola Zebra Renta ReparaciÃ³n Venta Handheld"
        /> */}
      </section>
    </>
  );
};

export default ImagenPrincipal;
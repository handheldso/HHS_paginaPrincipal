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
    <Imagen
          src="/img/Julio regalado hand held.png"
          alt="Julio regalado hand held solutions"
        />
    {/* <Imagen
          src="/img/Banner Aniversario HHS.png"
          alt="Aniversario HHS"
        /> */}
        <br />
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
          src="/img/Banner campaña evolis.png"
          alt="Renta Handheld"
        />
        {/* <Imagen
          src="/img/Fabricantes banner pagina web.gif"
          alt="Honeywell Intermec Symbol Motorola Zebra Renta Reparación Venta Handheld"
        /> */}
      </section>
    </>
  );
};

export default ImagenPrincipal;

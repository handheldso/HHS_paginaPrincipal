import React from "react";
import styled from "@emotion/styled";
import { Modal, Carousel, Button, Navbar, Nav, NavDropdown, Item,Container } from "react-bootstrap";

const ImagenPrincipal = () => {
  const Imagen = styled.img`
    width: 100%;

    @media(max-width: 699px){
      height:40vh;
    }
  `;

  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dihawqrnt/image/upload/v1694196156/NuevaPagina/barners/banner_temporada_alta.png"
          alt="Julio Regalado"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/Handheld.png"
          alt="HandHeld Solutions"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/Banner campaña evolis.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   

  );
};

export default ImagenPrincipal;
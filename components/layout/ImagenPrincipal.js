import React from "react";
import styled from "@emotion/styled";
import { Modal, Carousel, Button, Navbar, Nav, NavDropdown, Item,Container } from "react-bootstrap";

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
  const Video = styled.video`
  width: 100%;
  background: #202124;
  height: 60vh;
  `;


  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dihawqrnt/image/upload/v1691174646/HHSv2.1/julio_regalado.png"
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

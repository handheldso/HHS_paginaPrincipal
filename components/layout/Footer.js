import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  const Contenedor = styled.div`
    color: #f0f9ff;
    background-color: black;
    min-height: 2rem;
  `;

  const FooTex = styled.p`
    text-align: center;
    padding-top: 10px;
    font-size: 13px;
    margin-bottom: 0;
    color: white;
    padding-bottom: 5px;
  `;

  return (
    <>
      <Contenedor className=" mt-5">
        <footer>
          <div className="container">
            <FooTex>
              HAND HELD SOLUTIONS 2021 - Todos los derechos reservados.
            </FooTex>
          </div>
        </footer>
      </Contenedor>
    </>
  );
};

export default Footer;

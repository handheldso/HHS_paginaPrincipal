import React from "react";
import styled from "@emotion/styled";

const Servicios = () => {
  const ContenedorD = styled.div`
    width: 50%;
    margin-right: 2rem;

    @media (max-width: 1100px) {
      margin-top: 5rem;
    }

    @media (max-width: 700px) {
      width: 100%;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 50%;
    margin: 0px auto;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;

    @media (max-width: 1200px) {
      width: 70%;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  `;

  const OvaTex = styled.p`
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    color: white;
    margin-top: 5rem;

    @media (max-width: 1200px) {
      font-size: 20px;
    }

    @media (max-width: 699px) {
      font-size: 17px;
    }

    @media (max-width: 593px) {
      font-size: 14px;
    }
  `;

  return (
    <>
      <ContenedorD>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/13zQzLmO33zkGCWzry3tUufd4vjxPw9C8/view?usp=sharing"
        >
          <OvaTexDiv className="b">
            <OvaTex>
              ¡Descargue nuestros
              <br /> servicios!
            </OvaTex>
          </OvaTexDiv>
        </a>
      </ContenedorD>
    </>
  );
};

export default Servicios;

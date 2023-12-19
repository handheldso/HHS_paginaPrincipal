import React from "react";
import styled from "@emotion/styled";

const Tarjeta = () => {
  const FondoBase = styled.div`
    width: 100%;
    height: 40px;
    background-color: white;
    border-top: 1px solid black;

    @media (max-width: 1950px) {
      height: 38px;
    }

  `;

  const Texto = styled.p`
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding-top: 5px;

    @media (max-width: 1950px) {
      font-size: 16px;
      padding-top: 8px;
    }

    @media (max-width: 900px) {
      font-size: 16px;
      padding-top: 7.5px;
    }
  `;

  const Flex = styled.div`
    display: flex;
    justify-content: center;
  `;

  const IMG = styled.img`
    height: 39px !important;
    margin-left: 15px;

    @media (max-width: 1950px) {
      height: 30px !important;
      margin-bottom: 0px;
      margin-top: 5px;
    }
  `;

  return (
    <>
      <FondoBase className="nav_tarjeta d-none d-sm-none d-md-block d-lg-block">
        <Flex>
          <Texto>¡Aceptamos pago con tarjeta!</Texto>
          <IMG
            src="https://res.cloudinary.com/dihawqrnt/image/upload/v1625761072/Iconos/Copia_de_metodos_de_pago_500x40_2_nw2lhc.png"
            alt="pago con tarjeta"
          />
        </Flex>
      </FondoBase>
    </>
  );
};

export default Tarjeta;

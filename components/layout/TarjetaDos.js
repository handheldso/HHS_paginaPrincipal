import React from "react";
import styled from "@emotion/styled";

const FondoBase = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  border-top: 1px solid black;

  @media (max-width: 400px) {
    height: 30px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const IMG = styled.img`
  height: 39px !important;
  margin-left: 15px;

  @media (max-width: 550px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    height: 29px !important;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

const TarjetaDos = () => {
  return (
    <>
      <FondoBase>
        <Flex>
          <IMG
            src="https://res.cloudinary.com/dihawqrnt/image/upload/v1625761072/Iconos/Copia_de_metodos_de_pago_500x40_2_nw2lhc.png"
            alt="pago con tarjeta"
          />
        </Flex>
      </FondoBase>
    </>
  );
};

export default TarjetaDos;

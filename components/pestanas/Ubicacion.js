import React from "react";
import styled from "@emotion/styled";

const Ubicacion = () => {
  const UbiDiv = styled.div`
    width: 50%;
    margin-left: 4rem;
    margin-top: 4rem;
    

    @media (max-width: 700px) {
      width: 100%;
      margin-left: 0rem;
    }
  `;

  const UbiTitDiv = styled.div`
    width: 75%;
    text-align: center;

    @media (max-width: 700px) {
      width: 100%;
    }
  `;

  const UbiTit = styled.h1`
    @media (max-width: 1340px) {
      font-size: 30px;
    }

    @media (max-width: 1150px) {
      font-size: 25px;
    }
  `;

  const UbiTextDiv = styled.div`
    width: 75%;
    text-align: justify;
    //border: 1px solid red;

    @media (max-width: 700px) {
      width: 100%;
      text-align: center;
      padding: 1rem;
    }
  `;

  const UbiText = styled.p`
    font-size: 20px;

    @media (max-width: 1340px) {
      font-size: 18px;
    }

    @media (max-width: 1150px) {
      font-size: 15px;
    }
  `;

  return (
    <>
      <UbiDiv>
        <UbiTitDiv>
          <UbiTit>Ubicación</UbiTit>
        </UbiTitDiv>
        <UbiTextDiv>
          <UbiText>
            {/* Calle: Heriberto Frías #249, Col. Narvarte Poniente, Alcaldía: Benito Juarez <br />C.P. 03020, CDMX, México */}
            
            <br />
            Teléfono (+52) 55 5115 6043 / (+52) 55 7599 6272 <br />
            Horarios de atención de Lunes a Viernes de 9:00 AM a 6:00 PM
            <br />
            <br />
            Renta, Leasing y Arrendamiento de Terminales Portátiles, Handhelds, Lectores de Códigos, Impresoras de Etiquetas y Credenciales "BARATAS Y ECONÓMICAS" Con Una Minima Inversión Adquiera La Solución A Su Necisidad.
            <br />
            <br />
            ¡MANTENIMIENTO INCLUIDO AL ALQUILAR EQUIPOS!
            <br />
            <br />
            Tenemos cobertura a toda la República Mexicana: Ciudad de México, Jalisco, Toluca, Nuevo León, Guanajuato, Puebla, Veracruz, Queretaro, Michoacan, Coahuila, Yucatan, Chihuahua, Tabasco, Chiapas, San Luis Potosí
            Hidalgo, Aguascalientes, Guerrero, Morelos, Quintana Roo, Oaxaca, Tamaulipas, Sinaloa, Sonora, Baja California, Campeche, Tlaxcala, Colima, Durango, Nayarit, Zacatecas, Baja California Sur. 
            <br />
          </UbiText>
        </UbiTextDiv>
      </UbiDiv>
    </>
  );
};

export default Ubicacion;

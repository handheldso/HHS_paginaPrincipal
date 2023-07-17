import React, { useState } from "react";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
import { useForm } from "../hooks/useForm";

import Error from "../components/ErrorMensaje";
import Exito from "../components/ExitoMensaje";

const FormEmail = () => {
  const TituloDiv = styled.div`
    width: 100%;
    text-align: center;
  `;

  const Titulo = styled.h1`
    font-weight: bold;
    font-size: 26px;
  `;

  const Boton = styled.button`
    font-size: 16px !important;
    height: calc(1.5em + 0.75rem + 2px);
  `;

  const [error, cambiarError] = useState(false);

  const [mensajeExito, cambiarMensajeExito] = useState(false);

  const [contacto, leerForm, sinValores] = useForm({
    nameUser: "",
    emailUser: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const { nameUser, emailUser, phoneNumber, company, message } = contacto;

  const enviarForm = (e) => {
    e.preventDefault();

    if (
      nameUser.trim() === "" ||
      emailUser.trim() === "" ||
      phoneNumber.trim() === "" ||
      company.trim() === "" ||
      message.trim() === ""
    ) {
      cambiarError(true);
      return;
    }

    cambiarError(false);

    emailjs
      .send(
        "service_np5cn6c",
        "template_wg8mmok",
        contacto,
        "user_CtXaK1GMBuQnrBLJCMxtu"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    sinValores();

    cambiarMensajeExito(true);

    setTimeout(() => {
      cambiarMensajeExito(false);
    }, 5000);
  };

  return (
    <>
      <TituloDiv className="mb-4">
        <Titulo>¡Contáctenos!</Titulo>
      </TituloDiv>

      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

      {mensajeExito ? <Exito mensaje="Formulario enviado con éxito." /> : null}

      <form onSubmit={enviarForm}>
        <div className="grupos form-group">
          <label>Nombre y Apellido: </label>
          <input
            className="input_styles"
            type="text"
            name="nameUser"
            value={nameUser}
            placeholder="Nombre"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group">
          <label>Empresa: </label>
          <input
            className="input_styles"
            type="text"
            name="company"
            value={company}
            placeholder="Empresa"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group">
          <label>Email: </label>
          <input
            className="input_styles"
            type="email"
            name="emailUser"
            value={emailUser}
            placeholder="Email"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group">
          <label>Teléfono: </label>
          <input
            className="input_styles"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Número de teléfono"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group">
          <label>Mensaje: </label>
          <textarea
            className="textarea_styles"
            name="message"
            value={message}
            onChange={leerForm}
          ></textarea>
        </div>

        <Boton
          className="btn btn-success btn-block btn-lg text-center"
          type="submit"
        >
          Enviar
        </Boton>
      </form>
    </>
  );
};

export default FormEmail;

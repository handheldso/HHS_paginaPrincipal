import React, { useState } from "react";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
import { useForm } from "../hooks/useForm";

import Error from "../components/ErrorMensaje";
import Exito from "../components/ExitoMensaje";

const FormHandHeld = () => {
  const Boton = styled.button`
    font-size: 25px !important;
    height: calc(1.5em + 0.75rem + 2px);

    @media (max-width: 899px) {
      width: 50% !important;
      margin: 2rem auto;
    }

    @media (max-width: 500px) {
      font-size: 18px !important;
    }
  `;

  const Label = styled.label`
    font-size: 25px;
    font-weight: bold;
    padding: 1rem;
    padding-left: 0;

    @media (max-width: 1108px) {
      font-size: 20px !important;
    }

    @media (max-width: 903px) {
      font-size: 16px !important;
    }

    @media (max-width: 899px) {
      font-size: 25px !important;
    }

    @media (max-width: 558px) {
      font-size: 20px !important;
    }

    @media (max-width: 452px) {
      font-size: 18px !important;
      line-height: 1.5rem;
    }

    @media (max-width: 350px) {
      font-size: 15px !important;
      line-height: 1.5rem;
    }
  `;

  const [contacto, leerForm, , sinValoresSegundoForm] = useForm({
    nameUser: "",
    emailUser: "",
    phoneNumber: "",
    company: "",
    message: "",
    model: "",
    servicio: "",
    hhnumber: "",
  });

  const [error, cambiarError] = useState(false);

  const [mensajeExito, cambiarMensajeExito] = useState(false);

  const {
    nameUser,
    emailUser,
    phoneNumber,
    company,
    message,
    model,
    servicio,
    hhnumber,
  } = contacto;

  const enviarForm = (e) => {
    e.preventDefault();

    if (
      nameUser.trim() === "" ||
      emailUser.trim() === "" ||
      phoneNumber.trim() === "" ||
      company.trim() === "" ||
      message.trim() === "" ||
      servicio.trim() === "" ||
      hhnumber.trim() === ""
    ) {
      cambiarError(true);
      return;
    }

    cambiarError(false);

    emailjs
      .send(
        "service_np5cn6c",
        "template_k4l3zkz",
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

    sinValoresSegundoForm();

    cambiarMensajeExito(true);

    setTimeout(() => {
      cambiarMensajeExito(false);
    }, 5000);
  };

  return (
    <>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

      {mensajeExito ? <Exito mensaje="Formulario enviado con éxito." /> : null}

      <form onSubmit={enviarForm}>
        <div className="grupos form-group p">
          <Label>Nombre y Apellido: </Label>
          <input
            className="input_styles"
            type="text"
            name="nameUser"
            value={nameUser}
            placeholder="Nombre"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group p">
          <Label>Empresa: </Label>
          <input
            className="input_styles"
            type="text"
            name="company"
            value={company}
            placeholder="Empresa"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group p">
          <Label>Email: </Label>
          <input
            className="input_styles"
            type="email"
            name="emailUser"
            value={emailUser}
            placeholder="Email"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group p">
          <Label>Teléfono: </Label>
          <input
            className="input_styles"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Número de teléfono"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group p">
          <Label>Marca y modelo del equipo: </Label>
          <input
            className="input_styles"
            type="text"
            name="model"
            value={model}
            placeholder="Equipo"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group p">
          <Label>Tipo de servicio: </Label>
          <select
            className="select_styles"
            type="text"
            name="servicio"
            value={servicio}
            placeholder="Tiempo de renta"
            onChange={leerForm}
          >
            <option>-- Seleccionar --</option>
            <option>Renta</option>
            <option>Reparación</option>
            <option>Venta</option>
            <option>Implementación de Software</option>
            <option>Venta de Fundas</option>
            <option>Venta de Accesorios y Consumibles</option>
            <option>Impresión de credenciales y gafetes</option>
            <option>Impresión de etiquetas</option>
          </select>
        </div>

        <div className="grupos form-group p">
          <Label>Cantidad solicitada: </Label>
          <input
            className="input_styles"
            type="text"
            name="hhnumber"
            value={hhnumber}
            placeholder="Cantidad que necesita"
            onChange={leerForm}
          />
        </div>

        <div className="grupos form-group p">
          <Label>Mensaje adicional: </Label>
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

export default FormHandHeld;

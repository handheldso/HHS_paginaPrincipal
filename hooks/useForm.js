import React, { useState } from "react";

export const useForm = (initialState = {}) => {
  const [contacto, cambiarContacto] = useState(initialState);

  const leerForm = (e) => {
    cambiarContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const sinValores = () => {
    cambiarContacto({
      nameUser: "",
      emailUser: "",
      phoneNumber: "",
      company: "",
      message: "",
    });
  };

  const sinValoresSegundoForm = () => {
    cambiarContacto({
      nameUser: "",
      emailUser: "",
      phoneNumber: "",
      company: "",
      message: "",
      model: "",
      servicio: "",
      hhnumber: "",
    });
  };

  return [contacto, leerForm, sinValores, sinValoresSegundoForm];
};

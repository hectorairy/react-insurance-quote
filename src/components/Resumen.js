import React from "react";
import styled from "@emotion/styled";
import { primerMayuscula } from "../helper";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`;

export const Resumen = ({ datos }) => {
  if (!datos) return null;

  const { marca, year, plan } = datos;
  return (
    <ContenedorResumen>
      <h1>Resumen de cotización</h1>
      <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del Auto: {primerMayuscula(year)}</li>
      </ul>
    </ContenedorResumen>
  );
};

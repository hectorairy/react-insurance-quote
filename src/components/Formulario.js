import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  obtenerAumento,
  obtenerDiferenciaYear,
  obtenerTipoSeguro,
} from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InpurRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 2rem;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Formulario = ({ setResumen, setLoading }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  const { marca, year, plan } = datos;

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Base de 2000
    let resultado = 2000;

    // obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(year);

    // por cada año restar 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano 15% - Asiatico 5% - Europeo 30%
    resultado = resultado * obtenerAumento(marca);

    // Básico aumenta 20% - Completo 50%

    const aumentoPlan = obtenerTipoSeguro(plan);
    resultado = parseFloat(aumentoPlan * resultado).toFixed(2);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResumen({
        cantidad: resultado,
        datos,
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={handleInputChange}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={handleInputChange}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InpurRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={handleInputChange}
        />{" "}
        Básico
        <InpurRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={handleInputChange}
        />{" "}
        Completo
      </Campo>

      <Button type="submit">Cotizar</Button>
    </form>
  );
};

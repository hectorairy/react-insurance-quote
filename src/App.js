import React, { useState } from "react";
import styled from "@emotion/styled";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Resumen } from "./components/Resumen";
import { Resultado } from "./components/Resultado";
import { Spinner } from "./components/Spinner/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({});
  const [loading, setLoading] = useState(false);
  const { cantidad, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setLoading={setLoading} />
        {loading && <Spinner />}
        <Resumen datos={datos} />
        {!loading && <Resultado cotizacion={cantidad} />}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

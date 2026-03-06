import React, { useState } from "react";
import { createCountry } from "../services/api";

function CountryForm({ reloadCountries }) {

  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [edad, setEdad] = useState("");
  const [rol, setRol] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCountry({
      nombre,
      empresa,
      edad,
      rol,
      correo
    });

    setNombre("");
    setEmpresa("");
    setEdad("");
    setRol("");
    setCorreo("");

    reloadCountries();
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Agregar Empleado</h2>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />

      <input
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />

      <input
        placeholder="Rol"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
      />

      <input
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <button type="submit">Agregar</button>

    </form>
  );
}

export default CountryForm;
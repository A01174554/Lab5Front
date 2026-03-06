import React, { useState } from "react";
import { createCountry } from "../services/api";

function CountryForm({ reloadCountries }) {

  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCountry({
      name,
      capital,
      currency
    });

    setName("");
    setCapital("");
    setCurrency("");

    reloadCountries();
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Agregar País</h2>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Capital"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
      />

      <input
        placeholder="Moneda"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />

      <button type="submit">Agregar</button>

    </form>
  );
}

export default CountryForm;
import React from "react";
import { deleteCountry } from "../services/api";

function CountryItem({ country, reloadCountries }) {

  const handleDelete = async () => {
    await deleteCountry(country.id);
    reloadCountries();
  };

  return (
    <div>

      <p>
        <b>{country.nombre}</b> - {country.empresa} - {country.edad} - {country.rol} - {country.correo}
      </p>

      <button onClick={handleDelete}>
        Eliminar
      </button>

    </div>
  );
}

export default CountryItem;
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
        <b>{country.name}</b> - {country.capital} - {country.currency}
      </p>

      <button onClick={handleDelete}>
        Eliminar
      </button>

    </div>
  );
}

export default CountryItem;
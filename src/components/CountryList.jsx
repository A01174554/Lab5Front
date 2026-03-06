import React, { useEffect, useState } from "react";
import { getCountries } from "../services/api";
import CountryItem from "./CountryItem";
import CountryForm from "./CountryForm";

function CountryList() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    const res = await getCountries();
    setCountries(res.data);
  };

  return (
    <div>

      <CountryForm reloadCountries={loadCountries} />

      <h2>Lista de Países</h2>

      {countries.map((country) => (
        <CountryItem
          key={country.id}
          country={country}
          reloadCountries={loadCountries}
        />
      ))}

    </div>
  );
}

export default CountryList;
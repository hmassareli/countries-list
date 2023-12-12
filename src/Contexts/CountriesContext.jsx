/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountriesList(response.data);
    });
  }, []);

  return (
    <CountryContext.Provider value={{ countriesList }}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountriesProvider };

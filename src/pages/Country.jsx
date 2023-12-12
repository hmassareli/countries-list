import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CountryContext } from "../Contexts/CountriesContext";

const Container = styled.div`
  display: flex;
`;

const Country = () => {
  let { country: countryName } = useParams();
  const { countriesList } = useContext(CountryContext);
  const country = countriesList.find((country) => country.flag === countryName);
  return <Container>{country && <h1>{country.name.common}</h1>}</Container>;
};

export default Country;

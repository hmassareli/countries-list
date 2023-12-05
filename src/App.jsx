import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px;
  & h1 {
    font-size: 24px;
  }
`;
function App() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountriesList(response.data);
    });
  }, []);

  return (
    <Container>
      <NavBar>
        <h1> Where in world?</h1>
      </NavBar>
      {countriesList.map((country) => (
        <div key={country.name.common}>
          <img src={country.flags.png} />
          <div>
            <strong>{country.name.common}</strong>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default App;

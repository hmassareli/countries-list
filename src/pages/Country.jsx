import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CountryContext } from "../Contexts/CountriesContext";

const Container = styled.div`
  padding: 50px;
  display: flex;
  gap: 50px;
  background-color: #212e37;
`;

const CountryFlag = styled.img`
  width: 500px;
  max-width: 90%;
`;

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: white;

  & h1 {
    text-align: left;
    font-size: 40px;
  }
`;

const ParagraphBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    color: #f1f1f1;
    text-align: left;
    font-size: 20px;

    & b {
      color: white;
    }
  }
`;

const Country = () => {
  let { country: countryName } = useParams();
  const { countriesList } = useContext(CountryContext);

  const country = countriesList.find(
    (country) => country.cca2.toLowerCase() === countryName.toLowerCase()
  );
  return (
    <Container>
      <CountryFlag src={country?.flags.png} />
      <Info>
        {country && <h1>{country?.name.common}</h1>}
        <ParagraphBlocks>
          <div>
            <p>
              <b>Native name:</b> {country?.name?.official}
            </p>
            <p>
              <b>Population:</b> {country?.population}
            </p>
            <p>
              <b>Region:</b> {country?.region}
            </p>
            <p>
              <b>Sub Region:</b> {country?.subregion}
            </p>
            <p>
              <b>Capital:</b> {country?.capital}
            </p>
          </div>
          <div>
            <p>
              <b>Top Level Domain:</b> {country?.name.official}
            </p>
            <p>
              <b>Currencies:</b>{" "}
              {Object.values(country?.currencies || {})[0]?.name}
            </p>
          </div>
        </ParagraphBlocks>
      </Info>
    </Container>
  );
};

export default Country;

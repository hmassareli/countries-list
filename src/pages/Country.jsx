import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../App";
import { CountryContext } from "../Contexts/CountriesContext";
const Container = styled.div`
  padding: 50px;
  padding-top: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-inline: auto;
  max-width: 1400px;
  gap: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #212e37;
  min-height: 100vh;
  flex-direction: column;
`;

const CountryFlag = styled.img`
  height: 300px;
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

const GoBackButton = styled.button`
  all: unset;
  box-shadow: 0 0 10px 1px #0000003d;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 100px;
  padding: 5px 20px;
  padding-left: 10px;
  border-radius: 2px;
  color: #ededed;
  width: fit-content;
  &:hover {
    box-shadow: 0 0 15px 3px #0000003d;
  }
  &:active {
    outline: none;
  }

  background-color: hsl(204.54545454545456, 25%, 20.254901960784313%);
`;

const TagBorder = styled.span`
  box-shadow: 0 0 10px 3px #0000003d;
  padding: 5px 20px;
  border-radius: 2px;
  color: #ededed;
  background-color: hsl(204.54545454545456, 25%, 20.254901960784313%);
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & strong {
    font-size: 20px;
  }
`;

const ParagraphBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    color: #f1f1f1;
    text-align: left;
    font-size: 20px;
  }
`;

const Country = () => {
  let { country: countryName } = useParams();
  const { countriesList } = useContext(CountryContext);

  const country = countriesList.find(
    (country) => country.cca2.toLowerCase() === countryName.toLowerCase()
  );

  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavBar>
        <h1> Where in world?</h1>
      </NavBar>
      <GoBackButton onClick={() => navigate("/")}>← Go back</GoBackButton>
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
          <TagContainer>
            <strong>{country?.borders ? "Border Countries: " : ""} </strong>
            {country?.borders?.map((border) => (
              <TagBorder key={border}>
                {
                  countriesList.find((item) => item.cca3 === border)?.name
                    .common
                }
              </TagBorder>
            ))}
          </TagContainer>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default Country;

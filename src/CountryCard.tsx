import React from "react";
import styled from "styled-components";
import { Country } from "./types/country";

const CountryCardOne = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

type CountryCardProps = {
  country: Country;
  handleSelectCountry: (country: Country) => void;
};

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div onClick={() => handleSelectCountry(country)}>
      <CountryCardOne>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          style={{
            width: "120px",
            height: "100px",
          }}
        />
        <div style={{ fontWeight: "bold" }}>{country.name.common}</div>
        <div>{country.capital}</div>
      </CountryCardOne>
    </div>
  );
};

export default CountryCard;

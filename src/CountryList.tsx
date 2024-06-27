import { useEffect, useState } from "react";
import { fetchDataCountries } from "./api/countriesApi";
import { Country } from "./types/country";
import styled from "styled-components";
import CountryCard from "./CountryCard";

const CountryCardBorder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchDataCountries();
        setCountries(data);
      } catch (error) {
        console.error("나라 불러오기 에러", error);
      }
    };

    getCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.some(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  const filteredCountries = countries.filter(
    (country) =>
      !selectedCountries.some(
        (selectedCountry) => selectedCountry.name.common === country.name.common
      )
  );

  return (
    <div>
      <p style={{ fontWeight: "bold", fontSize: "25px" }}>Favorite Countries</p>
      <CountryCardBorder>
        {selectedCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            handleSelectCountry={handleSelectCountry}
          />
        ))}
      </CountryCardBorder>
      <p style={{ fontWeight: "bold", fontSize: "30px" }}>Countries</p>
      <CountryCardBorder>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            handleSelectCountry={handleSelectCountry}
          />
        ))}
      </CountryCardBorder>
    </div>
  );
};

export default CountryList;

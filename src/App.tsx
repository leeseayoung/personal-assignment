import { useEffect, useState } from "react";

import "./App.css";
import { fetchDataCountries } from "./api/countriesApi";

import CountryList from "./CountryList";

function App() {
  useEffect(() => {
    fetchDataCountries();
  }, []);

  return (
    <>
      <CountryList />
    </>
  );
}

export default App;

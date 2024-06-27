import { Country } from "../types/country";
//타입
export async function fetchDataCountries(): Promise<Country[]> {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const json = await data.json();
  // console.log(json);
  return json;
}

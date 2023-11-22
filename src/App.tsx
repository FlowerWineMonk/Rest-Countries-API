/* eslint-disable @typescript-eslint/no-explicit-any */
import DropDown from "./dropDownBtn/dropDown";
import Header from "./headerPage/Header";
import Search from "./search/search";
import Countries from "./country/country";
import { useState } from "react";

export interface Country {
  name: {
    common: string;
  };
  flag: string;
  region: string;
  population: number;
  capital: string;
}

export const CountryInfo: React.FC<Country> = (country) => {
  return (
    <div className="country-info">
      <img src={country.flag} />
      <h2>{country.name.common}</h2>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

function App() {
  const [data, setData] = useState<Country[]>([]);

  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <Search setData={setData}></Search>

        <DropDown setData={setData}></DropDown>
        
        <Countries data={data} setData={setData}></Countries>
      </div>
    </>
  );
}

export default App;

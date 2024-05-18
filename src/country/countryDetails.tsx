/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect } from "react";

export interface Country {
  name: {
    common: string;
  };
  flags: any;
  region: string;
  population: number;
  capital: string;
  subregion: string;
  currencies: [];
  languages: [];
  borders: [];
}

export const CountryInfo: React.FC<Country> = (country) => {
  return (
    <div className="country-info">
      <img src={country.flags.png} />
      <h2>{country.name.common}</h2>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Sub Region: {country.subregion}</p>
      <p>Currencies: </p>
    </div>
  );
};

const Countries = ({
  data,
  setData,
}: {
  data: Country[];
  setData: React.Dispatch<SetStateAction<any>>;
}) => {
  useEffect(() => {
    (async () => {
      try {
        const fetchData = await fetch(`https://restcountries.com/v3.1/all`);

        if (!fetchData.ok) {
          throw new Error(`Failed to fetch the request! ${fetchData.status}`);
        }

        const response = await fetchData.json();
        setData(response);
        console.log(setData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setData]);

  return (
    <>
      <div>
        {data.map((country: any) => (
          <CountryInfo key={country.name.common} {...country} />
        ))}
      </div>
    </>
  );
};
export default Countries;

import { SetStateAction } from "react";
import { Country } from "../App";

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

const Countries = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { data, setData }: { data: Country[]; setData: React.Dispatch<SetStateAction<any>> }) => {
  (async () => {
    try {
      const fetchData = await fetch(`https://restcountries.com/v3.1/all`);

      if (!fetchData.ok) {
        throw new Error(`Failed to fetch the request! ${fetchData.status}`);
      }

      const response = await fetchData.json();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  })();

  return (
    <>
      <div>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.map((country: any) => (
          <CountryInfo key={country.name.common} {...country} />
        ))}
      </div>
    </>
  );
};
export default Countries;

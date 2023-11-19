import { useEffect, useState } from "react";

interface Country {
  name: {
    common: string;
  };
  flag: string;
  region: string;
  population: number;
  capital: string;
}

const CountryInfo: React.FC<Country> = (country) => {
  return (
    <div className="country-info">
      <img src={country.flag}/>
      <h2>{country.name.common}</h2>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

const Countries: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchData = await fetch(`https://restcountries.com/v3.1/all`);

        if (!fetchData.ok) {
          throw new Error(`Failed to fetch the request! ${fetchData.status}`);
        }

        const response = await fetchData.json();
        console.log(response);
        setData(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div>
        {data.map((country) => (
          <CountryInfo key={country.name.common} {...country} />
        ))}
      </div>
    </>
  );
};
export default Countries;

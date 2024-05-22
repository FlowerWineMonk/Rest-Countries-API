/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from "react";

export interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  region: string;
  population: number;
  capital: string;
  subregion: string;
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
  borders: string[] | null;
}

// if border exists. sometimes it does not exist
export const CountryInfo: React.FC<Country & { onClick: () => void }> = ({
  name,
  flags,
  region,
  population,
  capital,
  onClick,
}) => {
  return (
    <div className="country-info" onClick={onClick}>
      <img src={flags.png} />
      <h2>{name.common}</h2>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <p>Population: {population.toLocaleString()}</p>
    </div>
  );
};

const DetailedCountryInfo: React.FC<Country & { onBack: () => void }> = ({
  name,
  flags,
  region,
  population,
  capital,
  subregion,
  currencies,
  languages,
  borders,
  onBack,
}) => {
  const currencyNames = Object.values(currencies)
    .map((currency) => currency.name)
    .join(", ");
  const languageNames = Object.values(languages).join(", ");

  return (
    <div className="detailed-country-info">
      <button onClick={onBack}>Back</button>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <h2>{name.common}</h2>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <p>Population: {population.toLocaleString()}</p>
      <p>Sub Region: {subregion}</p>
      <p>Currencies: {currencyNames}</p>
      <p>Languages: {languageNames}</p>
      <p>Borders: {borders ? borders.join(", ") : "None"}</p>
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
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
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
  }, [setData]);

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };

  return (
    <div>
      {selectedCountry ? (
        <DetailedCountryInfo {...selectedCountry} onBack={handleBackClick} />
      ) : (
        <div>
          {data.map((country) => (
            <CountryInfo
              key={country.name.common}
              {...country}
              onClick={() => handleCountryClick(country)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;

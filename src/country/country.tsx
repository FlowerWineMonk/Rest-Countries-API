/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect } from "react";
import { Country } from "../App";
import { CountryInfo } from "../App";

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

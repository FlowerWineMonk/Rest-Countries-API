/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction } from "react";

function DropDown({
  setData,
}: {
  setData: React.Dispatch<SetStateAction<any>>;
}) {
  const handleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const region: string = e.target.value;
    if (region !== "Filter by Region") {
      (async () => {
        try {
          const fetchData = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );

          if (!fetchData.ok) {
            throw new Error(`Failed to fetch the request! ${fetchData.status}`);
          }

          const response = await fetchData.json();
          setData(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }

    if (region === "All") {
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
    }
  };

  return (
    <>
      <div>
        <select name="region" onChange={handleRegion}>
          <option value="">Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
}

export default DropDown;

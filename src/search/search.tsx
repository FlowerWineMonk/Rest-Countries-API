import { SetStateAction } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Search({ setData }: { setData: React.Dispatch<SetStateAction<any>> }) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name: string = e.target.value.toLowerCase();
    if (name) {
      (async () => {
        try {
          const fetchData = await fetch(
            `https://restcountries.com/v3.1/name/${name}`
          );

          if (!fetchData.ok)
            throw new Error(`Failed to fetch the request! ${fetchData.status}`);

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
        <input
          onInput={handleSearch}
          type="text"
          placeholder="Search for a country ..."
        />
      </div>
    </>
  );
}

export default Search;

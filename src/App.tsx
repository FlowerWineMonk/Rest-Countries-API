/* eslint-disable @typescript-eslint/no-explicit-any */
import DropDown from "./dropDownBtn/dropDown";
import Header from "./headerPage/Header";
import Search from "./search/search";
import Countries, { Country } from "./country/countryDetails";
import { useState } from "react";

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

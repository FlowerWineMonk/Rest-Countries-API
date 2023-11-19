import DropDown from "./dropDownBtn/dropDown";
import Header from "./headerPage/Header";
import Search from "./search/search";
import Countries from "./country/country";

function App() {
  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <Search></Search>
        <DropDown></DropDown>
        <Countries></Countries>
      </div>
    </>
  );
}

export default App;

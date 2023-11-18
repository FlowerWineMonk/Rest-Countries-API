import DropDown from "./dropDownBtn/dropDown";
import Header from "./headerPage/Header";
import Search from "./search/search";

function App() {
  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <Search></Search>
        <DropDown></DropDown>
      </div>
    </>
  );
}
// https://restcountries.com/v3.1/all url

export default App;

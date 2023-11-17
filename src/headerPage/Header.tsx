import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(darkMode);
  };

  return (
    <>
      <div className="header">
        <h1>Where in the world?</h1>
        <button
          onClick={handleClick}
          className={darkMode ? "toggle darkMode" : "toggle"}
        >
          Dark Mode
        </button>
      </div>
    </>
  );
}

export default Header;

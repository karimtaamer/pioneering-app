import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const TopBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div  className={`topBarContainer ${theme}`}>
      <div className="topBarContainer">Pioneering Programmers Test App</div>
    </div>
  );
};

export default TopBar;

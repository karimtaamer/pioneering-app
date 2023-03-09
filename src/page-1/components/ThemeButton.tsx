import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IThemeButtonProps {
  setPrintedText: React.Dispatch<React.SetStateAction<string[]>>;
}

/**This the button responsible for switching themes for the entire app */
const ThemeButton: React.FunctionComponent<IThemeButtonProps> = ({
  setPrintedText,
}) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  //The new theme to set depending on the current theme
  const themeToSet = theme === "light" ? "dark" : "light";

  /**Sends a message to the text area + switches global theme state*/
  const onClickHandler = () => {
    const currentDate = new Date().toLocaleString();
    setTheme(themeToSet);
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Theme was set to ${themeToSet}`,
    ]);
  };

  return (
    <Button
      className={`page1ThemeButton ${theme}`}
      variant="contained"
      onClick={() => onClickHandler()}
    >
      {`Set ${themeToSet.charAt(0).toUpperCase() + themeToSet.slice(1)} Theme`}
    </Button>
  );
};

export default ThemeButton;

import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IThemeButtonProps {
  setPrintedText: React.Dispatch<React.SetStateAction<string[]>>;
}

const ThemeButton: React.FunctionComponent<IThemeButtonProps> = ({
  setPrintedText,
}) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const themeToSet = theme === "light" ? "dark" : "light";

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

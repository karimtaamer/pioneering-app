import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IButtonsSectionProps {
  setPrintedText: React.Dispatch<React.SetStateAction<string[]>>;
}

const ButtonsSection: React.FunctionComponent<IButtonsSectionProps> = ({
  setPrintedText,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const [buttonsCount, setButtonsCount] = React.useState<number>(0);

  const onGeneratedButtonHandler = (index: number) => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Button ${index} clicked`,
    ]);
  };

  const onMainButtonHandler = () => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Button ${buttonsCount + 1} was added`,
    ]);
    setButtonsCount(buttonsCount+1)
  };

  const generatedButtons = Array.from({ length: buttonsCount }, (_, index) => (
    <Button
      key={index}
      className={`page1ThemeButton ${theme}`}
      variant="contained"
      onClick={() => onGeneratedButtonHandler(index + 1)}
    >
      {`Button ${index + 1}`}
    </Button>
  ));

  return (
    <>
      <Button
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={() => onMainButtonHandler()}
      >
        {`Add Button ${buttonsCount + 1}`}
      </Button>

      {buttonsCount > 0 && generatedButtons}
    </>
  );
};

export default ButtonsSection;

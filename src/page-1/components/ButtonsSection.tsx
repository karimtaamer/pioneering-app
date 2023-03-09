import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IButtonsSectionProps {
  setPrintedText: React.Dispatch<React.SetStateAction<string[]>>;
}

/**A component which will initially be a single button, and then
 * a new button will be added every time that first button was clicked
 */
const ButtonsSection: React.FunctionComponent<IButtonsSectionProps> = ({
  setPrintedText,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const [buttonsCount, setButtonsCount] = React.useState<number>(0);

  /**A generated button only send a message to the Text Area */
  const onGeneratedButtonHandler = (index: number) => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Button ${index} clicked`,
    ]);
  };

  /**The main button both send text to the Main Area + Adds a new button*/
  const onMainButtonHandler = () => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Button ${buttonsCount + 1} was added`,
    ]);
    setButtonsCount(buttonsCount + 1);
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

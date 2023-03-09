import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface ITextAreaProps {
  //This will be the accumulation of text sent by different components
  printedText: string[];
}

/**The text area on the right part of Page 1 */
const TextArea: React.FunctionComponent<ITextAreaProps> = ({ printedText }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`page1TextAreaContainer ${theme}`}>
      {printedText.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export default TextArea;

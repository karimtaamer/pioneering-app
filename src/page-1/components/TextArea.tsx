import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface ITextAreaProps {
  printedText: string[];
}

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

import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ButtonsSection from "./components/ButtonsSection";
import MessagingSection from "./components/MessagingSection";
import TextArea from "./components/TextArea";
import ThemeButton from "./components/ThemeButton";

const Page1 = () => {
  const [printedText, setPrintedText] = useState<string[]>([]);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page1Container">
      <div className={`page1LeftAreaContainer ${theme}`}>
        <ThemeButton
          setPrintedText={setPrintedText}
        />
        <MessagingSection setPrintedText={setPrintedText}/>
        <ButtonsSection  setPrintedText={setPrintedText}/>
      </div>
      <TextArea printedText={printedText} />
    </div>
  );
};

export default Page1;

import { useState } from "react";

export const useSendText = () => {
    const [printedText, setPrintedText] = useState<string[]>([]);

  const sendText = (text:string) => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} ${text}`,
    ]);
  };


  return {
    printedText,
    sendText,
    setPrintedText,
  };
};

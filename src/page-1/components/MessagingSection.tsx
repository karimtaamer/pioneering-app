import { Button, TextField } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IMessagingSectionProps {
  setPrintedText: React.Dispatch<React.SetStateAction<string[]>>;
}

const MessagingSection: React.FunctionComponent<IMessagingSectionProps> = ({
  setPrintedText,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const [message, setMessage] = React.useState<string>("");

  const onClickHandler = () => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Message Sent: ${message}`,
    ]);
    setMessage('')
  };
  return (
    <div>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="outlined-basic"
        label="Message"
        variant="outlined"
        fullWidth
      />
      <Button
      disabled={!message}
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={() => onClickHandler()}
      >
        Send Message
      </Button>
    </div>
  );
};

export default MessagingSection;

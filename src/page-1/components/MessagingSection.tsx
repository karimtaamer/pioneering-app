import { Button, TextField } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface IMessagingSectionProps {
  setPrintedText: React.Dispatch<React.SetStateAction<string[]>>;
}

/**The container for the area that has a TextField and a button to send what
 * is inside the Textfield to teh Text Area
 */
const MessagingSection: React.FunctionComponent<IMessagingSectionProps> = ({
  setPrintedText,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const [message, setMessage] = React.useState<string>("");

  /**Sends a message to the text area */
  const onClickHandler = () => {
    const currentDate = new Date().toLocaleString();
    setPrintedText((prevArray) => [
      ...prevArray,
      `${currentDate} Message Sent: ${message}`,
    ]);
    setMessage("");
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

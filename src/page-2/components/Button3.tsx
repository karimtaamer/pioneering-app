import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AlertDialog from "./AlertDialog";
import { useButtonCount } from "./ButtonCountHook";

const Button3 = () => {
  const { theme } = React.useContext(ThemeContext);
  const {
    isAlertOpen,
    handleAlertOpen,
    handleAlertClose,
    buttonCount,
    onClickHandler,
  } = useButtonCount();

  const [buttonToggle, setButtonToggle] = React.useState<boolean>(true);
  const buttonName = `${buttonToggle ? "Delete" : "Disabled"} ${buttonCount} `;

  return (
    <>
      <AlertDialog
        isOpen={isAlertOpen}
        title="Delete?"
        bodyText={`Are you sure you
        want to delete the ${buttonName} button? This cannot be undone!`}
        rightOptionButton={
          <Button
            style={{ backgroundColor: "#cc0000", color: "white" }}
            onClick={() => {
              onClickHandler();
              setButtonToggle(!buttonToggle);
            }}
            autoFocus
          >
            Delete
          </Button>
        }
        handleClose={handleAlertClose}
      />
      <Button
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={handleAlertOpen}
      >
        {buttonCount === 0 ? "Delete not Clicked" : buttonName}
      </Button>
    </>
  );
};

export default Button3;

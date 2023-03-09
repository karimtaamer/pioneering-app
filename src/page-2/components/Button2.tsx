import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AlertDialog from "./AlertDialog";
import { useButtonCount } from "../hooks/ButtonCountHook";

const Button2 = () => {
  const { theme } = React.useContext(ThemeContext);
  const {
    isAlertOpen,
    handleAlertOpen,
    handleAlertClose,
    buttonCount,
    onClickHandler,
  } = useButtonCount();

  return (
    <>
      <AlertDialog
        isOpen={isAlertOpen}
        title="Remove?"
        bodyText={`Are you sure you want to remove the Remove ${buttonCount} button?`}
        rightOptionButton={
          <Button
            style={{ backgroundColor: "#ffa500", color: "black" }}
            onClick={() => onClickHandler()}
            autoFocus
          >
            Remove
          </Button>
        }
        handleClose={handleAlertClose}
      />
      <Button
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={handleAlertOpen}
      >
        {buttonCount === 0 ? "Remove not Clicked" : `Remove ${buttonCount}`}
      </Button>
    </>
  );
};

export default Button2;

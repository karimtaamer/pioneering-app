import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AlertDialog from "./AlertDialog";


const Button1=() => {
  const { theme } = React.useContext(ThemeContext);
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);
  

  return (
    <>
      <AlertDialog
        disableNegativeAction
        isOpen={isAlertOpen}
        title="Information"
        bodyText="You have clicked the Single CTA button"
        rightOptionButton={
          <Button
            style={{ backgroundColor: "#03F", color: "white" }}
            onClick={() => setIsAlertOpen(false)}
            autoFocus
          >
            OK
          </Button>
        }
        handleClose={() => setIsAlertOpen(false)}
      />
      <Button
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={() => setIsAlertOpen(true)}
      >
        Single CTA
      </Button>
    </>
  );
};

export default Button1;

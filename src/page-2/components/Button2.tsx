import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AlertDialog from "./AlertDialog";

const Button2 = () => {
  const { theme } = React.useContext(ThemeContext);
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);
  const [removeCount, setRemoveCount] = React.useState<number>(0);

  const onRemoveClickHandler = () => {
    setIsAlertOpen(false);
    setRemoveCount(removeCount + 1);
  };
  return (
    <>
      <AlertDialog
        isOpen={isAlertOpen}
        title="Remove?"
        bodyText={`Are you sure you want to remove the Remove ${removeCount} button?`}
        rightOptionButton={
          <Button
            style={{ backgroundColor: "#ffa500", color: "black" }}
            onClick={() => onRemoveClickHandler()}
            autoFocus
          >
            Remove
          </Button>
        }
        handleClose={() => setIsAlertOpen(false)}
      />
      <Button
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={() => setIsAlertOpen(true)}
      >
        {removeCount === 0 ? "Remove not Clicked" : `Remove ${removeCount}`}
      </Button>
    </>
  );
};

export default Button2;

import { Button } from "@mui/material";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AlertDialog from "./AlertDialog";

const Button3 = () => {
  const { theme } = React.useContext(ThemeContext);
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);
  const [deleteCount, setRemoveCount] = React.useState<number>(0);
  const [buttonToggle, setButtonToggle] = React.useState<boolean>(true);

  const buttonName = `${buttonToggle ? "Delete" : "Disabled"} ${deleteCount} `;

  const onDeleteClickHandler = () => {
    setIsAlertOpen(false);
    setRemoveCount(deleteCount + 1);
    setButtonToggle(!buttonToggle)
  };
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
            onClick={() => onDeleteClickHandler()}
            autoFocus
          >
            Delete
          </Button>
        }
        handleClose={() => setIsAlertOpen(false)}
      />
      <Button
        className={`page1ThemeButton ${theme}`}
        variant="contained"
        onClick={() => setIsAlertOpen(true)}
      >
        {deleteCount === 0 ? "Delete not Clicked" : buttonName}
      </Button>
    </>
  );
};

export default Button3;

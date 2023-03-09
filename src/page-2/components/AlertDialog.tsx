import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import * as React from "react";

interface IAlertDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  bodyText: string;
  //Pass Element to be displayed on the right
  rightOptionButton: JSX.Element;
  //Pass true to ignore the "Cancel" action
  disableNegativeAction?: boolean;
}

/**A reusable Alert Dialog component */
const AlertDialog: React.FunctionComponent<IAlertDialogProps> = ({
  isOpen,
  handleClose,
  title,
  bodyText,
  rightOptionButton,
  disableNegativeAction,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {bodyText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {!disableNegativeAction && (
          <Button
            variant="text"
            style={{ color: "black" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        )}
        {rightOptionButton}
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;

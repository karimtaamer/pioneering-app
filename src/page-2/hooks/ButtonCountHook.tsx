import { useState } from "react";

/**A custom hook that is responsible for incrementing the count
 * in a button, and to open or close the Dialog.
 */
export const useButtonCount = () => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [buttonCount, setButtonCount] = useState<number>(0);

  const onClickHandler = () => {
    setIsAlertOpen(false);
    setButtonCount(buttonCount + 1);
  };

  const handleAlertOpen = () => setIsAlertOpen(true);
  const handleAlertClose = () => setIsAlertOpen(false);

  return {
    isAlertOpen,
    handleAlertOpen,
    handleAlertClose,
    buttonCount,
    onClickHandler,
  };
};

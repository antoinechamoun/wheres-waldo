import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function show() {
    setIsShowing(true);
  }

  function hide() {
    setIsShowing(false);
  }

  return {
    isShowing,
    show,
    hide,
  };
};

export default useModal;

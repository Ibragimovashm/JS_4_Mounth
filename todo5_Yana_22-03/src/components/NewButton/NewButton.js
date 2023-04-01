import React from "react";
import NewButtonCss from "./NewButton.module.css";

const NewButton = ({ children, onClick }) => {
  return (
    <button className={NewButtonCss.btn} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default NewButton;

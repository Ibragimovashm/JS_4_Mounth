import React from "react";
import BtnActionCss from "./BtnAction.module.css";
export const BtnAction = ({ children, onClick, id }) => {
  return (
    <>
      <button
        className={BtnActionCss.btnAction_start}
        onClick={() => {
          onClick(id);
        }}
      >
        {children}
      </button>
    </>
  );
};

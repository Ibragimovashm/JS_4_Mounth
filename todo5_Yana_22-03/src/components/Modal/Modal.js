import React from "react";
import ModalCss from "./Modal.module.css";

export const Modal = ({ children, handleShow }) => {
  return (
    <>
      <div onClick={handleShow} className={ModalCss.modalWrapper}></div>
      <div className={ModalCss.modalContent}>{children}</div>
    </>
  );
};

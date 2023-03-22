import React, { useState } from "react";
import classes from "./modal.module.css";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

const Modal = ({ handleShow, onchange }) => {
  return (
    <>
      <div className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
        <Button handleClick={handleShow}>Закрыть модалку</Button>
        <Input placeholder="searchInput" name="mainInput" onchange={onchange} />
        <Button>Добавить таск</Button>
      </div>
    </>
  );
};

export default Modal;

/// rafce - для создание компоненты

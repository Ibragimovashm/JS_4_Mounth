
import React, { useState } from 'react'
import classes from './modal.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Modal = ({ handleShow, handleChangeCheck, handleAdd  }) => {
  
  return (
    <React.Fragment>

    <div className={classes.modalWrapper}></div>
    <div className={classes.modalContent}>
    <Button handleClick={handleShow}>Закрыть модалку</Button>

    <Input 
    name={'add'}
    onChangeFunc={handleChangeCheck}
    />
    <Button 
    handleClick={handleAdd}
    >Добавить таск</Button>



    </div>
    </React.Fragment>
  )
}

export default Modal



/// rafce - для создание компоненты
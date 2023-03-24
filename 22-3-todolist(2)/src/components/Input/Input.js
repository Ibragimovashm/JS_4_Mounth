import React from 'react'

const Input = ({ name, onChangeFunc, value }) => {
  return (
    <input 
    name={name}
    onChange={onChangeFunc}
    />
  )
}

export default Input
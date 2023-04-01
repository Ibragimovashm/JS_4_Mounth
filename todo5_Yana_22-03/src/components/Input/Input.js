import React from "react";
import InputCss from "./Input.module.css";
const Input = ({ placeholder, value, name, onChange }) => {
  return (
    <div className={InputCss.parent_input}>
      <input
        className={InputCss.input_inner}
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

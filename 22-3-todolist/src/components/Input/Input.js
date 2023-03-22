import React from "react";

export const Input = ({ placeholder, name, onchange }) => {
  return (
    <>
      <input placeholder={placeholder} name={name} onChange={onchange} />
    </>
  );
};

import React from "react";

function InputSearch({ type, name, placeholder, onChange, value }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default InputSearch;

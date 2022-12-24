import React, { FC, InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-container">
      <input id={name} {...rest} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;

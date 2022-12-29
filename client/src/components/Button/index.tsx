import React, { ButtonHTMLAttributes, FC } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

const Button: FC<ButtonProps> = ({ outlined, children, title, ...rest }) => {
  return (
    <button className={`btn ${outlined ? 'outlined' : ''}`} {...rest}>
      {children || title}
    </button>
  );
};

export default Button;

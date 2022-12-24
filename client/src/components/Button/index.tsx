import React, { FC } from 'react';
import './styles.css';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <button className='btn' {...rest}>{children}</button>
  );
};

export default Button;
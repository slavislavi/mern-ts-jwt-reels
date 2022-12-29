import React, { FC } from "react";
import './styles.css';

interface SpinnerProps {
  small?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({small, ...rest}) => {
  return (
    <div className="spinner-container" {...rest}>
      <div className={`loading-spinner ${small ? 'ls-small' : ''}`}></div>
    </div>
  );
};

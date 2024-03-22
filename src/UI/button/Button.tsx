import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
};

const Button: FC<ButtonProps> = ({ text, onClick, variant }) => {
  return (
    <button
      className={
        variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
      }
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Button;

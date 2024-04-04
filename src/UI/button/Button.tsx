import React, { FC, useEffect, useState } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'third';
};

const Button: FC<ButtonProps> = ({ text, onClick, variant }) => {
  const [buttonStyles, setButtonStyles] = useState('');
  useEffect(() => {
    if (variant === 'primary') {
      setButtonStyles(styles.buttonPrimary);
    }
    if (variant === 'secondary') {
      setButtonStyles(styles.buttonSecondary);
    }
    if (variant === 'third') {
      setButtonStyles(styles.buttonThird);
    }
  }, [variant]);

  return (
    <button className={buttonStyles} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;

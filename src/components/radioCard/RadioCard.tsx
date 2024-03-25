import React, { FC, useState } from 'react';
import styles from './RadioCard.module.scss';

type RadioCardProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

const RadioCard: FC<RadioCardProps> = ({ id, label, children }) => {
  // const [checked, setChecked] = useState(false);

  return (
    <div
      className={styles.defaultContainer}
    >
      <div className={styles.radioContainer}>
        <input
          id={id}
          type="radio"
          name={'travellers'}
          className={styles.input}
          // onChange={() => setChecked(!checked)}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
      {children}
    </div>
  );
};

export default RadioCard;

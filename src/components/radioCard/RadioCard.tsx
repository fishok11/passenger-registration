import React, { FC, useState } from 'react';
import styles from './RadioCard.module.scss';

type RadioCardProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

const RadioCard: FC<RadioCardProps> = ({ id, label, children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={checked ? styles.checkedContainer : styles.defaultContainer}
    >
      <div className={styles.checkboxContainer}>
        <input
          id={id}
          type="checkbox"
          name={'travellers'}
          className={styles.input}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor={id} className={styles.label}>
          <div className={styles.customCheckbox}></div>
          {label}
        </label>
        {children}
      </div>
    </div>
  );
};

export default RadioCard;

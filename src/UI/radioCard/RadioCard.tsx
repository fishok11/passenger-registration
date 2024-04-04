import React, { FC } from 'react';
import styles from './RadioCard.module.scss';

type RadioCardProps = {
  id: string;
  name: string;
  label: string;
  children: React.ReactNode;
  onChange: () => void;
  checked: boolean;
};

const RadioCard: FC<RadioCardProps> = ({
  id,
  name,
  label,
  children,
  onChange,
  checked,
}) => {
  // const [checked, setChecked] = usemainState(false);

  return (
    <div
      className={checked ? styles.checkedContainer : styles.defaultContainer}
    >
      <div className={styles.radioContainer}>
        <input
          id={id}
          type="radio"
          name={name}
          className={styles.input}
          onChange={() => onChange()}
          checked={checked}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default RadioCard;

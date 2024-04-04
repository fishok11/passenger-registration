import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import styles from './CheckBoxCard.module.scss';

type CheckBoxCardProps = {
  id: string;
  label: string;
  text: string;
  onChange: () => void;
  checked: boolean;
};

const CheckBoxCard: FC<CheckBoxCardProps> = ({
  id,
  label,
  text,
  onChange,
  checked,
}) => {
  return (
    <div
      className={checked ? styles.checkedContainer : styles.defaultContainer}
    >
      <div className={styles.itemsContainer}>
        <div className={styles.checkboxContainer}>
          <input
            id={id}
            type="checkbox"
            name={'travellers'}
            className={styles.input}
            onChange={() => onChange()}
            checked={checked}
          />
          <div
            className={
              checked ? styles.customCheckboxChecked : styles.customCheckbox
            }
          >
            {checked && <FontAwesomeIcon icon={faCheck} />}
          </div>
          <div>
            <label htmlFor={id} className={styles.label}>
              {label}
            </label>
          </div>
        </div>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  );
};

export default CheckBoxCard;

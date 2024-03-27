import React, { FC, useEffect } from 'react';
import styles from './TravellerCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { useTravellerCard } from './useTravellerCard';

type TravellerCadrProps = {
  id: string;
  name: string;
  surname: string;
  passport: string;
  onChange: () => void;
  checked: boolean;
};

const TravellerCard: FC<TravellerCadrProps> = ({
  id,
  name,
  surname,
  passport,
  onChange,
  checked,
}) => {
  const { handleEditTraveller } = useTravellerCard();
  useEffect(() => {
    console.log(checked);
    console.log('render');
  }, []);

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
            {name + ' ' + surname}
          </label>
          <p className={passport ? styles.textPassport : styles.textWarning}>
            {passport ? 'Passport ID:' + ' ' + passport : 'Missing information'}
          </p>
        </div>
      </div>
      <button
        className={styles.editButton}
        onClick={() => handleEditTraveller(id)}
      >
        <FontAwesomeIcon icon={faPen} /> Edit
      </button>
    </div>
  );
};

export default TravellerCard;

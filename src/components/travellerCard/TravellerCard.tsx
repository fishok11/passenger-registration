import React, { FC, useState } from 'react';
import styles from './TravellerCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { useTravellerCard } from './useTravellerCard';

type TravellerCadrProps = {
  id: string;
  name: string;
  surname: string;
  passport: string;
};

const TravellerCadr: FC<TravellerCadrProps> = ({
  id,
  name,
  surname,
  passport,
}) => {
  const { handleEditTraveller } = useTravellerCard();
  const [checkedTraveller, setCheckedTraveller] = useState(false);

  return (
    <div
      className={
        checkedTraveller ? styles.checkedContainer : styles.defaultContainer
      }
    >
      <div className={styles.checkboxContainer}>
        <input
          id={id}
          type="checkbox"
          name={'travellers'}
          className={styles.input}
          onChange={() => setCheckedTraveller(!checkedTraveller)}
        />
        <div
          className={
            checkedTraveller
              ? styles.customCheckboxChecked
              : styles.customCheckbox
          }
        >
          {checkedTraveller && <FontAwesomeIcon icon={faCheck} />}
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

export default TravellerCadr;

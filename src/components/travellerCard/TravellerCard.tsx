import React, { FC, useState } from 'react';
import styles from './TravellerCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';

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
        <label htmlFor={id} className={styles.label}>
          <div className={styles.customCheckbox}>
            {checkedTraveller && <FontAwesomeIcon icon={faCheck} />}
          </div>
          {name + ' ' + surname}
        </label>
        <p className={passport ? styles.textPassport : styles.textWarning}>
          {passport ? 'Passport ID:' + ' ' + passport : 'Missing information'}
        </p>
      </div>
      <button className={styles.editButton} onClick={() => console.log(1)}>
        <FontAwesomeIcon icon={faPen} /> Edit
      </button>
    </div>
  );
};

export default TravellerCadr;

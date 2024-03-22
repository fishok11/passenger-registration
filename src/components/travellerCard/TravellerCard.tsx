import React, { FC, useState } from 'react';
import styles from './TravellerCard.module.scss';

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
  const [checkedContainer, setCheckedContainer] = useState(false);

  return (
    <div
      className={
        checkedContainer ? styles.checkedContainer : styles.defaultContainer
      }
    >
      <input
        id={id}
        type="checkbox"
        name={'travellers'}
        className={styles.input}
        onChange={() => setCheckedContainer(!checkedContainer)}
      />
      <label htmlFor={id} className={styles.label}>
        <div className={styles.customCheckbox} />
        {name + ' ' + surname}
      </label>
      <p className={passport ? styles.textPassport : styles.textWarning}>
        {passport ? 'Passport ID:' + ' ' + passport : 'Missing information'}
      </p>
    </div>
  );
};

export default TravellerCadr;

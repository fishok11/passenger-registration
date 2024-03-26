import React, { FC } from 'react';
import styles from './InsurancesList.module.scss';
import { useInsurancesList } from './useInsurancesList';
import RadioCard from '../radioCard/RadioCard';

const InsurancesList: FC = () => {
  const { state } = useInsurancesList();

  return (
    <form className={styles.container}>
      {state.insurances.map((insurance) => (
        <RadioCard key={insurance.id} id={insurance.id} label={insurance.title}>
          <div className={styles.descriptionContainer}>
            {insurance.description && (
              <ul className={styles.descriptionList}>
                {insurance.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {insurance.price && (
              <div className={styles.price}>USD {insurance.price}</div>
            )}
          </div>
        </RadioCard>
      ))}
    </form>
  );
};

export default InsurancesList;

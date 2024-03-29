import React, { FC } from 'react';
import styles from './InsurancesList.module.scss';
import { useInsurancesList } from './useInsurancesList';
import RadioCard from '../radioCard/RadioCard';
import Box from '../../UI/box/Box';

const InsurancesList: FC = () => {
  const { mainState, registrationProcessState, handleSelectInsurance } =
    useInsurancesList();

  return (
    <Box isVisible={mainState.step === 3}>
      <form className={styles.container}>
        {mainState.insurances.map((insurance) => (
          <RadioCard
            key={insurance.id}
            id={insurance.id}
            label={insurance.title}
            onChange={() => handleSelectInsurance(insurance)}
            checked={
              registrationProcessState.selectedInsurance === insurance
              // ? true
              // : insurance.price === 0 || insurance.price === null
            }
          >
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
    </Box>
  );
};

export default InsurancesList;

import React, { FC } from 'react';
import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../components/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';

const PassengerRegistrationPage: FC = () => {
  return (
    <>
      <Stepper />
      <StepNavigation />
    </>
  );
};

export default PassengerRegistrationPage;

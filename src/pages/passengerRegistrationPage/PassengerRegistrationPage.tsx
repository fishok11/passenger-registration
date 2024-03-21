import React, { FC } from 'react';
// import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../components/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';
import CreateTravellers from '../../components/createTravellers/CreateTravellers';
import { usePassengerRegistrationPage } from './usePassengerRegistrationPage';

const PassengerRegistrationPage: FC = () => {
  const { state } = usePassengerRegistrationPage();

  return (
    <>
      <Stepper />
      {state.step === 1 && <CreateTravellers />}
      <StepNavigation />
    </>
  );
};

export default PassengerRegistrationPage;

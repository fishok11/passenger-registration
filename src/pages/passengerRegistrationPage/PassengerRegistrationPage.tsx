import React, { FC } from 'react';
// import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../UI/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';
import { usePassengerRegistrationPage } from './usePassengerRegistrationPage';
import TravellersList from '../../components/travellersList/TravellersList';

const PassengerRegistrationPage: FC = () => {
  const { state } = usePassengerRegistrationPage();

  return (
    <>
      <Stepper />
      {state.step === 1 && <TravellersList />}
      {state.step === 2 && <TravellersList />}
      {state.step === 3 && <TravellersList />}
      {state.step === 4 && <TravellersList />}
      {state.step === 5 && <TravellersList />}
      <StepNavigation />
    </>
  );
};

export default PassengerRegistrationPage;

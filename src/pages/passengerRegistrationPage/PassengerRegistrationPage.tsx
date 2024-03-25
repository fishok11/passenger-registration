import React, { FC } from 'react';
// import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../UI/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';
import { usePassengerRegistrationPage } from './usePassengerRegistrationPage';
import TravellersList from '../../components/travellersList/TravellersList';
import PickBaggages from '../../components/pickBaggages/PickBaggages';

const PassengerRegistrationPage: FC = () => {
  const { state } = usePassengerRegistrationPage();

  return (
    <>
      <Stepper />
      {state.step === 1 && <TravellersList />}
      {state.step === 2 && <PickBaggages />}
      {state.step === 3 && <p>3</p>}
      {state.step === 4 && <p>4</p>}
      {state.step === 5 && <p>5</p>}
      <StepNavigation />
    </>
  );
};

export default PassengerRegistrationPage;

import React, { FC } from 'react';
import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../UI/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';
import { usePassengerRegistrationPage } from './usePassengerRegistrationPage';
import TravellersList from '../../components/travellersList/TravellersList';
import PickBaggages from '../../components/pickBaggages/PickBaggages';
import InsurancesList from '../../components/insurancesList/InsurancesList';
import CreateTravellers from '../../components/createTravellers/CreateTravellers';

const PassengerRegistrationPage: FC = () => {
  const { state } = usePassengerRegistrationPage();

  return (
    <>
      <Stepper />
      <div className={styles.container}>
        <TravellersList />
        <PickBaggages />
        <InsurancesList />
        {state.step === 4 && <p>4</p>}
        {state.step === 5 && <p>5</p>}
      </div>
      <StepNavigation />
      <CreateTravellers
        isOpen={state.visibilityAddTravellerWindow && state.step === 1}
      />
    </>
  );
};

export default PassengerRegistrationPage;

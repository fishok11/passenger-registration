import React, { FC } from 'react';
import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../UI/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';
import { usePassengerRegistrationPage } from './usePassengerRegistrationPage';
import TravellersList from '../../components/travellersList/TravellersList';
import PickBaggages from '../../components/pickBaggages/PickBaggages';
import InsurancesList from '../../components/insurancesList/InsurancesList';
import CreateTravellers from '../../components/createTravellers/CreateTravellers';
import Box from '../../UI/box/Box';

const PassengerRegistrationPage: FC = () => {
  const { state } = usePassengerRegistrationPage();

  return (
    <>
      <Stepper />
      <div className={styles.container}>
        <TravellersList />
        <PickBaggages />
        <InsurancesList />
        <Box isVisible={state.step === 4}>
          <p>4</p>
        </Box>
        <Box isVisible={state.step === 5}>
          <p>5</p>
        </Box>
      </div>
      <StepNavigation />
      <CreateTravellers isOpen={state.visibilityAddTravellerWindow} />
    </>
  );
};

export default PassengerRegistrationPage;

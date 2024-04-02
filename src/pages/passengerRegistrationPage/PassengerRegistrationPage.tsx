import React, { FC } from 'react';
import styles from './PassengerRegistrationPage.module.scss';
import Stepper from '../../UI/stepper/Stepper';
import StepNavigation from '../../components/stepNavigation/StepNavigation';
import TravellersList from '../../components/travellersList/TravellersList';
import PickBaggages from '../../components/pickBaggages/PickBaggages';
import InsurancesList from '../../components/insurancesList/InsurancesList';
import CreateTravellers from '../../components/createTravellers/CreateTravellers';
import SeatSelection from '../../components/seatSelection/SeatSelection';

const PassengerRegistrationPage: FC = () => {
  return (
    <>
      <Stepper />
      <div className={styles.container}>
        <TravellersList />
        <PickBaggages />
        <InsurancesList />
        <SeatSelection />
      </div>
      <StepNavigation />
      <CreateTravellers />
    </>
  );
};

export default PassengerRegistrationPage;

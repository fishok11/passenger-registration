import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { nextStep } from '../../app/mainSlice';
import { stateRegistrationProcessSlice } from '../../app/registrationProcessSlice';

export const useStepNavigation = () => {
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const handleOpenInfo = () => {
    setIsOpenInfo(!isOpenInfo);
  };
  const handleNextStep = () => {
    dispatch(nextStep());
  };

  const ticketsPrice =
    registrationProcessState.ticketPrice *
    registrationProcessState.selectedTravellers.length;
  let baggagePrice = 0;

  registrationProcessState.selectedBaggages.forEach((item) => {
    if (item.price) {
      baggagePrice += item.price;
    }
  });
  const insurancePrice = registrationProcessState.selectedInsurance.price || 0;

  return {
    registrationProcessState,
    handleNextStep,
    isOpenInfo,
    handleOpenInfo,
    ticketsPrice,
    baggagePrice,
    insurancePrice,
  };
};

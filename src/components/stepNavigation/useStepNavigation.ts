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

  return {
    registrationProcessState,
    handleNextStep,
    isOpenInfo,
    handleOpenInfo,
  };
};

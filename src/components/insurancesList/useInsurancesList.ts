import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getInsurances, stateMainSlice } from '../../app/mainSlice';
import {
  selectInsurance,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import { Insurance } from '../../app/types';

export const useInsurancesList = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const handleSelectInsurance = (insurance: Insurance) => {
    dispatch(selectInsurance(insurance));
  };

  useEffect(() => {
    dispatch(getInsurances());
  }, []);

  return {
    mainState,
    registrationProcessState,
    handleSelectInsurance,
  };
};

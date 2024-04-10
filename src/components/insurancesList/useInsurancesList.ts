import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getInsurances, stateMainSlice } from '../../app/mainSlice';
import {
  selectInsurance,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import { Insurance } from '../../app/types';
import { useTranslation } from 'react-i18next';

export const useInsurancesList = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
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
    t,
    i18n,
  };
};

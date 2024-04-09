import {
  getCabinBaggageVariants,
  getCheckedBaggageVariants,
  stateMainSlice,
} from './../../app/mainSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import {
  selectCabinBag,
  selectCheckedBag,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import { BaggageVariant } from '../../app/types';
import { useTranslation } from 'react-i18next';

export const usePickBaggages = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handleSelectCabinBag = (cabinBag: BaggageVariant) => {
    dispatch(selectCabinBag(cabinBag));
  };
  const handleSelectCheckedBag = (cabinBag: BaggageVariant) => {
    dispatch(selectCheckedBag(cabinBag));
  };

  useEffect(() => {
    dispatch(getCabinBaggageVariants());
    dispatch(getCheckedBaggageVariants());
  }, []);

  return {
    mainState,
    registrationProcessState,
    t,
    handleSelectCabinBag,
    handleSelectCheckedBag,
  };
};

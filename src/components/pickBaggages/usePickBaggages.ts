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

export const usePickBaggages = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
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
    handleSelectCabinBag,
    handleSelectCheckedBag,
  };
};

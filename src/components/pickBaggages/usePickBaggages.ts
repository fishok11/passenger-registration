import {
  getBaggageCategories,
  getBaggageVariants,
  stateMainSlice,
} from './../../app/mainSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import {
  addSelectBag,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import { BaggageVariant } from '../../app/types';

export const usePickBaggages = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const handleSelectBag = (cabinBag: BaggageVariant) => {
    dispatch(addSelectBag(cabinBag));
  };

  useEffect(() => {
    dispatch(getBaggageCategories());
    dispatch(getBaggageVariants());
  }, []);

  return {
    mainState,
    registrationProcessState,
    handleSelectBag,
  };
};

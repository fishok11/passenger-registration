import {
  getBaggageCategories,
  getBaggageVariants,
  stateMainSlice,
} from './../../app/mainSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';

export const usePickBaggages = () => {
  const state = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBaggageCategories());
    dispatch(getBaggageVariants());
  }, []);

  return {
    state,
  };
};

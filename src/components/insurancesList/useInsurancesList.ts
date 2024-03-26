import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getInsurances, stateMainSlice } from '../../app/mainSlice';

export const useInsurancesList = () => {
  const state = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInsurances());
  }, []);

  return {
    state,
  };
};

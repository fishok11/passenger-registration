import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getInsurances, stateMainSlice } from '../../app/mainSlice';

export const useInsurancesList = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInsurances());
  }, []);

  return {
    mainState,
  };
};

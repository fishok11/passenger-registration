import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getTravellers,
  openAddTravellerWindow,
  stateMainSlice,
} from '../../app/mainSlice';

export const useTravellersList = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(stateMainSlice);
  const handleOpenAddTravellersWindow = () => {
    dispatch(openAddTravellerWindow());
  };

  useEffect(() => {
    dispatch(getTravellers());
  }, [state.visibilityAddTravellerWindow]);

  return {
    state,
    handleOpenAddTravellersWindow,
  };
};

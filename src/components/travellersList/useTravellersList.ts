import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getTravellers,
  openAddTravellerWindow,
  selectTraveller,
  stateMainSlice,
} from '../../app/mainSlice';
import { Traveller } from '../../app/types';

export const useTravellersList = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(stateMainSlice);
  const handleOpenAddTravellersWindow = () => {
    dispatch(openAddTravellerWindow());
  };
  const handleSelectTraveller = (traveller: Traveller) => {
    dispatch(selectTraveller(traveller));
  };

  useEffect(() => {
    dispatch(getTravellers());
  }, [state.visibilityAddTravellerWindow]);

  return {
    state,
    handleOpenAddTravellersWindow,
    handleSelectTraveller,
  };
};

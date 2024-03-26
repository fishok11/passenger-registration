import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getTravellers,
  openAddTravellerWindow,
  addSelectTraveller,
  removeSelectedTraveller,
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
    if (state.selectedTravellers.includes(traveller)) {
      dispatch(removeSelectedTraveller(traveller));
      return;
    }
    dispatch(addSelectTraveller(traveller));
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

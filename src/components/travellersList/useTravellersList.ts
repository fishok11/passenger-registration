import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { openAddTravellerWindow, stateMainSlice } from '../../app/mainSlice';

export const useTravellersList = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(stateMainSlice);
  const handleOpenAddTravellersWindow = () => {
    dispatch(openAddTravellerWindow());
  };

  return {
    state,
    handleOpenAddTravellersWindow,
  };
};

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  openAddTravellerWindow,
  setTravellerId,
  stateMainSlice,
} from '../../app/mainSlice';

export const useTravellerCard = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const handleEditTraveller = (travellerId: string) => {
    dispatch(setTravellerId(travellerId));
    dispatch(openAddTravellerWindow());
  };

  return { mainState, handleEditTraveller };
};

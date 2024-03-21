import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const usePassengerRegistrationPage = () => {
  const state = useAppSelector(stateMainSlice);

  return { state };
};

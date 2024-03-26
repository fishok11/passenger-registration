import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const usePassengerRegistrationPage = () => {
  const mainState = useAppSelector(stateMainSlice);

  return { mainState };
};

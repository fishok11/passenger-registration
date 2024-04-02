import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetMainState, stateMainSlice } from '../../app/mainSlice';
import {
  resetRegistrationProcessState,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';

export const usePaymentPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );

  const handleReserState = () => {
    dispatch(resetMainState());
    dispatch(resetRegistrationProcessState());
  };

  return { mainState, registrationProcessState, handleReserState };
};

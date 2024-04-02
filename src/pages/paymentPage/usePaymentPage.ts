import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';
import { stateRegistrationProcessSlice } from '../../app/registrationProcessSlice';

export const usePaymentPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );

  return { mainState, registrationProcessState };
};

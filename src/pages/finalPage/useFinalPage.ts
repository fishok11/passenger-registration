import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetMainState, stateMainSlice } from '../../app/mainSlice';
import { resetRegistrationProcessState } from '../../app/registrationProcessSlice';

export const useFinalPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);

  const handleResetState = () => {
    dispatch(resetMainState());
    dispatch(resetRegistrationProcessState());
  };

  return {
    mainState,
    handleResetState,
  };
};

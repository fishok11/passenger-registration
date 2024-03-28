import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';
import { stateRegistrationProcessSlice } from '../../app/registrationProcessSlice';

export const useSeatSelection = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );

  return { mainState, registrationProcessState };
};

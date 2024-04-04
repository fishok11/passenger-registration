import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';
import {
  hidePassangerDetailsWindow,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';

export const usePassangerDetails = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const hanldeHidePassangerDetailsWindow = () => {
    dispatch(hidePassangerDetailsWindow());
  };

  return {
    mainState,
    registrationProcessState,
    hanldeHidePassangerDetailsWindow,
  };
};

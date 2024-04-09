import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetMainState, stateMainSlice } from '../../app/mainSlice';
import { resetRegistrationProcessState } from '../../app/registrationProcessSlice';

export const useFinalPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const { t } = useTranslation();

  const handleResetState = () => {
    dispatch(resetMainState());
    dispatch(resetRegistrationProcessState());
  };

  return {
    mainState,
    t,
    handleResetState,
  };
};

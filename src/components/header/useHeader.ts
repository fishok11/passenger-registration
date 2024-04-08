import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { prevStep, stateMainSlice } from '../../app/mainSlice';

export const useHeader = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  return {
    mainState,
    handlePrevStep,
    t,
    i18n,
  };
};

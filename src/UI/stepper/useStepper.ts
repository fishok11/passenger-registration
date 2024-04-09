import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const useStepper = () => {
  const mainState = useAppSelector(stateMainSlice);
  const { t } = useTranslation();

  return {
    mainState,
    t,
  };
};

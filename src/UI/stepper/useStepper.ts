import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const useStepper = () => {
  const mainState = useAppSelector(stateMainSlice);

  return {
    mainState,
  };
};

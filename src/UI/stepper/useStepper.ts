import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const useStepper = () => {
  const state = useAppSelector(stateMainSlice);

  return {
    state,
  };
};

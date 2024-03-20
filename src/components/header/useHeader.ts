import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const useHeader = () => {
  const state = useAppSelector(stateMainSlice);

  return {
    state,
  };
};

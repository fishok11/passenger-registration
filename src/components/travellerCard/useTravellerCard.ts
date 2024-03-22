import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const useTravellerCadr = () => {
  const state = useAppSelector(stateMainSlice);
  
  return { state };
};

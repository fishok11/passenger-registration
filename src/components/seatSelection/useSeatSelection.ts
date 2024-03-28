import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

export const useSeatSelection = () => {
  const mainState = useAppSelector(stateMainSlice);

  return { mainState };
};

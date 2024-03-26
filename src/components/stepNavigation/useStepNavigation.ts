import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { nextStep, stateMainSlice } from '../../app/mainSlice';

export const useStepNavigation = () => {
  const state = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const handleNextStep = () => {
    dispatch(nextStep());
  };

  return { state, handleNextStep };
};

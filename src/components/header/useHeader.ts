import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { prevStep, stateMainSlice } from '../../app/mainSlice';

export const useHeader = () => {
  const state = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  return {
    state,
    handlePrevStep,
  };
};

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { prevStep, stateMainSlice } from '../../app/mainSlice';

export const useHeader = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  return {
    mainState,
    handlePrevStep,
  };
};

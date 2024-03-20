import { useAppDispatch } from '../../app/hooks';
import { nextStep } from '../../app/mainSlice';

export const useStepNavigation = () => {
  const dispatch = useAppDispatch();
  const handleNextStep = () => {
    dispatch(nextStep());
  };

  return { handleNextStep };
};

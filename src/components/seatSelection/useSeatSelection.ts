import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getInteriorConfiguration, stateMainSlice } from '../../app/mainSlice';
import {
  selectTravellerIdForSeat,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';

export const useSeatSelection = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const handleSelectTravellerIdForseat = (travellerdId: string) => {
    dispatch(selectTravellerIdForSeat(travellerdId));
  };

  useEffect(() => {
    dispatch(getInteriorConfiguration());
  }, []);

  return {
    mainState,
    registrationProcessState,
    handleSelectTravellerIdForseat,
  };
};

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getInteriorConfiguration,
  selectSeatTraveller,
  stateMainSlice,
} from '../../app/mainSlice';
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
  const handleSelectSeatTraveller = (travellerId: string, seatId: string) => {
    dispatch(selectSeatTraveller({ travellerId, seatId }));
  };

  const checkOccupiedSeat = (seatId: string) => {
    let seatOccupateCurrentTravellers = false;

    mainState.interiorConfiguration.interior.forEach((rowData) =>
      rowData.row.forEach((seat) => {
        registrationProcessState.selectedTravellers.forEach((traveller) => {
          if (seat.id === seatId && seat.travellerId === traveller.id) {
            seatOccupateCurrentTravellers = true;
          }
          return false;
        });
      }),
    );

    return seatOccupateCurrentTravellers;
  };

  useEffect(() => {
    dispatch(getInteriorConfiguration());
  }, []);

  return {
    mainState,
    registrationProcessState,
    handleSelectTravellerIdForseat,
    handleSelectSeatTraveller,
    checkOccupiedSeat,
  };
};

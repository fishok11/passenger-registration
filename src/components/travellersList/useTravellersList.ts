import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getTravellers,
  openAddTravellerWindow,
  stateMainSlice,
} from '../../app/mainSlice';
import {
  addSelectTraveller,
  removeSelectedTraveller,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import { Traveller } from '../../app/types';
import { useTranslation } from 'react-i18next';

export const useTravellersList = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const { t } = useTranslation();
  const handleOpenAddTravellersWindow = () => {
    dispatch(openAddTravellerWindow());
  };
  const handleSelectTraveller = (traveller: Traveller) => {
    if (registrationProcessState.selectedTravellers.includes(traveller)) {
      dispatch(removeSelectedTraveller(traveller));
      return;
    }
    dispatch(addSelectTraveller(traveller));
  };

  useEffect(() => {
    dispatch(getTravellers());
  }, [mainState.visibilityAddTravellerWindow]);

  return {
    mainState,
    registrationProcessState,
    handleOpenAddTravellersWindow,
    handleSelectTraveller,
    t,
  };
};

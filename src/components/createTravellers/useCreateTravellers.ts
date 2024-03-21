import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { hideAddTravellerWindow } from '../../app/mainSlice';

export const useCreateTravellers = () => {
  const dispatch = useAppDispatch();
  const nationalities = ['Russian', 'Enlish', 'Irish'];
  const [nationality, setNationality] = useState('');
  const handleHideAddTravellersWindow = () => {
    dispatch(hideAddTravellerWindow());
  };

  return {
    nationalities,
    nationality,
    setNationality,
    handleHideAddTravellersWindow,
  };
};

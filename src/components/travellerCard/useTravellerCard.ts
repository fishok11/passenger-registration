import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  openAddTravellerWindow,
  setTravellerId,
  stateMainSlice,
} from '../../app/mainSlice';

export const useTravellerCard = ({ onChange }: { onChange: () => void }) => {
  const state = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const [checkedTraveller, setCheckedTraveller] = useState(false);
  const handleEditTraveller = (travellerId: string) => {
    dispatch(setTravellerId(travellerId));
    dispatch(openAddTravellerWindow());
  };
  const handleCheckboxChange = () => {
    setCheckedTraveller(!checkedTraveller);
    onChange();
  };

  return { state, handleEditTraveller, checkedTraveller, handleCheckboxChange };
};

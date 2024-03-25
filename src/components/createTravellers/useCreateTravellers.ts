import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addTraveller,
  getTraveller,
  hideAddTravellerWindow,
  stateMainSlice,
} from '../../app/mainSlice';

export const useCreateTravellers = () => {
  const state = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [gender, setGender] = useState('');
  const nationalities = ['Russian', 'Enlish', 'Irish'];
  const [nationality, setNationality] = useState('');
  const [passport, setPassport] = useState('');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [month, setMonth] = useState('');
  // const [expireDatePasport, setExpireDatePasport] = useState('');
  const traveller = {
    name: name,
    surname: surname,
    gender: gender,
    nationality: nationality,
    passport: passport,
    // expireDatePasport: expireDatePasport,
  };

  const handleHideAddTravellerWindow = () => {
    dispatch(hideAddTravellerWindow());
  };

  const handleAddTraveller = () => {
    if (name === '') {
      setErrorName(true);
      return;
    }
    if (surname === '') {
      setErrorSurname(true);
      return;
    }
    dispatch(addTraveller(traveller));
    dispatch(hideAddTravellerWindow());
  };

  useEffect(() => {
    dispatch(getTraveller(state.travellerId));
  }, [state.travellerId]);

  useEffect(() => {
    setName(state.traveller.name);
    setSurname(state.traveller.surname);
    setGender(state.traveller.gender);
    setNationality(state.traveller.nationality);
    setPassport(state.traveller.passport);
  }, [state.traveller]);

  return {
    name,
    setName,
    surname,
    setSurname,
    errorName,
    errorSurname,
    gender,
    setGender,
    nationalities,
    nationality,
    setNationality,
    passport,
    setPassport,
    months,
    month,
    setMonth,
    // expireDatePasport,
    // setExpireDatePasport,
    handleAddTraveller,
    handleHideAddTravellerWindow,
  };
};

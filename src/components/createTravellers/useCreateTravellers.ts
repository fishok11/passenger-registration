import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTarveller, hideAddTravellerWindow } from '../../app/mainSlice';

export const useCreateTravellers = () => {
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

  const handleHideAddTravellersWindow = () => {
    if (name === '') {
      setErrorName(true);
      return;
    }
    if (surname === '') {
      setErrorSurname(true);
      return;
    }
    dispatch(addTarveller(traveller));
    dispatch(hideAddTravellerWindow());
  };

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
    handleHideAddTravellersWindow,
    traveller,
  };
};

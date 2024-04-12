import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addTraveller,
  getTraveller,
  hideAddTravellerWindow,
  stateMainSlice,
} from '../../app/mainSlice';
import { useTranslation } from 'react-i18next';

export const useCreateTravellers = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
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
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [checkExpireDatePasport, setCheckExpireDatePasport] = useState(false);
  const traveller = {
    name: name,
    surname: surname,
    gender: gender,
    nationality: nationality,
    passport: passport,
    expireDatePasport:
      day !== '' && month !== '' && year !== ''
        ? new Date(parseInt(year), months.indexOf(month), parseInt(day))
        : null,
  };
  const resetTravellerFields = () => {
    setName('');
    setSurname('');
    setGender('');
    setNationality('');
    setPassport('');
    setDay('');
    setMonth('');
    setYear('');
    setCheckExpireDatePasport(false);
  };
  const handleHideAddTravellerWindow = () => {
    dispatch(hideAddTravellerWindow());
    resetTravellerFields();
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
    resetTravellerFields();
  };
  const handleChangeCheckExpireDatePasport = () => {
    setCheckExpireDatePasport(!checkExpireDatePasport);
  };

  useEffect(() => {
    if (mainState.travellerId !== '') {
      dispatch(getTraveller(mainState.travellerId));
    }
  }, [mainState.travellerId]);

  useEffect(() => {
    setName(mainState.traveller.name);
    setSurname(mainState.traveller.surname);
    setGender(mainState.traveller.gender);
    setNationality(mainState.traveller.nationality);
    setPassport(mainState.traveller.passport);
    if (mainState.traveller.expireDatePasport !== null) {
      const expireDate = new Date(mainState.traveller.expireDatePasport);
      setDay(expireDate.getDate().toString());
      setMonth(months[expireDate.getMonth()]);
      setYear(expireDate.getFullYear().toString());
      setCheckExpireDatePasport(true);
    }
  }, [mainState.traveller]);

  return {
    mainState,
    t,
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
    day,
    setDay,
    months,
    month,
    setMonth,
    year,
    setYear,
    checkExpireDatePasport,
    handleChangeCheckExpireDatePasport,
    handleAddTraveller,
    handleHideAddTravellerWindow,
  };
};

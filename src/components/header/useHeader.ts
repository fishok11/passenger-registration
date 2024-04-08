import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { prevStep, stateMainSlice } from '../../app/mainSlice';
import { useState } from 'react';

export const useHeader = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const [lang, setLang] = useState('ru');
  const { t, i18n } = useTranslation();
  const handlePrevStep = () => {
    dispatch(prevStep());
  };
  const handleTranslate = () => {
    i18n.changeLanguage(lang);
    if (lang === 'ru') {
      setLang('en');
      return;
    }
    if (lang === 'en') {
      setLang('ru');
      return;
    }
  };

  return {
    mainState,
    handlePrevStep,
    t,
    handleTranslate,
  };
};

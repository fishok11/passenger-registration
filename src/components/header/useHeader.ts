import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { prevStep, stateMainSlice } from '../../app/mainSlice';
import { useState } from 'react';

export const useHeader = () => {
  const mainState = useAppSelector(stateMainSlice);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const handlePrevStep = () => {
    dispatch(prevStep());
  };
  const handleTranslate = () => {
    if (i18n.language === 'ru') {
      i18n.changeLanguage('en');
      return;
    }
    if (i18n.language === 'en') {
      i18n.changeLanguage('ru');
      return;
    }
  };

  return {
    mainState,
    handlePrevStep,
    t,
    handleTranslate,
    i18n,
  };
};

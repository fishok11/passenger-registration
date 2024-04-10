import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';
import {
  hidePassangerDetailsWindow,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import { BaggageVariant } from '../../app/types';

export const usePassangerDetails = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const { t, i18n } = useTranslation();
  const hanldeHidePassangerDetailsWindow = () => {
    dispatch(hidePassangerDetailsWindow());
  };

  const findBagVariantTitle = (
    arr: BaggageVariant[],
    selectedVariant: BaggageVariant,
  ) => {
    let title = '';

    arr.forEach((item) => {
      if (item.id === selectedVariant.id) {
        title = item.title;
        return;
      }
    });

    return title;
  };

  return {
    mainState,
    registrationProcessState,
    t,
    i18n,
    hanldeHidePassangerDetailsWindow,
    findBagVariantTitle,
  };
};

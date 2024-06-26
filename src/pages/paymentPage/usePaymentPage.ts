import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { goToTheFinishPage, stateMainSlice } from '../../app/mainSlice';
import {
  showPassangerDetailsWindow,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const usePaymentPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const { t, i18n } = useTranslation();
  const [buttonText, setButtonText] = useState('');
  const [payVariant, setPayVariant] = useState('card');
  const [isOpenPromoInput, setIsOpenPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const promoCodeName = 'promo10';
  const interestDiscount = 10;
  const [checkUserPolicy, setCheckUserPolicy] = useState(false);
  const handleSelectPayVariant = (variant: string) => {
    setPayVariant(variant);
  };
  const handleShowPassangerDetailsWindow = () => {
    dispatch(showPassangerDetailsWindow());
  };
  const handleSetPromoCode = (promo: string) => {
    setPromoCode(promo);
  };
  const handleOpenPromoInput = () => {
    setIsOpenPromoInput(!isOpenPromoInput);
  };
  const handleChangeCheckUserPolicy = () => {
    setCheckUserPolicy(!checkUserPolicy);
  };
  const hanldeGoToTheFinishPage = () => {
    if (checkUserPolicy === false) {
      toast.error('Сonfirm the user policy');
      return;
    }
    dispatch(goToTheFinishPage());
  };

  const ticketsPrice =
    registrationProcessState.ticketPrice *
    registrationProcessState.selectedTravellers.length;

  const cabinBagPrice = registrationProcessState.selectedCabinBag?.price
    ? registrationProcessState.selectedCabinBag?.price *
      registrationProcessState.selectedTravellers.length
    : 0;

  const checkedBagPrice = registrationProcessState.selectedCheckedBag?.price
    ? registrationProcessState.selectedCheckedBag?.price *
      registrationProcessState.selectedTravellers.length
    : 0;

  const insurancePrice = registrationProcessState.selectedInsurance?.price
    ? registrationProcessState.selectedInsurance.price *
      registrationProcessState.selectedTravellers.length
    : 0;

  const totalPrice =
    ticketsPrice + cabinBagPrice + checkedBagPrice + insurancePrice;

  useEffect(() => {
    if (payVariant === 'card') {
      setButtonText(t('payment.button.card'));
    }
    if (payVariant === 'applePay') {
      setButtonText(
        t('payment.button.apple', {
          price: totalPrice,
        }),
      );
    }
    if (payVariant === 'paypal') {
      setButtonText(
        t('payment.button.paypal', {
          price: totalPrice,
        }),
      );
    }
  }, [payVariant, i18n.language]);

  return {
    mainState,
    registrationProcessState,
    t,
    handleShowPassangerDetailsWindow,
    ticketsPrice,
    cabinBagPrice,
    insurancePrice,
    totalPrice,
    handleSelectPayVariant,
    handleSetPromoCode,
    handleOpenPromoInput,
    payVariant,
    promoCode,
    promoCodeName,
    interestDiscount,
    isOpenPromoInput,
    checkUserPolicy,
    handleChangeCheckUserPolicy,
    buttonText,
    hanldeGoToTheFinishPage,
  };
};

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { goToTheFinishPage, stateMainSlice } from '../../app/mainSlice';
import {
  showPassangerDetailsWindow,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';
import toast from 'react-hot-toast';

export const usePaymentPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
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
      setButtonText('Pay with Credit / Debit card');
    }
    if (payVariant === 'applePay') {
      setButtonText(`Pay USD ${totalPrice} with Apple Pay`);
    }
    if (payVariant === 'paypal') {
      setButtonText(`Pay USD ${totalPrice} with Paypal`);
    }
  }, [payVariant]);

  return {
    mainState,
    registrationProcessState,
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

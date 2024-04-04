import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetMainState, stateMainSlice } from '../../app/mainSlice';
import {
  resetRegistrationProcessState,
  showPassangerDetailsWindow,
  stateRegistrationProcessSlice,
} from '../../app/registrationProcessSlice';

export const usePaymentPage = () => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const [buttonText, setButtonText] = useState('');
  const [payVariant, setPayVariant] = useState('card');
  const handleSelectPayVariant = (variant: string) => {
    setPayVariant(variant);
  };
  const handleShowPassangerDetailsWindow = () => {
    dispatch(showPassangerDetailsWindow());
  };

  const handleResetState = () => {
    dispatch(resetMainState());
    dispatch(resetRegistrationProcessState());
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
      setButtonText(`Pay USD ${totalPrice} with apple pay`);
    }
    if (payVariant === 'paypal') {
      setButtonText(`Pay USD ${totalPrice} with paypal`);
    }
  }, [payVariant]);

  return {
    mainState,
    registrationProcessState,
    handleShowPassangerDetailsWindow,
    handleResetState,
    ticketsPrice,
    cabinBagPrice,
    insurancePrice,
    totalPrice,
    handleSelectPayVariant,
    payVariant,
    buttonText,
  };
};

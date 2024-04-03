import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetMainState, stateMainSlice } from '../../app/mainSlice';
import {
  resetRegistrationProcessState,
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

  const handleResetState = () => {
    dispatch(resetMainState());
    dispatch(resetRegistrationProcessState());
  };

  const ticketsPrice =
    registrationProcessState.ticketPrice *
    registrationProcessState.selectedTravellers.length;

  let baggagePrice = 0;
  registrationProcessState.selectedBaggages.forEach((item) => {
    if (item.price) {
      baggagePrice +=
        item.price * registrationProcessState.selectedTravellers.length;
    }
  });

  const insurancePrice = registrationProcessState.selectedInsurance?.price
    ? registrationProcessState.selectedInsurance.price *
      registrationProcessState.selectedTravellers.length
    : 0;

  const totalPrice = ticketsPrice + baggagePrice + insurancePrice;

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
    handleResetState,
    ticketsPrice,
    baggagePrice,
    insurancePrice,
    totalPrice,
    handleSelectPayVariant,
    payVariant,
    buttonText,
  };
};

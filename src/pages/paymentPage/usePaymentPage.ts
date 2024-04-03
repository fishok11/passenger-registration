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

  return {
    mainState,
    registrationProcessState,
    handleResetState,
    ticketsPrice,
    baggagePrice,
    insurancePrice,
    totalPrice,
  };
};

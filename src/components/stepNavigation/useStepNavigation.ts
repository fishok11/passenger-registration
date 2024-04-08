import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeInteriorConfiguration,
  nextStep,
  stateMainSlice,
} from '../../app/mainSlice';
import { stateRegistrationProcessSlice } from '../../app/registrationProcessSlice';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useStepNavigation = () => {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const handleOpenInfo = () => {
    setIsOpenInfo(!isOpenInfo);
  };
  const handleNextStep = () => {
    if (
      mainState.step === 1 &&
      registrationProcessState.selectedTravellers.length === 0
    ) {
      toast.error('Choose traveller(s)');
      return;
    }
    if (
      mainState.step === 2 &&
      (registrationProcessState.selectedCabinBag === null ||
        registrationProcessState.selectedCheckedBag === null)
    ) {
      toast.error('Pick baggages');
      return;
    }
    if (
      mainState.step === 3 &&
      registrationProcessState.selectedInsurance === null
    ) {
      toast.error('Choose insurance');
      return;
    }
    if (
      mainState.step === 4 &&
      checkingSelectionSeats() !==
        registrationProcessState.selectedTravellers.length
    ) {
      toast.error('Choose seats for traveller(s)');
      return;
    }
    if (mainState.step === 4) {
      dispatch(changeInteriorConfiguration(mainState.interiorConfiguration));
    }
    dispatch(nextStep());
  };

  const checkingSelectionSeats = () => {
    let quantityUsersHaveSeat = 0;

    mainState.interiorConfiguration.interior.forEach((row) =>
      row.row.forEach((seat) =>
        registrationProcessState.selectedTravellers.forEach((traveller) => {
          if (seat.travellerId === traveller.id) {
            quantityUsersHaveSeat++;
          }
        }),
      ),
    );

    return quantityUsersHaveSeat;
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

  return {
    registrationProcessState,
    handleNextStep,
    isOpenInfo,
    handleOpenInfo,
    ticketsPrice,
    cabinBagPrice,
    checkedBagPrice,
    insurancePrice,
    totalPrice,
    t,
  };
};

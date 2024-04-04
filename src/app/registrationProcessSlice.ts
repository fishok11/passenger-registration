import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { BaggageVariant, Insurance, Traveller } from './types';

type InitialState = {
  selectedTravellers: Traveller[];
  ticketPrice: number;
  selectedCabinBag: BaggageVariant | null;
  selectedCheckedBag: BaggageVariant | null;
  selectedInsurance: Insurance | null;
  travellerIdForSeat: string;
  visibilityPassangerDetailsWindow: boolean;
};

const initialState: InitialState = {
  selectedTravellers: [],
  ticketPrice: 1300,
  selectedCabinBag: null,
  selectedCheckedBag: null,
  selectedInsurance: null,
  travellerIdForSeat: '',
  visibilityPassangerDetailsWindow: false,
};

export const registrationProcessSlice = createSlice({
  name: 'registrationProcess',
  initialState,
  reducers: {
    addSelectTraveller: (state, action: PayloadAction<Traveller>) => {
      if (state.selectedTravellers.includes(action.payload) === false) {
        state.selectedTravellers = [
          ...state.selectedTravellers,
          action.payload,
        ];
      }
    },
    removeSelectedTraveller: (state, action: PayloadAction<Traveller>) => {
      state.selectedTravellers = state.selectedTravellers.filter(
        (traveller) => traveller.id != action.payload.id,
      );
    },
    selectCabinBag: (state, action: PayloadAction<BaggageVariant>) => {
      state.selectedCabinBag = action.payload;
    },
    selectCheckedBag: (state, action: PayloadAction<BaggageVariant>) => {
      state.selectedCheckedBag = action.payload;
    },
    selectInsurance: (state, action: PayloadAction<Insurance>) => {
      state.selectedInsurance = action.payload;
    },
    selectTravellerIdForSeat: (state, action: PayloadAction<string>) => {
      state.travellerIdForSeat = action.payload;
    },
    showPassangerDetailsWindow: (state) => {
      state.visibilityPassangerDetailsWindow = true;
    },
    hidePassangerDetailsWindow: (state) => {
      state.visibilityPassangerDetailsWindow = false;
    },
    resetRegistrationProcessState: () => initialState,
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const {
  addSelectTraveller,
  removeSelectedTraveller,
  selectCabinBag,
  selectCheckedBag,
  selectInsurance,
  selectTravellerIdForSeat,
  resetRegistrationProcessState,
  showPassangerDetailsWindow,
  hidePassangerDetailsWindow,
} = registrationProcessSlice.actions;

export const stateRegistrationProcessSlice = (state: RootState) =>
  state.registrationProcess;

export default registrationProcessSlice.reducer;

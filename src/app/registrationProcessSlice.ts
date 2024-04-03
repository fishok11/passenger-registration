import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { BaggageVariant, Insurance, Traveller } from './types';

type InitialState = {
  selectedTravellers: Traveller[];
  ticketPrice: number;
  selectedBaggages: BaggageVariant[];
  selectedInsurance: Insurance | null;
  travellerIdForSeat: string;
  visibilityPassangerDetailsWindow: boolean;
};

const initialState: InitialState = {
  selectedTravellers: [],
  ticketPrice: 1300,
  selectedBaggages: [],
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
    addSelectBag: (state, action: PayloadAction<BaggageVariant>) => {
      state.selectedBaggages = state.selectedBaggages.filter(
        (baggage) => baggage.categoryId != action.payload.categoryId,
      );
      state.selectedBaggages = [...state.selectedBaggages, action.payload];
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
  addSelectBag,
  selectInsurance,
  selectTravellerIdForSeat,
  resetRegistrationProcessState,
  showPassangerDetailsWindow,
  hidePassangerDetailsWindow,
} = registrationProcessSlice.actions;

export const stateRegistrationProcessSlice = (state: RootState) =>
  state.registrationProcess;

export default registrationProcessSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { BaggageVariant, Traveller } from './types';

type InitialState = {
  selectedTravellers: Traveller[];
  ticketPrice: number;
  selectedBaggages: BaggageVariant[];
};

const initialState: InitialState = {
  selectedTravellers: [],
  ticketPrice: 1300,
  selectedBaggages: [],
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
    removeSelectedTraveller(state, action: PayloadAction<Traveller>) {
      state.selectedTravellers = state.selectedTravellers.filter(
        (traveller) => traveller.id != action.payload.id,
      );
    },
    addSelectBag(state, action: PayloadAction<BaggageVariant>) {
      state.selectedBaggages = [...state.selectedBaggages, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { addSelectTraveller, removeSelectedTraveller, addSelectBag } =
  registrationProcessSlice.actions;

export const stateRegistrationProcessSlice = (state: RootState) =>
  state.registrationProcess;

export default registrationProcessSlice.reducer;

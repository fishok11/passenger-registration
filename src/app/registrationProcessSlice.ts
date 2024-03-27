import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Traveller } from './types';

type InitialState = {
  selectedTravellers: Traveller[];
  ticketPrice: number;
};

const initialState: InitialState = {
  selectedTravellers: [],
  ticketPrice: 1300,
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
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { addSelectTraveller, removeSelectedTraveller } =
  registrationProcessSlice.actions;

export const stateRegistrationProcessSlice = (state: RootState) =>
  state.registrationProcess;

export default registrationProcessSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { AddTraveller, Traveller } from './types';

type InitialState = {
  step: number;
  stepsQuantity: number;
  travellers: Traveller[];
  traveller: Traveller;
  travellerId: string;
  visibilityAddTravellerWindow: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  step: 1,
  stepsQuantity: 5,
  travellers: [],
  traveller: {
    id: '',
    name: '',
    surname: '',
    gender: '',
    nationality: '',
    passport: '',
  },
  travellerId: '',
  visibilityAddTravellerWindow: false,
  isLoading: false,
};

export const addTraveller = createAsyncThunk<
  Traveller,
  AddTraveller,
  { rejectValue: string; state: RootState }
>('addTraveller', async (Traveller, { rejectWithValue, getState }) => {
  try {
    const state = getState().main;
    
    if (state.travellerId !== '') {
      const { data } = await axios.put(
        `http://localhost:3002/travellers/${state.travellerId}`,
        Traveller,
      );

      return data;
    }

    const { data } = await axios.post(
      'http://localhost:3002/travellers/',
      Traveller,
    );

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const getTraveller = createAsyncThunk<
  Traveller,
  string,
  { rejectValue: string }
>('getTraveller', async (travellerId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3002/travellers/${travellerId}`,
    );

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const getTravellers = createAsyncThunk<
  Traveller[],
  undefined,
  { rejectValue: string }
>('getTravellers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:3002/travellers');

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step !== state.stepsQuantity) {
        state.step += 1;
      }
    },
    prevStep: (state) => {
      if (state.step !== initialState.step) {
        state.step -= 1;
      }
    },
    openAddTravellerWindow: (state) => {
      state.visibilityAddTravellerWindow = true;
    },
    hideAddTravellerWindow: (state) => {
      state.visibilityAddTravellerWindow = false;
    },
    setTravellerId: (state, action: PayloadAction<string>) => {
      state.travellerId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addTraveller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTraveller.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getTravellers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTravellers.fulfilled,
        (state, action: PayloadAction<Traveller[]>) => {
          state.travellers = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getTraveller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTraveller.fulfilled,
        (state, action: PayloadAction<Traveller>) => {
          state.traveller = action.payload;
          state.isLoading = false;
        },
      );
  },
});

export const {
  nextStep,
  prevStep,
  openAddTravellerWindow,
  hideAddTravellerWindow,
  setTravellerId,
} = mainSlice.actions;

export const stateMainSlice = (state: RootState) => state.main;

export default mainSlice.reducer;

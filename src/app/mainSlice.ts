import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import axios, { AxiosResponse } from 'axios';
import { AddTarveller, Tarveller } from './types';

type InitialState = {
  step: number;
  stepsQuantity: number;
  visibilityAddTravellerWindow: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  step: 1,
  stepsQuantity: 5,
  visibilityAddTravellerWindow: false,
  isLoading: false,
};

export const addTarveller = createAsyncThunk<
  AxiosResponse,
  AddTarveller,
  { rejectValue: string }
>('addTarveller', async (tarveller, { rejectWithValue }) => {
  try {
    const data = axios.post('http://localhost:3002/travellers/', tarveller);

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
  },

  extraReducers: (builder) => {
    builder
      .addCase(addTarveller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTarveller.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  nextStep,
  prevStep,
  openAddTravellerWindow,
  hideAddTravellerWindow,
} = mainSlice.actions;

export const stateMainSlice = (state: RootState) => state.main;

export default mainSlice.reducer;

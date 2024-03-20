import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

type InitialState = {
  step: number;
  stepsQuantity: number;
  isLoading: boolean;
};

const initialState: InitialState = {
  step: 1,
  stepsQuantity: 5,
  isLoading: false,
};

// export const incrementAsync = createAsyncThunk(
//   'main/fetchCount',
//   async (amount: number) => {

//   }
// );

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
  },

  extraReducers: (builder) => {
    builder;
    // .addCase(incrementAsync.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(incrementAsync.fulfilled, (state, action) => {
    //   state.status = 'idle';
    //   state.value += action.payload;
    // })
    // .addCase(incrementAsync.rejected, (state) => {
    //   state.status = 'failed';
    // });
  },
});

export const { nextStep, prevStep } = mainSlice.actions;

export const stateMainSlice = (state: RootState) => state.main;

export default mainSlice.reducer;

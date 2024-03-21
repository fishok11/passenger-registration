import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

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
    openAddTravellerWindow: (state) => {
      state.visibilityAddTravellerWindow = true;
    },
    hideAddTravellerWindow: (state) => {
      state.visibilityAddTravellerWindow = false;
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

export const {
  nextStep,
  prevStep,
  openAddTravellerWindow,
  hideAddTravellerWindow,
} = mainSlice.actions;

export const stateMainSlice = (state: RootState) => state.main;

export default mainSlice.reducer;

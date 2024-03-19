import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

type InitialState = {

}

const initialState: InitialState = {
 
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

  },
 
  extraReducers: (builder) => {
    builder
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

export const { } = mainSlice.actions;


export const stateMainSlice = (state: RootState) => state.main;




export default mainSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import {
  AddTraveller,
  BaggageCategory,
  BaggageVariant,
  Insurance,
  InteriorConfiguration,
  Traveller,
} from './types';

type InitialState = {
  step: number;
  stepsQuantity: number;
  travellerId: string;
  traveller: Traveller;
  travellers: Traveller[];
  baggageCategories: BaggageCategory[];
  baggageVariants: BaggageVariant[];
  insurances: Insurance[];
  interiorConfiguration: InteriorConfiguration;
  visibilityAddTravellerWindow: boolean;
  movingForwardInSteps: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  step: 1,
  stepsQuantity: 5,
  travellerId: '',
  traveller: {
    id: '',
    name: '',
    surname: '',
    gender: '',
    nationality: '',
    passport: '',
  },
  travellers: [],
  baggageCategories: [],
  baggageVariants: [],
  insurances: [],
  interiorConfiguration: { id: '', interior: [] },
  visibilityAddTravellerWindow: false,
  movingForwardInSteps: true,
  isLoading: false,
};

export const addTraveller = createAsyncThunk<
  Traveller,
  AddTraveller,
  { rejectValue: string; state: RootState }
>('addTraveller', async (traveller, { rejectWithValue, getState }) => {
  try {
    const state = getState().main;

    if (state.travellerId !== '') {
      const { data } = await axios.put(
        `http://localhost:3002/travellers/${state.travellerId}`,
        traveller,
      );

      return data;
    }

    const { data } = await axios.post(
      'http://localhost:3002/travellers/',
      traveller,
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
    if (travellerId !== '') {
      const { data } = await axios.get(
        `http://localhost:3002/travellers/${travellerId}`,
      );

      return data;
    }
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

export const getBaggageCategories = createAsyncThunk<
  BaggageCategory[],
  undefined,
  { rejectValue: string }
>('getBaggageCategories', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:3002/baggageCategories');

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const getBaggageVariants = createAsyncThunk<
  BaggageVariant[],
  undefined,
  { rejectValue: string }
>('getBaggageVariants', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:3002/baggageVariants');

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const getInsurances = createAsyncThunk<
  Insurance[],
  undefined,
  { rejectValue: string }
>('getInsurances', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:3002/insurances');

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const getInteriorConfiguration = createAsyncThunk<
  InteriorConfiguration,
  undefined,
  { rejectValue: string }
>('getInteriorConfiguration', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      'http://localhost:3002/interiorConfigurations',
    );

    return data[0];
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
      state.movingForwardInSteps = true;
    },
    prevStep: (state) => {
      if (state.step !== initialState.step) {
        state.step -= 1;
      }
      state.movingForwardInSteps = false;
    },
    openAddTravellerWindow: (state) => {
      state.visibilityAddTravellerWindow = true;
    },
    hideAddTravellerWindow: (state) => {
      state.visibilityAddTravellerWindow = false;
      state.traveller = initialState.traveller;
      state.travellerId = initialState.travellerId;
    },
    setTravellerId: (state, action: PayloadAction<string>) => {
      state.travellerId = action.payload;
    },
    selectSeatTraveller: (
      state,
      action: PayloadAction<{ travellerId: string; seatId: string }>,
    ) => {
      if (action.payload.travellerId) {
        state.interiorConfiguration.interior.forEach((rowData) => {
          rowData.row.map((seat) => {
            if (seat.travellerId === action.payload.travellerId) {
              return (seat.travellerId = null);
            }
          });
        });

        state.interiorConfiguration.interior.forEach((rowData) => {
          rowData.row.map((seat) => {
            if (
              seat.id === action.payload.seatId &&
              seat.travellerId !== action.payload.travellerId
            ) {
              return (seat.travellerId = action.payload.travellerId);
            }
          });
        });
        console.log(state.interiorConfiguration.interior);
      }
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
      )
      .addCase(getBaggageCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getBaggageCategories.fulfilled,
        (state, action: PayloadAction<BaggageCategory[]>) => {
          state.baggageCategories = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getBaggageVariants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getBaggageVariants.fulfilled,
        (state, action: PayloadAction<BaggageVariant[]>) => {
          state.baggageVariants = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getInsurances.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getInsurances.fulfilled,
        (state, action: PayloadAction<Insurance[]>) => {
          state.insurances = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getInteriorConfiguration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getInteriorConfiguration.fulfilled,
        (state, action: PayloadAction<InteriorConfiguration>) => {
          state.interiorConfiguration = action.payload;
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
  selectSeatTraveller,
} = mainSlice.actions;

export const stateMainSlice = (state: RootState) => state.main;

export default mainSlice.reducer;

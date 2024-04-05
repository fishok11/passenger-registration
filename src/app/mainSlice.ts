import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import {
  AddTraveller,
  BaggageVariant,
  Insurance,
  InteriorConfiguration,
  Traveller,
} from './types';

type InitialState = {
  step: number;
  stepsQuantity: number;
  finalPage: boolean;
  travellerId: string;
  traveller: Traveller;
  travellers: Traveller[];
  cabinBaggageVariants: BaggageVariant[];
  checkedBaggageVariants: BaggageVariant[];
  insurances: Insurance[];
  interiorConfiguration: InteriorConfiguration;
  visibilityAddTravellerWindow: boolean;
  movingForwardInSteps: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  step: 1,
  stepsQuantity: 5,
  finalPage: false,
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
  cabinBaggageVariants: [],
  checkedBaggageVariants: [],
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

export const getCabinBaggageVariants = createAsyncThunk<
  BaggageVariant[],
  undefined,
  { rejectValue: string }
>('getCabinBaggageVariants', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      'http://localhost:3002/cabinBaggageVariants',
    );

    return data;
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const getCheckedBaggageVariants = createAsyncThunk<
  BaggageVariant[],
  undefined,
  { rejectValue: string }
>('getCheckedBaggageVariants', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      'http://localhost:3002/checkedBaggageVariants',
    );

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

    return data[1];
  } catch (error) {
    return rejectWithValue('Server error!');
  }
});

export const changeInteriorConfiguration = createAsyncThunk<
  InteriorConfiguration,
  InteriorConfiguration,
  { rejectValue: string }
>(
  'changeInteriorConfiguration',
  async (newInteriorConfiguration, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3002/interiorConfigurations/${newInteriorConfiguration.id}`,
        newInteriorConfiguration,
      );

      return data;
    } catch (error) {
      return rejectWithValue('Server error!');
    }
  },
);

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
    goToTheFinishPage: (state) => {
      state.finalPage = true;
      state.movingForwardInSteps = true;
    },
    leaveTheFinishPage: (state) => {
      state.finalPage = true;
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
      }
    },
    resetMainState: () => initialState,
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
      .addCase(getCabinBaggageVariants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCabinBaggageVariants.fulfilled,
        (state, action: PayloadAction<BaggageVariant[]>) => {
          state.cabinBaggageVariants = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(getCheckedBaggageVariants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCheckedBaggageVariants.fulfilled,
        (state, action: PayloadAction<BaggageVariant[]>) => {
          state.checkedBaggageVariants = action.payload;
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
      )
      .addCase(changeInteriorConfiguration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeInteriorConfiguration.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  nextStep,
  prevStep,
  goToTheFinishPage,
  leaveTheFinishPage,
  openAddTravellerWindow,
  hideAddTravellerWindow,
  setTravellerId,
  selectSeatTraveller,
  resetMainState,
} = mainSlice.actions;

export const stateMainSlice = (state: RootState) => state.main;

export default mainSlice.reducer;

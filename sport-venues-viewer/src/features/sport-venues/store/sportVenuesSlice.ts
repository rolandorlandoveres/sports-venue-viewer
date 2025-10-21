import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SportVenue } from '../models/sport-venue';
import { RootState } from './makeStore';

interface SportVenuesState {
  allSportVenues: SportVenue[];
}

const initialState: SportVenuesState = {
  allSportVenues: [],
};

export const sportVenuesSlice = createSlice({
  name: 'sportVenues',
  initialState,
  reducers: {
    initializeVenues: (state, action: PayloadAction<SportVenue[]>) => {
      state.allSportVenues = [...action.payload];
    },
  },
});

export const { initializeVenues } = sportVenuesSlice.actions;

export const selectSportVenues = (state: RootState) =>
  state.sportVenues.allSportVenues;
export default sportVenuesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SportVenue } from '../models/sport-venue';
import { RootState } from './makeStore';

interface SportVenuesState {
  allSportVenues: SportVenue[];
  filteredSportVenues: SportVenue[];
}

const initialState: SportVenuesState = {
  allSportVenues: [],
  filteredSportVenues: [],
};

export const sportVenuesSlice = createSlice({
  name: 'sportVenues',
  initialState,
  reducers: {
    initializeVenues: (state, action: PayloadAction<SportVenue[]>) => {
      state.allSportVenues = state.filteredSportVenues = [...action.payload];
    },

    filterVenues: (
      state,
      action: PayloadAction<{ city: string; tag: string }>,
    ) => {
      const { city, tag } = action.payload;

      const trimmedCity = city.toLowerCase().trim();
      const trimmedTag = tag.toLowerCase().trim();

      if (trimmedCity.length === 0 && trimmedTag.length === 0) {
        state.filteredSportVenues = state.allSportVenues;

        return;
      }

      const stringInclude = (left: string, right: string) =>
        left.toLowerCase().includes(right);

      const filterLamba =
        trimmedCity.length === 0
          ? (sv: SportVenue) => stringInclude(sv.tag, trimmedTag)
          : trimmedTag.length === 0
            ? (sv: SportVenue) => stringInclude(sv.addressLine2, trimmedCity)
            : (sv: SportVenue) =>
                stringInclude(sv.addressLine2, trimmedCity) &&
                stringInclude(sv.tag, trimmedTag);

      state.filteredSportVenues = state.allSportVenues.filter(filterLamba);
    },
  },
});

export const { initializeVenues, filterVenues } = sportVenuesSlice.actions;

export const selectSportVenues = (state: RootState) =>
  state.sportVenues.allSportVenues;
export default sportVenuesSlice.reducer;

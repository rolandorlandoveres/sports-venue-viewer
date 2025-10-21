import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SportVenue } from '@sport-venues/models/sport-venue';
import { AppDispatch, RootState } from './makeStore';

interface SportVenuesState {
  allSportVenues: SportVenue[];
  filteredSportVenues: SportVenue[];
}

export interface VenuesFilterActionPayload {
  city: string;
  tag: string;
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
      state.allSportVenues = state.filteredSportVenues = action.payload;
    },
    setFilteredVenues: (state, action: PayloadAction<SportVenue[]>) => {
      state.filteredSportVenues = action.payload;
    },
  },
});

export const filterVenues =
  ({ city, tag }: VenuesFilterActionPayload) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const { allSportVenues } = getState().sportVenues;

    const trimmedCity = city.toLowerCase().trim();
    const trimmedTag = tag.toLowerCase().trim();

    if (trimmedCity.length === 0 && trimmedTag.length === 0) {
      dispatch(sportVenuesSlice.actions.setFilteredVenues(allSportVenues));
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

    const filteredSportVenues = allSportVenues.filter(filterLamba);

    dispatch(sportVenuesSlice.actions.setFilteredVenues(filteredSportVenues));
  };

export const { initializeVenues } = sportVenuesSlice.actions;

export const selectSportVenues = (state: RootState) =>
  state.sportVenues.allSportVenues;
export default sportVenuesSlice.reducer;

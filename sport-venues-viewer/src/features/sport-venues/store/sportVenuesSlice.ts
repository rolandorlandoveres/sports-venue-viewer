import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SportVenue } from '@/features/sport-venues/models/sportVenue';
import { AppDispatch, RootState } from './makeStore';

interface SportVenuesState {
  allSportVenues: SportVenue[];
  filteredSportVenues: SportVenue[];
  selectedVenue: SportVenue | null;
}

export interface VenuesFilterActionPayload {
  city: string;
  tag: string;
}

const initialState: SportVenuesState = {
  allSportVenues: [],
  filteredSportVenues: [],
  selectedVenue: null,
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

      if (action.payload.length === 0) {
        state.selectedVenue = null;

        return;
      }

      if (
        state.selectedVenue &&
        !state.filteredSportVenues.find(
          (sv) => sv.id === state.selectedVenue!.id,
        )
      ) {
        state.selectedVenue = null;
      }

      return state;
    },
    resetFilteredVenues: (state) => {
      state.filteredSportVenues = state.allSportVenues;
    },
    setSelectedVenue: (state, action: PayloadAction<SportVenue>) => {
      state.selectedVenue = action.payload;
    },

    unsetSelectedVenue: (state) => {
      state.selectedVenue = null;
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
      dispatch(sportVenuesSlice.actions.resetFilteredVenues());
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

    const filteredSportVenues = allSportVenues.filter(filterLamba);

    dispatch(sportVenuesSlice.actions.setFilteredVenues(filteredSportVenues));
  };

export const { initializeVenues, setSelectedVenue, unsetSelectedVenue } =
  sportVenuesSlice.actions;

export const selectSportVenues = (state: RootState) =>
  state.sportVenues.allSportVenues;
export default sportVenuesSlice.reducer;

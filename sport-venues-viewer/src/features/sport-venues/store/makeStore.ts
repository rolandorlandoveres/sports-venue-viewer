import { configureStore } from '@reduxjs/toolkit';
import sportVenuesReducer from './sportVenuesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      sportVenues: sportVenuesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

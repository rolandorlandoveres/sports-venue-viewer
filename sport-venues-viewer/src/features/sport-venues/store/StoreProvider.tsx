'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from './makeStore';
import { SportVenue } from '@sport-venues/models/sport-venue';
import { initializeVenues } from './sportVenuesSlice';

export default function StoreProvider({
  sportVenues,
  children,
}: {
  sportVenues: SportVenue[];
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeVenues(sportVenues));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

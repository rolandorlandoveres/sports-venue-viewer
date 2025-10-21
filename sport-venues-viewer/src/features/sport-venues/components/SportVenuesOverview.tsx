'use client';

import { SportVenue } from '../models/sport-venue';
import StoreProvider from '../store/StoreProvider';
import { SportVenuesFilter } from './SportVenuesFilters';
import { SportVenuesMap } from './SportVenuesMap';
import { SportVenuesScrollable } from './SportVenuesScrollable';

export function SportVenuesOverview({
  sportVenues,
}: {
  sportVenues: SportVenue[];
}) {
  return (
    <StoreProvider sportVenues={sportVenues}>
      <SportVenuesFilter />

      <div className='flex'>
        <SportVenuesScrollable />

        <SportVenuesMap />
      </div>
    </StoreProvider>
  );
}

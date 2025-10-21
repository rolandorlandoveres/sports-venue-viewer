'use client';

import { SportVenue } from '../models/sport-venue';
import StoreProvider from '../store/StoreProvider';
import { SportVenuesFilter } from './SportVenuesFilters';
import { SportVenuesList } from './SportVenuesList';
import { SportVenuesMap } from './SportVenuesMap';

export function SportVenuesOverview({
  sportVenues,
}: {
  sportVenues: SportVenue[];
}) {
  return (
    <StoreProvider sportVenues={sportVenues}>
      <SportVenuesFilter />

      <div className='flex'>
        <SportVenuesList />

        <SportVenuesMap />
      </div>
    </StoreProvider>
  );
}

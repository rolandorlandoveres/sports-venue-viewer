'use client';

import { SportVenue } from '../models/sport-venue';
import StoreProvider from '../store/StoreProvider';
import { SportVenuesFilter } from './SportVenuesFilters';
import { SportVenuesMapContainer } from './maps/SportVenuesMapContainer';
import { SportVenuesScrollable } from './scrollable/SportVenuesScrollable';

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

        <SportVenuesMapContainer />
      </div>
    </StoreProvider>
  );
}

'use client';

import { SportVenue } from '../models/sport-venue';
import { SportVenuesFilter } from './SportVenuesFilters';
import { SportVenuesList } from './SportVenuesList';
import { SportVenuesMap } from './SportVenuesMap';

export function SportVenuesOverview({
  sportVenues,
}: {
  sportVenues: SportVenue[];
}) {
  return (
    <>
      <SportVenuesFilter />

      <SportVenuesList />

      <SportVenuesMap />

      <ul>
        {sportVenues.map((sv) => (
          <li key={sv.id}> {sv.name} </li>
        ))}
      </ul>
    </>
  );
}

'use client';

import { SportVenue } from '../models/sport-venue';

export function SportVenuesOverview({
  sportVenues,
}: {
  sportVenues: SportVenue[];
}) {
  return (
    <ul>
      {sportVenues.map((sv) => (
        <li key={sv.id}> {sv.name} </li>
      ))}
    </ul>
  );
}

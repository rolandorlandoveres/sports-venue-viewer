import { environment } from '@/config/environment';
import { SportVenuesOverview } from '@/features/sport-venues/components/sport-venues-overview';
import { SportVenue } from '@/features/sport-venues/models/sport-venue';

export default async function SportVenues() {
  const res = await fetch(environment.apiUrl);

  const sportVenues: SportVenue[] = await res.json();

  return (
    <>
      <h1> Sport Venues {sportVenues.length} </h1>

      <SportVenuesOverview sportVenues={sportVenues} />
    </>
  );
}

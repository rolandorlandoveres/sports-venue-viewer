import { environment } from '@/config/environment';
import { SportVenuesOverview } from '@/features/sport-venues/components/SportVenuesOverview';
import { SportVenue } from '@/features/sport-venues/models/sportVenue';

export default async function SportVenues() {
  const res = await fetch(environment.apiUrl);

  const sportVenues: SportVenue[] = await res.json();

  return (
    <>
      <SportVenuesOverview sportVenues={sportVenues} />
    </>
  );
}

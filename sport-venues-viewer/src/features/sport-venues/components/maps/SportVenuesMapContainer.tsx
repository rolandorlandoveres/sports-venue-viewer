import { environment } from '@/config/environment';
import { APIProvider } from '@vis.gl/react-google-maps';
import { useAppSelector } from '@sport-venues/store';
import { SportVenuesMap } from './SportVenuesMap';

export function SportVenuesMapContainer() {
  const { filteredSportVenues, selectedVenue } = useAppSelector(
    (state) => state.sportVenues,
  );

  return (
    <APIProvider apiKey={environment.googleMapsApiKey}>
      <SportVenuesMap
        filteredVenues={filteredSportVenues}
        selectedVenue={selectedVenue}
      />
    </APIProvider>
  );
}

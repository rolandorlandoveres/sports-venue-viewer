import { environment } from '@/config/environment';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useAppSelector } from '../store/hooks';

export function SportVenuesMap() {
  const filteredSportVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  return (
    <APIProvider apiKey={environment.googleMapsApiKey}>
      <Map
        style={{ width: '100%', height: '700px' }}
        defaultCenter={{ lat: 53.09503173828125, lng: 6.0878753662109375 }}
        defaultZoom={18}
        gestureHandling='greedy'
        disableDefaultUI
      >
        {filteredSportVenues.map((sv) => (
          <Marker
            key={sv.id}
            position={{ lat: sv.latitude, lng: sv.longitude }}
            icon={{ url: '/pin.svg' }}
          />
        ))}
      </Map>
    </APIProvider>
  );
}

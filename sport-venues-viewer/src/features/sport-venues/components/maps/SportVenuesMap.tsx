import { useEffect } from 'react';
import { SportVenue } from '../../models/sportVenue';
import { Map, Marker, useMap } from '@vis.gl/react-google-maps';
import { SelectedVenueInfoWindow } from './SelectedVenueInfoWindow';

export function SportVenuesMap({
  filteredVenues: sportVenues,
  selectedVenue,
}: {
  filteredVenues: SportVenue[];
  selectedVenue: SportVenue | null;
}) {
  const defaultCenter = {
    lat: sportVenues[0].latitude,
    lng: sportVenues[0].longitude,
  };

  const map = useMap();

  useEffect(() => {
    if (!map || !selectedVenue) {
      return;
    }

    map.panTo({ lat: selectedVenue.latitude, lng: selectedVenue.longitude });

    map.setZoom(18);
  }, [map, selectedVenue]);

  return (
    <Map
      style={{ width: '100%', height: '700px' }}
      mapId={'bf51a910020fa25a'}
      defaultCenter={defaultCenter}
      defaultZoom={18}
      gestureHandling='greedy'
      disableDefaultUI
    >
      {sportVenues.map((sv) => (
        <Marker
          key={sv.id}
          position={{ lat: sv.latitude, lng: sv.longitude }}
          icon={{
            url: sv.id === selectedVenue?.id ? '/selected-pin.svg' : 'pin.svg',
          }}
        />
      ))}

      {selectedVenue && (
        <SelectedVenueInfoWindow selectedVenue={selectedVenue} />
      )}
    </Map>
  );
}

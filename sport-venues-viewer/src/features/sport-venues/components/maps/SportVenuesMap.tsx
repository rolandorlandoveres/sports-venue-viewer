import { useCallback, useEffect, useEffectEvent } from 'react';
import { SportVenue } from '../../models/sportVenue';
import { Map, Marker, useMap } from '@vis.gl/react-google-maps';
import { SelectedVenueInfoWindow } from './SelectedVenueInfoWindow';
import { setSelectedVenue, useAppDispatch } from '../../store';

export function SportVenuesMap({
  filteredVenues: sportVenues,
  selectedVenue,
}: {
  filteredVenues: SportVenue[];
  selectedVenue: SportVenue | null;
}) {
  const map = useMap();

  const dispatch = useAppDispatch();

  const goToVenue = useCallback(
    (venue: SportVenue) => {
      map?.panTo({ lat: venue.latitude, lng: venue.longitude });
      map?.setZoom(18);
    },
    [map],
  );

  useEffect(() => {
    if (!map || !selectedVenue) {
      return;
    }

    goToVenue(selectedVenue);
  }, [map, selectedVenue]);

  useEffect(() => {
    if (!map || sportVenues.length <= 0) {
      return;
    }

    goToVenue(sportVenues[0]);
  }, [map, sportVenues]);

  return (
    <Map
      style={{ width: '100%', height: '700px' }}
      gestureHandling='greedy'
      disableDefaultUI
    >
      {sportVenues.map((sv) => (
        <Marker
          key={sv.id}
          position={{ lat: sv.latitude, lng: sv.longitude }}
          onClick={() => dispatch(setSelectedVenue(sv))}
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

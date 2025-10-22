import { useCallback, useEffect, useMemo, useState } from 'react';
import { SportVenue } from '../../models/sportVenue';
import {
  Map,
  MapCameraChangedEvent,
  Marker,
  useMap,
} from '@vis.gl/react-google-maps';
import { SelectedVenueInfoWindow } from './SelectedVenueInfoWindow';
import { setSelectedVenue, useAppDispatch } from '../../store';
import React from 'react';

export const SportVenuesMap = React.memo(
  ({
    filteredVenues: sportVenues,
    selectedVenue,
  }: {
    filteredVenues: SportVenue[];
    selectedVenue: SportVenue | null;
  }) => {
    const dispatch = useAppDispatch();

    const map = useMap();

    const [visibleVenues, setVisibleVenues] = useState<SportVenue[]>([]);

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

    const sportVenueMarkers = useMemo(() => {
      return visibleVenues.map((sv) => (
        <Marker
          key={sv.id}
          position={{ lat: sv.latitude, lng: sv.longitude }}
          onClick={() => dispatch(setSelectedVenue(sv))}
          icon='/pin.svg'
        />
      ));
    }, [visibleVenues]);

    function onBoundsChanged(event: MapCameraChangedEvent): void {
      const bounds = event.map.getBounds();

      setVisibleVenues(
        sportVenues.filter((sv) =>
          bounds?.contains({ lat: sv.latitude, lng: sv.longitude }),
        ),
      );
    }

    return (
      <Map
        style={{ width: '100%', height: '700px' }}
        gestureHandling='greedy'
        defaultZoom={18}
        defaultCenter={{
          lat: sportVenues[0]?.latitude ?? 0,
          lng: sportVenues[0]?.longitude ?? 0,
        }}
        onBoundsChanged={onBoundsChanged}
      >
        {sportVenueMarkers}

        {selectedVenue && (
          <SelectedVenueInfoWindow selectedVenue={selectedVenue} />
        )}
      </Map>
    );
  },
);

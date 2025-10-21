import { List } from 'react-window';
import { useAppSelector } from '../../store/hooks';
import { SportVenuesListRow } from './SportVenuesListRow';
import { SportVenue } from '../../models/sport-venue';

export function SportVenuesList() {
  const filteredVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  return (
    <List
      rowComponent={SportVenuesListRow}
      rowCount={filteredVenues.length}
      rowHeight={80}
      rowProps={{ filteredVenues }}
    />
  );
}

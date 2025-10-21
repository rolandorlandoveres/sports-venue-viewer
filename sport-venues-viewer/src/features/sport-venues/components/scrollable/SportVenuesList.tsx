import { List } from 'react-window';
import { SportVenuesListRow } from './SportVenuesListRow';
import { useVenuesDataForLists } from '@sport-venues/hooks/useVenuesDataForLists';

export function SportVenuesList() {
  const { filteredVenues, selectVenue } = useVenuesDataForLists();

  return (
    <List
      rowComponent={SportVenuesListRow}
      rowCount={filteredVenues.length}
      rowHeight={80}
      rowProps={{ filteredVenues, selectVenue }}
    />
  );
}

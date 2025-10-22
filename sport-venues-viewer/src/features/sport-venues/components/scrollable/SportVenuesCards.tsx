import { Grid } from 'react-window';
import { SportVenuesCard } from './SportVenuesCard';
import { useVenuesDataForLists } from '@sport-venues/hooks/useVenuesDataForLists';

export function SportVenuesCards() {
  const { filteredVenues, selectVenue } = useVenuesDataForLists();

  return (
    <Grid
      cellComponent={SportVenuesCard}
      cellProps={{ filteredVenues, selectVenue }}
      columnCount={2}
      columnWidth={300}
      rowCount={Math.ceil(filteredVenues.length / 2)}
      rowHeight={250}
    />
  );
}

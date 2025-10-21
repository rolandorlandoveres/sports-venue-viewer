import { Grid } from 'react-window';
import { useAppSelector } from '../../store/hooks';
import { SportVenuesCard } from './SportVenuesCard';

export function SportVenuesCards() {
  const filteredVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  return (
    <Grid
      cellComponent={SportVenuesCard}
      cellProps={{ filteredVenues }}
      columnCount={2}
      columnWidth={300}
      rowCount={filteredVenues.length / 2}
      rowHeight={250}
    />
  );
}

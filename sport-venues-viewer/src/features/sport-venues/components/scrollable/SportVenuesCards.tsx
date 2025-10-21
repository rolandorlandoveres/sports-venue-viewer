import { Grid } from 'react-window';
import { useAppSelector } from '../../store/hooks';
import { SportVenuesCard } from './SportVenuesCard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/makeStore';
import { SportVenue } from '../../models/sport-venue';
import { setSelectedVenue } from '../../store/sportVenuesSlice';

export function SportVenuesCards() {
  const filteredVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  const dispatch = useDispatch<AppDispatch>();

  const selectVenue = (newVenue: SportVenue) =>
    dispatch(setSelectedVenue(newVenue));

  return (
    <Grid
      cellComponent={SportVenuesCard}
      cellProps={{ filteredVenues, selectVenue }}
      columnCount={2}
      columnWidth={300}
      rowCount={filteredVenues.length / 2}
      rowHeight={250}
    />
  );
}

import { List } from 'react-window';
import { useAppSelector } from '../../store/hooks';
import { SportVenuesListRow } from './SportVenuesListRow';
import { SportVenue } from '../../models/sport-venue';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/makeStore';
import { setSelectedVenue } from '../../store/sportVenuesSlice';

export function SportVenuesList() {
  const filteredVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  const dispatch = useDispatch<AppDispatch>();

  const selectVenue = (newVenue: SportVenue) =>
    dispatch(setSelectedVenue(newVenue));

  return (
    <List
      rowComponent={SportVenuesListRow}
      rowCount={filteredVenues.length}
      rowHeight={80}
      rowProps={{ filteredVenues, selectVenue }}
    />
  );
}

import { SportVenue } from '../models/sportVenue';
import { useAppSelector, useAppDispatch, setSelectedVenue } from '../store';

export function useVenuesDataForLists() {
  const filteredVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  const dispatch = useAppDispatch();

  const selectVenue = (newVenue: SportVenue) =>
    dispatch(setSelectedVenue(newVenue));

  return { filteredVenues, selectVenue };
}

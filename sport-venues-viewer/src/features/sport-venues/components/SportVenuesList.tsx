import { useAppSelector } from '../store/hooks';

export function SportVenuesList() {
  const filteredVenues = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues,
  );

  return (
    <div className='h-150 overflow-y-auto'>
      {filteredVenues.map((sv) => (
        <div key={sv.id}>
          {sv.name} - {sv.addressLine2} - {sv.tag}
        </div>
      ))}
    </div>
  );
}

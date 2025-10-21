import { useAppSelector } from '@sport-venues/store/hooks';

export function SportVenuesList() {
  const sportVenues = useAppSelector(
    (state) => state.sportVenues.allSportVenues,
  );

  return (
    <div className='h-100 overflow-y-auto'>
      {sportVenues.map((sv) => (
        <div key={sv.id}> {sv.name} </div>
      ))}
    </div>
  );
}

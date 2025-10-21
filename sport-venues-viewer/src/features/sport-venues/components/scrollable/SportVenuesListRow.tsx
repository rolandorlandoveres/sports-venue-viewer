import { RowComponentProps } from 'react-window';
import { SportVenue } from '@sport-venues/models/sport-venue';

export function SportVenuesListRow({
  index,
  filteredVenues,
  style,
}: RowComponentProps<{
  filteredVenues: SportVenue[];
}>) {
  return (
    <>
      <div className='flex items-center justify-between' style={style}>
        {filteredVenues[index].name}
        <div className='text-xs text-slate-500'>
          {filteredVenues[index].addressLine2} - {filteredVenues[index].tag}
        </div>

        <hr className={`h-[10px]`} />
      </div>
    </>
  );
}

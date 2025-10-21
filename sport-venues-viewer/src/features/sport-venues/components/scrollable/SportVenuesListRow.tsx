import { RowComponentProps } from 'react-window';
import { SportVenue } from '@sport-venues/models/sport-venue';
import { ViewLocationButton } from './ViewLocationButton';

export function SportVenuesListRow({
  index,
  filteredVenues,
  style,
}: RowComponentProps<{
  filteredVenues: SportVenue[];
}>) {
  const item = filteredVenues[index];

  return (
    <>
      <div
        className='flex items-center justify-between p-3 align-middle'
        style={style}
      >
        <div className='flex flex-col justify-start gap-0.5'>
          <span className='t-1 text-base font-bold'>{item.name}</span>

          <span className='t-1 text-base font-medium'>
            {item.tag.toUpperCase()}
          </span>

          <div className='text-xs text-slate-500'>
            {item.addressLine1} , {item.addressLine2}
          </div>
        </div>

        <ViewLocationButton />
      </div>

      {index !== 0 && index !== filteredVenues.length - 1 && (
        <hr style={style} className='border-separation-border' />
      )}
    </>
  );
}

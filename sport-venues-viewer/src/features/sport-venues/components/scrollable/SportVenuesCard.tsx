import { CellComponentProps } from 'react-window';
import Image from 'next/image';
import { SportVenue } from '../../models/sport-venue';

const truncate = (text: string, length = 28) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

export function SportVenuesCard({
  columnIndex,
  rowIndex,
  filteredVenues,
  style,
}: CellComponentProps<{ filteredVenues: SportVenue[] }>) {
  const itemIndex = rowIndex * 2 + (columnIndex % 2);
  const item = filteredVenues[itemIndex];

  return (
    <div style={style}>
      <Image
        src='/placeholder.png'
        // src={item.mainPhotoUri}
        width={280}
        height={350}
        alt='placeholder'
        className='rounded-[5px]'
      />

      {/* <p>{item.id} </p> */}
      <p className='mt-1 text-base font-bold'>{truncate(item.name)} </p>

      <p className='text-foreground-accent mt-1 mb-2 font-[500]'>
        {item.addressLine2}
      </p>

      <button className='bg-primary text-background flex -skew-x-20 gap-3 p-3 font-bold'>
        <div className='skew-x-20'>view location</div>
        <Image
          src='/right_arrow.svg'
          width={20}
          height={20}
          alt='right-arrow'
        />
      </button>
    </div>
  );
}

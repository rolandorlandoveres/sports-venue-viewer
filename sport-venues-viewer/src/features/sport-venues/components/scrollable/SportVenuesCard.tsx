import { CellComponentProps } from 'react-window';
import Image from 'next/image';
import { ViewLocationButton } from './ViewLocationButton';
import { VenueCellComponentData } from '@/features/sport-venues/models/venueCellComponentData';

const truncate = (text: string, length = 28) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

export function SportVenuesCard({
  columnIndex,
  rowIndex,
  filteredVenues,
  selectVenue,
  style,
}: CellComponentProps<VenueCellComponentData>) {
  const itemIndex = rowIndex * 2 + (columnIndex % 2);
  const item = filteredVenues[itemIndex];

  return (
    <div style={style} className={'pl-primary'}>
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

      <p className='text-foreground-accent mt-1 mb-2.5 font-[500]'>
        {item.addressLine2}
      </p>

      <ViewLocationButton onClick={() => selectVenue(item)} />
    </div>
  );
}

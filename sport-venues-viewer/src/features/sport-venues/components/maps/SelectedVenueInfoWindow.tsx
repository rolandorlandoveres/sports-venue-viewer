import { SkewedActionButton } from '@/features/ui/SkewedActionButton';
import { InfoWindow } from '@vis.gl/react-google-maps';
import { SportVenue } from '@/features/sport-venues/models/sportVenue';
import Image from 'next/image';
import { useAppDispatch, unsetSelectedVenue } from '@sport-venues/store';

export function SelectedVenueInfoWindow({
  selectedVenue,
}: {
  selectedVenue: SportVenue;
}) {
  const dispatch = useAppDispatch();

  return (
    <InfoWindow
      position={{
        lat: selectedVenue.latitude,
        lng: selectedVenue.longitude,
      }}
      pixelOffset={[0, -30]}
      onClose={() => dispatch(unsetSelectedVenue())}
      disableAutoPan
    >
      <div className='flex flex-col content-center justify-center gap-2 align-middle'>
        <Image
          src='/placeholder.png'
          width={250}
          height={150}
          alt='placeholder-image'
          className='rounded-[5px]'
        />

        <h3 className='text-base font-semibold text-gray-800'>
          {selectedVenue.name}
        </h3>

        <p className='text-sm text-gray-600'>
          {selectedVenue.addressLine1} , {selectedVenue.addressLine2}
        </p>

        <p className='text-sm text-gray-600'>{selectedVenue.phone}</p>

        <hr className='border-separation-border' />
        <div className='self-center'>
          <SkewedActionButton
            text='Go to website'
            onClick={() => {
              window.open(`https://${selectedVenue.homepage}`, '_blank');
            }}
          />
        </div>
      </div>
    </InfoWindow>
  );
}

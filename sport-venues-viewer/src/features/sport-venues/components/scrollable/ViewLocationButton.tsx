import Image from 'next/image';
import { ComponentProps } from 'react';

export interface ViewLocationButtonProps extends ComponentProps<'button'> {}

export function ViewLocationButton(props: ViewLocationButtonProps) {
  return (
    <button
      className='bg-primary text-background hover:bg-primary-hover flex -skew-x-20 gap-3 p-2.5 font-medium'
      {...props}
    >
      <div className='skew-x-20'>view location</div>
      <Image
        src='/right_arrow.svg'
        width={15}
        height={15}
        alt='right-arrow'
        className='skew-x-20'
      />
    </button>
  );
}

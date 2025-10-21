import Image from 'next/image';
import { ComponentProps } from 'react';

export interface SkewedActionButtonProps extends ComponentProps<'button'> {
  text: string;
}

export function SkewedActionButton(props: SkewedActionButtonProps) {
  return (
    <button
      className='bg-primary text-background hover:bg-primary-hover flex -skew-x-20 gap-3 p-2.5 font-medium'
      {...props}
    >
      <div className='skew-x-20'>{props.text}</div>

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

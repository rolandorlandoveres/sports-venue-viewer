import { SkewedActionButton } from '@/features/ui/SkewedActionButton';
import Image from 'next/image';
import { ComponentProps } from 'react';

export interface ViewLocationButtonProps extends ComponentProps<'button'> {}

export function ViewLocationButton(props: ViewLocationButtonProps) {
  return <SkewedActionButton text='view location' {...props} />;
}

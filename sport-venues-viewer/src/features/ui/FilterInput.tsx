import Image from 'next/image';
import { ComponentProps } from 'react';

interface FilterInputProps extends ComponentProps<'input'> {
  onIconClick: () => void;
}

export function FilterInput(props: FilterInputProps) {
  const { onIconClick, ...iconProps } = props;

  return (
    <div className='relative'>
      <Image
        src='/down_arrow.svg'
        width={5}
        height={5}
        alt='Down arrow icon'
        className='pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform'
        onClick={onIconClick}
      />

      <input
        {...iconProps}
        type='text'
        className='border-input-border rounded-[5px] border-1 p-3 pr-14'
      />
    </div>
  );
}

import { ComponentProps } from 'react';

export function Separator(props: ComponentProps<'hr'>) {
  return (
    <hr {...props} className={`${props.className} border-separation-border`} />
  );
}

import { useState } from 'react';
import { SportVenuesCards } from './SportVenuesCards';
import { SportVenuesList } from './SportVenuesList';

import { DisplayModeButton } from './DisplayModeButton';

export function SportVenuesScrollable() {
  const [displayMode, setDisplayMode] = useState<'cards' | 'list'>('cards');

  return (
    <div className='flex flex-col'>
      <div className='ml-primary mr-primary my-3'>
        <div className='bg-background-accent flex w-[80px] gap-1 rounded-[5px] p-2'>
          <DisplayModeButton
            isActive={displayMode === 'cards'}
            onClick={() => setDisplayMode('cards')}
            iconSrc='/card-icon.svg'
          />

          <DisplayModeButton
            isActive={displayMode === 'list'}
            onClick={() => setDisplayMode('list')}
            iconSrc='/list-icon.svg'
          />
        </div>
      </div>

      <div className='h-[600] w-160'>
        {displayMode === 'cards' && <SportVenuesCards />}

        {displayMode === 'list' && <SportVenuesList />}
      </div>
    </div>
  );
}

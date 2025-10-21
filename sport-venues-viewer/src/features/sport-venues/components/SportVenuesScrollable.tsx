import { useState } from 'react';
import { SportVenuesCards } from './SportVenuesCards';
import { SportVenuesList } from './SportVenuesList';
import Image from 'next/image';
import { DisplayModeButton } from './DisplayModeButton';

export function SportVenuesScrollable() {
  const [displayMode, setDisplayMode] = useState<'cards' | 'list'>('cards');

  return (
    <div className='ml-primary mr-primary mt-3'>
      <div className='bg-background-accent mb-3 flex w-[80px] gap-1 rounded-[5px] p-2'>
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

      {displayMode === 'cards' && <SportVenuesCards />}

      {displayMode === 'list' && <SportVenuesList />}
    </div>
  );
}

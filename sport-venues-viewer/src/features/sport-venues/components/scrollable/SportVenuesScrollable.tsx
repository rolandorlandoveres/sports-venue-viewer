import { useState } from 'react';
import { SportVenuesCards } from './SportVenuesCards';
import { SportVenuesList } from './SportVenuesList';

import { DisplayModeButton } from './DisplayModeButton';
import { useAppSelector } from '../../store';

export function SportVenuesScrollable() {
  const filteredVenuesLength = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues.length,
  );
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
        {filteredVenuesLength > 0 ? (
          <>
            {displayMode === 'cards' && <SportVenuesCards />}

            {displayMode === 'list' && <SportVenuesList />}
          </>
        ) : (
          <p className='ml-primary'> No results! </p>
        )}
      </div>
    </div>
  );
}

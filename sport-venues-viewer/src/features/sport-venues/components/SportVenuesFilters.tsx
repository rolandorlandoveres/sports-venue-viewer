import { FilterInput } from '@/features/ui/FilterInput';
import { useState } from 'react';

export function SportVenuesFilter() {
  const [cityFilter, setCityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  return (
    <div className='border-separation-border border-t-1 border-b-1'>
      <div className='ml-primary my-primary flex flex-wrap gap-5'>
        <FilterInput
          placeholder='Filter by city'
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />

        <FilterInput
          placeholder='Filter by type'
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        />
      </div>
    </div>
  );
}

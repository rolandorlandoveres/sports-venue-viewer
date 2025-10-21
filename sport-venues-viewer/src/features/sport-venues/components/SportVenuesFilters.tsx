import { FilterInput } from '@/features/ui/FilterInput';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { filterVenues } from '../store/sportVenuesSlice';

export function SportVenuesFilter() {
  const dispatch = useDispatch();

  const [city, setCityFilter] = useState('');
  const [tag, setTagFilter] = useState('');

  function filterOnHandleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    console.log(event.key);
    if (event.key !== 'Enter') {
      return;
    }

    filter(city, tag);
  }

  function onCityChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setCityFilter(newValue);
    if (newValue.trim().length === 0) {
      filter(newValue, tag);
    }
  }

  function onTagChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setTagFilter(newValue);
    if (newValue.trim().length === 0) {
      filter(city, newValue);
    }
  }

  function filterOnIconClick() {
    filter(city, tag);
  }

  function filter(city: string, tag: string) {
    dispatch(filterVenues({ city, tag }));
  }

  return (
    <div className='border-separation-border border-t-1 border-b-1'>
      <div className='ml-primary my-primary flex flex-wrap gap-5'>
        <FilterInput
          placeholder='Filter by city'
          value={city}
          onChange={onCityChange}
          onKeyDown={filterOnHandleKeyDown}
          onIconClick={filterOnIconClick}
        />

        <FilterInput
          placeholder='Filter by tag'
          value={tag}
          onChange={onTagChange}
          onKeyDown={filterOnHandleKeyDown}
          onIconClick={filterOnIconClick}
        />
      </div>
    </div>
  );
}

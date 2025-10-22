import { FilterInput } from '@/features/ui/FilterInput';
import { useState, KeyboardEvent, ChangeEvent, ClipboardEvent } from 'react';
import {
  filterVenues,
  VenuesFilterActionPayload,
  useAppDispatch,
  useAppSelector,
} from '@sport-venues/store';

function getTextFromClipboardEvent(e: ClipboardEvent<HTMLInputElement>) {
  return e.clipboardData.getData('Text');
}

export function SportVenuesFilter() {
  const filteredVenuesLength = useAppSelector(
    (state) => state.sportVenues.filteredSportVenues.length,
  );
  const dispatch = useAppDispatch();

  const [city, setCityFilter] = useState('');
  const [tag, setTagFilter] = useState('');

  function filter(action: Partial<VenuesFilterActionPayload>) {
    dispatch(filterVenues({ city, tag, ...action }));
  }

  function filterOnHandleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key !== 'Enter') {
      return;
    }

    filter({ city, tag });
  }

  function onCityChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setCityFilter(newValue);
    if (newValue.trim().length === 0) {
      filter({ city: newValue });
    }
  }

  function onTagChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setTagFilter(newValue);
    if (newValue.trim().length === 0) {
      filter({ tag: newValue });
    }
  }

  function filterOnIconClick() {
    filter({ city, tag });
  }

  function onCityPasteCapture(e: ClipboardEvent<HTMLInputElement>): void {
    filter({ city: getTextFromClipboardEvent(e) });
  }

  function onTagPasteCapture(e: ClipboardEvent<HTMLInputElement>): void {
    filter({ tag: getTextFromClipboardEvent(e) });
  }

  return (
    <div className='border-separation-border border-t-1 border-b-1'>
      <div className='ml-primary my-primary flex flex-wrap items-center gap-5'>
        <FilterInput
          placeholder='Filter by city'
          value={city}
          onChange={onCityChange}
          onKeyDown={filterOnHandleKeyDown}
          onIconClick={filterOnIconClick}
          onPasteCapture={onCityPasteCapture}
        />

        <FilterInput
          placeholder='Filter by tag'
          value={tag}
          onChange={onTagChange}
          onKeyDown={filterOnHandleKeyDown}
          onIconClick={filterOnIconClick}
          onPasteCapture={onTagPasteCapture}
        />

        <p className='m-0 p-0'>{filteredVenuesLength} Result(s)</p>
      </div>
    </div>
  );
}

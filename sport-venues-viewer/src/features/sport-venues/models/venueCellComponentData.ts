import { SportVenue } from './sportVenue';

export interface VenueCellComponentData {
  filteredVenues: SportVenue[];
  selectVenue: (newVenue: SportVenue) => void;
}

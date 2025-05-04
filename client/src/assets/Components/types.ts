// the purpose of this file is to keep track of the types which are imported into
// the RunList component

export type SavedFilter = {
  name: string;
  filterType: string;
  minPrice?: number;
  maxPrice?: number;
  searchTerm?: string;
};

export type SavedSearchesProps = {
  savedFilters: SavedFilter[];
  onApplySavedFilter: (filter: SavedFilter) => void;
};

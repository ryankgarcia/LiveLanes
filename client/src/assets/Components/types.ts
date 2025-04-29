export type SavedFilter = {
  filterType: string;
  minPrice?: number;
  maxPrice?: number;
  searchTerm?: string;
};

export type SavedSearchesProps = {
  savedFilters: SavedFilter[];
  onApplySavedFilter: (filter: SavedFilter) => void;
};

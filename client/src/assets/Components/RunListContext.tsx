import { createContext, useContext } from 'react';

export type RunListContextType = {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  minPrice?: number;
  maxPrice?: number;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  savedSearch: SavedFilter[];
  setSavedSearch: (saved: SavedFilter[]) => void;
  handleSaveCurrentFilter: () => void;
  handleApplySavedFilter: (filter: SavedFilter) => void;
  onFilterChange: (filter: string) => void;
  onPriceChange: (e: React.FormEvent<HTMLFormElement>) => void;
  draftMinPrice: string;
  draftMaxPrice: string;
  setDraftMinPrice: (value: string) => void;
  setDraftMaxPrice: (value: string) => void;
  savedFilters: SavedFilter[];
  onApplySavedFilter: (filter: SavedFilter) => void;
};

export const RunListContext = createContext<RunListContextType | undefined>(
  undefined
);

export function useRunListContext() {
  const context = useContext(RunListContext);
  if (!context) {
    throw new Error('useRunListContext must be used inside a RunListProvider');
  }
  return context;
}

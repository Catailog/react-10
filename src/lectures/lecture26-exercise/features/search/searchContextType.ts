export type SearchContextType = {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  debouncedTerm: string;
  setDebouncedTerm: (str: string) => void;
};

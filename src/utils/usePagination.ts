import { useContext } from 'react';
import { PaginationContext, PaginationContextProps } from 'contexts/paginationContext';

export const usePagination = (): PaginationContextProps => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
};

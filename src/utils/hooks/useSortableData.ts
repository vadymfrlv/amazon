import { useState, useMemo } from 'react';

export const useSortableData = <T>(items: T[], defaultSortField: keyof T | null = null) => {
  const [sortConfig, setSortConfig] = useState<{ field: keyof T; ascending: boolean } | null>(
    defaultSortField ? { field: defaultSortField, ascending: true } : null
  );

  const sortedItems = useMemo(() => {
    if (!sortConfig) return items;

    const sortableItems = [...items];
    sortableItems.sort((a, b) => {
      const valueA = a[sortConfig.field];
      const valueB = b[sortConfig.field];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortConfig.ascending ? valueA - valueB : valueB - valueA;
      } else {
        const comparison = (valueA as string).localeCompare(valueB as string, undefined, {
          sensitivity: 'base',
        });
        return sortConfig.ascending ? comparison : -comparison;
      }
    });
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (field: keyof T) => {
    let ascending = true;
    if (sortConfig && sortConfig.field === field) {
      if (sortConfig.ascending === true) {
        ascending = false;
      } else if (sortConfig.ascending === false) {
        setSortConfig(null);
        return;
      }
    }
    setSortConfig({ field, ascending });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

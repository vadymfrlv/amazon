import Pagination from 'react-bootstrap/Pagination';

import { usePagination } from 'utils/usePagination';

export const PaginationComponent = () => {
  const { totalPages, currentPage, handlePageChange } = usePagination();

  return (
    <Pagination className="paginationWrapper">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Pagination.Item
          key={index}
          active={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

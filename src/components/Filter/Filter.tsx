import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import { usePagination } from 'utils/usePagination';

export const Filter = () => {
  const { setData, originalData } = usePagination();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!filter) {
      setData(originalData);
      return;
    }

    const filteredData = originalData.filter(data =>
      Object.values(data).some(value =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );

    setData(filteredData);
  }, [filter, originalData, setData]);

  return (
    <>
      <Form.Control
        className="searchInput"
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="..."
      ></Form.Control>
    </>
  );
};

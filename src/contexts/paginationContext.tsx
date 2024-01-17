import { createContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { AccountData } from 'types/account';
import { CampaignData } from 'types/campaign';
import { ProfileData } from 'types/profile';

export type DataType = AccountData | ProfileData | CampaignData;

export interface PaginationContextProps {
  data: DataType[];
  originalData: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentData: DataType[];
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

interface PaginationProviderProps {
  children: ReactNode;
}

const ROWS_PER_PAGE = 5;

export const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const location = useLocation();
  const [data, setData] = useState<DataType[]>([]);
  const [originalData, setOriginalData] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (originalData.length === 0 || (data && location.pathname !== prevLocation)) {
      setOriginalData(data);
      setPrevLocation(location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      setCurrentPage(1);
    }
  }, [location.pathname, prevLocation]);

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationContext.Provider
      value={{
        data,
        originalData,
        setData,
        currentPage,
        setCurrentPage,
        currentData,
        totalPages,
        handlePageChange,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

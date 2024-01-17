import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { DataType } from 'contexts/paginationContext';
import { AccountData } from 'types/account';
import { accountsData } from 'mock/accounts';
import { useSortableData } from 'utils/hooks/useSortableData';
import { usePagination } from 'utils/usePagination';
import { Title } from 'components/Title/Title';
import { PaginationComponent } from 'components/Pagination/Pagination';

export const AccountsTable = () => {
  const { items: sortedAccounts, requestSort } = useSortableData(accountsData, null);
  const { setData, currentData: accountData } = usePagination();

  useEffect(() => {
    if (sortedAccounts) {
      setData(sortedAccounts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedAccounts]);

  const navigate = useNavigate();

  const onRowClick = (accountId: string) => {
    navigate(`/profiles/${accountId}`);
  };

  const isAccountData = (data: DataType): data is AccountData => {
    return 'accountId' in data && 'authToken' in data;
  };

  return (
    <>
      <Title title="Accounts data" />
      <div className="contentWrapper">
        <Table>
          <thead>
            <tr>
              <th onClick={() => requestSort('accountId')}>Account ID</th>
              <th onClick={() => requestSort('email')}>Email</th>
              <th onClick={() => requestSort('authToken')}>Auth Token</th>
              <th onClick={() => requestSort('creationDate')}>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {accountData.map(account => {
              if (isAccountData(account)) {
                return (
                  <tr key={account.accountId} onClick={() => onRowClick(account.accountId)}>
                    <td>{account.accountId}</td>
                    <td>{account.email}</td>
                    <td>{account.authToken}</td>
                    <td>{account.creationDate}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
        <PaginationComponent />
      </div>
    </>
  );
};

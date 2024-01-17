import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { accountsData } from 'mock/accounts';

export const AccountsTable = () => {
  const navigate = useNavigate();

  const onRowClick = (accountId: string) => {
    navigate(`/profiles/${accountId}`);
  };

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Account ID</th>
          <th>Email</th>
          <th>Auth Token</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {accountsData.map(account => (
          <tr key={account.accountId} onClick={() => onRowClick(account.accountId)}>
            <td>{account.accountId}</td>
            <td>{account.email}</td>
            <td>{account.authToken}</td>
            <td>{account.creationDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

import { useNavigate, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { profilesData } from 'mock/profiles';

export const ProfilesTable: React.FC = () => {
  const { accountId } = useParams<{ accountId: string }>();
  const navigate = useNavigate();

  const filteredProfiles = profilesData.filter(profile => profile.accountId === accountId);

  const onRowClick = (profileId: string) => {
    navigate(`/campaigns/${profileId}`);
  };

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Profile ID</th>
          <th>Country</th>
          <th>Marketplace</th>
        </tr>
      </thead>
      <tbody>
        {filteredProfiles.map(profile => (
          <tr key={profile.profileId} onClick={() => onRowClick(profile.profileId)}>
            <td>{profile.profileId}</td>
            <td>{profile.country}</td>
            <td>{profile.marketplace}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

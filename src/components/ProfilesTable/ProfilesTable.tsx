import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { DataType } from 'contexts/paginationContext';
import { ProfileData } from 'types/profile';
import { profilesData } from 'mock/profiles';
import { useSortableData } from 'utils/hooks/useSortableData';
import { usePagination } from 'utils/usePagination';
import { Title } from 'components/Title/Title';
import { PaginationComponent } from 'components/Pagination/Pagination';

export const ProfilesTable: React.FC = () => {
  const { items: sortedProfiles, requestSort } = useSortableData(profilesData, null);
  const { setData, currentData: profileData } = usePagination();

  useEffect(() => {
    if (sortedProfiles) {
      setData(filteredProfiles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedProfiles]);

  const { accountId } = useParams<{ accountId: string }>();
  const navigate = useNavigate();

  const filteredProfiles = sortedProfiles.filter(profile => profile.accountId === accountId);

  const onRowClick = (profileId: string) => {
    navigate(`/campaigns/${profileId}`);
  };

  const isProfileData = (data: DataType): data is ProfileData => {
    return 'profileId' in data && 'country' in data;
  };

  return (
    <>
      <Title title="Profiles data" />
      <div className="contentWrapper">
        <Table>
          <thead>
            <tr>
              <th onClick={() => requestSort('profileId')}>Profile ID</th>
              <th onClick={() => requestSort('country')}>Country</th>
              <th onClick={() => requestSort('marketplace')}>Marketplace</th>
            </tr>
          </thead>
          <tbody>
            {profileData.map((profile, idx) => {
              if (isProfileData(profile)) {
                return (
                  <tr key={idx} onClick={() => onRowClick(profile.profileId)}>
                    <td>{profile.profileId}</td>
                    <td>{profile.country}</td>
                    <td>{profile.marketplace}</td>
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

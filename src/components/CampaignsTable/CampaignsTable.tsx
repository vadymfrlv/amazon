import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { DataType } from 'contexts/paginationContext';
import { CampaignData } from 'types/campaign';
import { campaignsData } from 'mock/campaigns';
import { useSortableData } from 'utils/hooks/useSortableData';
import { usePagination } from 'utils/usePagination';
import { Title } from 'components/Title/Title';
import { PaginationComponent } from 'components/Pagination/Pagination';

export const CampaignsTable: React.FC = () => {
  const { items: sortedCampaigns, requestSort } = useSortableData(campaignsData, null);
  const { setData, currentData: campaignData } = usePagination();
  const { profileId } = useParams<{ profileId: string }>();

  useEffect(() => {
    if (sortedCampaigns) {
      setData(filteredCampaigns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedCampaigns]);

  const filteredCampaigns = sortedCampaigns.filter(campaign => campaign.profileId === profileId);

  const isCampaignData = (data: DataType): data is CampaignData => {
    return 'campaignId' in data && 'clicks' in data;
  };
  return (
    <>
      <Title title="Campaigns data" />
      <div className="contentWrapper">
        <Table>
          <thead>
            <tr>
              <th onClick={() => requestSort('campaignId')}>Campaign ID</th>
              <th onClick={() => requestSort('clicks')}>Clicks</th>
              <th onClick={() => requestSort('cost')}>Cost</th>
              <th onClick={() => requestSort('date')}>Date</th>
            </tr>
          </thead>
          <tbody>
            {campaignData.map((campaign, idx) => {
              if (isCampaignData(campaign)) {
                return (
                  <tr key={idx}>
                    <td>{campaign.campaignId}</td>
                    <td>{campaign.clicks}</td>
                    <td>{campaign.cost}</td>
                    <td>{campaign.date}</td>
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

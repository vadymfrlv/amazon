import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { campaignsData } from 'mock/campaigns';

export const CampaignsTable: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();

  const filteredCampaigns = campaignsData.filter(campaign => campaign.profileId === profileId);

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Campaign ID</th>
          <th>Clicks</th>
          <th>Cost</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {filteredCampaigns.map(campaign => (
          <tr key={campaign.campaignId}>
            <td>{campaign.campaignId}</td>
            <td>{campaign.clicks}</td>
            <td>{campaign.cost}</td>
            <td>{campaign.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

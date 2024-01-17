import { Routes, Route, Navigate } from 'react-router-dom';

import { AccountsTable } from 'components/AccountsTable/AccountsTable';
import { ProfilesTable } from 'components/ProfilesTable/ProfilesTable';
import { CampaignsTable } from 'components/CampaignsTable/CampaignsTable';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountsTable />} />
      <Route path="profiles/:accountId" element={<ProfilesTable />} />
      <Route path="campaigns/:profileId" element={<CampaignsTable />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

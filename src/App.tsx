import { Routes, Route, Navigate } from 'react-router-dom';

import { GeneralSharedLayout } from 'components/Layouts/GeneralSharedLayout';
import { AccountsTable } from 'components/AccountsTable/AccountsTable';
import { ProfilesTable } from 'components/ProfilesTable/ProfilesTable';
import { CampaignsTable } from 'components/CampaignsTable/CampaignsTable';
import { PaginationProvider } from 'contexts/paginationContext';

function App() {
  return (
    <PaginationProvider>
      <Routes>
        <Route path="/" element={<GeneralSharedLayout />}>
          <Route index element={<AccountsTable />} />
          <Route path="profiles/:accountId" element={<ProfilesTable />} />
          <Route path="campaigns/:profileId" element={<CampaignsTable />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </PaginationProvider>
  );
}

export default App;

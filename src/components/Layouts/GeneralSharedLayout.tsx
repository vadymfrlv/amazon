import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';

export const GeneralSharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

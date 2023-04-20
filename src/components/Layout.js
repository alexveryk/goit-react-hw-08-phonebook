import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from '../components/AppBar/AppBar';

import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

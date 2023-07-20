
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {AppBar} from '../AppBar/AppBar';

export const Wrapper = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Wrapper;

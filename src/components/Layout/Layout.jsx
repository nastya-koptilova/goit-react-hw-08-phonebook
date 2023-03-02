import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/User/userSelectors';
import Loader from 'components/Loader/Loader';
import LoginHeader from 'components/LoginHeader/LoginHeader';
import LogoutHeader from 'components/LogoutHeader/LogoutHeader';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          {isLoggedIn && <LoginHeader />}
          {!isLoggedIn && <LogoutHeader />}
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;

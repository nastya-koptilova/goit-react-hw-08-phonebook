import { Tab, TabList, Tabs } from '@chakra-ui/react';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Tabs display="flex" alignItems="end" justifyContent="space-between">
            <Tab>
              <Link to="/contacts">Contacts</Link>
            </Tab>
            <TabList
              display="flex"
              alignItems="end"
              justifyContent="space-between"
            >
              <Tab>
                <Link to="/register">Sign Up</Link>
              </Tab>
              <Tab>
                <Link to="/login">Sign In</Link>
              </Tab>
            </TabList>
          </Tabs>
        </nav>
      </header>
      {/* <Suspense fallback={<Loader />}> */}
      <main>
        <Outlet />
      </main>
      {/* </Suspense> */}
    </>
  );
};

import React from 'react';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LogoutHeader = () => {
  return (
    <Tabs display="flex" alignItems="end" justifyContent="space-between">
      <Tab>
        <Link to="/">Home</Link>
      </Tab>
      <TabList display="flex" alignItems="end" justifyContent="space-between">
        <Tab>
          <Link to="/register">Sign Up</Link>
        </Tab>
        <Tab>
          <Link to="/login">Sign In</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default LogoutHeader;

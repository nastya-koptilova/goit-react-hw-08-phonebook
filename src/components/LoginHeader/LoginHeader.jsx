import React from 'react';
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tab,
  TabList,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/User/userOperations';
import { selectUserName } from 'redux/User/userSelectors';

const LoginHeader = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleUserLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Tabs p={2} display="flex" alignItems="end" justifyContent="space-between">
      <Tab>
        <Link to="/contacts">Contacts</Link>
      </Tab>
      <TabList
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pr={3}
        pb={1}
      >
        <Text fontSize="md" mr={5}>
          Hello, {userName}!
        </Text>
        <Popover>
          <PopoverTrigger>
            <Avatar bg='teal.500' size='sm' cursor='pointer'/>
          </PopoverTrigger>
          <PopoverContent p={3} mr={2} mt={1} w={200}>
            <Button onClick={handleUserLogout}>Logout</Button>
          </PopoverContent>
        </Popover>
      </TabList>
    </Tabs>
  );
};

export default LoginHeader;

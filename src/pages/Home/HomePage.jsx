import React from 'react';
import { Text, Icon } from '@chakra-ui/react';
import { FcBusinessContact } from "react-icons/fc";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/User/userSelectors';
import css from '../AllPage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <div className={css.container}>
          <Text>Please Sign In to start using Phonebook!</Text>
          <Icon as={FcBusinessContact} w={20} h={20} />
        </div>
      )}
      {isLoggedIn && <Navigate to="/contacts" />}
    </>
  );
};

export default HomePage;

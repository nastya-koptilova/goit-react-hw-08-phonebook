import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from 'redux/User/userOperations';
import { selectIsLoggedIn } from 'redux/User/userSelectors';
import LoginForm from 'components/LoginForm/LoginForm';
import css from '../AllPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleRegister = userData => {
    dispatch(registerNewUser(userData));
  };

  return (
    <>
      {!isLoggedIn && (
        <div className={css.container}>
          <Heading>Sign Up here</Heading>
          <LoginForm onSubmit={handleRegister} />
        </div>
      )}
      {isLoggedIn && <Navigate to="/contacts" />}
    </>
  );
};

export default RegisterPage;

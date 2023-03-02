import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/User/userOperations';
import { selectIsLoggedIn } from 'redux/User/userSelectors';
import LoginForm from 'components/LoginForm/LoginForm';
import css from '../AllPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogin = userData => {
    dispatch(loginUser(userData));
  };

  return (
    <>
      {!isLoggedIn && (
        <div className={css.container}>
          <Heading>Sign In here</Heading>
          <LoginForm isRegisterForm={false} onSubmit={handleLogin} />
        </div>
      )}
      {isLoggedIn && <Navigate to="/contacts" />}
    </>
  );
};

export default LoginPage;

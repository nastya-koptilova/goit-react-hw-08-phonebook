import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import css from './ContactsPage.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = userData => {
    dispatch(loginUser(userData))
  };

  return (
    <div className={css.container}>
      <LoginForm isRegisterForm={false} onSubmit={handleLogin} />
    </div>
  );
};

import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = userData => {
    dispatch(loginUser(userData))
  };

  return (
    <div>
      <LoginForm isRegisterForm={false} onSubmit={handleLogin} />
    </div>
  );
};

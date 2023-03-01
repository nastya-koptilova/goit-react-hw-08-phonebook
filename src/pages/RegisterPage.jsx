import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerNewUser } from 'redux/operations';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleRegister = userData => {
    dispatch(registerNewUser(userData));
  };
  return (
    <div>
      <LoginForm onSubmit={handleRegister} />
    </div>
  );
};

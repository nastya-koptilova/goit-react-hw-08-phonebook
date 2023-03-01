import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';

export const LoginPage = () => {
  return (
    <div>
      <LoginForm isLoggedIn={false} />
    </div>
  );
};

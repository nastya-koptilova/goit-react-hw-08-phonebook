import React from 'react';

export const LoginForm = ({ isLoggedIn = true }) => {
  return (
    <form>
      {isLoggedIn && (
        <label>
          <input type="text" name="name" placeholder="Full name" />
        </label>
      )}
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">{isLoggedIn ? 'Sign Up' : 'Sign In'}</button>
    </form>
  );
};

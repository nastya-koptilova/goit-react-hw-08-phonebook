import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const LoginForm = ({ isRegisterForm = true, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    userMap[name](value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (isRegisterForm) {
      onSubmit({ name, email, password });
      return;
    }
    onSubmit({ email, password });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {isRegisterForm && (
        <label>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            onChange={handleInputChange}
          />
        </label>
      )}
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          minLength={7}
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">{isRegisterForm ? 'Sign Up' : 'Sign In'}</button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

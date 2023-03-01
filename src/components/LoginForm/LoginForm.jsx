import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

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
  };

  return (
    <FormControl
      border="1px"
      borderColor="gray.200"
      w={450}
      p={10}
      mb={10}
      align="center"
      boxShadow="lg"
      rounded="md"
      bg="white"
      onSubmit={handleFormSubmit}
    >
      {isRegisterForm && (
        <FormLabel>
          <Text as="b">Name</Text>
          <Input
            mb={4}
            mt={2}
            type="text"
            name="name"
            placeholder="Full name"
            required
            onChange={handleInputChange}
          />
        </FormLabel>
      )}
      <FormLabel>
        <Text as="b">Email</Text>
        <Input
          mb={4}
          mt={2}
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel>
        <Text as="b">Password</Text>
        <Input
          mt={2}
          type="password"
          name="password"
          placeholder="Password"
          minLength={7}
          required
          onChange={handleInputChange}
        />
      </FormLabel>
      <Button mt={5} type="submit">
        {isRegisterForm ? 'Sign Up' : 'Sign In'}
      </Button>
    </FormControl>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

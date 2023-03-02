import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { EditIcon, EmailIcon, LockIcon} from '@chakra-ui/icons';

const LoginForm = ({ isRegisterForm = true, onSubmit }) => {
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

  const handleFormSubmit = event => {
    event.preventDefault();
    if (isRegisterForm) {
      onSubmit({ name, email, password });
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      >
        {isRegisterForm && (
          <FormLabel>
            <Text as="b">Name</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                top={2}
                left={0.5}
                children={<EditIcon color="gray.300" w={4} h={4} />}
              />
              <Input
                mb={4}
                mt={2}
                type="text"
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Jack Smith"
                required
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormLabel>
        )}
        <FormLabel>
          <Text as="b">Email</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top={2}
              left={0.5}
              children={<EmailIcon color="gray.300" w={4} h={4} />}
            />
            <Input
              mb={4}
              mt={2}
              type="email"
              id="email"
              name="email"
              placeholder="jack@gmail.com"
              required
              onChange={handleInputChange}
            />
          </InputGroup>
        </FormLabel>
        <FormLabel>
          <Text as="b">Password</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top={2}
              left={0.5}
              children={<LockIcon color="gray.300" w={4} h={4} />}
            />
            <Input
              mt={2}
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              minLength={7}
              required
              onChange={handleInputChange}
            />
          </InputGroup>
        </FormLabel>
        <Button mt={5} type="submit">
          {isRegisterForm ? 'Sign Up' : 'Sign In'}
        </Button>
      </FormControl>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;

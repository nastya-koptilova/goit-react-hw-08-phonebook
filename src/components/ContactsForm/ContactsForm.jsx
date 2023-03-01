import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';
import { FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [userName, setUserName] = useState('');
  const [userTel, setUserTel] = useState('');

  const onNameChange = event => {
    const newName = event.target.value;
    setUserName(newName);
  };

  const onTelChange = event => {
    const newTel = event.target.value;
    setUserTel(newTel);
  };

  const onAddClick = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: userName,
      number: userTel,
    };
    if (contacts.some(el => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setUserName('');
    setUserTel('');
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
      onSubmit={onAddClick}
    >
      <FormLabel>
        <Text as="b">Name</Text>
        <Input
          mb={5}
          mt={2}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onNameChange}
          value={userName}
        />
        <Text as="b">Number</Text>
        <Input
          mt={2}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={userTel}
          onChange={onTelChange}
        />
      </FormLabel>
      <Button mt={5} type="submit">
        Add contact
      </Button>
    </FormControl>
  );
};

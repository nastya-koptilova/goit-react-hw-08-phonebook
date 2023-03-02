import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EditIcon, PhoneIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Contacts/contactsSelectors';
import { addContact } from 'redux/Contacts/contactsOperations';

const ContactsForm = () => {
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
    <form onSubmit={onAddClick}>
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
              mb={5}
              mt={2}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Sirius Black"
              required
              onChange={onNameChange}
              value={userName}
            />
          </InputGroup>
          <Text as="b">Number</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top={2}
              left={0.5}
              children={<PhoneIcon color="gray.300" w={4} h={4} />}
            />
            <Input
              mt={2}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="256-148-256"
              required
              value={userTel}
              onChange={onTelChange}
            />
          </InputGroup>
        </FormLabel>
        <Button mt={5} type="submit">
          Add contact
        </Button>
      </FormControl>
    </form>
  );
};

export default ContactsForm;

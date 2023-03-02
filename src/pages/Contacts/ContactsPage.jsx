import React, { useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Contacts/contactsSelectors';
import { selectFilterContacts } from 'redux/Filter/filerSelectors';
import { selectIsLoggedIn } from 'redux/User/userSelectors';
import { fetchContacts } from 'redux/Contacts/contactsOperations';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import css from '../AllPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
      return;
    }
    return;
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.container}>
      <Heading>Add your contacts here</Heading>
      <ContactsForm />
      <Heading>Contacts</Heading>
      {contact.length > 0 && <Filter />}
      {contact.length > 0 && filterContacts.length > 0 && <Contacts />}
      {contact.length > 0 && filterContacts.length <= 0 && (
        <p>No contacts with this name!</p>
      )}
      {contact.length <= 0 && <p>You don't have any contacts yet!</p>}
    </div>
  );
};

export default ContactsPage;

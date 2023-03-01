import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import React from 'react'
import css from './ContactsPage.module.css';
import { Heading } from '@chakra-ui/react';

export const ContactsPage = () => {
  return (
    <div className={css.container}>
        <ContactsForm />
        <Heading>Contacts</Heading>
        <Filter />
        <Contacts />
      </div>
  )
}

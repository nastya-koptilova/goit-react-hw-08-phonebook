import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import React from 'react'
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  return (
    <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
  )
}

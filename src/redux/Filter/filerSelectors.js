import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/Contacts/contactsSelectors';

export const selectSearch = state => state.filterData.search;
export const selectFilterContacts = createSelector(
  [selectContacts, selectSearch],
  (contacts, search) =>
    contacts.filter(el =>
      el.name.toLowerCase().includes(search.toLowerCase().trim())
    )
);

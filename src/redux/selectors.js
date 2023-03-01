import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts;
export const selectSearch = state => state.filterData.search;
export const selectFilterContacts = createSelector(
  [selectContacts, selectSearch],
  (contacts, search) =>
    contacts.filter(el =>
      el.name.toLowerCase().includes(search.toLowerCase().trim())
    )
);

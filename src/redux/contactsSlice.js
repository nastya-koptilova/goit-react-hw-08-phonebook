import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // ----- getContacts -----
      .addCase(fetchContacts.pending, pendingHandler)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, rejectHandler)
      // ----- addContact -----
      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, rejectHandler)
      // ----- deleteContact -----
      .addCase(deleteContact.pending, pendingHandler)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          el => el.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, rejectHandler);
  },
});

function pendingHandler(state) {
  state.error = null;
  state.isLoading = true;
}
function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;

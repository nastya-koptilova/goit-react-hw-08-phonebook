import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const filterSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    searchContact(state, action) {
      state.search = action.payload;
    },
  },
});

export const { searchContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

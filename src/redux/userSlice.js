import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
//   reducers: {
//     searchContact(state, action) {
//       state.search = action.payload;
//     },
//   },
});

export const { searchContact } = userSlice.actions;

export const userReducer = userSlice.reducer;
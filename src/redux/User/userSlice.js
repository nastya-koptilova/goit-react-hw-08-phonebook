import { createSlice } from '@reduxjs/toolkit';
import {
  registerNewUser,
  loginUser,
  logoutUser,
  refreshUser,
} from './userOperations';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userName: '',
  userEmail: '',
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // ----- SignUp -----
      .addCase(registerNewUser.pending, pendingHandler)
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(registerNewUser.rejected, rejectHandler)
      // ----- SignIn -----
      .addCase(loginUser.pending, pendingHandler)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, rejectHandler)
      // ----- Refresh -----
      .addCase(refreshUser.pending, pendingHandler)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.name;
        state.userEmail = action.payload.email;
      })
      .addCase(refreshUser.rejected, rejectHandler)
      // ----- Logout -----
      .addCase(logoutUser.pending, pendingHandler)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userName = '';
        state.userEmail = '';
        state.token = null;
      })
      .addCase(logoutUser.rejected, rejectHandler);
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

export const { searchContact } = userSlice.actions;

export const userReducer = userSlice.reducer;

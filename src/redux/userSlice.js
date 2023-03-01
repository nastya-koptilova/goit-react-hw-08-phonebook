import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerNewUser } from './operations';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userName: '',
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
        state.userName = action.payload.name;
      })
      .addCase(registerNewUser.rejected, rejectHandler)
      // ----- SignIn -----
      .addCase(loginUser.pending, pendingHandler)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.name;
      })
      .addCase(loginUser.rejected, rejectHandler);
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  token,
  userLogin,
  userLogout,
  userRegister,
} from 'services/API';

export const registerNewUser = createAsyncThunk(
  'user/register',
  async (credential, thunkAPI) => {
    try {
      const result = await userRegister(credential);
      token.set(result.token);
      return result;
    } catch (error) {
      alert('User with this email is already exist!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credential, thunkAPI) => {
    try {
      const result = await userLogin(credential);
      token.set(result.token);
      return result;
    } catch (error) {
      alert('Wrong email or password!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const userToken = thunkAPI.getState().userData.token;
    if (!userToken) return thunkAPI.rejectWithValue('no token');
    token.set(userToken);
    try {
      const result = await getCurrentUser();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const result = await userLogout();
      token.unSet();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

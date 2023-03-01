import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsData,
  postContactsData,
  removeContactsData,
  userLogin,
  userRegister,
} from 'services/API';

export const registerNewUser = createAsyncThunk(
  'user/register',
  async (credential, thunkAPI) => {
    try {
      console.log(credential)
      const result = await userRegister(credential);
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credential, thunkAPI) => {
    try {
      console.log(credential)
      const result = await userLogin(credential);
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const result = await getContactsData();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const result = await postContactsData(contact);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const result = await removeContactsData(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

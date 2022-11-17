import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

export const setAuthHeder = token => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};

export const clearAuthHeder = () => {
  axios.defaults.headers.common.Autorization = '';
};
export const logOut = () => {};
export const logIn = () => {};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

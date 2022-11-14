import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setAuthHeder = token => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};

const clearAuthHeder = () => {
  axios.defaults.headers.common.Autorization = '';
};
export const logOut = () => {};
export const logIn = () => {};
export const register = () => {};

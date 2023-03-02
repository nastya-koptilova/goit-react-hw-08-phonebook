import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const userRegister = async credential => {
  const { data } = await axios.post('/users/signup', credential);
  return data;
};

export const userLogin = async credential => {
  const { data } = await axios.post('/users/login', credential);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const getContactsData = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContactsData = async contact => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};

export const removeContactsData = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

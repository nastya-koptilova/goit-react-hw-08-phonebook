import axios from "axios";

const PUBLIC_HOST = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

const PRIVATE_HOST = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

export const userRegister = async (credential) => {
  const { data } = await PUBLIC_HOST.post("/users/signup", credential);
  return data;
}

export const userLogin = async (credential) => {
  const { data } = await PUBLIC_HOST.post("/users/login", credential);
  return data;
}

export const getContactsData = async () => {
    const { data } = await PUBLIC_HOST.get(
      `https://63fce778859df29986c72bc9.mockapi.io/contacts/contacts`
    );
    return data;
  };

  export const postContactsData = async (contact) => {
    const { data } = await axios.post(
      `https://63fce778859df29986c72bc9.mockapi.io/contacts/contacts/`, contact
    );
    return data; 
  };

  export const removeContactsData = async (id) => {
    const { data } = await axios.delete(
      `https://63fce778859df29986c72bc9.mockapi.io/contacts/contacts/${id}`
    );
    return data;
  };

  // export const getContactsData = async () => {
  //   const { data } = await PUBLIC_HOST.get('/contacts');
  //   return data;
  // };
  
  // export const postContactsData = async contact => {
  //   const { data } = await PUBLIC_HOST.post('/contacts', contact);
  //   return data;
  // };
  
  // export const removeContactsData = async id => {
  //   const { data } = await PUBLIC_HOST.delete(`/contacts/${id}`);
  //   return data;
  // };

  export const token = {
    set: (token) => {
      PRIVATE_HOST.defaults.headers.common.Authorization = `${token}`;
    },
    unSet: () => {
      PUBLIC_HOST.defaults.headers.common.Authorization = "";
    },
  };
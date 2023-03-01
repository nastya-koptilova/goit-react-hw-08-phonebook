import axios from "axios";

export const getContactsData = async () => {
    const { data } = await axios.get(
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
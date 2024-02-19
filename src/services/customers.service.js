import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api/";

export const getAllCustomers = async () => {
  try {
    let data = await axios.get(`${BASE_URL}customers`);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCustomerById = async (id) => {
  try {
    await axios.delete(`${BASE_URL}customers/${id}`);
  } catch (error) {
    throw error;
  }
};

export const addNewCustomer = async (obj) => {
  try {
    let respons = await axios.post(`${BASE_URL}customers`, obj);
    return respons.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomerById = async (id) => {
  try {
    let respons = await axios.get(`${BASE_URL}customers/${id}`);
    return respons.data;
  } catch (error) {
    throw error;
  }
};

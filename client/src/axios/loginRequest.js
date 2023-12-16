import axios from "axios";

export const loginRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

import axios from "axios";

export const registerRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

import axios from "axios";
// whenever we need to make api call to the same api endpoint, use makeRequest.get()
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});

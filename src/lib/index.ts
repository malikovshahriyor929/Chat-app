import axios from "axios";

export const AxiosIntance = axios.create({
  // baseURL: "https://chat-app-b-177e.onrender.com/api/",
  baseURL: "https://chat-app-bb-tai4.onrender.com/api/",
  withCredentials:true
});

import axios from "axios";

export const AxiosIntance = axios.create({
  baseURL: "https://chat-app-b-177e.onrender.com/api/",
});

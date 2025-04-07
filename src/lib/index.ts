import axios from "axios";

export const AxiosIntance = axios.create({
  // baseURL: "https://chat-app-b-177e.onrender.com/api/",
  baseURL: "https://chat-app-bb-tai4.onrender.com/api/",
  withCredentials: true,
});

export function FormatMessageTime(date: string) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

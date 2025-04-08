import { create } from "zustand";
import { useAuthUserType } from "../@types";
import { AxiosIntance } from "../lib";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

// import toast from "hot"
export const useAuthUser = create<useAuthUserType>((set, get) => ({
  authUser: null,
  isLoginLoading: false,
  isCheckLoading: true,
  isRegisterLoading: false,
  isProfileFotoLoading: false,
  socket: null,
  online_users: [],
  signin: async (data, navigate) => {
    set({ isLoginLoading: true });
    try {
      const res = await AxiosIntance.post("auth/sign-in", data);
      set({ authUser: res.data.data });
      toast.success("Account Sign In Succesfully");
      get().connectSocket()
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        }
      }
      set({ authUser: null });
    } finally {
      set({ isLoginLoading: false });
    }
  },
  signup: async (data, navigate) => {
    set({ isRegisterLoading: true });
    try {
      const res = await AxiosIntance.post("auth/sign-up", data);
      set({ authUser: res.data.data });
      toast.success("Account created Succesfully");
      get().connectSocket()

      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        }
      }
      set({ authUser: null });
    } finally {
      set({ isRegisterLoading: false });
    }
  },
  checkAuth: async () => {
    try {
      const res = await AxiosIntance.get("auth/check");
      set({ authUser: res.data.data });
      get().connectSocket()

    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        }
      }
      set({ authUser: null });
    } finally {
      set({ isCheckLoading: false });
    }
  },
  logOut: async () => {
    try {
      await AxiosIntance.post("auth/logout");
      toast.success("you successfully log outed");
      set({ authUser: null });
      get().disConnectSocket()

    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        }
      }
      set({ authUser: null });
    }
  },
  imageUpload: async (data) => {
    set({ isProfileFotoLoading: true });
    try {
      const res = await AxiosIntance.post("auth/update-photo", data);
      set({ authUser: res.data.data });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        }
      }
    } finally {
      set({ isProfileFotoLoading: false });
    }
  },
  connectSocket() {
    const { authUser, socket } = get();
    if (!authUser || socket?.connected) return;
    const socketIo = io("https://chat-app-bb-tai4.onrender.com", {
      query: { userId: authUser?._id },
      withCredentials: true,
    });
    socketIo.connect();
    set({ socket: socketIo });
    socketIo.on("getOnlineUsers", (userId: string[]) => {
      set({ online_users: userId });
    });
  },
  disConnectSocket() {
    if (get().socket?.connected) get().socket?.disconnect();
  },
}));

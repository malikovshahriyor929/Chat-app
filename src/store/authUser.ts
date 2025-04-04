import { create } from "zustand";
import { useAuthUserType } from "../@types";
import { AxiosIntance } from "../lib";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

// import toast from "hot"
export let useAuthUser = create<useAuthUserType>((set) => ({
  authUser: null,
  isLoginLoading: false,
  isCheckLoading: true,
  isRegisterLoading: false,

  signin: async (data, navigate) => {
    set({ isLoginLoading: true });
    try {
      const res = await AxiosIntance.post("auth/sign-in", data);
      set({ authUser: res.data.data });
      toast.success("Account Sign In Succesfully");
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
    set({ isCheckLoading: true });
    try {
      const res = await AxiosIntance.get("/auth/check");
      console.log(res);
      
      set({ authUser: res.data });
      // set({ isCheckLoading: false });
      console.log(res.data);
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
}));

import { create } from "zustand";
import { AuthuserType, messageType } from "../@types";
import { AxiosIntance } from "../lib";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAuthUser } from "./authUser";

interface useChatStoreType {
  selectedUser: AuthuserType | null;
  users: AuthuserType[] | null;
  messages: messageType[];
  usersLoading: boolean;
  messageLoading: boolean;
  setSelecteUser: (data: AuthuserType | null) => void;
  getUsers: () => Promise<void>;
  getMessages: (userId: string) => Promise<void>;
  setMessages: (message: object) => Promise<void>;
  subscibeMessage: () => void;
  unsubscibeMessage: () => void;
}

export const useChatStore = create<useChatStoreType>((set, get) => ({
  selectedUser: null,
  users: null,
  messages: [],
  usersLoading: false,
  messageLoading: false,
  setSelecteUser(data) {
    set({ selectedUser: data });
  },
  getUsers: async () => {
    set({ usersLoading: true });
    try {
      const res = await AxiosIntance.get("message/users");
      set({ users: res.data.data });
    } catch (error) {
      errorFN(error);
    } finally {
      set({ usersLoading: false });
    }
  },
  getMessages: async (userId) => {
    set({ messageLoading: true });
    try {
      const res = await AxiosIntance.get(`message/${userId}`);
      set({ messages: res.data.data });
    } catch (error) {
      errorFN(error);
    } finally {
      set({ messageLoading: false });
    }
  },
  setMessages: async (message) => {
    const { selectedUser, messages } = get();

    try {
      const res = await AxiosIntance.post(
        `message/send/${selectedUser?._id}`,
        message
      );
      set({ messages: [...messages, res.data.data] });
    } catch (error) {
      errorFN(error);
    }
  },
  subscibeMessage: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;
    const socket = useAuthUser.getState().socket;
    socket?.on("newMessage", (newMessage: messageType) => {
      const messageForSelecedUser = newMessage.senderId == selectedUser._id;
      if (!messageForSelecedUser) return;
      set({ messages: [...(get().messages as messageType[] ), newMessage] });
    });
  },
  unsubscibeMessage() {
    const socket = useAuthUser.getState().socket
    socket?.off("newMessage")
  },
}));

function errorFN(error: any) {
  if (error instanceof AxiosError) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    }
  }
}

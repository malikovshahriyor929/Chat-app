import { NavigateFunction } from "react-router-dom";
import { Socket } from "socket.io-client";

export interface useAuthUserType {
  authUser: AuthuserType | null;
  isLoginLoading: boolean;
  isCheckLoading: boolean;
  isRegisterLoading: boolean;
  isProfileFotoLoading: boolean;
  socket: Socket | null;
  online_users: string[];
  signin: (data: formValueType, navigate: NavigateFunction) => Promise<void>;
  signup: (data: formValueType, navigate: NavigateFunction) => Promise<void>;
  imageUpload: (data: formValueType) => Promise<void>;
  checkAuth: () => Promise<void>;
  logOut: () => Promise<void>;
  connectSocket: () => void;
  disConnectSocket: () => void;
}

export interface formValueType {
  fullName?: string;
  email: string;
  password: string;
}

export interface AuthuserType {
  _id: string;
  email: string;
  fullName: string;
  password: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
}

export interface ThemesType {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface messageType {
  createdAt: string;
  receiverId: string;
  senderId: string;
  text: string;
  updatedAt: string;
  _id: string;
  image?: string;
}

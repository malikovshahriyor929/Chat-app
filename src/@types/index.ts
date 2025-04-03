import { NavigateFunction } from "react-router-dom";

export interface useAuthUserType {
  authUser: AuthuserType | null;
  isLoginLoading: boolean;
  signin: (data: formValueType, navigate: NavigateFunction) => Promise<void>;
  signup: (data: formValueType, navigate: NavigateFunction) => Promise<void>;
  checkAuth: () => Promise<void>;
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

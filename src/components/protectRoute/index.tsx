import { FC, ReactNode } from "react";
import { useAuthUser } from "../../store/authUser";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtecRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { authUser, isCheckLoading } = useAuthUser();
  if (!authUser && !isCheckLoading) {
    return <Navigate to={"/sign-in"} />;
  }
  return <div>{children}</div>;
};

export default ProtecRoute;

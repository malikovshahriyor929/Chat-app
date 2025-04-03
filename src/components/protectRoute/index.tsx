import { useAuthUser } from "../../store/authUser";
import { Navigate } from "react-router-dom";

const ProtecRoute = ({ children }: { children: any }) => {
  let { authUser } = useAuthUser();
  if (!authUser) {
    <Navigate to={"/sign-in"} replace />;
  } 
return <div>{children}</div>;
};

export default ProtecRoute;

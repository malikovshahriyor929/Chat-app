import { useEffect } from "react";
import { useAuthUser } from "../store/authUser";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const MainLayoutProtect = () => {
  const { checkAuth, authUser } = useAuthUser();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div>
      {authUser && <Header />}
      <Outlet />
    </div>
  );
};

export default MainLayoutProtect;

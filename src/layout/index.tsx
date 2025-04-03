import { Outlet } from "react-router-dom";
import { useAuthUser } from "../store/authUser";
import { useEffect } from "react";

const MainLayout = () => {
  const { checkAuth } = useAuthUser();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

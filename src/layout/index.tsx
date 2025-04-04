import { Outlet } from "react-router-dom";
import { useAuthUser } from "../store/authUser";
import { useEffect } from "react";
import Header from "../components/header";

const MainLayout = () => {
  const { checkAuth, authUser } = useAuthUser();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div data-theme="dark">
      {authUser && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

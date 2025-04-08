import { Outlet } from "react-router-dom";
import { useAuthUser } from "../store/authUser";
import { useEffect } from "react";
import Header from "../components/header";
import { Loader } from "lucide-react";
import { Themes } from "../store/themeStore";

const MainLayout = () => {
  const { checkAuth, authUser, isCheckLoading } = useAuthUser();
  const { theme } = Themes();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <main>
      <div data-theme={theme}>
        {authUser && <Header />}
        <main className={`${isCheckLoading ? "hidden" : "inline"}`}>
          <Outlet />
        </main>
      </div>
      <div
        className={`${
          !isCheckLoading ? "hidden" : "flex"
        } items-center justify-center h-screen w-full  backdrop-blur-lg `}
      >
        <Loader className="animate-spin " />
      </div>
    </main>
  );
};

export default MainLayout;

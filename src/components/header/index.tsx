import { LogOut, Menu, MessageSquare, Settings, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser } from "../../store/authUser";
import { useState } from "react";

const Header = () => {
  const { logOut } = useAuthUser();
  const navigate = useNavigate();
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div
      className="bg-base-100 border-b border-base-300 sticky w-full top-0 z-40
    backdrop-blur-lg "
    >
      <div className="w-[90%] mx-auto max-w-[1440px] py-3 flex items-center justify-between ">
        <Link to={"/"}>
          <div className=" flex items-center gap-2 ">
            <div className="text-primary bg-primary/10 rounded-lg p-2 ">
              <MessageSquare size={25} />
            </div>
            <p className=" text-lg font-bold">Chatty</p>
          </div>
        </Link>
        <div
          onClick={() => setCheck(!check)}
          className="max-[520px]:flex hidden"
        >
          <Menu />
        </div>
        <div
          className={`flex items-center gap-2 max-[520px]:w-full max-[520px]:p-5 max-[520px]:justify-between  max-[520px]:bg-base-100 transition-all duration-300 top-0  max-[520px]:fixed max-[400px]:h-screen max-[400px]:justify-center  ${
            check ? "right-0  " : "right-[-100%] max-[520px]:hidden"
          } `}
        >
          <div className="flex items-center gap-2 max-[400px]:flex-col  ">
            <Link to={"/setting"}>
              <div
                onClick={() => setCheck(!check)}
                className="text-base-content/60  flex  cursor-pointer items-center gap-2 btn btn-sm transition-colors border-none "
              >
                <Settings size={20} />
                <p className=" font-medium">Settings</p>
              </div>
            </Link>
            <Link to={"/profile"}>
              <div
                onClick={() => setCheck(!check)}
                className="text-base-content/60  flex  cursor-pointer items-center gap-2 btn btn-sm transition-colors border-none "
              >
                <User size={20} />
                <p className=" font-medium">Profile</p>
              </div>
            </Link>
            <div
              onClick={() => {
                logOut();
                navigate("/sign-in");
                setCheck(!check);
              }}
              className=" cursor-pointer  flex items-center gap-2 text-base-content/60 transition-colors  "
            >
              <LogOut size={20} />
              <p className=" font-medium">Log out</p>
            </div>
          </div>
          <div
            onClick={() => setCheck(!check)}
            className="hidden max-[520px]:flex absolute max-[400px]:top-3 right-3 cursor-pointer"
          >
            <X />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  
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
        <div className="flex items-center gap-2">
          <Link to={"/setting"}>
            <div className="text-base-content/60  flex items-center gap-2 btn btn-sm transition-colors border-none ">
              <Settings size={20} />
              <p className=" font-medium">Settings</p>
            </div>
          </Link>
          <Link to={"/profile"}>
            <div className="text-base-content/60  flex items-center gap-2 btn btn-sm transition-colors border-none ">
              <User size={20} />
              <p className=" font-medium">Settings</p>
            </div>
          </Link>
          <div className="  flex items-center gap-2 text-base-content/60 transition-colors  ">
            <LogOut size={20} />
            <p className=" font-medium">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

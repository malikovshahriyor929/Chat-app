import { useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import { User } from "lucide-react";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import { defualtAvatar } from "../../utils";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelecteUser, usersLoading } =
    useChatStore();
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (usersLoading) return <SidebarSkeleton />;

  return (
    <div className="h-full transition-all duration-200 ">
      <div className="border-b border-base-300 w-full p-5 flex items-end gap-2">
        <User className="size-6" />
        <p className="font-medium hidden lg:block">Contacts</p>
      </div>
      <div className="overflow-y-scroll h-[90%]   py-3 ">
        {users?.map((value) => (
          <button
            key={value?._id}
            onClick={() => setSelecteUser(value)}
            className={`w-full p-3 flex items-center gap-3  hover:bg-base-300 transition-colors ${
              value._id == selectedUser?._id
                ? " bg-base-300 ring-1 ring-base-300"
                : ""
            } `}
          >
            <div className="relative mx-auto lg:mx-0 ">
              <img
                src={value.profilePic || defualtAvatar}
                className="size-12 object-cover rounded-full"
                alt=""
              />
            </div>
            <div className="text-left ">
              <p className="font-medium truncate ">{value.fullName}</p>
              <p className="text-sm text-zinc-400">Offline</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

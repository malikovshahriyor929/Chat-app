import { useEffect, useState } from "react";
import { useChatStore } from "../../store/useChatStore";
import { User } from "lucide-react";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import { defualtAvatar } from "../../utils";
import { useAuthUser } from "../../store/authUser";

const SideBar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelecteUser,
    usersLoading,
  } = useChatStore();
  const { online_users } = useAuthUser();
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const [checkbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("online") as string) || false
  );
  useEffect(() => {
    localStorage.setItem("online", checkbox.toString());
  }, [checkbox]);

  if (usersLoading) return <SidebarSkeleton />;

  return (
    <div className="h-full transition-all duration-200 ">
      <div className="border-b border-base-300 w-full p-5 flex items-center justify-between gap-2">
        <div className="flex items-end">
          <User className="size-6" />
          <p className="font-medium block">Contacts</p>
        </div>
        <div>
          <input
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            type="checkbox"
            className="checkbox size-5 checkbox-primary "
          />
        </div>
      </div>
      <div className="overflow-y-scroll h-[90%] pb-5  py-3 ">
        {users?.map((value) => (
          <button
            key={value?._id}
            onClick={() => setSelecteUser(value)}
            className={`w-full p-3 flex items-center justify-between gap-3  hover:bg-base-300 transition-colors ${
              value._id == selectedUser?._id
                ? " bg-base-300 ring-1 ring-base-300 "
                : ""
            }
            ${checkbox && !online_users.includes(value._id) ? "hidden" : "flex"}
            `}
          >
            <div className="flex items-center gap-3">
              <div className="relative lg:mx-0 ">
                <img
                  src={value.profilePic || defualtAvatar}
                  className="size-12 object-cover rounded-full"
                  alt=""
                />
                {online_users.includes(value._id) && (
                  <div className=" absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-1  ring-base-content" />
                )}
              </div>
              <div className="text-left ">
                <p className="font-medium truncate  max-[760px]:w-[100px] max-[520px]:w-fit ">
                  {value.fullName}
                </p>
                <p className="text-sm text-zinc-400">
                  {online_users.includes(value._id) ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

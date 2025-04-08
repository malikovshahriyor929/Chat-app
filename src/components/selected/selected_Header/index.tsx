import { X } from "lucide-react";
import { useChatStore } from "../../../store/useChatStore";
import { defualtAvatar } from "../../../utils";
import { useAuthUser } from "../../../store/authUser";

const Selected_header = () => {
  const { selectedUser, setSelecteUser } = useChatStore();
  const { online_users } = useAuthUser();
  return (
    <div className="flex items-center justify-between p-2 px-3 border-b border-base-300">
      <div className="flex items-center gap-2">
        <div className="relative mx-auto lg:mx-0 ">
          <img
            src={selectedUser?.profilePic || defualtAvatar}
            className="size-12 object-cover rounded-full"
            alt=""
          />
          {online_users.includes(selectedUser!._id) && (
            <div className=" absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-1  ring-base-content" />
          )}
        </div>
        <div className="text-left ">
          <p className="font-medium truncate ">{selectedUser?.fullName}</p>
          <p className="text-sm text-zinc-400">
            {online_users.includes(selectedUser!._id) ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <div className="pr-2 cursor-pointer" onClick={() => setSelecteUser(null)}>
        <X />
      </div>
    </div>
  );
};

export default Selected_header;

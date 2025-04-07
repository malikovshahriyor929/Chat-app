import { X } from "lucide-react";
import { useChatStore } from "../../../store/useChatStore";
import { defualtAvatar } from "../../../utils";

const Selected_header = () => {
  const { selectedUser, setSelecteUser } = useChatStore();
  return (
    <div className="flex items-center justify-between p-2 px-3 border-b border-base-300">
      <div className="flex items-center gap-2">
        <div className="relative mx-auto lg:mx-0 ">
          <img
            src={selectedUser?.profilePic || defualtAvatar}
            className="size-12 object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="text-left ">
          <p className="font-medium truncate ">{selectedUser?.fullName }</p>
          <p className="text-sm text-zinc-400">Offline</p>
        </div>
      </div>
      <div className="pr-2 cursor-pointer" onClick={() => setSelecteUser(null)}>
        <X />
      </div>
    </div>
  );
};

export default Selected_header;

import { useEffect, useRef } from "react";
import { useChatStore } from "../../store/useChatStore";
import Selected_header from "./selected_Header";
import { useAuthUser } from "../../store/authUser";
import { defualtAvatar } from "../../utils";
import { FormatMessageTime } from "../../lib";
import MessageSkeleton from "../skeletons/messageSkeleton";
import MessageInput from "./selected_input";

const Selected = () => {
  const {
    getMessages,
    messages,
    messageLoading,
    selectedUser,
    subscibeMessage,
    unsubscibeMessage,
  } = useChatStore();
  const { authUser } = useAuthUser();
  const messageref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!selectedUser || !selectedUser._id) return;

    getMessages(selectedUser._id);
    subscibeMessage();
    return () => {
      unsubscibeMessage();
    };
  }, [getMessages, selectedUser?._id, subscibeMessage]);

  useEffect(() => {
    if (messageref.current && messages) {
      messageref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  if (messageLoading)
    return (
      <div className="w-full flex flex-col">
        <Selected_header />
        <MessageSkeleton />;
        <MessageInput />
      </div>
    );
  return (
    <div className="w-full h-full relative">
      <div className="s top-0 ">
        <Selected_header />
      </div>
      <div className="overflow-y-auto  h-full  pb-36  space-y-4">
        {messages?.map((value) => (
          <div
            key={value._id}
            // ref={messageref}
            className={`chat  px-4 ${
              value.senderId === authUser?._id ? "chat-end" : "chat-start "
            } `}
          >
            <div className="chat-image avatar ">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    value.senderId == authUser?._id
                      ? authUser?.profilePic || defualtAvatar
                      : selectedUser?.profilePic || defualtAvatar
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1  ">
                {FormatMessageTime(value.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col ">
              {/* <div>
                {value.image && (
                  <img
                    src={value.image}
                    className="max-w-[200px] rounded-md mb-2"
                  />
                )}
              </div> */}
              <p>{value.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0      ">
        <MessageInput />
      </div>
    </div>
  );
};

export default Selected;

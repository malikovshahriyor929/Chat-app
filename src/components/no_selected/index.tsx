import { MessageSquare } from "lucide-react";

const No_selected = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center p-16 bg-base-100/50 ">
        <div className="max-w-md text-center space-y-1">
          <div className="relative  ">
            <div className=" flex items-center flex-col  ">
              <div className="text-primary animate-bounce bg-primary/10 rounded-lg p-2 ">
                <MessageSquare size={25} />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold ">Welcome to Chatty</h2>
          <p className="text-base-content/60">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      </div>
    </>
  );
};

export default No_selected;

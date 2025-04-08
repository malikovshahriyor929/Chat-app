import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { useChatStore } from "../../../store/useChatStore";

const MessageInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setMessages } = useChatStore();
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    if (!inputValue.trim()) return;
    await setMessages({ text: inputValue.trim() });
    setInputValue("");
  };
  return (
    <div className="p-4 w-full bg-base-100 rounded-lg">
      <form onSubmit={handlesubmit} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
          />
        </div>
        <button type="submit" className="btn btn-sm size-12 rounded-full">
          <Send size={30} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;

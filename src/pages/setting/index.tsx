import { Send } from "lucide-react";
import { Themes } from "../../store/themeStore";
import { THEMES } from "../../utils";

interface PREVIEW_MESSAGESType {
  id: number;
  content: string;
  isSent: boolean;
}

const PREVIEW_MESSAGES: PREVIEW_MESSAGESType[] = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];
const Setting = () => {
  const { theme, setTheme } = Themes();
  return (
    <div className="max-w-5xl max-[1200px]:w-[90%] mx-auto pt-10 h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Theme</h2>
        <p className="text-sm text-base-content/70">
          Choose a theme for your chat interface
        </p>
      </div>
      <div className="grid  mt-4 max-[830px]:grid-cols-4 max-[830px]:gap-x-5 max-[530px]:grid-cols-3 max-[400px]:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] max-[400px]:overflow-x-scroll max-[400px]:gap-x-2  grid-cols-8 gap-2">
        {THEMES.map((value) => (
          <button
            key={value}
            className={`group max-[400px]:w-[100px] flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
              theme === value ? "bg-base-200" : "hover:bg-base-200/50"
            } `}
            onClick={() => setTheme(value)}
          >
            <div className="relative h-8 w-full rounded-md " data-theme={value}>
              <div className="absolute inset-0 grid grid-cols-4 gap-1 w-full p-1">
                <div className="rounded bg-primary"></div>
                <div className="rounded bg-secondary"></div>
                <div className="rounded bg-accent"></div>
                <div className="rounded bg-neutral"></div>
              </div>
            </div>
            <span className="text-xs truncate font-medium w-full text-center ">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-3 ">Preview</h3>
        <div className="border border-base-300 rounded-xl shadow-lg  bg-base-100 ">
          <div className="p-4 bg-base-200 rounded-xl ">
            <div className="max-w-xl mx-auto">
              <div className="bg-base-100 rounded-lg shadow-sm ">
                <div className="px-4 py-3 border border-base-300 bg-base-100">
                  <div className="flex items-center  gap-3 ">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium ">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                    {PREVIEW_MESSAGES.map((value: PREVIEW_MESSAGESType) => (
                      <div
                        key={value.id}
                        className={`flex ${
                          value.isSent ? "justify-end" : "justify-start"
                        }`}
                      >
                        <>
                          <div
                            className={` rounded-xl p-3 shadow-sm ${
                              value.isSent
                                ? "bg-primary text-primary-content"
                                : "bg-base-200"
                            }`}
                          >
                            <p className="text-sm">{value.content}</p>
                            <p
                              className={` text-[10px] mt-1.5${
                                value.isSent
                                  ? "text-primary-content/70 text-end"
                                  : "text-base-content/70 text-start"
                              }`}
                            >
                              12:20 PM
                            </p>
                          </div>
                        </>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-base-300 bg-base-100">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 text-sm h-10"
                        placeholder="Type a message..."
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 min-h-0">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

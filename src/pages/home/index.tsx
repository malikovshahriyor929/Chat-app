import No_selected from "../../components/no_selected";
import Selected from "../../components/selected";
import SideBar from "../../components/sibeBar";

import { useChatStore } from "../../store/useChatStore";

const Home = () => {
  const { selectedUser } = useChatStore();
  return (
    <section className="bg-base-200 h-[calc(100vh-4.12rem)] pt-7 ">
      <div className="bg-base-100 rounded-lg shadow-lg h-[calc(100vh-8rem)]   max-w-[1440px]  w-[90%] mx-auto ">
        <div className="flex relative h-full overflow-hidden duration-500 transition-all">
          <div
            className={`
              ${!selectedUser ? "max-[520px]:!w-full" : "max-[520px]:w-0 max-[520px]:opacity-0"}
              w-[400px] max-[760px]:w-[300px]  border-r border-base-300`}
          >
            <SideBar />
          </div>
          <div
            className={`
              w-full
              flex items-center justify-center
              ${
                !selectedUser
                  ? "max-[520px]:absolute top-0 max-[520px]:-z-10"
                  : "max-[520px]:absolute top-0 z-20 max-[520px]:size-full max-[520px]:bg-base-100 max-[520px]:rounded-lg "
              }
              `}
          >
            {!selectedUser ? <No_selected /> : <Selected />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

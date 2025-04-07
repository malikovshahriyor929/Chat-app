import No_selected from "../../components/no_selected";
import Selected from "../../components/selected";
import SideBar from "../../components/sibeBar";

import { useChatStore } from "../../store/useChatStore";

const Home = () => {
  const { selectedUser } = useChatStore();
  return (
    <section className="bg-base-200 h-[calc(100vh-4.12rem)] pt-7 ">
      <div className="bg-base-100 rounded-lg shadow-lg h-[calc(100vh-8rem)]   max-w-[1440px]  w-[90%] mx-auto ">
        <div className="flex h-full overflow-hidden">
          <div className="w-[400px]  border-r border-base-300">
            <SideBar />
          </div>
          {!selectedUser ? <No_selected /> : <Selected />}
        </div>
      </div>
    </section>
  );
};

export default Home;

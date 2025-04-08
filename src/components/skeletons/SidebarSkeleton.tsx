import { User } from "lucide-react";

const SidebarSkeleton = () => {
  return (
    <div  className="transition-all duration-200 mx-0  ">
      <div className="border-b border-base-300 w-full p-5 flex items-end gap-2">
        <User className="size-6" />
        <p className="font-medium block">Contacts</p>
      </div>
      <div>
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="w-full  p-3 flex items-center mr-auto gap-3 ">
            <div className="relative  lg:mx-0 ">
              <div className="skeleton size-12 rounded-full   " />
            </div>
            <div>
              <div className="skeleton w-32 h-4 mb-2" />
              <div className="skeleton h-3 w-16  " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;

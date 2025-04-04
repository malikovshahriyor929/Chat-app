import { FC } from "react";

interface AuthSkeletonType {
  title: string;
  subtitle: string;
}

const AuthSkeleton: FC<AuthSkeletonType> = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center h-screen  w-full  justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 ">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 mt-7">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthSkeleton;

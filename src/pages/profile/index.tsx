import { Camera, Mail, User } from "lucide-react";
import { useAuthUser } from "../../store/authUser";
import { defualtAvatar } from "../../utils";

const Profile = () => {
  const { authUser, isProfileFotoLoading, imageUpload } = useAuthUser();
  const hanfleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formdata: any = new FormData();
    formdata.append("image", file);
    imageUpload(formdata);
  };

  return (
    <div className="w-[90%]  h-[calc(100vh-5.4rem)]    mx-auto  max-w-[1440px]">
      <div className="mt-5 bg-base-300 w-[60%] max-[810px]:w-full mx-auto  rounded-lg p-6   space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-semibold ">Profile</h1>
          <p className="mt-2">Your profile information</p>
        </div>

        <div className="flex items-center flex-col   gap-4 w-full">
          <div className="relative ">
            <img
              src={authUser?.profilePic || defualtAvatar}
              alt="Profile image"
              className="size-32  rounded-full  object-cover object-center"
            />
            <label
              htmlFor="ProfileFoto"
              className={`
            absolute bottom-0 right-0 p-2 rounded-full
             cursor-pointer duration-200 transition-all 
               hover:scale-105 bg-accent-content 
             ${isProfileFotoLoading && "animate-pulse pointer-events-none"} 
              `}
            >
              <Camera size={25} className="text-base-200 " />
              <input
                type="file"
                disabled={isProfileFotoLoading}
                onChange={hanfleImageUpload}
                className="hidden"
                id="ProfileFoto"
              />
            </label>
          </div>
          <div className="text-center max-[400px]:text-sm">
            <p className="text-base-content/70">
              Click the camera icon to update your photo
            </p>
          </div>
        </div>
        <div className="space-y-3 px-10 max-[510px]:px-3">
          <div className=" space-y-2 ">
            <label className="label flex">
              <User size={20} />
              <span className="label-text "> Full Name</span>
            </label>
            <div className="relative  ">
              <input
                type="text"
                className="input input-bordered w-full "
                placeholder="Please enter your full name"
                value={authUser?.fullName}
                // onChange={(e) =>
                //   setFormValue({ ...formValue, fullName: e.target.value })
                // }
              />
            </div>
          </div>
          <div className=" space-y-2 ">
            <label className="label flex ">
              <Mail size={20} />
              <span className="label-text ">Email</span>
            </label>
            <div className="relative  ">
              <input
                type="text"
                className="input input-bordered w-full "
                placeholder="Please enter your email"
                value={authUser?.email}
                // onChange={(e) =>
                //   setFormValue({ ...formValue, fullName: e.target.value })
                // }
              />
            </div>
          </div>
        </div>
        <div className="px-10 max-[510px]:px-3 mx-auto py-5 ">
          <h1 className="text-2xl text-base-content/70 max-[340px]:text-xl">
            Account Information
          </h1>
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex justify-between  text-base-content/60 ">
              <p className="text-lg max-[310px]:text-[16px]">Member Since</p>
              <p className="max-[310px]:text-[14px]">
                {authUser?.createdAt
                  ? authUser?.createdAt.slice(0, 10)
                  : "0001-01-01"}
              </p>
            </div>
            <div className="h-0.5 w-full bg-base-content/70"></div>
            <div className="flex justify-between  text-base-content/60 ">
              <p className="text-lg max-[310px]:text-[16px]">Account Status</p>
              <p className="text-green-600 max-[310px]:text-[14px]">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

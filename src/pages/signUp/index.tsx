import { Eye, EyeOff, Loader, MessageSquare } from "lucide-react";
import AuthSkeleton from "../../components/auth-skeleton";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formValueType } from "../../@types";
import { useAuthUser } from "../../store/authUser";

const SignUp = () => {
const [showEye, setShowEye] = useState<boolean>(false);
const [formValue, setFormValue] = useState<formValueType>({
    fullName: "",
    email: "",
    password: "",
  });
const { isLoginLoading, signup } = useAuthUser();
const navigate = useNavigate();
const HandeleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(formValue, navigate);
  };
  return (
    <div className="  mx-auto  max-w-[1440px]">
      <div className="grid grid-cols-2 max-[1024px]:grid-cols-1  h-full max-[1024px]:h-screen  ">
        <div className="flex w-[60%] max-[560px]:w-[90%] mx-auto justify-center flex-col gap-5">
          <div className="flex flex-col items-center gap-3">
            <div className="text-primary bg-primary/10 rounded-lg p-2 ">
              <MessageSquare size={30} />
            </div>
            <h2 className="text-2xl max-[400px]:text-xl font-bold ">Create Account</h2>
            <p className="text-xl max-[400px]:text-[16px] text-base-content/60 font-medium   ">
              Get started with your free account
            </p>
          </div>
          <div>
            <form onSubmit={HandeleSubmit} className="flex flex-col gap-5">
              <div className="form-control space-y-2 ">
                <label className="label">
                  <span className="label-text ">Full Name</span>
                </label>
                <div className="relative  ">
                  <input
                    type="text"
                    className="input input-bordered w-full "
                    placeholder="Please enter your full name"
                    value={formValue.fullName}
                    onChange={(e) =>
                      setFormValue({ ...formValue, fullName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-control space-y-2 ">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <div className="relative  ">
                  <input
                    type="email"
                    className="input input-bordered w-full "
                    placeholder="your@example.com"
                    value={formValue.email}
                    onChange={(e) =>
                      setFormValue({ ...formValue, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-control space-y-2 ">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <div className="relative  ">
                  <input
                    type={!showEye ? "password" : "text"}
                    className="input input-bordered w-full "
                    placeholder="Please enter your full name"
                    value={formValue.password}
                    onChange={(e) =>
                      setFormValue({ ...formValue, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowEye(!showEye)}
                  >
                    {showEye ? (
                      <EyeOff className="text-base-content/60" />
                    ) : (
                      <Eye className="text-base-content/60" />
                    )}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4 ">
                {isLoginLoading ? (
                  <>
                    <Loader className="animate-spin  " />
                    Loading...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
            <div className="text-center mt-5">
              <p className="text-base-content/60">
                You have an account{" "}
                <Link className="link link-primary" to={"/sign-in"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <AuthSkeleton
          title="Welcome Back!"
          subtitle="Sign in to continue your conversations and catch up with your messages."
        />
      </div>
    </div>
  );
};

export default SignUp;

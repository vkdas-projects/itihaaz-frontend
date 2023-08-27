import { useForm } from "react-hook-form";
import "./Login.scss";
import img from "../../assets/Book lover-bro.svg";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/auth";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const { isLoading, data, login } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();
  const onSubmit = (data: { email: string; password: string }) => {
    login(data);
  };

  const navigate = useNavigate();
  let Element;
  useEffect(() => {
    if (data) {
      if (data.user !== null) {
        navigate("/admin/text-editor");
      }
    }
       //eslint-disable-next-line
  }, [data]);

  if (data === null)
    Element = (
      <div className="flex items-center max-w-6xl mx-auto h-[calc(100vh-120px)]">
        <form className="space-y-4 flex-1" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="text-3xl font-semibold">Welcome back !</div>
            <div className="text-xl">
              Please fill in your credentials to log in.
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email Address</label>
            <input
              className="px-4 py-2 rounded w-[60%]"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password">Password</label>
            <input
              className="px-4 py-2 rounded w-[60%]"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}{" "}
          <br />
          <button
            className="w-[60%] px-4 py-2 rounded bg-amber-500 text-white hover:scale-105 transition"
            type="submit"
          >
            {isLoading ? <ClipLoader size={12} color="white" /> : "Login"}
          </button>
        </form>

        <div className="flex-1">
          <img src={img} alt="india image" />
        </div>
      </div>
    );

  return Element;
};

export default Login;

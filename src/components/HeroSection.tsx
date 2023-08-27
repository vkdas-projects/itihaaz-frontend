import { useForm } from "react-hook-form";
import img from "../assets/Book lover-bro.svg";
import { useUserStore } from "../zustand/user";
import { ClipLoader } from "react-spinners";
import Popup from "reactjs-popup";
import {BiParty} from 'react-icons/bi'
const HeroSection = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const { createUserSubscriptionFunction, isLoading, data } = useUserStore();

  const onSubmit = (data: { email: string }) => {
    createUserSubscriptionFunction(data.email);
  };
  return (
    <div className="flex-col md:flex-row flex  md:h-[300px] justify-between items-center">
      <div className="w-full md:w-[50%] space-y-4">
        <div className="text-3xl md:text-5xl font-bold">
          {" "}
          History simplified !
        </div>
        <div className="text-xl">
          Discover stories and facts from all over the Nation, <br /> all at one
          place - <span className="website-name">Itihaaz.</span>
        </div>

        <div className=" md:hidden ">
          <img className="h-full" src={img} alt="india image" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col md:flex-row flex items-center space-y-4 md:space-x-4 md:space-y-0 w-full"
        >
          <input
            className={`${errors.email ? "border-red-500 outline-red-500" : ""}  px-4 py-2 rounded border w-full md:w-[75%]`}
            type="text"
            {...register("email", { required: true })}
            placeholder={`${errors.email ? "*Email is required":"Enter email"}`}
          />

          <button className="bg-black text-white px-4 py-2 rounded w-full md:w-min hover:scale-105 transition">
            {!isLoading ? "Subscribe" : <ClipLoader size={12} color="white" />}
          </button>
        </form>

        <div className="text-sm">
          Subscribe to our newsletter to get all our new content, delivered
          right to your email.
        </div>
      </div>
      <div className="hidden md:block h-full">
        <img className="h-full" src={img} alt="india image" />
      </div>
      <Popup
      modal
      open={data? true: false}
      >
        <div className="bg-white p-4 flex justify-center flex-col items-center gap-2 rounded shadow text-xl md:text-3xl">
          <div className=" text-amber-500">Thank You for subscribing !!</div>
          <div className="">{getValues("email")}</div>
        <div className=" text-red-500"><BiParty/></div>
        </div>
      </Popup>
    </div>
  );
};

export default HeroSection;

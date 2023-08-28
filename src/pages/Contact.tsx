import { useForm } from "react-hook-form";
import image from "../assets/Get in touch-pana.svg";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; message: string }>();
  const onSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data);
    
  };
  return (
    <div className="md:h-[calc(100vh-120px)] py-10 px-5 md:max-w-6xl mx-auto">
      <div className="flex-col flex md:flex-row h-full">
        <div className="flex-1 px-4 items-center justify-center flex flex-col h-full my-6">
          <div className="space-y-6 ">
            <div className="text-4xl font-semibold">How can we help?</div>
            <img src={image} alt="get-in-touch" className="md:hidden " />
            <div className="text-xl">
              Send us a message or question and we’ll help you as soon as we
              can.
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center space-y-4">
              <input
                className="px-4 py-2 rounded"
                placeholder="Name"
                {...register("name" , {
                  required: true
                })}
                type="text"
              />
               {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
              <input
                className="px-4 py-2 rounded"
                placeholder="Email address"
                {...register("email" , {
                  required: true
                })}
                type="text"
              />
                {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
              <textarea
                className="px-4 py-2 rounded"
                placeholder="Message"
                {...register("message" , {
                  required: true
                })}
                rows={4}
              />
                {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
              <button className="px-4 py-2 rounded bg-[#f8cb2e] text-white font-semibold hover:scale-105 transition">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 justify-center px-4 hidden md:flex">
          <img src={image} alt="get-in-touch" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

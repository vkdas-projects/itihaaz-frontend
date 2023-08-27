import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useCreateSnippetStore } from "../zustand/cards";
import { ChangeEvent, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsImage } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Resizable } from "re-resizable";
import { ClipLoader } from "react-spinners";
import axios from 'axios'

const EditorPage = () => {
  const { getSnippet, cardData } = useCreateSnippetStore();
  const [showIndex, setShowIndex] = useState(0);

  const Cards: Array<JSX.Element> = [];
  if (cardData?._id) {
    for (let i = 0; i < cardData.no_of_slides!; i++) {
      Cards.push(<Card index={i} key={i} showIndex={showIndex} />);
    }
  }
  const id = useParams().id!;
  useEffect(() => {
    getSnippet(id);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {Cards}
      <div className="hidden md:flex items-center  justify-center space-x-4 h-[80px]">
        <button
          disabled={showIndex === 0 && true}
          onClick={() => {
            setShowIndex(showIndex - 1);
          }}
          className={`bg-white hover:scale-125 border p-2  cursor-pointer transition`}
        >
          <BsChevronLeft />
        </button>
        <div className="w-16 text-center">
          <span>
            {showIndex + 1} / {cardData?.no_of_slides}
          </span>
        </div>
        <button
          disabled={
            cardData && cardData.no_of_slides! - 1 === showIndex ? true : false
          }
          onClick={() => {
            setShowIndex(showIndex + 1);
          }}
          className={`bg-white hover:scale-125 border p-2  cursor-pointer transition`}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EditorPage;

const Card = (props: { index: number; showIndex: number }) => {
  const { updateSnippet, cardData, isLoading } = useCreateSnippetStore();

  const { register, handleSubmit, setValue } = useForm<{
    heading: string;
    description: string;
  }>();

  // Set initial values
  useEffect(() => {
    if (cardData) {
      if (
        cardData.data[props.index] !== null ||
        cardData.data[props.index] !== undefined
      ) {
        setValue("heading", cardData.data[props.index]?.heading);
        setValue("description", cardData.data[props.index]?.description);
        setImageUrl(cardData.data[props.index]?.image_url);
        if (cardData.data[props.index]?.media_dimensions.height) {
          setHeight(
            Number(cardData.data[props.index]?.media_dimensions.height)
          );
        }
      }
    }
    //eslint-disable-next-line
  }, [cardData]);

  const [imgUrl, setImageUrl] = useState<string>();
  const [height, setHeight] = useState<number>(200);
  const handleImageSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const formData = new FormData()
      formData.append("file", e.target.files[0])
      formData.append("upload_preset", "xaeqzro8")
      axios.post("https://api.cloudinary.com/v1_1/dyunf0i7k/image/upload", formData).then((res)=>{
        setImageUrl(res.data.secure_url)
      })
    }
  };
  const onSubmit = async (data: { heading: string; description: string }) => {
    if (cardData) {
      cardData.data[props.index] = {
        heading: data.heading,
        description: data.description,
        image_url: imgUrl,
        media_dimensions: {
          height: height,
        },
      };
      updateSnippet(cardData);
    }
  };


  if (props.showIndex !== props.index) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative mt-[20px]">
      <div
        style={{
          height: "calc(100dvh - 220px) ",
        }}
        className={`border bg-white rounded mx-auto w-[350px] p-4  overflow-y-scroll`}
      >
        <TextareaAutosize
          placeholder="Enter heading"
          {...register("heading")}
          className="w-full border p-2 text-2xl font-semibold  whitespace-pre-wrap"
        />
        {imgUrl ? (
          <div className="relative my-2">
            <button
              onClick={() => setImageUrl(undefined)}
              className="absolute top-2 right-2 z-10 text-red-500 bg-white p-1 hover:scale-125 transition  rounded shadow"
            >
              <AiOutlineClose />
            </button>
            <Resizable
              defaultSize={{
                height: height,
                width: "100%",
              }}
              //eslint-disable-next-line no-unused-vars
              onResizeStop={(e, d, b, size) => {
                console.log(e, d, b);

                setHeight(height + size.height);
              }}
            >
              <img
                className="rounded object-cover h-full w-full"
                src={imgUrl}
                alt=""
              />
            </Resizable>
          </div>
        ) : (
          <div className="border p-2 rounded my-2 bg-amber-500 text-white  hover:scale-105 transition">
            <div className=" flex items-center gap-2 justify-center ">
              <BsImage />
              <label htmlFor="file-select" className=" cursor-pointer">
                Click here to upload image
              </label>
              <input
                id="file-select"
                onChange={(e) => {
                  handleImageSelect(e);
                }}
                className="p-4 border my-2 w-full hidden"
                type="file"
              />
            </div>
            <div className="text-center text-sm text-red-800">{`Please keep file size < 100kb.`}</div>
          </div>
        )}
        <TextareaAutosize
          minRows={5}
          placeholder="Enter description"
          {...register("description")}
          className="w-full border p-2  whitespace-pre-wrap"
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-amber-500 text-white absolute top-0 right-10  hover:scale-105 transition"
        >
          {isLoading ? <ClipLoader size={12} /> : "Save Current Card"}
        </button>
      </div>
    </form>
  );
};

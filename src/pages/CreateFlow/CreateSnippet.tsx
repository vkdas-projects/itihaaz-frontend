import { useEffect, useState } from "react";
import { useGetAllArticles } from "../../zustand/articles";
import { ClipLoader } from "react-spinners";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useCreateSnippetStore } from "../../zustand/cards";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate } from "react-router-dom";
import { CardData } from "../../types/articles";

const CreateSnippet = () => {
  const { data, fetchAllArticles, isLoading } = useGetAllArticles();
  useEffect(() => {
    fetchAllArticles && fetchAllArticles();
       //eslint-disable-next-line 
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm<CardData>();

  const { createSnippet } = useCreateSnippetStore();

  const onSubmit = async (data: CardData) => {
    console.log(data);
    
    const id = await createSnippet(data);
    navigate(`/admin/text-editor/${id}`);
  };

  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <ClipLoader />
      </div>
    );
  return (
    <div className="max-w-6xl mx-auto py-4 h-[calc(100vh-120px)]">
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">Snippets</div>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 rounded bg-amber-500 text-white  hover:scale-105 transition"
        >
          Create +
        </button>
      </div>

      <div className="space-y-4 my-4">
        {data &&
          data?.map((item) => {
            return <Card data={item} />;
          })}
      </div>

      <Popup modal open={openModal} closeOnDocumentClick={false}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 w-[420px] rounded shadow flex flex-col space-y-4"
        >
          <div className="flex justify-between items-center">
            <label htmlFor="title" className="text-xl">
              Enter Title
            </label>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="text-red-500 text-xl  hover:scale-125 transition"
            >
              <AiOutlineClose />
            </button>
          </div>
          <input
            type="text"
            {...register("title")}
            className="border p-2 text-xl rounded"
          />
          <label htmlFor="summary" className="text-xl">
            Enter Summary
          </label>
          <TextareaAutosize
            minRows={4}
            {...register("summary")}
            className="w-full border p-2"
          />
          <div className="flex items-center justify-between">
            <label htmlFor="no_of_slides" className="text-xl">
              Enter total number of slides
            </label>
            <input
              max={5}
              min={1}
              defaultValue={1}
              type="number"
              {...register("no_of_slides")}
              className="border p-2 text-xl rounded w-16"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="no_of_slides" className="text-xl">
              Select Category
            </label>
            <select className="p-2 border rounded" {...register("category")}>
              <option value="mythological">Mythological</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="no_of_slides" className="text-xl">
              Featured Article ?
            </label>
            <input 
            {...register("is_featured")}
            type="checkbox" className="p-4"/>
          </div>
          <input
            type="submit"
            className="bg-amber-500 px-4 py-2 rounded text-white font-semibold cursor-pointer hover:scale-105 transition"
          />
        </form>
      </Popup>
    </div>
  );
};

export default CreateSnippet;

const Card = (props: { data: CardData }) => {
  const navigate = useNavigate();
  const { deleteSnippet } = useCreateSnippetStore();
  return (
    <div className="flex justify-between bg-white p-4 rounded">
      <div className="">{props.data.title}</div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(`/admin/text-editor/${props.data._id}`)}
          className="text-xl hover:scale-125 transition"
        >
          <AiOutlineEdit />
        </button>
        <button
          onClick={() => deleteSnippet(props.data._id!)}
          className="text-xl text-red-500 hover:scale-125 transition"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

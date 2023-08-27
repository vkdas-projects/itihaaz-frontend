import { CardData } from "../types/articles";
import { useSnippetsStore } from "../zustand/articles";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import { Link } from "react-router-dom";

const SnippetsList = () => {
  useEffect(() => {
    fetchArticles && fetchArticles();
    // eslint-disable-next-line
  }, []);

  const { data: articles, fetchArticles, isLoading } = useSnippetsStore();

  const SnippetsComponent: Array<JSX.Element> = [];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const currentPosts = articles
    ?.filter((item: CardData) => {
      if (searchTerm === "") {
        return item;
      } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    })
    .slice(startIndex, endIndex);

  if (currentPosts && articles) {
    currentPosts?.forEach((res) => {
      SnippetsComponent.push(<SnippetListPrev data={res} />);
    });
  }

  const totalPages = articles && Math.ceil(articles?.length / 6);
  const [flag, setFlag] = useState(1);
  const paginate = (condition: string) => {
    if (articles) {
      if (condition === "left" && flag !== 1) {
        setFlag(flag - 1);
        setStartIndex(startIndex - 6);
        setEndIndex(endIndex - 6);
      }
      if (condition === "right" && flag !== totalPages) {
        setFlag(flag + 1);
        setStartIndex(startIndex + 6);
        setEndIndex(endIndex + 6);
      }
    }
  };

  if (isLoading)
    return (
      <div className="loader-container">
        <RiseLoader />
      </div>
    );
  return (
    <div className="space-y-4">
      <div className="flex flex-col  items-start md:grid md:grid-cols-3 md:items-center">
        <div className="flex justify-between w-full mb-2 md:mb-0">
          <div className="text-3xl font-bold">All Snippets</div>
          <div className="flex md:hidden  items-center  justify-center space-x-2">
            <div
              onClick={() => {
                paginate("left");
              }}
              className={`${
                flag === 1 ? "bg-slate-400" : "bg-white hover:scale-125 "
              } border p-2  cursor-pointer transition`}
            >
              <BsChevronLeft />
            </div>
            <div
              onClick={() => {
                paginate("right");
              }}
              className={`${
                flag === totalPages
                  ? "bg-slate-400"
                  : "bg-white hover:scale-125 "
              } border p-2  cursor-pointer transition`}
            >
              <BsChevronRight />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center  justify-center space-x-4">
          <div
            onClick={() => {
              paginate("left");
            }}
            className={`${
              flag === 1 ? "bg-slate-400" : "bg-white hover:scale-125 "
            } border p-2  cursor-pointer transition`}
          >
            <BsChevronLeft />
          </div>
          <div
            onClick={() => {
              paginate("right");
            }}
            className={`${
              flag === totalPages ? "bg-slate-400" : "bg-white hover:scale-125 "
            } border p-2  cursor-pointer transition`}
          >
            <BsChevronRight />
          </div>
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="py-2 px-4 rounded border w-full"
            type="text"
          />
        </div>
      </div>
      <div
        className={`${
          currentPosts?.length === 0 ? "md:grid-cols-1" : "md:grid-cols-2"
        } grid grid-cols-1   gap-4`}
      >
        {currentPosts?.length === 0 ? (
          <div className="h-[200px] text-red-500 w-full flex items-center justify-center font-semibold p-4 bg-white rounded">
            No Snippets available matching your term
          </div>
        ) : (
          SnippetsComponent
        )}
      </div>
    </div>
  );
};

export default SnippetsList;

const SnippetListPrev = (props: { data: CardData }) => {
  return (
    <Link
    state={{
      id: props.data._id,
    }}
    className="hover:scale-105 transition shadow"
    to={`/snippet/${props.data._id}`}
  >
  
    <div className="p-4 rounded bg-white flex space-x-4 justify-between">
      <div className="space-y-1 w-[70%]">
        <div className="text-md uppercase">{props.data.category}</div>
        <div className="text-lg font-bold">{props.data.title}</div>
        <div className="text-sm">{props.data.summary}</div>
      </div>
      <div className="w-[20%] flex items-center">
        <img
          className="h-[100px] rounded w-full object-cover"
          src={props.data.data[0]?.image_url}
          alt=""
        />
      </div>
    </div>
    </Link>
  );
};

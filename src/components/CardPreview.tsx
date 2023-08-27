import { AiFillRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CardData } from "../types/articles";
import { RiSlideshow3Line } from "react-icons/ri";

const CardPreview = (props: { index: number; data: CardData }) => {
  const colors: Array<{
    bgColor: string;
    textColor: string;
  }> = [
    {
      bgColor: "#53BF9D",
      textColor: "#000000",
    },
    {
      bgColor: "#F8CB2E",
      textColor: "#000000",
    },
    {
      bgColor: "#FF6FB5",
      textColor: "#000000",
    },
    {
      bgColor: "#000000",
      textColor: "#FFFFFF",
    },
    {
      bgColor: "#F8CB2E",
      textColor: "#000000",
    },
    {
      bgColor: "#FF6FB5",
      textColor: "#000000",
    },
    {
      bgColor: "#FF6FB5",
      textColor: "#000000",
    },
    {
      bgColor: "#FF6FB5",
      textColor: "#000000",
    },
  ];

  const PreviewData = (
    <div
      style={{
        background: colors[props.index].bgColor,
        color: colors[props.index].textColor,
      }}
      className="p-4 rounded space-y-1 flex flex-col justify-between"
    >
      <div className="space-y-1">
        <div className="text-md uppercase">{props.data.category}</div>
        <div
          style={{
            color: colors[props.index].textColor,
          }}
          className="text-xl font-bold"
        >
          {props.data.title}
        </div>
        <img
          className="rounded object-cover h-[150px] w-full"
          src={props?.data?.data[0]?.image_url}
          alt=""
        />
        <div className="text-sm py-1">{props.data.summary}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
        
          <div className="text-xl font-bold">{props.data.data.length}</div>
          <RiSlideshow3Line />
        </div>
        <Link
          state={{
            id: props.data._id,
          }}
          className="text-3xl hover:scale-125 transition"
          to={`/snippet/${props.data._id}`}
        >
          <AiFillRightCircle className="icon" />
        </Link>
      </div>
    </div>
  );

  return PreviewData;
};

export default CardPreview;

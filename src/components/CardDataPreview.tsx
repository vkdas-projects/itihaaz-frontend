import "../styles/CardDataPreview.scss";
import "../styles/Themes.scss";
import "react-quill/dist/quill.bubble.css";
import { CardData, CardDataMedia } from "../types/articles";
import { useEffect } from "react";
import { useSelectedCardStore } from "../zustand/extras";
import { RiSlideshow3Line } from "react-icons/ri";
import { useRef } from "react";

const CardDataPreview = (props: {
  data: CardDataMedia;
  colorTheme: string;
  cardData: CardData;
  index: number;
}) => {
  const { setSelectedImage, selectedCardIndex } = useSelectedCardStore();
  useEffect(() => {
    if (props.index === selectedCardIndex) {
      setSelectedImage(props?.data?.image_url);
    }
    //eslint-disable-next-line
  }, [props?.data?.image_url, selectedCardIndex]);

  let Element: JSX.Element;

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTo(0, 0);
    }
  }, [props]);

  // Convert Text
  const boldTextRegExp = new RegExp(/\*\*(.*?)\*\*/gm);
  function convertText(value: string) {
    return value.replace(boldTextRegExp, "<strong>$1</strong>");
  }

  if (props?.index !== 0) {
    Element = (
      <div
        ref={windowRef}
        style={{
          height: "calc(100dvh - 80px)",
        }}
        className={`card-data-preview-container ${props?.colorTheme} hidescroll space-y-4`}
      >
        <div className="heading leading-8  whitespace-pre-wrap">
          {props?.data?.heading}
        </div>
        <div className="image-container">
          <img
            style={{
              height: `${props?.data?.media_dimensions?.height}px`,
            }}
            src={props?.data?.image_url}
            alt="image"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: convertText(props?.data?.description),
          }}
        className=" whitespace-pre-wrap pb-8">
        </div>
      </div>
    );
  } else {
    Element = (
      <div
        style={{
          height: "calc(100dvh - 80px)",
        }}
        className={`card-data-preview-container ${props.colorTheme} hidescroll`}
      >
        <div className="flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between">
            <div>
              {" "}
              <div className="heading leading-8  whitespace-pre-wrap">
                {props.data.heading}
              </div>
            </div>
            <div className="flex items-center text-2xl gap-2 border p-2 rounded bg-red-500 text-white">
              {props.cardData.data.length}
              <RiSlideshow3Line />
            </div>
          </div>
          <div className="image-container">
            <img
              style={{
                height: `${props?.data?.media_dimensions?.height}px`,
                objectFit: "cover",
              }}
              src={props.data.image_url}
              alt="image"
            />
          </div>
          <div
          dangerouslySetInnerHTML={{
            __html: convertText(props?.data?.description),
          }}
        className=" whitespace-pre-wrap pb-8">
        </div>
        </div>
      </div>
    );
  }

  return Element;
};

export default CardDataPreview;

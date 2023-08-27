import { useEffect} from "react";
import SwiperComponent from "../components/SwiperComponent";
import "../styles/Snippets.scss";
import { useLocation } from "react-router-dom";
import { useSelectedCardStore } from "../zustand/extras";
import { useSingleArticleStore } from "../zustand/articles";
import { RiseLoader } from "react-spinners";

const Snippet = () => {
  const location = useLocation();
  const { data } = useSelectedCardStore();
  const { data: cardData, fetchSingleArticle, isLoading } = useSingleArticleStore();

  useEffect(() => {
    fetchSingleArticle(location.state.id);
    //eslint-disable-next-line
  }, []);

  let Element;
  console.log(cardData);
  if(isLoading){
    Element =  <div className="loader-container">
    <RiseLoader />
  </div>
  }
  if (!isLoading)
    Element = (
      <>
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%;",
            backgroundImage: `url(${data})`,
            opacity: 0.7,
            height: "100%",
          }}
          className="absolute w-full top-0 -z-10"
        ></div>
        <SwiperComponent  />
      </>
    );

  return (
    <div
      style={{
        height: "100%",
      }}
      className="flex items-center w-full overflow-hidden "
    >
      {Element}
    </div>
  );
};

export default Snippet;

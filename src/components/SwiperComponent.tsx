import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper/modules";
import "../styles/SwiperComponent.scss";
import "swiper/css/bundle";
import CardDataPreview from "./CardDataPreview";
import { useSingleArticleStore } from "../zustand/articles";
import { useSelectedCardStore } from "../zustand/extras";

const BtyeStacked = () => {
  const { data: cardData } = useSingleArticleStore((state) => state);

  const { setSelectedCardIndex } = useSelectedCardStore();

  const SwiperSlideComponent: Array<JSX.Element> = [];

  if (cardData) {
    cardData.data.map((data, index: number) => {
      SwiperSlideComponent.push(
        <SwiperSlide>
          <CardDataPreview
            index={index}
            data={data}
            colorTheme={cardData.color_theme}
            cardData={cardData}
          />
        </SwiperSlide>
      );
    });
  }

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      // mousewheel={true}
      modules={[Pagination, EffectCards]}
      className="stackedCard-swiper w-[calc(100vw-20px)] md:w-[450px] mt-[10px]"
      pagination={{
        dynamicBullets: true,
      }}
      onSlideChange={(swiperData) =>
        setSelectedCardIndex(swiperData.activeIndex)
      }
    >
      {SwiperSlideComponent}
    </Swiper>
  );
};

export default BtyeStacked;

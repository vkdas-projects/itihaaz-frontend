import { RiseLoader } from "react-spinners";
import { useFeaturedSnippetsStore } from "../zustand/articles";
import CardPreview from "./CardPreview";
import { useEffect } from "react";

const FeaturedSection = () => {
  useEffect(() => {
    fetchFeaturedArticles && fetchFeaturedArticles();
    // eslint-disable-next-line
  }, []);

  const {
    data: articles,
    fetchFeaturedArticles,
    isLoading,
  } = useFeaturedSnippetsStore();

  const SnippetsComponent: Array<JSX.Element> = [];
  if (articles !== null) {
    articles.forEach((res, idx: number) => {
      SnippetsComponent.push(
        <CardPreview index={idx} data={res} key={res._id} />
      );
    });
  }

  if (isLoading)
    return (
      <div className="loader-container">
        <RiseLoader />
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="text-3xl font-bold">Featured Snippets</div>
      <div className="grid grid-cols-1  md:grid-cols-4 space-y-4 md:space-x-4 md:space-y-0">
        {SnippetsComponent}
      </div>
    </div>
  );
};

export default FeaturedSection;

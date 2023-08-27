import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import SnippetsList from "../components/SnippetsList";

const Homepage = () => {
  return (
    // <TextEditor/>
    <div className="max-w-xs sm:max-w-xl md:max-w-6xl  space-y-8 mx-auto py-6 md:my-0 min-h-[calc(100vh-120px)]">
      <HeroSection />
      <FeaturedSection />
      <SnippetsList />
    </div>
  );
};

export default Homepage;

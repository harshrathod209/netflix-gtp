import GptSearchBar from "../gptSearch/GptSearchBar";
import GptMovieSuggestions from "../gptSearch/GptMovieSuggestions";
import { NETFLIX_BACKGROUND_IMG_URL } from "../../../utils/constants/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          alt="background-image"
          src={NETFLIX_BACKGROUND_IMG_URL}
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;

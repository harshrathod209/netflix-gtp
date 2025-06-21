import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gtpQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Hungama";
    // Make an API call to GPT API to get the movie results
    const gptResults = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "developer", content: gtpQuery }],
    });
    console.log("gptResults", gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 rounded-lg col-span-9"
          type="text"
          ref={searchText}
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 rounded-lg py-2 px-4 m-4 bg-red-700 text-white">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

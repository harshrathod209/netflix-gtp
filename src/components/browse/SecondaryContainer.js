import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-64 pl-4 md:pl-12 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

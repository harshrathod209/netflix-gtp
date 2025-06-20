import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState([]);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const nowPayingMoviesData = await data.json();
    dispatch(addNowPlayingMovies(nowPayingMoviesData.results));
    setNowPlayingMoviesData(nowPayingMoviesData.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return nowPlayingMoviesData;
};

export default useNowPlayingMovies;

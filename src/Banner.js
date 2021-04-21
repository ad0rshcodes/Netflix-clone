import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";


function Banner({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const movieClicked = (moviename) => {
    console.log(moviename);
    if (trailerUrl !== "") setTrailerUrl("");
    else {
      movieTrailer(moviename)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchMovie();
  }, []);
  console.log(movie);
  const [webkit, setWebkit] = useState(false);

   const descWebkitHandler = () => {
   setWebkit(!webkit)
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${ base_url }${ movie?.backdrop_path }')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
          {movie?.name || movie?.title || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={() =>
              movieClicked(movie.name || movie.title || movie.orginal_name)
            }>Play</button>
          <button className="banner__button" onClick={descWebkitHandler}>More Info</button>
        </div>
        <p className={`banner__description ${webkit && 'webkit_disable'}`}>{movie?.overview}</p>
      </div>
      <div className="banner--fadeBottom">
      {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
      </div>
    </header>
  );
}

export default Banner;

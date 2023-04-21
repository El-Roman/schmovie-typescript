import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./components/movieContext";
import { InputText } from "primereact/inputtext";

import Gallery from "./components/gallery";
import SideBar from "./components/sideBar";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [movieClicked, setMovieClicked] = useState(false);

  const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=";
  const FEAT_API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const API_KEY = "7b627fa55bf0652f8c45e9da6e8199d1";

  async function fetchFeaturedMovies() {
    const response = await fetch(
      `${FEAT_API_URL}${API_KEY}&sort_by=popularity.desc`
    );
    const data = await response.json();
    setMovies(data.results);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setSelectedMovie(data.results[randomIndex]);
  }

  // async function fetchAMovie() {
  //   const response = await fetch(`${API_URL}${API_KEY}&query=${query}`);
  //   const data = await response.json();
  //   setMovies(data.results);
  //   setSelectedMovie(data.results[0]);
  // }

  // useEffect(() => {
  //   if (query !== "") {
  //     fetchAMovie();
  //   } else {
  //     fetchFeaturedMovies();
  //   }
  // }, [query]);

  const fetchAMovie = useCallback(async () => {
    const response = await fetch(`${API_URL}${API_KEY}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
    setSelectedMovie(data.results[0]);
  }, [query]);

  useEffect(() => {
    if (query !== "") {
      fetchAMovie();
    } else {
      fetchFeaturedMovies();
    }
  }, [query, fetchAMovie]);

  return (
    <div className="App">
      <MovieContext.Provider value={{ movies }}>
        <SideBar query={query} setQuery={setQuery} />

        <header id="header" className="mb-2 mx-5">
          <div className="d-flex align-items-center justify-content-between">
            {/* <h3 className='text-white'>SHMOVIE FANATICS</h3> */}
            <a href="/">
              <img
                className="logo"
                src="https://media-private.canva.com/ADwn8/MAFghEADwn8/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230421%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230421T002509Z&X-Amz-Expires=19894&X-Amz-Signature=0adc59afcf6a893d961af662ee59a6c76bdf645ab228b2e553dc019090ec2b75&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2021%20Apr%202023%2005%3A56%3A43%20GMT"
                alt="logo"
              />
            </a>
            <span className="p-float-label p-input-icon-left mb-3">
              <i className="pi pi-search" />
              <InputText
                id="lefticon"
                value={query}
                setQuery={setQuery}
                onChange={(e) => setQuery(e.target.value)}
              />
              <label htmlFor="lefticon">Search for a movie</label>
            </span>
          </div>
        </header>

        {selectedMovie ? (
          <Banner selectedMovie={selectedMovie} movieClicked={movieClicked} />
        ) : null}

        <div id="gallery">
          <Gallery setMovieClicked={setMovieClicked} />
        </div>

        <Footer />
      </MovieContext.Provider>
    </div>
  );
}

export default App;

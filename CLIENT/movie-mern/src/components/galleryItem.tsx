import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import "../index.css";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

export default function GalleryItem() {

  const movies = useContext<Movie[]>(MovieContext);

  function HandleClick() {
    window.scroll(0, 0);
  }
  type DateOptions = {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "short";
    day?: "numeric" | "2-digit";
  };

  const dateOptions: DateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-stretch">
      {movies.map((movie: any) => (
        <div
          key={movie.id}
          className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-1"
        >
          <div className="card bg-dark text-white border-secondary d-flex flex-column h-100">
            <img
              className="card-img-top flex-grow-1"
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-white">{movie?.title}</h5>
              <p className="card-text text-secondary">
                {new Date(movie?.release_date).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}
              </p>
              <Link to={`/movies/${movie?.id}`}>
                <button
                  className="btn btn-outline-light mt-2"
                  onClick={HandleClick}
                >
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
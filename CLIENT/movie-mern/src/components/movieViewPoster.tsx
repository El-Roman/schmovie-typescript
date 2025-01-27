import React from "react";

export default function MovieViewPoster({ movie }: { movie: any }) {
  return (
    <div className="col-lg-4">
      {/* <!-- Movie content--> */}
      <div>
        {/* <!-- Movie poster--> */}
        <div className="flex-container">
          <figure className="mb-4 flex-child">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
              className="movie-img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaStar } from "react-icons/fa";

export default function HeaderGenre({ movie }: { movie: any }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <a href="#!" className="no-underline">
          <ul className="flex flex-wrap justify-center">
            {movie?.genres?.map((genre: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
              <li
                className={`px-2 py-1 mr-2 bg-secondary text-light rounded-md ${
                  movie?.genres?.length < 2 ? "mx-auto" : ""
                }`}
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </a>
      </div>
      <div>
        {movie?.vote_average !== 0 && (
          <h2 className="flex items-center" style={{ color: "gold" }}>
            <span className="p-2">
              <FaStar />
            </span>
            {movie?.vote_average?.toFixed(2)}
          </h2>
        )}
      </div>
    </div>
  );
}

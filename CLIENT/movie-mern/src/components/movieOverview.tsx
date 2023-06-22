import React from "react";

export default function MovieOverView({ movie }: { movie: any }) {
  return (
    <div className="card mb-4">
      <div className="card-header">Description</div>
      <div className="card-body">
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
}

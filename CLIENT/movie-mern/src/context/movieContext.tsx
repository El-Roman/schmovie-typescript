import React from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  // Add other properties if needed
}

// interface MovieContextType {
//   movies: Movie[];
// }
export const MovieContext = React.createContext<Movie[]>([]);
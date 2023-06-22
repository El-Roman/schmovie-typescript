import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="text-center py-4">
        <p className="text-white">
          &copy; {new Date().getFullYear()} SHMOVIE FANATICS {""}
        </p>
        <a
          href="https://github.com/hunnerrose/Movie-MERN"
          className="flex items-center text-white hover:text-gray-400 focus:text-gray-400"
        >
          <FaGithub className="mx-auto" size={25} />
        </a>
      </div>
    </footer>
  );
}

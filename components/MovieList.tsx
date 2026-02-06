import React, { useState, useEffect } from "react";
import { Movie } from "@/data/movies";
import MovieCard from "@/components/MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface MovieListProps {
  title: string;
  movies: Movie[];
  onMovieClick: (id: string) => void;
}

const MovieList = ({ title, movies, onMovieClick }: MovieListProps) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ITEMS_VISIBLE = 4;
  const extendedMovies = [...movies, ...movies.slice(0, ITEMS_VISIBLE)];
  const totalSlides = movies.length;

  const slideRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => {
      if (prev + 1 >= extendedMovies.length) return 0;
      return prev + 1;
    });
  };

  const slideLeft = () => {
    if (isTransitioning || index === 0) return;
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index === totalSlides) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500);
    } else if (isTransitioning) {
      timeout = setTimeout(() => setIsTransitioning(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [index, totalSlides, isTransitioning]);

  return (
    <section className="mb-12 group/list relative">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-2xl font-bold text-gray-100 border-l-4 border-red-600 pl-3">
          {title}
        </h2>
        <div className="hidden md:flex gap-1">
          {movies.map(
            (_, i) =>
              i % 4 === 0 && (
                <div
                  key={i}
                  className={`h-1 w-3 rounded-full transition-all duration-300 ${
                    Math.floor((index % totalSlides) / 4) === i / 4
                      ? "bg-red-600"
                      : "bg-gray-800"
                  }`}
                />
              ),
          )}
        </div>
      </div>

      <div className="relative">
        <button
          onClick={slideLeft}
          disabled={index === 0 || isTransitioning}
          className={`absolute left-0 top-0 bottom-0 z-40 bg-black/60 hover:bg-black/80 w-12 flex items-center justify-center transition-all duration-300 border-r border-white/10
            ${index === 0 ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/list:opacity-100"}`}
        >
          <FaChevronLeft size={24} className="text-white" />
        </button>

        <div className="overflow-hidden -mx-2">
          <div
            className="flex will-change-transform"
            style={{
              transition: isTransitioning
                ? "transform 500ms ease-in-out"
                : "none",
              transform: `translateX(-${index * (100 / ITEMS_VISIBLE)}%)`,
              backfaceVisibility: "hidden",
              perspective: "1000px",
            }}
          >
            {extendedMovies.map((movie, i) => (
              <div
                key={`${movie.id}-${i}`}
                className={`w-1/4 shrink-0 px-2 flex ${isTransitioning ? "pointer-events-none" : ""}`}
              >
                <MovieCard movie={movie} onClick={onMovieClick} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={slideRight}
          disabled={isTransitioning}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/60 hover:bg-black/80 w-12 flex items-center justify-center opacity-0 group-hover/list:opacity-100 transition-opacity duration-300 border-l border-white/10 disabled:cursor-not-allowed"
        >
          <FaChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default MovieList;

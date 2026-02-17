"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Movie } from "@/data/movies";
import MovieCard from "@/components/MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!movies || movies.length === 0) return null;

  const isAtStart = currentIndex === 0;

  return (
    <section className="mb-12 group/list relative">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2
          id={`category_title_${title}`}
          className="text-2xl font-bold text-gray-100 border-l-4 border-red-600 pl-3"
        >
          {title}
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={scrollPrev}
          disabled={isAtStart}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/60 hover:bg-black/80 w-12 flex items-center justify-center transition-all duration-300 border-r border-white/10 opacity-0 group-hover/list:opacity-100 disabled:opacity-0"
        >
          <FaChevronLeft size={24} className="text-white" />
        </button>

        <div className="overflow-hidden mx-2" ref={emblaRef}>
          <div className="flex will-change-transform backface-hidden">
            {movies.map((movie) => (
              <div key={movie.id} className="w-1/4 shrink-0 grow-0 px-2 flex">
                <Link
                  href={`/movie/${movie.id}`}
                  className="w-full block h-full"
                >
                  <MovieCard movie={movie} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/60 hover:bg-black/80 w-12 flex items-center justify-center transition-all duration-300 border-l border-white/10 opacity-0 group-hover/list:opacity-100"
        >
          <FaChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default MovieList;

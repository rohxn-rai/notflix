"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MovieCard from "@/components/MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MovieProps } from "@/types/movies";

interface MovieListComponentProps {
  title: string;
  movies: MovieProps[];
}

const MovieList = ({ title, movies }: MovieListComponentProps) => {
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

  const isAtStart = currentIndex === 0;

  return (
    <section
      id={`movie_section_${title}`}
      className={`${movies.length !== 0 && "mb-12"} group/list relative`}
    >
      {movies.length !== 0 && (
        <>
          <div className="flex items-center justify-between mb-4">
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
                  <div
                    key={movie.entity_id}
                    className="w-1/4 shrink-0 grow-0 px-2 flex"
                  >
                    <Link
                      href={`/movie/${movie.entity_id}`}
                      replace
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
        </>
      )}
    </section>
  );
};

export default MovieList;

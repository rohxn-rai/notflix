"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MovieCard from "@/components/MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MovieProps } from "@/types/movies";

interface MovieListComponentProps {
  title: string[];
  movies: MovieProps[];
  targetEventName?: string;
}

const MovieList = ({
  title,
  movies: initialMovies,
  targetEventName,
}: MovieListComponentProps) => {
  const [movies, setMovies] = useState<MovieProps[]>(initialMovies);

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

  useEffect(() => {
    if (!targetEventName) return;
    console.log("🎬 MovieList Listener Active for:", targetEventName);

    const handleTargetData = (event: CustomEvent) => {
      const rawData = event.detail;
      console.log("📦 Event Received:", event.detail);

      if (rawData && Array.isArray(rawData)) {
        const formattedMovies: MovieProps[] = rawData.map((item: any) => ({
          entity_id: item.entity_id,
          entity_name: item.entity_name,
          entity_categoryid: item.entity_categoryid,
          entity_imageurl: item.entity_imageurl,
          entity_colorId: item.entity_colorid || "bg-gray-800",
          entity_synopsis: item.entity_synopsis,
          entity_ratingmpaa: item.entity_ratingmpaa,
        }));

        console.log("✅ Setting Movies State:", formattedMovies);
        setMovies(formattedMovies);
      }
    };

    window.addEventListener(targetEventName, handleTargetData as EventListener);
    return () => {
      window.removeEventListener(
        targetEventName,
        handleTargetData as EventListener,
      );
    };
  }, [targetEventName]);

  const isAtStart = currentIndex === 0;

  return (
    <section
      id={`movie_section_${title.join("_")}`}
      className={`${movies.length !== 0 ? "mb-12" : "hidden"} group/list relative mboxDefault`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2
          id={`category_title_${title.join("_")}`}
          className="text-2xl font-bold text-gray-100 border-l-4 border-red-600 pl-3 capitalize"
        >
          {title.join(" ")}
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

        <div className="overflow-hidden px-2" ref={emblaRef}>
          <div className="flex -ml-2 will-change-transform backface-visible">
            {movies.map((movie) => (
              <div
                key={movie.entity_id}
                className="lg:w-1/4 md:w-1/3 w-1/2 shrink-0 grow-0 pl-4 flex"
              >
                <Link
                  href={`/movie/${movie.entity_id}`}
                  replace
                  className="w-full block h-full movie_link"
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

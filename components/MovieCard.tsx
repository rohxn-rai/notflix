"use client";

import { useState } from "react";
import Image from "next/image";
import { MovieProps } from "@/types/movies";

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group/card cursor-pointer bg-gray-900 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 border border-gray-800 h-full flex flex-col">
      <div
        className={`h-56 w-full relative ${movie.entity_colorId} shrink-0 flex items-center justify-center overflow-hidden`}
      >
        <div
          className="mboxDefault relative h-full w-full"
          id={`mbox-movie-${movie.entity_id}`}
          data-mbox="movie-card-offer"
          data-movieid={movie.entity_id}
        >
          {imageError ? (
            <span className="text-4xl font-black text-white/20 group-hover/card:text-white/40 transition-colors absolute z-0">
              {movie.entity_name.substring(0, 2).toUpperCase()}
            </span>
          ) : (
            <Image
              src={movie.entity_imageurl}
              alt={movie.entity_name}
              fill
              sizes="10"
              loading="eager"
              className="object-cover z-10 opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-500"
              onError={() => setImageError(true)}
            />
          )}
          {movie.entity_ratingmpaa && (
            <span className="absolute text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-400 border border-gray-700 whitespace-nowrap z-11 top-4 right-2">
              {movie.entity_ratingmpaa}
            </span>
          )}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent z-20"></div>
      </div>

      <div className="p-6 relative z-30 bg-gray-900 grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3
            id={`title_${movie.entity_name}`}
            className="font-bold text-lg group-hover/card:text-red-400 transition-colors line-clamp-1"
          >
            {movie.entity_name}
          </h3>
          <span
            id={`category_${movie.entity_name}`}
            className="text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-400 border border-gray-700 whitespace-nowrap ml-2"
          >
            {movie.entity_categoryid}
          </span>
        </div>
        <p
          id={`synopsis_${movie.entity_name}`}
          className="text-sm text-gray-500 line-clamp-3"
        >
          {movie.entity_synopsis}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

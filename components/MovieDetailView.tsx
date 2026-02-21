"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar, FaArrowLeft } from "react-icons/fa6";
import { MovieProps, ReviewProps } from "@/types/movies";

interface MovieDetailViewProps {
  movie: MovieProps;
  review: ReviewProps[];
  currentUser?: string;
}

const MovieDetailView = ({
  movie,
  review,
  currentUser = "Guest",
}: MovieDetailViewProps) => {
  const [reviews, setReviews] = useState<ReviewProps[]>(review || []);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [imageError, setImageError] = useState(false);

  const canComment = currentUser && currentUser !== "Guest";

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canComment || !newComment.trim()) return;

    const newReview: ReviewProps = {
      review_id: Date.now().toString(),
      entity_id: movie.entity_id,
      user_name: currentUser,
      review_content: newComment,
      rating_score: newRating,
    };

    setReviews([newReview, ...reviews]);
    setNewComment("");
    setNewRating(5);
  };

  return (
    <div
      className={`min-h-screen bg-gray-950 text-white relative isolate Movie_Detail_Page movie_detail_${movie.entity_id}`}
    >
      <div className="absolute top-0 left-0 right-0 h-screen z-0">
        {!imageError && (
          <Image
            src={movie.entity_imageurl}
            alt={movie.entity_name}
            fill
            className="object-cover opacity-65"
            onError={() => setImageError(true)}
            priority
          />
        )}
        {imageError && (
          <div className={`w-full h-full ${movie.entity_colorId}`} />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-black/30"></div>
      </div>

      <Link
        href="/"
        replace
        className="fixed top-32 left-6 z-50 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all font-bold border border-white/10 group flex items-center gap-2"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>

      <div className="relative z-10 flex flex-col pt-[45vh] px-4 pb-24">
        <div className="max-w-4xl mx-auto w-full mb-8 animate-in slide-in-from-bottom-10 fade-in duration-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-600/90 backdrop-blur text-white px-3 py-1 rounded text-sm font-bold tracking-wider uppercase shadow-lg">
              {movie.entity_categoryid}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mt-2 leading-tight drop-shadow-2xl">
            {movie.entity_name}
          </h1>
        </div>

        <div className="flex flex-col gap-12 bg-gray-900/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl max-w-4xl mx-auto w-full animate-in slide-in-from-bottom-20 fade-in duration-1000 delay-100">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-100 flex items-center gap-2">
              Synopsis
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light border-l-4 border-red-600 pl-6 py-1">
              {movie.entity_synopsis}
            </p>
          </section>

          {canComment ? (
            <section className="bg-black/40 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">
                Leave a Review
              </h3>
              <form onSubmit={handleSubmitReview}>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="text-2xl focus:outline-none transition-transform hover:scale-110 active:scale-95"
                    >
                      {star <= newRating ? (
                        <FaStar className="text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-gray-600" />
                      )}
                    </button>
                  ))}
                </div>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={`What did you think, ${currentUser}?`}
                  className="w-full bg-gray-800 text-white rounded-lg p-4 border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none h-28 placeholder-gray-500"
                  required
                />
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg transition-colors shadow-lg shadow-red-900/20"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            </section>
          ) : (
            <section className="p-6 rounded-xl border border-gray-700 bg-gray-800/50 text-center">
              <p className="text-gray-400 italic">
                Please{" "}
                <Link
                  href="/login"
                  replace
                  className="text-red-500 font-bold hover:underline"
                >
                  Sign In
                </Link>{" "}
                to leave a review.
              </p>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
              User Reviews
              <span className="text-sm font-bold text-gray-300 bg-gray-800 px-2 py-1 rounded-md">
                {reviews.length}
              </span>
            </h2>

            <div className="space-y-4 max-h-125 overflow-y-auto pr-2 custom-scrollbar">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    key={review.review_id}
                    className="bg-gray-950/50 p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex justify-between mb-3 items-center">
                      <span className="font-bold text-red-400 text-lg">
                        {review.user_name}
                      </span>
                      <div className="flex text-yellow-500 text-sm gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            {i < review.rating_score ? (
                              <FaStar />
                            ) : (
                              <FaRegStar className="text-gray-700" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed">
                      "{review.review_content}"
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  No reviews yet. Be the first to share your thoughts!
                </div>
              )}
            </div>
          </section>

          <section>
            <div
              className="mboxDefault"
              id="mbox-bad-offer"
              data-id="mbox-bad-offer"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailView;

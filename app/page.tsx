"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MOVIE_DB } from "@/data/movies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import MovieDetailView from "@/components/MovieDetailView";
import LoginView from "@/components/LoginView";

function MovieApp() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string>("");
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const cookieUser = getCookie("notflix_user");

    if (cookieUser) {
      setUser(cookieUser);
      setIsAuthenticated(true);
    }

    setIsLoadingAuth(false);
  }, []);

  const handleLogin = (username: string, isGuest: boolean) => {
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `notflix_user=${username}; expires=${date.toUTCString()}; path=/`;

    setUser(username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    document.cookie =
      "notflix_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
    setUser("");
    router.refresh();
  };

  const horrorMovies = MOVIE_DB.filter((m) => m.category === "Horror");
  const scifiMovies = MOVIE_DB.filter((m) => m.category === "Sci-Fi");
  const romanceMovies = MOVIE_DB.filter((m) => m.category === "Romance");
  const actionMovies = MOVIE_DB.filter((m) => m.category === "Action");
  const comedyMovies = MOVIE_DB.filter((m) => m.category === "Comedy");
  const animationMovies = MOVIE_DB.filter((m) => m.category === "Animation");

  const trendingMovies = [
    horrorMovies[0],
    scifiMovies[0],
    animationMovies[7],
    actionMovies[1],
    romanceMovies[1],
    actionMovies[6],
    comedyMovies[6],
    animationMovies[0],
  ];

  const movieId = searchParams.get("movie");
  const selectedMovie = MOVIE_DB.find((m) => m.id === movieId);
  const openMovie = (id: string) => router.push(`/?movie=${id}`);
  const closeMovie = () => router.back();

  if (isLoadingAuth)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );

  if (!isAuthenticated) return <LoginView onLogin={handleLogin} />;

  if (selectedMovie) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col font-sans">
        <MovieDetailView
          movie={selectedMovie}
          onBack={closeMovie}
          currentUser={user}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col font-sans">
      <div className="grow">
        <Header username={user} onLogout={handleLogout} />
        <div className="p-8 max-w-7xl mx-auto w-full">
          <MovieList
            title="Trending Now"
            movies={trendingMovies}
            onMovieClick={openMovie}
          />
          <MovieList
            title="Sci-Fi & Cyberpunk"
            movies={scifiMovies}
            onMovieClick={openMovie}
          />
          <MovieList
            title="Horror & Thriller"
            movies={horrorMovies}
            onMovieClick={openMovie}
          />
          <MovieList
            title="Animated Masterpieces"
            movies={animationMovies}
            onMovieClick={openMovie}
          />
          <MovieList
            title="Laugh Out Loud"
            movies={comedyMovies}
            onMovieClick={openMovie}
          />
          <MovieList
            title="High Octane Action"
            movies={actionMovies}
            onMovieClick={openMovie}
          />
          <MovieList
            title="Romance & Drama"
            movies={romanceMovies}
            onMovieClick={openMovie}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="text-white p-10 bg-gray-950 h-screen">Loading...</div>
      }
    >
      <MovieApp />
    </Suspense>
  );
};

export default Page;

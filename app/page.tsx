"use client";

import { useState, useEffect } from "react";
import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import { MOVIE_DB } from "@/data/movies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import MovieDetailView from "@/components/MovieDetailView";
import LoginView from "@/components/LoginView";

const NotflixApp = () => {
  const { currentView, selectedMovie, goToBrowse, goToLogin, goToMovieDetail } =
    useNavigation();

  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const cookieUser = getCookie("notflix_user");

    if (cookieUser) {
      setUser(cookieUser);
    }

    goToBrowse();
  }, []);

  const handleLogin = (username: string, isGuest: boolean) => {
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `notflix_user=${username}; expires=${date.toUTCString()}; path=/`;

    setUser(username);
    goToBrowse();
  };

  const handleLogout = () => {
    document.cookie =
      "notflix_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser("");
    goToLogin();
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

  if (currentView === "LOGIN") {
    return <LoginView onLogin={handleLogin} />;
  }

  if (currentView === "DETAIL" && selectedMovie) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col font-sans animate-in fade-in duration-300">
        <MovieDetailView
          movie={selectedMovie}
          onBack={goToBrowse}
          currentUser={user}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col font-sans animate-in fade-in duration-300">
      <div className="grow">
        <Header username={user} onLogout={handleLogout} />

        <div className="p-8 md:p-12 max-w-7xl mx-auto w-full">
          <MovieList
            title="Trending Now"
            movies={trendingMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
          <MovieList
            title="Sci-Fi & Cyberpunk"
            movies={scifiMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
          <MovieList
            title="Horror & Thriller"
            movies={horrorMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
          <MovieList
            title="Animated Masterpieces"
            movies={animationMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
          <MovieList
            title="Laugh Out Loud"
            movies={comedyMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
          <MovieList
            title="High Octane Action"
            movies={actionMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
          <MovieList
            title="Romance & Drama"
            movies={romanceMovies}
            onMovieClick={(id) => {
              const m = MOVIE_DB.find((movie) => movie.id === id);
              if (m) goToMovieDetail(m);
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default function Page() {
  return (
    <NavigationProvider>
      <NotflixApp />
    </NavigationProvider>
  );
}

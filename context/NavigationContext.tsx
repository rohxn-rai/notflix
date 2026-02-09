"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "@/data/movies";

type ViewState = "LOGIN" | "BROWSE" | "DETAIL";

interface NavigationContextType {
  currentView: ViewState;
  selectedMovie: Movie | null;
  goToBrowse: () => void;
  goToLogin: () => void;
  goToMovieDetail: (movie: Movie) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentView, setCurrentView] = useState<ViewState>("BROWSE");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const goToBrowse = () => {
    setCurrentView("BROWSE");
    setSelectedMovie(null);
  };

  const goToLogin = () => {
    setCurrentView("LOGIN");
    setSelectedMovie(null);
  };

  const goToMovieDetail = (movie: Movie) => {
    setSelectedMovie(movie);
    setCurrentView("DETAIL");
  };

  return (
    <NavigationContext.Provider
      value={{
        currentView,
        selectedMovie,
        goToBrowse,
        goToLogin,
        goToMovieDetail,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

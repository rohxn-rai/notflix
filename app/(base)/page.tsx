import { cookies } from "next/headers";
import { MOVIE_DB } from "@/data/movies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";

export const dynamic = "force-dynamic";

const LandingPage = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("notflix_user");

  const username = userCookie?.value || "Guest";

  const getMovies = (cat: string) => MOVIE_DB.filter((m) => m.category === cat);

  const trendingMovies = [
    getMovies("Horror")[0],
    getMovies("Sci-Fi")[0],
    getMovies("Animation")[7],
    getMovies("Action")[1],
    getMovies("Romance")[1],
    getMovies("Action")[0],
    getMovies("Comedy")[6],
    getMovies("Animation")[0],
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col animate-in fade-in duration-500">
      <Header username={username} />

      <main className="p-8 md:p-12 max-w-7xl mx-auto w-full">
        <div id="hero-banner" />
        <MovieList title="Trending Now" movies={trendingMovies} />
        <MovieList title="Sci-Fi & Cyberpunk" movies={getMovies("Sci-Fi")} />
        <MovieList title="Horror & Thriller" movies={getMovies("Horror")} />
        <MovieList
          title="Animated Masterpieces"
          movies={getMovies("Animation")}
        />
        <MovieList title="Laugh Out Loud" movies={getMovies("Comedy")} />
        <MovieList title="High Octane Action" movies={getMovies("Action")} />
        <MovieList title="Romance & Drama" movies={getMovies("Romance")} />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

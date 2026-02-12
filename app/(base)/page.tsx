import { cookies } from "next/headers";
import { MOVIE_DB } from "@/data/movies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import AdobeTargetMbox from "@/components/AdobeTargetMbox";

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
    <>
      <Header username={username} />

      <main className="p-8 md:p-12 max-w-7xl mx-auto w-full">
        <AdobeTargetMbox
          mbox="hero-barcode"
          params={{ param1: "value1", param2: "value2" }}
        >
          default content to replace by offer
        </AdobeTargetMbox>
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
    </>
  );
};

export default LandingPage;

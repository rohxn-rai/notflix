import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import { neon } from "@neondatabase/serverless";
import { MovieCategory, MovieProps } from "@/types/movies";

export const dynamic = "force-dynamic";

const LandingPage = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("notflix_user");

  const username = userCookie?.value || "Guest";

  const sql = neon(process.env.DATABASE_URL!);

  const getMoviesByCategory = async (
    categoryId: MovieCategory,
  ): Promise<MovieProps[]> => {
    try {
      const result: MovieProps[] = (await sql`
      SELECT * FROM movies 
      WHERE "entity_categoryid" = ${categoryId}`) as MovieProps[];
      return result;
    } catch (error) {
      console.error(`Error fetching movies for category ${categoryId}:`, error);
      return [];
    }
  };

  const [sciFi, horror, animation, comedy, action, romance] = await Promise.all(
    [
      getMoviesByCategory("Sci-Fi"),
      getMoviesByCategory("Horror"),
      getMoviesByCategory("Animation"),
      getMoviesByCategory("Comedy"),
      getMoviesByCategory("Action"),
      getMoviesByCategory("Romance"),
    ],
  );

  const trendingMovies = [
    horror[0],
    sciFi[0],
    animation[7],
    action[1],
    romance[1],
    action[0],
    comedy[6],
    animation[0],
  ];

  return (
    <>
      <Header username={username} />

      <main className="p-12 max-w-7xl mx-auto w-full flex flex-col">
        <section className="group/list relative mb-12">
          <div className="mboxDefault" id="mbox-maybe" data-id="mbox-maybe" />
        </section>
        <MovieList title={["most", "viewed"]} movies={[]} />
        <MovieList title={["trending", "now"]} movies={trendingMovies} />
        <MovieList title={["sci-fi", "&", "cyberpunk"]} movies={sciFi} />
        <MovieList title={["horror", "&", "thriller"]} movies={horror} />
        <MovieList title={["high", "octane", "action"]} movies={action} />
        <MovieList title={["animated", "masterpieces"]} movies={animation} />
        <MovieList title={["laugh", "out", "Loud"]} movies={comedy} />
        <MovieList title={["romance", "&", "Drama"]} movies={romance} />
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;

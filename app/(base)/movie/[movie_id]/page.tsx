import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { UUID } from "crypto";
import MovieDetailView from "@/components/MovieDetailView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { neon } from "@neondatabase/serverless";
import { MovieProps, ReviewProps } from "@/types/movies";

const sql = neon(process.env.DATABASE_URL!);

interface MoviePageProps {
  params: Promise<{ movie_id: UUID }>;
}

const generateMetadata = async ({
  params,
}: MoviePageProps): Promise<Metadata> => {
  const { movie_id } = await params;

  const results = await sql`
    SELECT entity_name,entity_synopsis FROM movies
    WHERE entity_id = ${movie_id}`;

  const movie = results[0] as MovieProps;

  return {
    title: `${movie.entity_name} | NotFlix`,
    description: movie.entity_synopsis,
  };
};

const MoviePage = async ({ params }: MoviePageProps) => {
  const { movie_id } = await params;

  const results = await sql`
    SELECT * FROM movies
    WHERE entity_id = ${movie_id}`;

  const movie = results[0] as MovieProps;

  if (!movie) {
    notFound();
  }

  const review: ReviewProps[] = (await sql`
  SELECT * FROM reviews
  WHERE entity_id = ${movie_id}`) as ReviewProps[];

  const cookieStore = await cookies();
  const userCookie = cookieStore.get("notflix_user");
  const currentUser = userCookie?.value || "Guest";

  return (
    <>
      <Header username={currentUser} />
      <MovieDetailView
        movie={movie}
        review={review}
        currentUser={currentUser}
      />
      <Footer />
    </>
  );
};

export default MoviePage;

export { generateMetadata };

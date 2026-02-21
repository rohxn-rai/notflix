import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import MovieDetailView from "@/components/MovieDetailView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { neon } from "@neondatabase/serverless";
import { UUID } from "crypto";
import { MovieProps, ReviewProps } from "@/types/movies";

interface PageProps {
  params: Promise<{ movie_id: UUID }>;
}

const MoviePage = async ({ params }: PageProps) => {
  const { movie_id } = await params;

  const sql = neon(process.env.DATABASE_URL!);

  const results = await sql`
  SELECT * FROM movies
  WHERE entity_id = ${movie_id}
`;

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

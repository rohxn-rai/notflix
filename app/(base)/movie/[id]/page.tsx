import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { MOVIE_DB } from "@/data/movies";
import MovieDetailView from "@/components/MovieDetailView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

const MoviePage = async ({ params }: PageProps) => {
  const { id } = await params;

  const movie = MOVIE_DB.find((m) => m.id === id);

  if (!movie) {
    notFound();
  }

  const cookieStore = await cookies();
  const userCookie = cookieStore.get("notflix_user");
  const currentUser = userCookie?.value || "Guest";

  return (
    <>
      <Header username={currentUser} />
      <MovieDetailView movie={movie} currentUser={currentUser} />
      <Footer />
    </>
  );
};

export default MoviePage;

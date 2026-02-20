import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  const movies =
    await sql`SELECT id, title, category, color, image_url, synopsis FROM movies`;

  const headers = [
    "entity.id",
    "entity.name",
    "entity.categoryId",
    "entity.pageUrl",
    "entity.thumbnailUrl",
    "entity.color",
    "entity.synopsis",
  ].join(",");

  const rows = movies.map((m) => {
    const escapeCsv = (str: string) => `"${String(str).replace(/"/g, '""')}"`;

    return [
      m.id,
      escapeCsv(m.title),
      escapeCsv(m.category),
      escapeCsv(`/movie/${m.id}`),
      escapeCsv(`${m.image_url}`),
      escapeCsv(m.color),
      escapeCsv(m.synopsis),
    ].join(",");
  });

  const csvString = [headers, ...rows].join("\n");

  return new Response(csvString, {
    headers: {
      "Content-Type": "text/csv",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}

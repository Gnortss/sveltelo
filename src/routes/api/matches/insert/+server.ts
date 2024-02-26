import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
  const {id, p1_id, p2_id, p1_wins, p2_wins, p1_rating_diff, p2_rating_diff, created_at} = await request.json();
  let result = await platform.env.SVELTELO_DB.prepare(
    `INSERT INTO matches (id, p1_id, p2_id, p1_wins, p2_wins, p1_rating_diff, p2_rating_diff, created_at) VALUES ("${id}", "${p1_id}","${p2_id}", ${p1_wins}, ${p2_wins}, ${p1_rating_diff}, ${p2_rating_diff}, ${created_at});`
  ).run();
  return new Response(JSON.stringify(result));
}
import type { RequestHandler, json } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
  const {id, rating} = await request.json();
  let result = await platform.env.SVELTELO_DB.prepare('UPDATE players SET rating = ? WHERE id = ?;').bind(rating, id).run();
  return new Response(JSON.stringify(result));
}
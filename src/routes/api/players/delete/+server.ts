import type { RequestHandler, json } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
  const {id} = await request.json();
  let result = await platform.env.SVELTELO_DB.prepare('DELETE FROM players WHERE id = ?;').bind(id).run();
  return new Response(JSON.stringify(result));
}
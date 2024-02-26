import type { RequestHandler, json } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
  const {id, name, rating} = await request.json();
  let result = await platform.env.SVELTELO_DB.prepare(
      "INSERT INTO players (id, name, rating) VALUES (?, ?, ?);"
  ).bind(id, name, rating).run();
  return new Response(JSON.stringify(result));
}
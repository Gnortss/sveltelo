import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
  let result = await platform.env.SVELTELO_DB.prepare(
    "SELECT * FROM players"
  ).run();
  return new Response(JSON.stringify(result));
}
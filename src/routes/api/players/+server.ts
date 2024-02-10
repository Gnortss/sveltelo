import type { RequestHandler } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ request, platform }) {
    console.log(JSON.stringify(platform.env));
    let result = await platform.env.SVELTELO_DB.prepare(
        "SELECT * FROM players LIMIT 5"
    ).run();
return new Response(JSON.stringify(result));
}
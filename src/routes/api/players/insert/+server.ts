import type { RequestHandler, json } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, platform }) {
    try {
        const { id, name, rating } = await request.json();
        console.log(id, name, rating);
        let ps = platform.env.SVELTELO_DB.prepare(
            "INSERT INTO players (id, name, rating) VALUES (?, ?, ?);"
        ).bind(id, name, rating);
        let result = await ps.run();
        return new Response(JSON.stringify(result));
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
}
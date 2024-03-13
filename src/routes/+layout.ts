import * as db from "$lib/db";

/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	return {
		players: (await (await fetch("/api/players/get", {method: "POST"})).json()).results,
		// matches: await db.getMatches()
	};
}
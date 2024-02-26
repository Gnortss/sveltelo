async function callAPI(method : string, payload : string) {
  return fetch(method, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: payload
  });
}

export async function getPlayers(): Promise<Array<Player>> {
  let response = await(await callAPI("/api/players/get", "")).json();
  return response.results;
}

export async function insertPlayer(p: Player) {
  await callAPI("/api/players/insert", JSON.stringify(p));
}

export async function deletePlayer(id: string) {
  await callAPI("/api/players/delete", JSON.stringify({id}));
}

export async function updatePlayer(id: string, rating: number) {
  await callAPI("/api/players/update", JSON.stringify({id, rating}));
}

export async function getMatches(): Promise<Array<Match>> {
  let response = await(await callAPI("/api/matches/get", "")).json();
  return response.results;
}

export async function insertMatch(m: Match) {
  await callAPI("/api/matches/insert", JSON.stringify(m));
}

export async function deleteMatch(id: string) {
  await callAPI("/api/matches/delete", JSON.stringify({id}));
}
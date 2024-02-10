<script>
  import {nanoid} from "nanoid";

  let value = "";

	async function getPlayers() {
		const response = await fetch('/api/players/get', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		});

		let res = await response.json();
    value = JSON.stringify(res);
	}

  async function getMatches() {
		const response = await fetch('/api/matches/get', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		});

		let res = await response.json();
    value = JSON.stringify(res);
	}

  async function insertPlayer() {
    const response = await fetch('/api/players/insert', {
      method: 'POST',
      body: JSON.stringify({
        id: nanoid(), 
        name: "tmp",
        rating: 1200
      }),
      headers: {
        'content-type': 'application/json'
      }
    });

    let res = await response.json();
    value = JSON.stringify(res);
  }
</script>

<div>
  <button on:click={getPlayers}>Get Players</button>
  <button on:click={getMatches}>Get Matches</button>
  <button on:click={getMatches}>Insert Player</button>

  <h2>Response:</h2>
  <p>{value}</p>
</div>
<script lang="ts">
  import Leaderboard from "../Leaderboard.svelte";
  import type {Player, Match} from "$lib";
  import type { Writable } from "svelte/store";
	import { getContext } from 'svelte';

	// const players : Array<Player> = getContext('players');
  // const matches : Array<Match> = getContext('matches');

  const user = getContext('user');
  const players: Writable<Array<Player>> = getContext('players');
  // let players : Array<Player> = [];
  let matches : Array<Match> = [];
  // db.getPlayers().then(res => players = res);
  // db.getMatches().then(res => matches = res);
  console.log($players);
</script>

<div>
  {#if $players.length > 0}
  <Leaderboard players={$players} {matches}/>
  {/if}
</div>
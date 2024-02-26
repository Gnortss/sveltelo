<script lang="ts">
  import Leaderboard from "../leaderboard.svelte";
  import type {Player, Match} from "$lib";
  import * as db from "$lib/db";

  let players : Array<Player> = [];
  let matches : Array<Match> = [];
  db.getPlayers().then(res => players = res);
  db.getMatches().then(res => matches = res);
</script>

<div>
  {#if players.length > 0}
  <Leaderboard {players} {matches}/>
  {/if}
</div>
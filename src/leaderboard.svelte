<script lang="ts">
  import type {Player, Match} from "$lib";

  export let players : Array<Player> = [];
  export let matches : Array<Match> = [];

  function activePlayers(matches: Array<Match>): Set<string> {
    let ret: Set<string> = new Set();
    const date_now = Date.now();
    for (const m of matches) {
      // if (date_now - m.created_at < 1209600000 * 2) { // 4 weeks in ms
      if (date_now - m.created_at < 99999999999999) { // 4 weeks in ms
        ret.add(m.p1_id);
        ret.add(m.p2_id);
      }
    }
    return ret;
  }

  $: active = activePlayers(matches);
</script>

<div>
  {#if active.size > 0 || true}
  <table>
    <tr>
      <th>Player</th>
      <th>Rating</th>
    </tr>
    {#each players.filter(e => active.has(e.id)).sort((a,b) => b.rating - a.rating) as p}
    <tr>
      <td>{p.name}</td>
      <td>{Math.round(p.rating)}</td>
    </tr>
    {/each}
  </table>
  {:else}
  <h2>No active players in last 4 weeks</h2>
  {/if}
</div>

<style>
  table {
    margin: 0 auto;
  }
  th {
    width: 150px;
    border-bottom: 1px solid;
  }
  td {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
</style>

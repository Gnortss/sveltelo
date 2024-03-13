<script>
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
  import { page } from '$app/stores';

	/** @type {import('./$types').LayoutData} */
	export let data;

	// Create a store and update it when necessary...
  const players = writable();
  $: players.set(data.players);
  setContext('players', players);

	// ...and add it to the context for child components to access
	// setContext('players', players);

  $: leaderboard_page_active = $page.url.pathname === "/";
  $: settings_page_active = $page.url.pathname === "/settings";

</script>

<div class="wrapper">
<!-- navigation here -->
  <nav>
    <a href="/"><button class="nav-button" class:selected={leaderboard_page_active}>Leaderboard</button></a>
    <a href="/settings"><button class="nav-button" class:selected={settings_page_active}>Settings</button></a>
  </nav>
  <slot />
</div>

<style>
  .wrapper {
    width: min(100vw, 600px);
    margin: 0 auto;
  }

  nav {
    display: flex;
    flex-flow: row nowrap;
  }

  nav a {
    width: 50%;
    height: 3em;
  }

  .nav-button {
    border: 0px;
    width: 100%;
    height: 100%;
    padding: 0;
    color: rgb(230, 230, 230);
    background-color: rgb(38, 38, 38);
  }

  .nav-button:hover, .selected {
    background-color: rgb(64, 64, 64);
  }
</style>
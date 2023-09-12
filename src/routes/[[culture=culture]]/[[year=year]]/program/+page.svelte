<script>
import {page} from "$app/stores"
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Program page for <br/> {$page.params.year ?? 2023}</h1>
</div>

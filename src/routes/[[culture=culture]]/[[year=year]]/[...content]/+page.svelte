<script>
  import {page} from "$app/stores"
</script>
<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog page" />
</svelte:head>

<div class="text-column">
	<h1>Content page with path: {$page.params.content} {$page.params.year ?? "2023"}</h1>
</div>


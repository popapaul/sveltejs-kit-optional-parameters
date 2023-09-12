<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>
<div>
	<h2>
		See <b>Content</b> and <b>Program</b> submenus<br/>
	</h2>
	<p>
		Notice that when the link doesn`t have culture, but has year,<br/> the <b>Program 2021</b> page will not be matched,<br/> instead it will go to rest parameter.
	</p>

	<p>
    Additionally, when changing [...content] rest paramater  to [content] parameter. <br>
		then <b>Content 2021</b> also breaks;
	</p>
</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

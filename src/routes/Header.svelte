<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/content">Content</a>
					<ul class="submenu">
							<li>
								<a href="/en/content" title="en culture, no year">2023 ✔</a>
							</li>
							<li>		
								<a href="/en/2022/content" title="en culture, 2022 year">2022 ✔</a>
							</li>
								<li>		
								<a href="/2021/content" title="no culture, 2021 year">2021 ✔</a>
							</li>
					</ul>
			</li>

				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/program" title="no culture, no year">Program</a>
					<ul class="submenu">
							<li>
								<a href="/en/program" title="en culture, no year">2023 ✔</a>
							</li>
							<li>		
								<a href="/en/2022/program" title="en culture, 2022 year">2022 ✔</a>
							</li>
								<li>		
								<a href="/2021/program" title="no culture, 2021 year">2021 x</a>
							</li>
					</ul>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>

.submenu{
	opacity:0;
	pointer-events:none;
	display:flex;
	flex-direction:column;
	transition: 0.3s;
	height:auto;
}
li:hover .submenu{
	opacity:1;
	pointer-events:all;
}
.submenu li{
	padding: 4px 0;
}
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

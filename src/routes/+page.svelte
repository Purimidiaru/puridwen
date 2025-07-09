<script lang="ts">
	/* Une seule carte Joker pour démarrer */
	const guides = [
		{
			slug: 'joker',
			title: 'Joker – Guide',
			cover: '/images/joker.jpg'   // mets l’image ici : static/images/joker.jpg
		}
	];
</script>

<section class="hero">
	<h1>Guides</h1>

	<div class="grid">
		{#each guides as g}
			<a class="card" href={`/guides/${g.slug}`}>
				<img src={g.cover} alt={g.title} />
				<div class="title">{g.title}</div>
			</a>
		{/each}
	</div>

	<a class="btn" href="/guides">Voir tous les guides</a>
</section>

<style>
	/* --- Thème sombre Prydwen-like --- */
	:global(html, body) {
		margin: 0;
		min-height: 100%;
		background: #0e0f12;
		color: #e4e4e6;
		font-family: "Inter", system-ui, sans-serif;
	}
	a { text-decoration: none; }

	/* --- Section hero --- */
	.hero {
		text-align: center;
		padding: 4rem 1rem 6rem;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 800;
		margin: 0 0 3rem;
	}

	/* --- Grille de cartes --- */
	.grid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		max-width: 80rem;
		margin: 0 auto 3rem;
	}

	.card {
		background: #1b1c21;
		border: 1px solid #2b2c33;
		border-radius: 1rem;
		overflow: hidden;
		transition: border-color 0.2s;
	}
	.card:hover { border-color: #e02828; }

	.card img {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
	}
	.card .title {
		padding: 1rem;
		font-weight: 600;
	}

	/* --- Bouton --- */
	.btn {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 1rem;
		background: #e02828;
		color: #fff;
		font-weight: 600;
		transition: opacity 0.2s;
	}
	.btn:hover { opacity: 0.9; }
</style>
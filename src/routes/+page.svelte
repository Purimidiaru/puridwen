<script lang="ts">
  const guides = [
    {
      slug: 'joker',
      title: 'Joker',
      cover: '/images/joker.jpg'      // portrait 3×4
    }
  ];
</script>

<section class="hero">
  <h1>Guides</h1>

  <div class="grid">
    {#each guides as g}
      <a class="card" href={`/guides/${g.slug}`}>
        <!-- image principale -->
        <img class="cover" src={g.cover} alt={g.title} />

        <!-- barre titre : texte centré + logo overlay -->
        <div class="title">
          <span>{g.title}</span>
          <img class="curse" src="/images/curse.png" alt="Curse logo" />
        </div>
      </a>
    {/each}
  </div>
</section>

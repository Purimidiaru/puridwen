<script lang="ts">
  const guides = [
    {
      slug: 'joker',
      title: 'Joker',
      cover: '/images/joker.webp',      // portrait 3×4
      logo: '/images/icons/curse.webp'
    },
    {
      slug: 'yui',
      title: 'Yui',
      cover: '/images/yui.webp',        // portrait 3×4 (replace with actual path if different)
      logo: '/images/icons/elec.webp'
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
          <img class="curse" src={g.logo} alt="Guide logo" />
        </div>
      </a>
    {/each}
  </div>
</section>

<script lang="ts">
  import { jokerData as d } from './data';
</script>

<style>
  .banner{display:flex;gap:1.5rem;align-items:center;
          background:var(--bg-surface);padding:1.5rem;border-radius:1rem;}
  .tierTable{border-collapse:collapse;font-size:.95rem;}
  .tierTable th,.tierTable td{border:1px solid var(--border);padding:.4rem .8rem;text-align:center;}
  .section{margin:2.5rem 0;}
  .table{width:100%;border-collapse:collapse;}
  .table th,.table td{border:1px solid var(--border);padding:.5rem;text-align:left;}
  .teamGrid{display:grid;gap:1rem;}
  .teamRow{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;}
  .teamRow img{width:100%;aspect-ratio:1/1;border-radius:.75rem;border:2px solid var(--border);}
</style>

<svelte:head><title>Joker — Guide • Puridwen</title></svelte:head>

<h1>{d.role}&nbsp;: Joker</h1>

<!-- Bannière grise : portrait + Tier List --------------------------->
<div class="banner">
  <img src="/images/joker.webp" alt="Joker" style="width:200px;border-radius:.75rem;">

  <table class="tierTable">
    <thead><tr><th>General</th><th>Bossing / Guilde</th></tr></thead>
    <tbody><tr><td>{d.tier.general}</td><td>{d.tier.boss}</td></tr></tbody>
  </table>
</div>

<!-- Présentation (table) -------------------------------------------->
<div class="section">
  <h2>Présentation</h2>
  <table class="table">
    <tbody>
      <tr><th>Élément</th><td>{d.element}</td></tr>
      <tr><th>Rôle</th>    <td>{d.role}</td></tr>
      <tr><th>Cible</th>   <td>{d.targetType}</td></tr>
    </tbody>
  </table>
</div>

<!-- Rotation des skills --------------------------------------------->
<div class="section">
  <h2>Rotation des skills</h2>
  <table class="table">
    <thead><tr><th>#</th><th>Skill</th><th>Scénario</th></tr></thead>
    <tbody>
      {#each d.rotationSkills as r}
        <tr><td>{r.order}</td><td>{r.skill}</td><td>{r.scenario}</td></tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- Weapon & Révélations -------------------------------------------->
<div class="section">
  <h2>Weapon</h2>
  <p>{d.weapon}</p>

  <h2>Révélations recommandées</h2>
  <ul>{#each d.revelations as r}<li>{r}</li>{/each}</ul>
</div>

<!-- Awareness ------------------------------------------------------->
<div class="section">
  <h2>Priorité d'Awareness</h2>
  <p>{d.awarenessPrio.join(' › ')}</p>
</div>

<!-- Teams : 2 lignes ----------------------------------------------->
<div class="section">
  <h2>Best Teams</h2>
  <div class="teamGrid">
    {#each d.bestTeams as row}
      <div class="teamRow">
        {#each row as m}
          <figure>
            <img src={m.img} alt={m.name}>
            <figcaption style="text-align:center;margin-top:.4rem;">{m.name}</figcaption>
          </figure>
        {/each}
      </div>
      <!-- Rotation idéale ------------------------------------------------->
        <div class="section">
        <h2>Rotation idéale (ordre des personnages)</h2>
        <p>{d.rotationIdeal}</p>
</div>
    {/each}
  </div>
</div>

<!-- Stats ----------------------------------------------------------->
<div class="section">
  <h2>Stats à viser (baseline)</h2>
  <ul>{#each d.statsBaseline as s}<li>{s}</li>{/each}</ul>
</div>

<!-- Wonder & Core --------------------------------------------------->
<div class="section">
  <h2>Wonder Stats</h2><p>{d.wonderStats}</p>

  <h2>Core Attribute Goals</h2><p>{d.coreAttrGoals}</p>
</div>

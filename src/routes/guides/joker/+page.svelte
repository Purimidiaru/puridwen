<script lang="ts">
  import { jokerData as d } from './data';
</script>

<style>
  .banner{
    display:flex;gap:1.5rem;align-items:center;
    background:var(--bg-surface);padding:1.5rem;border-radius:1rem;
    justify-content:center;
  }
  .tierTable{
    border-collapse:collapse;font-size:1.2rem;min-width:240px;
  }
  .tierTable th,.tierTable td{
    border:1px solid var(--border);padding:.6rem 1.2rem;text-align:center;
  }
  .tierTable td.t0{background:#E02828;color:#fff;font-weight:700;}
  .section{margin:2.5rem 0;}
  .table{width:100%;border-collapse:collapse;}
  .table th,.table td{border:1px solid var(--border);padding:.5rem;text-align:left;}
  .teamGrid{display:grid;gap:1rem;}
  .teamRow{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;}
  .teamRow img{width:100%;aspect-ratio:1/1;border-radius:.75rem;border:2px solid var(--border);}
  .weaponGrid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));}
  .weaponItem{display:flex;gap:.75rem;align-items:center;}
  .weaponItem img{width:48px;border-radius:.4rem;}
</style>

<svelte:head><title>Joker — Guide • Puridwen</title></svelte:head>

<h1>{d.role} : Joker</h1>

<!-- Bannière grise : portrait + Tier List -->
<div class="banner">
  <img src="/images/joker.webp" alt="Joker" style="width:200px;border-radius:.75rem;">

  <table class="tierTable">
    <thead><tr><th>General</th><th>Bossing / Guilde</th></tr></thead>
    <tbody>
      <tr>
        <td class={d.tier.general === 'T0' ? 't0' : ''}>{d.tier.general}</td>
        <td class={d.tier.boss    === 'T0' ? 't0' : ''}>{d.tier.boss}</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Présentation -->
<div class="section">
  <h2>Présentation</h2>
  <table class="table">
    <tbody>
      <tr>
        <th>Élément</th>
        <td>
          <img src={d.element.icon} alt={d.element.name} style="width:20px;vertical-align:middle;margin-right:.4rem;">
          {d.element.name}
        </td>
      </tr>
      <tr><th>Rôle</th>   <td>{d.role}</td></tr>
      <tr><th>Cible</th>  <td>{d.targetType}</td></tr>
    </tbody>
  </table>
</div>

<!-- Weapons -->
<div class="section">
  <h2>Weapons</h2>
  <div class="weaponGrid">
    {#each d.weapons as w}
      <div class="weaponItem">
        <img src={w.img} alt={w.name}><span>{w.name}</span>
      </div>
    {/each}
  </div>
</div>

<!-- Révélations -->
<div class="section">
  <h2>Révélations recommandées</h2>
  <table class="table">
    <thead><tr><th>Set</th><th>Pourquoi</th></tr></thead>
    <tbody>
      {#each d.revelations as r}
        <tr><td>{r.name}</td><td>{r.why}</td></tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- Awareness -->
<div class="section">
  <h2>Priorité d'Awareness</h2>
  <p>{d.awarenessPrio.join(' › ')}</p>
</div>

<!-- Teams -->
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
    <!-- Rotation idéale -->
    <div class="section">
        <h2>Rotation idéale (ordre des personnages)</h2>
        <p>{d.rotationIdeal}</p>
    </div>
    {/each}
  </div>
</div>

<!-- Stats + Core -->
<div class="section">
  <h2>Stats & Core Goals</h2>
  <ul>{#each d.statsCombined as s}<li>{s}</li>{/each}</ul>

  <h3>Wonder Stats</h3>
  <p>{d.wonderStats}</p>
</div>

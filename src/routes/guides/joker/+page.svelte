<script lang="ts">
  import { jokerData as d } from './data';
  const why = d.awarenessReasons ?? {};
</script>

<style>
  .page{padding-left:10%;padding-right:4%;}

  /* bannière */
  .banner{
    display:flex;gap:1.5rem;align-items:center;justify-content:center;
    background:var(--bg-surface);padding:1.5rem;border-radius:1rem;
  }
  .tier{border-collapse:collapse;font-size:1.2rem;min-width:240px;}
  .tier th,.tier td{border:1px solid var(--border);padding:.6rem 1.2rem;text-align:center;}
  .tier td.t0{background:#E02828;color:#fff;font-weight:700;}

  .section{margin:2.5rem 0;}
  .table{width:100%;border-collapse:collapse;}
  .table th,.table td{border:1px solid var(--border);padding:.5rem;text-align:left;}

  /* weapons */
  .weaponGrid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}
  .weaponItem{display:flex;gap:.8rem;align-items:center;}
  .weaponItem img{width:120px;border-radius:.4rem;}

  /* teams */
  .teamGrid{display:flex;flex-direction:column;gap:2rem;align-items:center;}
  .teamRow{
    display:flex;gap:1.5rem;flex-wrap:wrap;justify-content:center;align-items:center;
  }
  .teamRow figure{display:grid;gap:.45rem;justify-items:center;text-align:center;}

  /* portraits – réduits de 50 % */
  .teamRow img{
    width:150px;
    height:150px;
    object-fit:contain;
    border:2px solid transparent;
    border-radius:.75rem;
  }

  /* séparateur "OU" */
  .teamRow .or{
    font-size:3rem;
    font-weight:700;
    line-height:1;
  }

  /* wonder personae (inchangé) */
  .wonderGrid{
    display:grid;gap:1.5rem;
    grid-template-columns:repeat(auto-fit,minmax(270px,1fr));
    justify-items:center;
  }
  .wonderGrid figure{display:grid;gap:.5rem;justify-items:center;text-align:center;}
  .wonderGrid img{width:270px;height:270px;object-fit:contain;border:2px solid transparent;border-radius:.75rem;}
</style>

<svelte:head><title>Joker – Guide</title></svelte:head>

<div class="page">
  <h1>Joker</h1>

  <!-- Bannière -->
  <div class="banner">
    <img src="/images/joker.webp" alt="Joker" style="width:200px;border-radius:.75rem;">
    <table class="tier">
      <thead><tr><th>General</th><th>Bossing∕Guilde</th></tr></thead>
      <tbody><tr>
        <td class={d.tier.general==='T0'?'t0':''}>{d.tier.general}</td>
        <td class={d.tier.boss==='T0'?'t0':''}>{d.tier.boss}</td>
      </tr></tbody>
    </table>
  </div>

  <!-- Présentation -->
  <div class="section">
    <h2>Présentation</h2>
    <table class="table">
      <tbody>
        <tr><th>Élément</th><td><img src={d.element.icon} alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.element.name}</td></tr>
        <tr><th>Rôle</th><td><img src={d.roleIcon} alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.role}</td></tr>
        <tr><th>Cible</th><td>{d.targetType}</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Weapons -->
  <div class="section">
    <h2>Weapons</h2>
    <div class="weaponGrid">
      {#each d.weapons as w}
        <div class="weaponItem"><img src={w.img} alt={w.name}><span>{w.name}</span></div>
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
    <table class="table">
      <thead><tr><th>Awareness</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.awarenessPrio as a}
          <tr><td>{a}</td><td>{why[a] ?? "—"}</td></tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Best Teams -->
  <div class="section">
    <h2>Best Teams</h2>
    <div class="teamGrid">
      {#each d.bestTeams as team}
        <div class="teamRow">
          {#each team.members as p}
            {#if p.img}
              <figure>
                <img src={p.img} alt={p.name}>
                <figcaption>{p.name}</figcaption>
              </figure>
            {:else}
              <span class="or">OU</span>
            {/if}
          {/each}
        </div>
        <em style="margin-top:.8rem;">Rotation : {team.rotation}</em>
      {/each}
    </div>
  </div>

  <!-- Wonder Personae -->
  <div class="section">
    <h2>Wonder Personae</h2>
    <div class="wonderGrid">
      {#each d.wonderPersonae as p}
        <figure>
          <img src={p.img} alt={p.name}>
          <figcaption>{p.name}</figcaption>
        </figure>
      {/each}
    </div>
  </div>

  <!-- Stats -->
  <div class="section">
    <h2>Stats &amp; Core Stats</h2>
    <ul>
      {#each d.statsCombined as s}
        <li>{s}</li>
      {/each}
    </ul>
  </div>
</div>

<script lang="ts">
  import { jokerData as d } from './data';

  /* mapping awareness → why (à compléter dans data.ts si besoin) */
  const why = d.awarenessReasons ?? {
    A4: "—", A6: "—", A2: "—", A1: "—"
  };
</script>

<style>
  /* marge */
  .page{padding-left:10%;padding-right:4%;}

  /* bannière */
  .banner{display:flex;gap:1.5rem;align-items:center;justify-content:center;
          background:var(--bg-surface);padding:1.5rem;border-radius:1rem;}
  .tier{border-collapse:collapse;font-size:1.2rem;min-width:240px;}
  .tier th,.tier td{border:1px solid var(--border);padding:.6rem 1.2rem;text-align:center;}
  .tier td.t0{background:#E02828;color:#fff;font-weight:700;}

  .section{margin:2.5rem 0;}
  .table{width:100%;border-collapse:collapse;}
  .table th,.table td{border:1px solid var(--border);padding:.5rem;text-align:left;}

  /* weapons (+150 %) */
  .weaponGrid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}
  .weaponItem{display:flex;gap:.8rem;align-items:center;}
  .weaponItem img{width:72px;border-radius:.4rem;}

  /* teams */
  .teamGrid{display:flex;flex-direction:column;gap:2rem;align-items:center;}
  .teamRow{display:flex;gap:1.5rem;flex-wrap:wrap;justify-content:center;}

  .teamRow figure{display:grid;gap:.35rem;justify-items:center;text-align:center;}

  .teamRow img{width:90px;height:90px;object-fit:contain;border:2px solid var(--border);border-radius:.75rem;}
  .teamRow img.joker{width:170px;height:170px;border:none;}

  /* wonder grid (4 per row) */
  .wonderGrid{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));justify-items:center;}
  .wonderGrid img{width:90px;height:90px;object-fit:contain;border:2px solid var(--border);border-radius:.75rem;}
</style>

<svelte:head><title>Joker — Guide • Puridwen</title></svelte:head>

<div class="page">
  <h1>{d.role} : Joker</h1>

  <!-- Bannière -->
  <div class="banner">
    <img src="/images/joker.webp" alt="Joker" style="width:200px;border-radius:.75rem;">
    <table class="tier">
      <thead><tr><th>General</th><th>Bossing∕Guilde</th></tr></thead>
      <tbody><tr>
        <td class={d.tier.general==='T0'?'t0':''}>{d.tier.general}</td>
        <td class={d.tier.boss   ==='T0'?'t0':''}>{d.tier.boss}</td>
      </tr></tbody>
    </table>
  </div>

  <!-- Présentation -->
  <div class="section">
    <h2>Présentation</h2>
    <table class="table">
      <tbody>
        <tr><th>Élément</th><td><img src={d.element.icon} alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.element.name}</td></tr>
        <tr><th>Rôle</th><td>{d.role}</td></tr>
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
      <tbody>{#each d.revelations as r}<tr><td>{r.name}</td><td>{r.why}</td></tr>{/each}</tbody>
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
      {#each d.bestTeams as row,i}
        <div class="teamRow">
          {#each row as p}
            <figure>
              <img src={p.img} alt={p.name} class={p.name==='Joker'?'joker':''}>
              <figcaption>{p.name}</figcaption>
            </figure>
          {/each}
        </div>

        <!-- rotation pour cette équipe -->
        <div style="margin-top:.5rem;font-style:italic;">Rotation : {d.rotationIdeal}</div>
      {/each}
    </div>
  </div>

  <!-- Wonder Personae -->
  <div class="section">
    <h2>Wonder Personae</h2>
    <div class="wonderGrid">
      {#each d.wonderPersonae ?? [] as p}
        <figure>
          <img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption>
        </figure>
      {/each}
    </div>
  </div>

  <!-- Stats & Core -->
  <div class="section">
    <h2>Stats & Core Goals</h2>
    <ul>{#each d.statsCombined as s}<li>{s}</li>{/each}</ul>
  </div>
</div>

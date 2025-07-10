<script lang="ts">
  import { jokerData as d } from './data';

  /* Regroupe Okyann + Puppet dans un même cadre double */
  function frames(members) {
    const clean = members.filter(m => m.img);
    const list = [];
    for (let i = 0; i < clean.length; i++) {
      const m = clean[i];
      if (m.name === 'Okyann' && clean[i + 1]?.name === 'Puppet') {
        list.push({ double: true, pair: [m, clean[i + 1]] });
        i++;                                  // saute Puppet
      } else if (m.name === 'Puppet' && clean[i - 1]?.name === 'Okyann') {
        continue;
      } else {
        list.push({ double: false, solo: m });
      }
    }
    return list;
  }

  const why = d.awarenessReasons ?? {};
</script>

<style>
  .page{padding-left:10%;padding-right:4%;}

  /* ─── Bannière ─── */
  .banner{
    display:flex;gap:1.5rem;align-items:center;justify-content:center;
    background:var(--bg-surface);padding:1.5rem;border-radius:1rem;
  }
  .tier{border-collapse:collapse;font-size:1.2rem;min-width:240px;}
  .tier th,.tier td{border:1px solid var(--border);padding:.6rem 1.2rem;text-align:center;}
  .tier td.t0{background:#E02828;color:#fff;font-weight:700;}

  /* ─── Sections / Tables ─── */
  .section{margin:2.5rem 0;}
  .table{width:100%;border-collapse:collapse;}
  .table th,.table td{border:1px solid var(--border);padding:.5rem;text-align:left;}

  /* ─── Weapons ─── */
  .weaponGrid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}
  .weaponItem{display:flex;gap:.8rem;align-items:center;}
  .weaponItem img{width:120px;border-radius:.4rem;}

  /* ─── Teams ─── */
  .teamGrid{display:flex;flex-direction:column;gap:2rem;align-items:center;}

  .teamRow{
    display:flex;
    gap:5%;                  /* espacement externe entre cadres          */
    flex-wrap:nowrap;
    justify-content:center;align-items:flex-start;
  }

  /* ─── Figure générique (cadre + légende) ─── */
  .frame{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0;                 /* supprime le margin natif de <figure>     */
    flex:0 0 auto;
  }
  .frame.single{width:260px;}
  .frame.double{width:520px;}

  /* ─── Carte : zone bordurée qui contient l’image ─── */
  .card{
    width:100%;
    height:320px;
    box-sizing:border-box;
    padding:0.25%;
    border:2px solid #fff;
    background:var(--bg-surface);
    overflow:hidden;          /* jamais de dépassement                    */
    display:flex;align-items:center;justify-content:center;
  }

  /* simple = une seule image */
  .card.single img{
    max-width:100%;
    max-height:100%;
    width:auto;height:auto;
    object-fit:contain;
    border-radius:.75rem;
  }

  /* double = 2 images côte à côte */
  .card.double{
    display:grid;
    grid-template-columns:1fr 1fr;
  }
  .card.double img{
    max-width:100%;
    max-height:100%;
    width:auto;height:auto;
    object-fit:contain;
    border-radius:.75rem;
    place-self:center;
  }

  /* légendes sous le cadre */
  figcaption{
    margin-top:.35rem;
    font-size:.9rem;
    text-align:center;
  }

  /* ─── Wonder Personae ─── */
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

  <!-- ─── Bannière ─── -->
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

  <!-- ─── Présentation ─── -->
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

  <!-- ─── Weapons ─── -->
  <div class="section">
    <h2>Weapons</h2>
    <div class="weaponGrid">
      {#each d.weapons as w}
        <div class="weaponItem"><img src={w.img} alt={w.name}><span>{w.name}</span></div>
      {/each}
    </div>
  </div>

  <!-- ─── Révélations ─── -->
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

  <!-- ─── Awareness ─── -->
  <div class="section">
    <h2>Priorité d'Awareness</h2>
    <p style="font-weight:700;margin-bottom:.6rem;">A4 → A6 → A2 → A1</p>
    <table class="table">
      <thead><tr><th>Awareness</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.awarenessPrio as a}
          <tr><td>{a}</td><td>{why[a] ?? "—"}</td></tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- ─── Best Teams ─── -->
  <div class="section">
    <h2>Best Teams</h2>
    <div class="teamGrid">
      {#each d.bestTeams as team}
        <div class="teamRow">
          {#each frames(team.members) as frame}
            {#if frame.double}
              <!-- Cadre double -->
              <figure class="frame double">
                <div class="card double">
                  {#each frame.pair as m}
                    <img src={m.img} alt={m.name}>
                  {/each}
                </div>
                <figcaption>Okyann ou Puppet</figcaption>
              </figure>
            {:else}
              <!-- Cadre simple -->
              <figure class="frame single">
                <div class="card single">
                  <img src={frame.solo.img} alt={frame.solo.name}>
                </div>
                <figcaption>{frame.solo.name}</figcaption>
              </figure>
            {/if}
          {/each}
        </div>
        <em style="margin-top:.8rem;">Rotation : {team.rotation}</em>
      {/each}
    </div>
  </div>

  <!-- ─── Wonder Personae ─── -->
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

  <!-- ─── Stats ─── -->
  <div class="section">
    <h2>Stats &amp; Core Stats</h2>
    <ul>
      {#each d.statsCombined as s}
        <li>{s}</li>
      {/each}
    </ul>
  </div>
</div>

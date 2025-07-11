<script lang="ts">
  import { yuiData as d } from './data';

  /* Regroupe Okyann + Puppet dans un même cadre double */
  function frames(members) {
    const clean = members.filter(m => m.img);
    const list: any[] = [];
    for (let i = 0; i < clean.length; i++) {
      const m = clean[i];
      if (m.name === 'Okyann' && clean[i + 1]?.name === 'Puppet') {
        list.push({ double: true, pair: [m, clean[i + 1]] });
        i++;
      } else if (m.name === 'Puppet' && clean[i - 1]?.name === 'Okyann') {
        continue;
      } else {
        list.push({ double: false, solo: m });
      }
    }
    return list;
  }

  /* ─── Données & fallback ─── */
  const why = d.awarenessReasons ?? {};
  const pros = [
    "Elle peut attaquer souvent ; chaque attaque réduit la DEF ennemie vs Elec",
    "Gros dégâts monocible : idéale contre les boss"
  ];
  const cons = [
    "Pas de team optimisée pour le moment",
    "Perso peu intéressante sur le long terme"
  ];
</script>

<style>
  /* 1️⃣  Responsive : grand max et padding adaptatif */
  .page{
    width:100%;
    max-width:1400px;
    margin:0 auto;
    padding:0 clamp(1rem,4vw,4rem);
  }

  /* ─── Bannière ─── */
  .banner{
    display:flex;gap:1.5rem;align-items:center;justify-content:center;
    background:var(--bg-surface);padding:1.5rem;border-radius:1rem;
    flex-wrap:wrap;                         /* mobile friendly */
  }
  .tier{border-collapse:collapse;font-size:1.1rem;min-width:220px;}
  .tier th,.tier td{border:1px solid var(--border);padding:.5rem 1rem;text-align:center;}
  .tier td.t05{background:linear-gradient(90deg,#E02828,#FF8C00);color:#fff;font-weight:700;}
  .tier td.t1 {background:#FF8C00;color:#fff;font-weight:700;}

  /* ─── Sections ─── */
  h2{font-size:clamp(1.35rem,2vw,1.7rem);}
  .section{margin:2rem 0;}

  .table{width:100%;border-collapse:collapse;font-size:.95rem;}
  .table th,.table td{border:1px solid var(--border);padding:.45rem;text-align:left;}

  /* Pros / Cons bullet styles identiques à Joker */
  .prosList,.consList{margin:0;padding-left:1.1rem;list-style:none;}
  .prosList li::before{content:\"+\";margin-right:.4rem;font-weight:700;color:#57d97c;}
  .consList li::before{content:\"−\";margin-right:.4rem;font-weight:700;color:#ff5c5c;}

  /* Weapon Grid — 2 cols sur mobile, 4+ sur desktop */
  .weaponGrid{
    display:grid;gap:1rem;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  }
  .weaponItem{display:flex;flex-direction:column;align-items:center;text-align:center;}
  .weaponItem img{width:150px;border-radius:.4rem;margin-bottom:.4rem;}
  .weaponItem span{font-size:.85rem;line-height:1.25;}
  .weaponItem span br{display:block;margin-bottom:.25rem;} /* légèrement d’air autour du passif */

  /* Teams */
  .teamGrid{display:flex;flex-direction:column;gap:2rem;align-items:center;}
  .teamRow{
    display:flex;gap:4%;flex-wrap:wrap;justify-content:center;
  }
  .frame{display:flex;flex-direction:column;align-items:center;margin:0;flex:0 0 auto;}
  .frame.single{width:240px;} .frame.double{width:480px;}
  .card{
    width:100%;height:300px;padding:.25%;border:2px solid #fff;overflow:hidden;
    background:var(--bg-surface) url('/images/character_background.png') center/cover no-repeat;
    display:flex;align-items:center;justify-content:center;
  }
  .card.double{display:grid;grid-template-columns:1fr 1fr;}
  .card img{max-width:100%;max-height:100%;object-fit:contain;border-radius:.75rem;}

  figcaption{margin-top:.35rem;font-size:.85rem;text-align:center;}

  /* Personae Grids */
  .wonderGrid{
    display:grid;gap:1.2rem;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    justify-items:center;
  }
  .wonderGrid img{width:220px;height:220px;object-fit:contain;border:2px solid transparent;border-radius:.7rem;}

  /* Icônes Révélations : upsize ×2 */
  .revelations-table td img{width:48px;}

  /* Breakpoints : mobile */
  @media (max-width:620px){
    .banner img{width:120px;}
    .frame.single{width:180px;} .frame.double{width:360px;}
    .card{height:240px;}
    .weaponItem img{width:110px;}
  }
</style>

<svelte:head><title>Yui – Guide</title></svelte:head>

<div class="page">
  <h1>Yui</h1>

  <!-- ─── Bannière ─── -->
  <div class="banner">
    <img src="/images/yui-icon.webp" alt="Yui" style="width:180px;border-radius:.75rem;">
    <table class="tier">
      <thead><tr><th>General</th><th>Bossing</th></tr></thead>
      <tbody><tr>
        <td class="t1">{d.tier.general}</td>
        <td class="t05">{d.tier.boss}</td>
      </tr></tbody>
    </table>
  </div>

  <!-- ─── Présentation ─── -->
  <div class="section">
    <h2>Présentation</h2>
    <table class="table" style="max-width:500px;margin:0 auto;">
      <tbody>
        <tr><th>Élément</th><td><img src={d.element.icon} alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.element.name}</td></tr>
        <tr><th>Rôle</th><td><img src={d.roleIcon}     alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.role}</td></tr>
        <tr><th>Cible</th><td>{d.targetType}</td></tr>
      </tbody>
    </table>
  </div>

  <!-- ─── Pros & Cons ─── -->
  <div class="section">
    <h2>Pros&nbsp;&amp;&nbsp;Cons</h2>
    <table class="table">
      <tbody>
        <tr>
          <th><img src="/images/icons/thumb-up-green.png" alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">Pros</th>
          <td><ul class="prosList">{#each pros as p}<li>{p}</li>{/each}</ul></td>
        </tr>
        <tr>
          <th><img src="/images/icons/thumb-down-red.png" alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">Cons</th>
          <td><ul class="consList">{#each cons as c}<li>{c}</li>{/each}</ul></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ─── Weapons (avec passif sous le nom) ─── -->
  <div class="section">
    <h2>Weapons</h2>
    <div class="weaponGrid">
      {#each d.weapons as w}
        <div class="weaponItem">
          <img src={w.img} alt={w.name}>
          <span>{@html w.name}<br><em style="opacity:.75;">{w.passive}</em></span>
        </div>
      {/each}
    </div>
  </div>

  <!-- ─── Révélations ─── -->
  <div class="section">
    <h2>Révélations recommandées</h2>
    <table class="table revelations-table">
      <thead><tr><th colspan="2">Set</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.revelations as r}
          <tr>
            <td>{r.name}</td>
            <td style="text-align:center;">
              <img src={"/images/revelations/" + r.name.toLowerCase() + ".png"} alt={r.name + " icon"} />
            </td>
            <td>{r.why}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <h3 style="margin-top:1rem;">Meilleures substats</h3>
    <ul>{#each d.bestSubstats as s}<li>{s}</li>{/each}</ul>
  </div>

  <!-- ─── Awareness ─── -->
  <div class="section">
    <h2>Priorité d'Awareness</h2>
    <p style="font-weight:700;margin-bottom:.6rem;">A1 → A6 → A4</p>
    <table class="table">
      <thead><tr><th>Awareness</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.awarenessPrio as a}<tr><td>{a}</td><td>{why[a]}</td></tr>{/each}
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
              <figure class="frame double">
                <div class="card double">
                  {#each frame.pair as m}<img src={m.img} alt={m.name}>{/each}
                </div><figcaption>Okyann&nbsp;ou&nbsp;Puppet</figcaption>
              </figure>
            {:else}
              <figure class="frame single">
                <div class="card single"><img src={frame.solo.img} alt={frame.solo.name}></div>
                <figcaption>{frame.solo.name}</figcaption>
              </figure>
            {/if}
          {/each}
        </div>
        <em style="margin-top:.6rem;">Rotation&nbsp;: {team.rotation}</em>
      {/each}
    </div>
  </div>

  <!-- ─── Wonder Personae ─── -->
  <div class="section">
    <h2>Wonder Personae</h2>

    <h3>Core Personae (Early)</h3>
    <div class="wonderGrid" style="margin-bottom:1.8rem;">
      {#each d.corePersonaeEarly as p}
        <figure><img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption></figure>
      {/each}
    </div>

    <h3>Ideal Personae (Late)</h3>
    <div class="wonderGrid">
      {#each d.wonderPersonae as p}
        <figure><img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption></figure>
      {/each}
    </div>
  </div>

  <!-- ─── Stats ─── -->
  <div class="section">
    <h2>Stats &amp; Core Stats</h2>
    <ul>{#each d.statsCombined as s}<li>{s}</li>{/each}</ul>
  </div>
</div>

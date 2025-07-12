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

  const why           = d.awarenessReasons ?? {};
  const pros: string[]    = d.pros;
  const cons: string[]    = d.cons;
  const skills         = d.skills;
  const rotation       = d.rotation;
  const bestSubstats   = d.bestSubstats;
  const coreEarly      = d.corePersonaeEarly;
</script>

<style>
  :root { --font-h2:1.55rem; }
  .page { padding-left:10%; padding-right:4%; }

  /* Bannière */
  .banner { display:flex; gap:1.5rem; align-items:center; justify-content:center; background:var(--bg-surface); padding:1.5rem; border-radius:1rem; }
  .tier { border-collapse:collapse; font-size:1.2rem; min-width:240px; }
  .tier th, .tier td { border:1px solid var(--border); padding:.6rem 1.2rem; text-align:center; }
  .tier td.t1 { background: orange; color:#fff; font-weight:700; }
  .tier td.t05 { background: #ff4500; color:#fff; font-weight:700; }

  h2 { font-size:var(--font-h2); }
  .section { margin:2.5rem 0; }
  .table { width:100%; border-collapse:collapse; }
  .table th, .table td { border:1px solid var(--border); padding:.5rem; text-align:left; }

  .presentationTable { width:75%; margin:0 auto; }
  .prosList, .consList { margin:0; padding-left:1.1rem; list-style:none; }
  .prosList li::before { content:"+"; margin-right:.45rem; font-weight:700; color:#57d97c; }
  .consList li::before { content:"−"; margin-right:.45rem; font-weight:700; color:#ff5c5c; }
  .pc-icon { width:20px; height:20px; margin-right:.35rem; vertical-align:middle; }

  .weaponGrid { display:grid; gap:1rem; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); }
  .weaponItem { display:flex; gap:.8rem; align-items:center; }
  .weaponItem img { width:150px; border-radius:.4rem; }

  .teamGrid { display:flex; flex-direction:column; gap:2rem; align-items:center; }
  .teamRow { display:flex; gap:5%; flex-wrap:nowrap; justify-content:center; align-items:flex-start; }

  .frame { display:flex; flex-direction:column; align-items:center; margin:0; flex:0 0 auto; }
  .frame.single { width:260px; }
  .frame.double { width:520px; }

  .card { position:relative; width:100%; height:320px; box-sizing:border-box; padding:0.25%; border:2px solid #fff; background-color:var(--bg-surface); background-image:url('/images/character_background.png'); background-size:cover; background-position:center; overflow:hidden; display:flex; align-items:center; justify-content:center; }
  .card.single img, .card.double img { max-width:100%; max-height:100%; object-fit:contain; border-radius:.75rem; }
  .card.double { display:grid; grid-template-columns:1fr 1fr; }

  .wonderGrid { display:grid; gap:1.5rem; grid-template-columns:repeat(auto-fit,minmax(270px,1fr)); justify-items:center; }
  .wonderGrid figure { display:grid; gap:.5rem; justify-items:center; text-align:center; }
  .wonderGrid img { width:270px; height:270px; object-fit:contain; border:2px solid transparent; border-radius:.75rem; }

  .skills img { width:24px; margin-right:.35rem; vertical-align:middle; }

  @media (max-width: 768px) {
    .page { padding-left:1rem; padding-right:1rem; }
    .teamRow { flex-direction:column; gap:.75rem; }
    .frame { margin:0 auto; }
    .frame.single { width:130px; }
    .frame.double { width:260px; }
  }
</style>

<svelte:head><title>Yui – Guide</title></svelte:head>

<div class="page">
  <h1>Yui</h1>

  <!-- Bannière -->
  <div class="banner">
    <img src="/images/yui-icon.webp" alt="Yui" style="width:200px;border-radius:.75rem;">
    <table class="tier">
      <thead><tr><th>General</th><th>Bossing∕Guilde</th></tr></thead>
      <tbody><tr>
        <td class={d.tier.general==='T1'?'t1':''}>{d.tier.general}</td>
        <td class={d.tier.boss==='T0.5'?'t05':''}>{d.tier.boss}</td>
      </tr></tbody>
    </table>
  </div>

  <!-- Présentation -->
  <div class="section">
    <h2>Présentation</h2>
    <table class="table presentationTable">
      <tbody>
        <tr>
          <th>Élément</th>
          <td><img src={d.element.icon} alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.element.name}</td>
        </tr>
        <tr>
          <th>Rôle</th>
          <td><img src={d.roleIcon} alt="" style="width:20px;margin-right:.35rem;vertical-align:middle;">{d.role}</td>
        </tr>
        <tr><th>Cible</th><td>{d.targetType}</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Pros & Cons -->
  <div class="section">
    <h2>Pros&nbsp;&amp;&nbsp;Cons</h2>
    <table class="table prosCons">
      <tbody>
        <tr>
          <th><img src="/images/icons/thumb-up-green.png" alt="" class="pc-icon">Pros</th>
          <td><ul class="prosList">{#each pros as p}<li>{p}</li>{/each}</ul></td>
        </tr>
        <tr>
          <th><img src="/images/icons/thumb-down-red.png" alt="" class="pc-icon">Cons</th>
          <td><ul class="consList">{#each cons as c}<li>{c}</li>{/each}</ul></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Skills -->
  <div class="section">
    <h2>Skills</h2>
    <table class="table skills">
      <thead><tr><th>Skill</th><th>Description</th></tr></thead>
      <tbody>
        {#each skills as s}
          <tr>
            <td>
              {#if s.type === 'Passive'}
                <img src="/images/icons/passive.webp" alt="Passif">
              {:else if s.type === 'Elec'}
                <img src="/images/icons/elec.webp" alt="Elec">
              {:else if s.type === 'Physique'}
                <img src="/images/icons/physique.webp" alt="Physique">
              {:else if s.type === 'Curse'}
                <img src="/images/icons/curse.webp" alt="Curse">
              {/if}
              {s.name}
            </td>
            <td>{s.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p style="margin-top:1rem;"><strong>Rotation conseillée&nbsp;:</strong> {rotation}</p>
  </div>

<!-- Weapons -->
<div class="weaponGrid">
  {#each d.weapons as w}
    <div class="weaponItem">
      <img src={w.img} alt={w.name}>
      <span>
        <strong>{w.name}</strong><br>
        <em>{@html w.passive}</em>
      </span>
    </div>
  {/each}
</div>

  <!-- Révélations -->
  <div class="section">
    <h2>Révélations recommandées</h2>
    <table class="table revelations-table">
      <thead><tr><th colspan="2">Set</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.revelations as r}
          <tr>
            <td>{r.name}</td>
            <td style="text-align:center;">
              <img src={`/images/revelations/${r.name.toLowerCase()}.png`} alt={`${r.name} icon`} />
            </td>
            <td>{r.why}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <h3 style="margin-top:1.2rem;">Meilleures substats</h3>
    <ul>{#each bestSubstats as s}<li>{s}</li>{/each}</ul>
  </div>

  <!-- Awareness -->
  <div class="section">
    <h2>Priorité d'Awareness</h2>
    <p style="font-weight:700;margin-bottom:.6rem;">{d.awarenessPrio.join(' > ')}</p>
    <table class="table">
      <thead><tr><th>Awareness</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.awarenessPrio as a}
          <tr><td>{a}</td><td>{why[a]}</td></tr>
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
          {#each frames(team.members) as frame}
            {#if frame.double}
              <figure class="frame double">
                <div class="card double">
                  {#each frame.pair as m}<img src={m.img} alt={m.name}>{/each}
                </div>
                <figcaption>Okyann&nbsp;ou&nbsp;Puppet</figcaption>
              </figure>
            {:else}
              <figure class="frame single">
                <div class="card single">
                  <img src={frame.solo.img} alt={frame.solo.name}>
                </div>
                <figcaption>{frame.solo.name}</figcaption>
              </figure>
            {/if}
          {/each}
        </div>
        <em style="margin-top:.8rem;">Rotation&nbsp;: {team.rotation}</em>
      {/each}
    </div>
  </div>

  <!-- Wonder Personae -->
  <div class="section">
    <h2>Wonder Personae</h2>

    <h3>Core&nbsp;Personae&nbsp;(Early)</h3>
    <div class="wonderGrid" style="margin-bottom:2rem;">
      {#each coreEarly as p}
        <figure><img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption></figure>
      {/each}
    </div>

    <h3>Ideal&nbsp;Personae&nbsp;(Late)</h3>
    <div class="wonderGrid">
      {#each d.wonderPersonae as p}
        <figure><img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption></figure>
      {/each}
    </div>
  </div>

  <!-- Stats & Core Stats -->
  <div class="section">
    <h2>Stats&nbsp;&amp;&nbsp;Core Stats</h2>
    <ul>{#each d.statsCombined as s}<li>{s}</li>{/each}</ul>
  </div>
</div>

<script lang="ts">
  import { jokerData as d } from './data';

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
  const why              = d.awarenessReasons ?? {};

  const pros:string[]    = d.pros ?? [
    'Très bons dégâts Curse en AoE',
    'Self-buff ATK + Will of Rebellion faciles à empiler',
    'Excellent pour nettoyer des vagues rapidement'
  ];

  /* Seuls deux “Cons” valides, cf. remarques utilisateur */
  const cons:string[]    = [
    'Très dépendant de Rin pour maximiser les dégâts',
    'Risque de power-creep sur le long terme (peut-être avec Berry)'
  ];

  /* Skills (tirés de Prydwen + Game8) */
  const skills = d.skills ?? [
    {
      id : 1,
      name : 'Trickster’s Plunder',
      type : 'Curse',
      description : 'Inflige 180 % ATK dégâts Curse à un ennemi et se confère 1 cumul de Will of Rebellion.'
    },
    {
      id : 2,
      name : 'Phantom Omen',
      type : 'Curse',
      description : 'Inflige 130 % ATK dégâts Curse à tous les ennemis et applique le statut Weaken pendant 2 tours.'
    },
    {
      id : 3,
      name : 'Arsène’s Chains',
      type : 'Curse',
      description : 'Inflige 250 % ATK dégâts Curse à un ennemi (+ 50 % si affaibli) et donne une action supplémentaire.'
    },
    {
      id : 4,
      name : 'Will of Rebellion',
      type : 'Passive',
      description : 'À chaque ennemi vaincu, +1 cumul ; chaque cumul octroie +6 % ATK (max 10).'
    }
  ];

  /* Rotation idéale */
  const rotation = 'Trickster’s Plunder → Arsène’s Chains (→ Phantom Omen dans certaines conditions spéciales)';

  /* Substats conseillées */
  const bestSubstats = d.bestSubstats ?? [
    'Crit Rate',
    'ATK %',
    'Crit Damage',
    'Speed'
  ];

  /* Core Personae pour early-game (≤ Rank V) */
  const coreEarly = d.corePersonaeEarly ?? [
    { name:'Succubus',      img:'/images/personae/succubus.png' },
    { name:'Leanan Sidhe',  img:'/images/personae/leanan_sidhe.png' },
    { name:'Janosik',       img:'/images/personae/janosik.png' },
    { name:'White Rider',   img:'/images/personae/white_rider.png' }
  ];
</script>

<style>
  :root{
    /* facile à ajuster ensuite */
    --font-h2:1.55rem;
  }

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
  h2{font-size:var(--font-h2);}
  .section{margin:2.5rem 0;}
  .table{width:100%;border-collapse:collapse;}
  .table th,.table td{border:1px solid var(--border);padding:.5rem;text-align:left;}

  /* Présentation réduite & centrée */
  .presentationTable{width:75%;margin:0 auto;}

  /* ─── Pros & Cons : puces custom ─── */
  .prosList, .consList{margin:0;padding-left:1.1rem;list-style:none;}
  .prosList li::before{
    content:"+";margin-right:.45rem;font-weight:700;color:#57d97c; /* vert clair */
  }
  .consList li::before{
    content:"−";margin-right:.45rem;font-weight:700;color:#ff5c5c; /* rouge */
  }

  /* Assure un peu d’espace autour des icônes dans <th> */
  .pc-icon{width:20px;height:20px;margin-right:.35rem;vertical-align:middle;}

  /* ─── Weapons ─── */
  .weaponGrid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}
  .weaponItem{display:flex;gap:.8rem;align-items:center;}
  .weaponItem img{width:150px;border-radius:.4rem;}

  /* ─── Teams ─── */
  .teamGrid{display:flex;flex-direction:column;gap:2rem;align-items:center;}
  .teamRow{
    display:flex;gap:5%;flex-wrap:nowrap;
    justify-content:center;align-items:flex-start;
  }

  /* ─── Figure (cadre + nom) ─── */
  .frame{display:flex;flex-direction:column;align-items:center;margin:0;flex:0 0 auto;}
  .frame.single{width:260px;}
  .frame.double{width:520px;}

  /* ─── Carte : fond + bordure + image(s) ─── */
  .card{
    position:relative;
    width:100%;height:320px;
    box-sizing:border-box;padding:0.25%;
    border:2px solid #fff;
    background-color:var(--bg-surface);
    background-image:url('/images/character_background.png');
    background-size:cover;background-position:center;background-repeat:no-repeat;
    overflow:hidden;
    display:flex;align-items:center;justify-content:center;
  }
  .card.single img,.card.double img{
    max-width:100%;max-height:100%;
    object-fit:contain;border-radius:.75rem;
  }
  .card.double{display:grid;grid-template-columns:1fr 1fr;}
  figcaption{margin-top:.35rem;font-size:.9rem;text-align:center;}

  /* ─── Wonder Personae ─── */
  .wonderGrid{
    display:grid;gap:1.5rem;
    grid-template-columns:repeat(auto-fit,minmax(270px,1fr));
    justify-items:center;
  }
  .wonderGrid figure{display:grid;gap:.5rem;justify-items:center;text-align:center;}
  .wonderGrid img{width:270px;height:270px;object-fit:contain;border:2px solid transparent;border-radius:.75rem;}

  /* Icônes Révélations upsize */
  .revelations-table td img{width:240px;}

  /* Skills */
  .skills img{width:24px;margin-right:.35rem;vertical-align:middle;}
</style>

<svelte:head><title>Joker – Guide</title></svelte:head>

<div class="page">
  <h1>Joker</h1>

  <!-- ─── Bannière ─── -->
  <div class="banner">
    <img src="/images/joker-icon.webp" alt="Joker" style="width:200px;border-radius:.75rem;">
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

  <!-- ─── Pros & Cons ─── -->
  <div class="section">
    <h2>Pros&nbsp;&amp;&nbsp;Cons</h2>
    <table class="table prosCons">
      <tbody>
        <tr>
          <th>
            <img src="/images/icons/thumb-up-green.png" alt="" class="pc-icon">
            Pros
          </th>
          <td>
            <ul class="prosList">
              {#each pros as p}<li>{p}</li>{/each}
            </ul>
          </td>
        </tr>
        <tr>
          <th>
            <img src="/images/icons/thumb-down-red.png" alt="" class="pc-icon">
            Cons
          </th>
          <td>
            <ul class="consList">
              {#each cons as c}<li>{c}</li>{/each}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ─── Skills ─── -->
  <div class="section">
    <h2>Skills</h2>
    <table class="table skills">
      <thead><tr><th>Skill</th><th>Description</th></tr></thead>
      <tbody>
        {#each skills as s}
          <tr>
            <td>
              {#if s.type === 'Passive'}
                <img src="/images/icons/passive.webp" alt="Passif">{s.name}
              {:else}
                <img src={d.element.icon} alt="Curse">{s.name}
              {/if}
            </td>
            <td>{s.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <p style="margin-top:1rem;"><strong>Rotation conseillée&nbsp;:</strong> {rotation}</p>
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
    <table class="table revelations-table">
      <thead><tr><th colspan="2">Set</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.revelations as r}
          <tr>
            <td>{r.name}</td>
            <td style="text-align:center;">
              {#if r.name.startsWith('Departure')}
                <img src="/images/revelations/departure.png" alt="Departure icon" />
              {:else if r.name.startsWith('Hindrance')}
                <img src="/images/revelations/hindrance.png" alt="Hindrance icon" />
              {/if}
            </td>
            <td>{r.why}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <!-- Meilleures substats -->
    <h3 style="margin-top:1.2rem;">Meilleures substats</h3>
    <ul>{#each bestSubstats as s}<li>{s}</li>{/each}</ul>
  </div>

  <!-- ─── Awareness ─── -->
  <div class="section">
    <h2>Priorité d'Awareness</h2>
    <p style="font-weight:700;margin-bottom:.6rem;">A4 → A6 → A2 → A1</p>
    <table class="table">
      <thead><tr><th>Awareness</th><th>Pourquoi</th></tr></thead>
      <tbody>
        {#each d.awarenessPrio as a}
          <tr><td>{a}</td><td>{why[a] ?? '—'}</td></tr>
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
              <!-- double -->
              <figure class="frame double">
                <div class="card double">
                  {#each frame.pair as m}
                    <img src={m.img} alt={m.name}>
                  {/each}
                </div>
                <figcaption>Okyann&nbsp;ou&nbsp;Puppet</figcaption>
              </figure>
            {:else}
              <!-- simple -->
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

  <!-- ─── Wonder Personae ─── -->
  <div class="section">
    <h2>Wonder Personae</h2>

    <!-- Core Early -->
    <h3>Core&nbsp;Personae&nbsp;(Early)</h3>
    <div class="wonderGrid" style="margin-bottom:2rem;">
      {#each coreEarly as p}
        <figure><img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption></figure>
      {/each}
    </div>

    <!-- Ideal Late -->
    <h3>Ideal&nbsp;Personae&nbsp;(Late)</h3>
    <div class="wonderGrid">
      {#each d.wonderPersonae as p}
        <figure><img src={p.img} alt={p.name}><figcaption>{p.name}</figcaption></figure>
      {/each}
    </div>
  </div>

  <!-- ─── Stats ─── -->
  <div class="section">
    <h2>Stats&nbsp;&amp;&nbsp;Core Stats</h2>
    <ul>
      {#each d.statsCombined as s}<li>{s}</li>{/each}
    </ul>
  </div>
</div>

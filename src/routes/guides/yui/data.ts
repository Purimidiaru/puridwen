/* =========================================================================
   Yui – Build & Guide  (Persona 5: The Phantom X)
   ======================================================================= */

export const yuiData = {
  /* —— Meta —— */
  element: { name: "Elec", icon: "/images/icons/elec.webp" },
  role: "Assassin",
  roleIcon: "/images/icons/assassin.webp",
  targetType: "Multi-Target",
  tier: { general: "T1", boss: "T0.5" },

  /* —— Pros & Cons —— */
  pros: [
    "Elle peut attaquer souvent, et à chaque fois qu'elle va attaquer, elle va réduire la défense des ennemis par rapport au type Elec",
    "Gros dégâts en monocible = Idéal contre les boss"
  ],
  cons: [
    "Pas de team optimisé pour le moment",
    "Perso peu intéressant sur le long terme"
  ],

  /* —— Skills & Rotation —— */
  rotation: "Sparky Surprise → Electric Bomb → Meta Dynamite",
  skills: [
    {
      id: 1,
      name: "Electric Bomb",
      type: "Elec",
      description: "Inflige des dégâts Elec à un ennemi (185,4% Attack). Si l'ennemi n'est pas Shocked, il y a 68,3% de chances de lui infliger Électrocution pendant 2 tours. Si l'ennemi est déjà électrocuté, +30% de dégats."
    },
    {
      id: 2,
      name: "Meta Dynamite",
      type: "Elec",
      description: "Inflige des dégâts Électriques à tous les ennemis (59,6% Attack). +25% de dégats avec le skill sur la cible principale."
    },
    {
      id: 3,
      name: "Sparky Surprise",
      type: "Elec",
      description: "Octroie l'effet 'Player 2' à 1 allié pendant 2 tours et +39,0% Attack pour Yui. Pendant 2 tours, lorsqu’un allié avec Player 2 inflige des dégâts avec une compétence, Yui effectue une attaque de suivi infligeant des dégâts Elec (132,9% Attack) avec un max 2 fois. Augmente les chances d’activer Coopération Joyeuse de 10% pendant 2 tours."
    },
    {
      id: 4,
      name: "Thief Tactics",
      type: "Elec",
      description: "[HIGHLIGHT] : +34,2% Attack et +24,4% de dégâts des attaques de suivi de 24,4 % de l’Attaque pendant 2 tours. Active les attaques de suivi pendant 2 tours après que des alliés ont infligé des dégâts avec des skills."
    },
    {
      id: 5,
      name: "Virtual Landowner",
      type: "Passive",
      description: "+36,0% de dégâts des attaques de suivi sur les ennemis Shocked."
    },
    {
      id: 6,
      name: "Let's Go Together",
      type: "Passive",
      description: "Quand un allié à le buff Player 2, +12,0% de Crit Rate et +12% d'Attack pour cet allié et Yui."
    }
  ],

  /* —— Weapons —— */
  weapons: [
    {
      name: "Cyber Jammers (5★)",
      img: "/images/weapons/cyber_jammers.png",
      passive: 
      "Augmente le taux de coup critique de 7,3 | 7,3 | 9,5 | 9,5 | 11,7 | 11,7 | 13,9 %.<br>" +
      "Lors d’une attaque de suivi, augmente les dégâts Elec de 9,7 | 12,6 | 12,6 | 15,5 | 15,5 | 18,4 | 18,4 % pendant 1 tour. Cumulable jusqu’à 2 fois."
    },
    {
      name: "Meta Directors (4★)",
      img: "/images/weapons/meta_directors.png",
      passive: 
      "Augmente le taux de critique de 18,1 % | 18,1 % | 23,5 % | 23,5 % | 28,9 % | 28,9 % | 34,3 %.<br>" +
      "Augmente les dégâts des attaques de suivi de 26,0 % | 34,0 % | 34,0 % | 42,0 % | 42,0 % | 50,0 % | 50,0 %.<br>" +
      "Lorsque qu'une attaque de suivi est déclenchée par un allié avec Player 2, ou par un allié infligeant des dégâts Elec via un skill, les dégâts des attaques de suivi sont augmentés de 26,0 % | 34,0 % | 34,0 % | 42,0 % | 42,0 % | 50,0 % | 50,0 % supplémentaires.<br>" +
      "Lors d’une attaque de suivi, augmente les dégâts Elec de 9,7 | 12,6 | 12,6 | 15,5 | 15,5 | 18,4 | 18,4 % pendant 1 tour. Cumulable jusqu’à 2 fois."
    }
  ],

  /* —— Révélations —— */
  revelations: [
    {
      name: "Renewal",
      why:
        "Ça augmente les dégâts de Yui de base mais surtout ça va augmenter les dégâts Elec de Yui"
    },
    {
      name: "Growth",
      why:
        "Ça augmente les dégâts critiques des attaques de suivi de 50 %, et Yui profite beaucoup des attaques de suivi"
    }
  ],

  /* —— Substats —— */
  bestSubstats: [
    "Crit Multiplication",
    "Crit Rate",
    "Pierce",
    "Damage"
  ],

  /* —— Awareness —— */
  awarenessPrio: ["A1", "A6", "A4"],
  awarenessReasons: {
    A1: "Augmente le crit rate de 30 %",
    A6:
      "Dégâts de follow-up augmentés de 110 % en single foe ET deviennent des AoE",
    A4:
      "Augmente le dégâts crit des follow-up attaque de 40 % pendant 2 tours sous le highlight"
  },

  /* —— Teams —— */
  bestTeams: [
    {
      members: [
        { name: "Yui", img: "/images/characters/yui.png" },
        { name: "Closer", img: "/images/characters/closer.png" },
        { name: "Marian", img: "/images/characters/marian.png" },
        { name: "Okyann", img: "/images/characters/oykann.png" },
        { name: "OU" },
        { name: "Puppet", img: "/images/characters/puppet.png" }
      ],
      rotation: "Yui → Closer → Wonder → Marian"
    },
    {
      members: [
        { name: "Yui", img: "/images/characters/yui.png" },
        { name: "Closer", img: "/images/characters/closer.png" },
        { name: "Soy", img: "/images/characters/soy.png" },
        { name: "Okyann", img: "/images/characters/oykann.png" },
        { name: "OU" },
        { name: "Puppet", img: "/images/characters/puppet.png" }
      ],
      rotation: "Yui → Closer → Wonder → Soy"
    }
  ],

  /* —— Wonder Personae —— */
  corePersonaeEarly: [
    { name: "Yurlungur", img: "/images/personae/yurlungur.png" },
    { name: "Ame-no-Uzume", img: "/images/personae/ame-no-uzume.png" },
    { name: "Janosik", img: "/images/personae/janosik.png" },
    { name: "Sarasvatil", img: "/images/personae/sarasvatil.png" }
  ],
  wonderPersonae: [
    { name: "Thor", img: "/images/personae/thor.png" },
    { name: "Hariti", img: "/images/personae/hariti.png" },
    { name: "Pixie", img: "/images/personae/pixie.png" }
  ],

  /* —— Stats —— */
  statsCombined: [
    "Attack: 2960",
    "Total Mult. + : 43%",
    "Crit Rate: 37%",
    "Crit Mult.: 177%"
  ]
};

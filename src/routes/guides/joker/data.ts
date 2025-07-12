/* =========================================================================
   Joker – Build & Guide  (Persona 5: The Phantom X)
   ======================================================================= */

export const jokerData = {
  /* —— Meta —— */
  element: { name: "Curse", icon: "/images/icons/curse.webp" },
  role: "Sweeper",
  roleIcon: "/images/icons/sweeper.webp",
  targetType: "Multi-Target",
  tier: { general: "T0", boss: "T0" },

  /* —— Rotation skills —— */
  rotationSkills: [
    { order: "1", skill: "Trickster's Plunder", scenario: "T1 — obtient 3 Will of Rebellion" },
    { order: "2", skill: "Arsène's Chains",     scenario: "T1 bis — si Extra Turn" },
    { order: "3", skill: "Phantom Omen",        scenario: "Burst quand 3 stacks" }
  ],

  /* —— Build —— */
  weapons: [
    {
      name: "Phoenix Dagger (5★)",
      img: "/images/weapons/phoenix_dagger.png",
      passive:
        "Augmente l'Attaque de 12,0 % | 12,0 % | 16,0 % | 16,0 % | 20,0 % | 20,0 % | 24,0 %.<br>" +
        "Lorsque l'on attaque un ennemi affecté par un malus, augmente l'Attaque de 19,1 % | 24,8 % | 24,8 % | 30,5 % | 30,5 % | 36,2 % | 36,2 %."
    },
    {
      name: "Machete (4★)",
      img: "/images/weapons/machete.png",
      passive:
        "Augmente l'Attaque de 30,0 % | 30,0 % | 39,0 % | 39,0 % | 48,0 % | 48,0 % | 57,0 %.<br>" +
        "Après avoir obtenu Will of Rebellion, augmente les dégâts Curse de Joker de 10,0 % | 13,0 % | 13,0 % | 16,0 % | 16,0 % | 19,0 % | 19,0 % pendant 2 tours. Cumulable jusqu'à 3 fois.<br>" +
        "Avec 3 cumuls ou plus de Will of Rebellion, les prochains dégâts de Joker sont augmentés de 23,0 % | 30,0 % | 30,0 % | 37,0 % | 37,0 % | 44,0 % | 44,0 %."
    }
  ],
  revelations: [
    { name: "Departure (Space)", why: "Après avoir vaincu un ennemi, augmente l'attaque de l'utilisateur de 30 % pendant 3 tours" },
    { name: "Hindrance (Sun/Moon/Star/Sky)", why: "Augmente les dégâts de Curse infligés aux ennemis affaiblis de 20 %" }
  ],

  /* —— Awareness —— */
  awarenessPrio: ["A4", "A6", "A2", "A1"],
  awarenessReasons: {
    A1: "Augmente les dégâts des skills sur la cible principale de 30 % et sur les autres cibles de 10 %",
    A2: "Lors d'une action supplémentaire, réduit le coût SP des skills de 80 %. Si le SP de Ren > 60 %, +50 % ATK",
    A4: "Highlight amélioré : +3 cumuls de Will of Rebellion gagnés",
    A6: "Après une action supplémentaire : si un ennemi <25 % PV → 250 % ATK dégâts (1×/ennemi/combat). Après avoir utilisé une compétence en action supplémentaire : 50 % ATK dégâts Curse à tous",
  },

  /* —— Teams —— */
  bestTeams: [
    {
      members: [
        { name: "Joker",  img: "/images/characters/joker.png"  },
        { name: "Leon",   img: "/images/characters/leon.png"   },
        { name: "Rin",    img: "/images/characters/rin.png"    },
        { name: "Okyann", img: "/images/characters/oykann.png" },
        { name: "OU" },                                          // séparateur visuel
        { name: "Puppet", img: "/images/characters/puppet.png" }
      ],
      rotation: "Rin → Leo → Wonder → Joker"
    },
    {
      members: [
        { name: "Joker",   img: "/images/characters/joker.png"   },
        { name: "Rin",     img: "/images/characters/rin.png"     },
        { name: "Mona",    img: "/images/characters/mona.png" },
        { name: "Okyann",  img: "/images/characters/oykann.png"  },
        { name: "OU" },
        { name: "Puppet",  img: "/images/characters/puppet.png"  }
      ],
      rotation: "Rin → Mona → Wonder → Joker"
    }
  ],

  /* —— Stats —— */
  statsCombined: [
    "Attack: 2960",
    "Total Mult. + : 43%",
    "Crit Rate: 37%",
    "Crit Mult.: 177%"
  ],

  /* —— Wonder Personae —— */
  wonderPersonae: [
    { name: "Alice",    img: "/images/personae/alice.png"    },
    { name: "Dionysus", img: "/images/personae/dionysus.png" },
    { name: "Surt",     img: "/images/personae/surt.png"     }
  ]
};

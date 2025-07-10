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
    { name: "Phoenix Dagger (5★)", img: "/images/weapons/phoenix_dagger.png" },
    { name: "Machete (4★)",        img: "/images/weapons/machete.png"        }
  ],
  revelations: [
    { name: "Departure (Space)", why: "Boosts ATK après élimination" },
    { name: "Hindrance (Sun/Moon/Star/Sky)",      why: "Augmente les dégâts de Curse infligés aux ennemis avec des affaiblissements de 20 %"    }
  ],

  /* —— Awareness —— */
  awarenessPrio: ["A4", "A6", "A2", "A1"],
  awarenessReasons: {
    A4: "DMG Bonus %",
    A6: "Crit Rate",
    A2: "PEN",
    A1: "ATK %"
  },

  /* —— Teams —— */
  bestTeams: [
    {
      members: [
        { name: "Joker",  img: "/images/joker.png"  },
        { name: "Leon",   img: "/images/leon.png"   },
        { name: "Rin",    img: "/images/rin.png"    },
        { name: "Oykann", img: "/images/oykann.png" }
      ],
      rotation: "Wonder → Leo → Rin → Joker"
    },
    {
      members: [
        { name: "Joker",  img: "/images/joker.png"  },
        { name: "Rin",    img: "/images/rin.png"     },
        { name: "Cattle", img: "/images/cattle.png"  },
        { name: "Oykann", img: "/images/oykann.png"  }
      ],
      rotation: "Wonder → Cattle → Rin → Joker"
    }
  ],

  /* —— Stats —— */
  statsCombined: [
    "30 % Crit Rate", "200 % Crit DMG", "10 + PEN",
    "Crit ≥ 60 %, ATK ≥ 5 000"
  ],

  /* —— Wonder Personae —— */
  wonderPersonae: [
    { name: "Alice",    img: "/images/personae/alice.png"    },
    { name: "Dionysus", img: "/images/personae/dionysus.png" },
    { name: "Surt",     img: "/images/personae/surt.png"     }
  ]
};

/* =========================================================================
   Joker – Build & Guide  (Persona 5: The Phantom X)
   ======================================================================= */

export const jokerData = {
  /* —— Meta —— */
  element: {
    name: "Curse",
    icon: "/icons/curse.png"
  },
  role: "DPS Burst",
  targetType: "Single-Target",
  tier: {
    general: "T0",
    boss:    "T0"
  },

  /* —— Rotation détaillée —— */
  rotationSkills: [
    { order: "1", skill: "Trickster's Plunder", scenario: "T1 — obtient 3 Will of Rebellion" },
    { order: "2", skill: "Arsène's Chains",     scenario: "T1 bis — si Extra Turn" },
    { order: "3", skill: "Phantom Omen",        scenario: "Burst quand 3 stacks" }
  ],
  rotationIdeal: "Wonder → Leo → Rin → Joker",

  /* —— Build —— */
  weapons: [
    { name: "Phoenix Dagger (5★)", img: "/images/phoenix.png" },
    { name: "Machete (4★)",       img: "/images/machete.png" }
  ],
  revelations: [
    { name: "Departure (2 set)", why: "Boosts ATK après élimination" },
    { name: "Ruin (4 set)",      why: "Augmente les dégâts Curse" }
  ],

  /* —— Awareness —— */
  awarenessPrio: ["A4", "A6", "A2", "A1"],
  awarenessReasons: {
    A4: "DMG Bonus %",
    A6: "Crit Rate",
    A2: "PEN",
    A1: "ATK %"
  },

  /* —— Équipes (deux lignes) —— */
  bestTeams: [
    [
      { name: "Joker",  img: "/images/joker.png" },
      { name: "Leon",   img: "/images/leon.png"  },
      { name: "Rin",    img: "/images/rin.png"   },
      { name: "Oykann", img: "/images/oykann.png"}
    ],
    [
      { name: "Joker",  img: "/images/joker.png" },
      { name: "Rin",    img: "/images/rin.png"    },
      { name: "Cattle", img: "/images/cattle.png" },
      { name: "Oykann", img: "/images/oykann.png" }
    ]
  ],

  /* —— Stats —— */
  statsCombined: [
    "30 % Crit Rate",
    "200 % Crit DMG",
    "10 + PEN",
    "Crit ≥ 60 %, ATK ≥ 5 000"
  ],

  /* —— Wonder Personae (affichées en bas) —— */
  wonderPersonae: [
    { name: "Alice",    img: "/images/alice.png" },
    { name: "Dionysus", img: "/images/dionysus.png" },
    { name: "Surt",     img: "/images/surt.png" }
  ]
};

export const jokerData = {
  /* ------ Meta ------ */
  element: { name: "Curse", icon: "/images/curse.png" },
  role: "DPS Burst",
  targetType: "Single-Target",
  tier: {
    general: "T0",
    boss:    "T0"
  },

  /* ------ Rotation détaillée ------ */
  rotationSkills: [
    { order: "1", skill: "Trickster's Plunder", scenario: "T1 — obtient 3 Will of Rebellion" },
    { order: "2", skill: "Arsène's Chains",      scenario: "T1 bis — si Extra Turn" },
    { order: "3", skill: "Phantom Omen",         scenario: "Burst quand 3 stacks" }
  ],
  rotationIdeal: "Wonder → Leo → Rin → Joker",

  /* ------ Weapons (max 2 lignes) ------ */
  weapons: [
    { img: "/images/phoenix.png", name: "Phoenix Dagger (5★)" },
    { img: "/images/machete.png", name: "Machete (4★)" }
  ],

  /* ------ Révélations (Nom + Pourquoi) ------ */
  revelations: [
    { name: "Departure (2 set)", why: "Boosts ATK après élimination" },
    { name: "Ruin (4 set)",      why: "Augmente les dégâts Curse" }
  ],

  awarenessPrio: ["A4", "A6", "A2", "A1"],

  /* ------ Teams (2 lignes) ------ */
  bestTeams: [
    [
      { name: "Joker",  img: "/images/joker.jpg" },
      { name: "Leon",   img: "/images/leon.png"  },
      { name: "Rin",    img: "/images/rin.png"   },
      { name: "Oykann", img: "/images/oykann.png"}
    ],
    [
      { name: "Joker",  img: "/images/joker.jpg"  },
      { name: "Rin",    img: "/images/rin.png"    },
      { name: "Cattle", img: "/images/cattle.png" },
      { name: "Oykann", img: "/images/oykann.png" }
    ]
  ],

  /* ------ Stats ------ */
  statsCombined: [
    "30 % CR %, 200 % CD %, 10 + PEN",
    "Crit Rate ≥ 60 %, ATK ≥ 5 000"
  ],

  wonderStats: "ATK %, DMG Bonus %, PEN"
};

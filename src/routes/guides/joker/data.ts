export const jokerData = {
  /* ------ Meta ------ */
  element: "Curse",
  role: "DPS Burst",
  targetType: "Single-Target",
  tier: {
    general: "T0",
    boss: "T0"
  },

  /* ------ Rotation détaillée ------ */
  rotationSkills: [
    { order: "1", skill: "Trickster's Plunder", scenario: "T1 — obtient 3 Will of Rebellion" },
    { order: "2", skill: "Arsène's Chains",      scenario: "T1 bis — si Extra Turn" },
    { order: "3", skill: "Phantom Omen",         scenario: "Burst quand 3 stacks" }
  ],
  rotationIdeal: "Wonder → Leo → Rin → Joker",

  /* ------ Build ------ */
  weapon: "Phoenix Dagger (5★)",
  revelations: ["Departure (2 set)", "Ruin (4 set)"],
  awarenessPrio: ["A4", "A6", "A2", "A1"],

  /* ------ Teams (2 lignes) ------ */
  bestTeams: [
    [
      { name: "Joker", img: "/images/joker-full.png" },
      { name: "Leon",  img: "/images/leon.png" },
      { name: "Rin",   img: "/images/rin.png" },
      { name: "Oykann",img: "/images/oykann.png" }
    ],
    [
      { name: "Joker", img: "/images/joker-full.png" },
      { name: "Rin",   img: "/images/rin.png" },
      { name: "Cattle",img: "/images/cattle.png" },
      { name: "Oykann",img: "/images/oykann.png" }
    ]
  ],

  /* ------ Stats ------ */
  statsBaseline: ["30 % CR %", "200 % CD %", "10+ PEN"],
  wonderStats:   "ATK %, DMG Bonus %, PEN",
  coreAttrGoals: "Crit Rate ≥ 60 %, Attack ≥ 5 000"
};

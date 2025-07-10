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
    { name: "Departure (Space)", why: "Après avoir vaincu un ennemi, augmente l'attaque de l'utilisateur de 30 % pendant 3 tours" },
    { name: "Hindrance (Sun/Moon/Star/Sky)",      why: "Augmente les dégâts de Curse infligés aux ennemis avec des affaiblissements de 20 %"    }
  ],

  /* —— Awareness —— */
  awarenessPrio: ["A4", "A6", "A2", "A1"],
  awarenessReasons: {
    A4: "Highlight Amélioré: Augmentez le nombre de cumuls de Will of Rebellion gagnés à 3.",
    A6: "Après une action supplémentaire, si des ennemis ont moins de 25 % de PV, infligez des dégâts équivalents à 250 % de l'attaque de Ren (une fois par ennemi et par combat). Après avoir utilisé une compétence lors d'une action supplémentaire, infligez des dégâts de Curse équivalents à 50 % de l'attaque à tous les ennemis.",
    A2: "Lors d'une action supplémentaire, diminue le coût de SP de skills de 80 %. Lorsque le SP de Ren dépassent 60 %, augmente l'attaque de 50 %.",
    A1: "Augmente les dégâts des skills sur le main target de 30 % et augmente les dégâts des skills sur les autres targets de 10 %."
  },

  /* —— Teams —— */
  bestTeams: [
    {
      members: [
        { name: "Joker",  img: "/images/joker.png"  },
        { name: "Leon",   img: "/images/leon.png"   },
        { name: "Rin",    img: "/images/rin.png"    },
        { name: "Oykann", img: "/images/oykann.png" },
        { name: "OU",     img: "" },
        { name: "Puppet", img: "/images/puppet.png" }
      ],
      rotation: "Rin → Leon → Wonder → Joker"
    },
    {
      members: [
        { name: "Joker",  img: "/images/joker.png"  },
        { name: "Rin",    img: "/images/rin.png"    },
        { name: "Morgana",img: "/images/morgana.png"},
        { name: "Oykann", img: "/images/oykann.png" },
        { name: "OU",     img: "" },
        { name: "Puppet", img: "/images/puppet.png" }
      ],
      rotation: "Rin → Morgana → Wonder → Joker"
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

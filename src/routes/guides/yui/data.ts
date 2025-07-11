/* =========================================================================
   Yui – Build & Guide  (Persona 5: The Phantom X)
   ====================================================================== */

export const yuiData = {
  /* —— Meta —— */
  element   : { name: "Elec", icon: "/images/icons/elec.webp" },
  role      : "Assassin",
  roleIcon  : "/images/icons/assassin.webp",
  targetType: "Single-Target",
  tier      : { general: "T1", boss: "T0.5" },

  /* —— Rotation skills —— */
  rotationSkills: [
    { order: "1", skill: "Skill 3", scenario: "T1 — burst opener" },
    { order: "2", skill: "Skill 1", scenario: "T1 bis — follow-up after burst" },
    { order: "3", skill: "Skill 2", scenario: "T2 — cooldown filler" }
  ],

  /* —— Build —— */
  weapons: [
    {
      name   : "Blitz Blade (5★)",
      img    : "/images/weapons/blitz_blade.png",
      passive: "+30 % Elec DMG lorsque les PV > 80 %"
    },
    {
      name   : "Thunder Kukri (4★)",
      img    : "/images/weapons/thunder_kukri.png",
      passive: "Attaques critiques : +15 % dégâts supplémentaires"
    }
  ],
  revelations: [
    {
      name: "Renewall",
      why : "Augmente l’ATK de base de Yui et surtout les dégâts Elec infligés"
    },
    {
      name: "Growth",
      why : "Les attaques de suivi gagnent +50 % crit dmg — Yui s’appuie beaucoup dessus"
    }
  ],

  /* —— Awareness —— */
  awarenessPrio: ["A1", "A6", "A4"],
  awarenessReasons: {
    A1: "Crit Rate +30 %",
    A6: "Dégâts de follow-up +110 % (monocible) et deviennent AoE",
    A4: "+40 % crit dmg sur les follow-ups pendant 2 tours sous Highlight"
  },

  /* —— Teams —— */
  bestTeams: [
    {
      members: [
        { name: "Yui",     img: "/images/characters/yui.png"     },
        { name: "Closer",  img: "/images/characters/closer.png"  },
        { name: "Marian",  img: "/images/characters/marian.png"  },
        { name: "Okyann",  img: "/images/characters/oykann.png"  },
        { name: "OU" },
        { name: "Puppet",  img: "/images/characters/puppet.png"  }
      ],
      rotation: "Yui → Closer → Wonder → Marian"
    },
    {
      members: [
        { name: "Yui",     img: "/images/characters/yui.png"     },
        { name: "Closer",  img: "/images/characters/closer.png"  },
        { name: "Soy",     img: "/images/characters/soy.png"     },
        { name: "Okyann",  img: "/images/characters/oykann.png"  },
        { name: "OU" },
        { name: "Puppet",  img: "/images/characters/puppet.png"  }
      ],
      rotation: "Yui → Closer → Wonder → Soy"
    }
  ],

  /* —— Stats —— */
  statsCombined: [
    "Attack : 3120",
    "Total Mult. + : 48 %",
    "Crit Rate : 42 %",
    "Crit Mult. : 184 %"
  ],

  /* —— Wonder Personae —— */
  corePersonaeEarly: [
    { name: "Yurlungur",      img: "/images/personae/yurlungur.png"      },
    { name: "Amano no Uzume", img: "/images/personae/amano_no_uzume.png" },
    { name: "Janosik",        img: "/images/personae/janosik.png"        },
    { name: "Sarasvati",      img: "/images/personae/sarasvati.png"      }
  ],
  wonderPersonae: [
    { name: "Thor",   img: "/images/personae/thor.png"   },
    { name: "Hariti", img: "/images/personae/hariti.png" },
    { name: "Pixie",  img: "/images/personae/pixie.png"  }
  ],

  /* —— Sub-stats —— */
  bestSubstats: [
    "Crit Mult.",
    "Crit Rate",
    "Pierce",
    "Damage"
  ]
};

// GÉNÉRÉ — ne pas éditer à la main (cf. scratchpad/lb-gen-ouvrages.js).
// Chaque fait (date, adresse, ouvrage, matière) provient du nom de fichier de la
// photographie d'archive et a été vérifié sur l'image elle-même.

export type Plaque = {
  etat: "Avant" | "En cours" | "Après" | "Détail";
  uuid: string;
  fichier: string;
  note: string;
};

export type Ouvrage = {
  slug: string;
  ouvrage: string;
  adresse: string;
  lieu: string;
  annee: string | null;
  matieres: string[];
  geste: string;
  resume: string;
  plaques: Plaque[];
};

export type Piece = {
  ouvrage: string;
  adresse: string;
  lieu: string;
  annee: string | null;
  matieres: string[];
  uuid: string;
  fichier: string;
  note: string;
};

export const OUVRAGES: Ouvrage[] = [
  {
    "slug": "cardinal-mercier-paris-9",
    "ouvrage": "Porte cochère",
    "adresse": "12 rue du Cardinal-Mercier",
    "lieu": "Paris 9e",
    "annee": "2018",
    "matieres": [
      "Chêne",
      "Fer forgé",
      "Vitrail d'imposte"
    ],
    "geste": "Décapage, reprise des panneaux, remise en teinte",
    "resume": "Une porte cochère à deux vantaux, mascarons de lion et pentures forgées, sous une imposte à vitrail. Décapée jusqu'au bois nu, ses panneaux repris un à un, puis remise dans sa teinte sombre d'origine.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "3157cafd-c835-4ccd-97f0-48b4b816d888",
        "fichier": "2018-09-porte-cochere-12-rue-du-cardinal-mercier-paris-9-avant.jpg",
        "note": "La porte déposée dans son état trouvé : teinte grisée, panneaux ouverts, ferrures encrassées."
      },
      {
        "etat": "En cours",
        "uuid": "e42772db-5370-47b4-88e0-6334e9ddb567",
        "fichier": "2018-09-porte-cochere-12-rue-du-cardinal-mercier-paris-9-travaux-cours-1.jpg",
        "note": "Décapage terminé. Le chêne réapparaît, avec la trace des reprises anciennes."
      },
      {
        "etat": "En cours",
        "uuid": "fa40d77e-b65b-4e30-a6b9-b17f5625a88e",
        "fichier": "2018-09-porte-cochere-12-rue-du-cardinal-mercier-paris-9-travaux-cours-2.jpg",
        "note": "Reprise du vantail bas, à hauteur de traverse : c'est là que l'eau travaille."
      },
      {
        "etat": "Après",
        "uuid": "26525e22-2374-4191-b30c-b805af59fc7e",
        "fichier": "2018-09-porte-cochere-12-rue-du-cardinal-mercier-paris-9-apres.jpg",
        "note": "Remise en teinte. Le vitrail de l'imposte, nettoyé, redonne sa lumière au porche."
      },
      {
        "etat": "Détail",
        "uuid": "9318537e-7772-488c-a6dd-b77390278ff5",
        "fichier": "2018-09-porte-cochere-12-rue-du-cardinal-mercier-paris-9-detail-1.jpg",
        "note": "Penture forgée en fleuron, reclouée sur panneau de chêne."
      }
    ]
  },
  {
    "slug": "rue-de-conde",
    "ouvrage": "Porte cochère",
    "adresse": "16 rue de Condé",
    "lieu": "Paris",
    "annee": "2025",
    "matieres": [
      "Chêne",
      "Laiton",
      "Treillage de fonte"
    ],
    "geste": "Greffe des traverses basses, dépose et enture sur place",
    "resume": "Porte cochère bleue à panneaux de treillage et plinthes de laiton. Les traverses basses, pourries par les remontées d'eau, ont été découpées sur place et greffées de chêne neuf avant remise en peinture.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "3b69313c-a5d4-45cb-80d6-5807cebbbb22",
        "fichier": "2025-05-16-rue-de-conde-avant-restauration-sur-place-1.jpg",
        "note": "L'ouvrage trouvé : dessin intact, bas de vantaux mangés."
      },
      {
        "etat": "En cours",
        "uuid": "e0d3fb41-0b89-4d5e-962f-f7dfb0f84df8",
        "fichier": "2025-05-16-rue-de-conde-avant-restauration-sur-place-3.jpg",
        "note": "Dépose de la partie morte, au ciseau et à la scie, sur bâche."
      },
      {
        "etat": "En cours",
        "uuid": "4857a890-81df-4e0a-8d16-b79cc0323d1b",
        "fichier": "2025-05-16-rue-de-conde-avant-restauration-sur-place-2.jpg",
        "note": "La greffe de chêne posée, avant ponçage."
      },
      {
        "etat": "Après",
        "uuid": "f1392cd3-7310-45a1-8105-254ef0b4b322",
        "fichier": "2025-05-16-rue-de-conde-apres-restauration-avant-peinture-1.jpg",
        "note": "Traverse basse neuve, ajustée au dessin de la moulure d'origine."
      },
      {
        "etat": "Après",
        "uuid": "04a9368b-0be3-4c7e-8b79-229b72f26607",
        "fichier": "2025-05-16-rue-de-conde-apres-restauration-avant-peinture-2.jpg",
        "note": "Sous-couche posée. La porte attend sa peinture de finition."
      }
    ]
  },
  {
    "slug": "institut-jeunes-aveugles-paris-7",
    "ouvrage": "Porte en acier",
    "adresse": "Institut des Jeunes Aveugles",
    "lieu": "Paris 7e",
    "annee": "2023",
    "matieres": [
      "Acier",
      "Peinture laquée"
    ],
    "geste": "Décapage, traitement de la corrosion, remise en peinture",
    "resume": "Une porte d'acier en plein cintre, prise dans un mur d'enduit, rongée par la rouille sous des couches de bleu successives. Reprise à nu, traitée, relaquée.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "0148e61c-4d60-41d1-9f77-03107520b5c0",
        "fichier": "2023-07-porte-acier-institut-des-jeunes-aveugles-paris-7-avant-restauration.jpg",
        "note": "Peintures feuilletées, tôle piquée en pied."
      },
      {
        "etat": "Après",
        "uuid": "57f2f35e-6458-417e-a948-545f3c46eb09",
        "fichier": "2023-07-porte-acier-institut-des-jeunes-aveugles-paris-7-apres-restauration-ext.jpg",
        "note": "Vue extérieure après remise en peinture."
      },
      {
        "etat": "Après",
        "uuid": "7f390e54-1f4b-4286-9d77-491091b5425f",
        "fichier": "2023-07-porte-acier-institut-des-jeunes-aveugles-paris-7-apres-restauration-int.jpg",
        "note": "Vue intérieure : la traverse de renfort reprise à l'identique."
      }
    ]
  },
  {
    "slug": "escalier-vaucouleurs",
    "ouvrage": "Escalier d'immeuble",
    "adresse": "Rue de Vaucouleurs",
    "lieu": "Paris",
    "annee": "2021",
    "matieres": [
      "Chêne",
      "Limon peint"
    ],
    "geste": "Remplacement des marches, conservation du limon et de la rampe",
    "resume": "Un escalier tournant de faubourg, limon et balustres verts, marches usées jusqu'au fil. Marches et contremarches refaites en chêne, sans toucher au limon ni à la rampe.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "04ea82ed-693e-492a-8b6d-dd9173762ceb",
        "fichier": "2021-12-restauration-escalier-rue-vaucouleur-avant-travaux.jpg",
        "note": "Nez de marches effondrés, peinture écaillée, bois délavé."
      },
      {
        "etat": "En cours",
        "uuid": "9a984630-5c9d-46b3-a00c-e857a7ab3c48",
        "fichier": "2021-12-restauration-escalier-rue-vaucouleur-en-cours.jpg",
        "note": "Dépose des marches, une volée à la fois, l'escalier restant praticable."
      },
      {
        "etat": "Après",
        "uuid": "029f59c0-f79a-44d7-9773-de7a099813f4",
        "fichier": "2021-12-restauration-escalier-rue-vaucouleur-terminee.jpg",
        "note": "Marches neuves en chêne, découpées au gabarit du balancement d'origine."
      }
    ]
  },
  {
    "slug": "escalier-paray-vieille-poste",
    "ouvrage": "Escalier",
    "adresse": "Paray-Vieille-Poste",
    "lieu": "Essonne",
    "annee": "2023",
    "matieres": [
      "Bois massif"
    ],
    "geste": "Dépose, remplacement, pose",
    "resume": "Un escalier repris de bout en bout, photographié avant, pendant et après les travaux.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "3718ed06-e33a-4a76-af62-075e442aa718",
        "fichier": "2023-10-escalier-paray-vieille-poste-avant-travaux.jpg",
        "note": "L'ouvrage déposé."
      },
      {
        "etat": "En cours",
        "uuid": "0091d8d5-e33a-4113-8e47-5ae53cb7c13f",
        "fichier": "2023-10-escalier-paray-vieille-poste-pendant-travaux.jpg",
        "note": "Pose en cours."
      },
      {
        "etat": "Après",
        "uuid": "d38dc5b1-31aa-4f4d-82e9-554144bcbcea",
        "fichier": "2023-10-escalier-paray-vieille-poste-apres-travaux-2.jpg",
        "note": "Escalier terminé."
      },
      {
        "etat": "Après",
        "uuid": "3333aca2-2998-4843-a4e4-9b2c04e016bb",
        "fichier": "2023-10-escalier-paray-vieille-poste-apres-travaux-3.jpg",
        "note": "Vue de la volée haute."
      }
    ]
  },
  {
    "slug": "abbesses",
    "ouvrage": "Porte cochère",
    "adresse": "40 rue des Abbesses",
    "lieu": "Paris",
    "annee": "2021",
    "matieres": [
      "Bois",
      "Ferrures"
    ],
    "geste": "Restauration, vue intérieure",
    "resume": "La même porte, vue de la cour, avant et après restauration.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "a05646a8-c989-447b-8bd4-6a3c6654b923",
        "fichier": "2021-01-porte-cochere-40-rue-des-abbesses-avant-restauration-int.jpg",
        "note": "Vue intérieure avant travaux."
      },
      {
        "etat": "Après",
        "uuid": "d4211931-ca95-40b9-8d49-2d8802a2644a",
        "fichier": "2021-01-porte-cochere-40-rue-des-abbesses-apres-restauration-int.jpg",
        "note": "Vue intérieure après restauration."
      }
    ]
  },
  {
    "slug": "rue-de-la-perle",
    "ouvrage": "Porte cochère",
    "adresse": "3 rue de la Perle",
    "lieu": "Paris",
    "annee": "2022",
    "matieres": [
      "Chêne"
    ],
    "geste": "Façonnage d'une porte neuve au dessin de l'ancienne",
    "resume": "Porte de remplacement, façonnée à l'atelier au dessin relevé sur l'ouvrage déposé.",
    "plaques": [
      {
        "etat": "Avant",
        "uuid": "b4d7873e-2457-45d5-9c4e-ee7ad5dbfb14",
        "fichier": "2022-09-porte-cochere-3-rue-de-la-perle-avant-remplacement-int-detail.jpg",
        "note": "Détail intérieur avant remplacement."
      },
      {
        "etat": "Après",
        "uuid": "eba2d965-ad25-47fc-8099-a6f1e127b7cf",
        "fichier": "2022-09-porte-cochere-3-rue-de-la-perle-apres-faconnage-vue-ext.jpg",
        "note": "L'ouvrage neuf, posé, vu de la rue."
      },
      {
        "etat": "Détail",
        "uuid": "36b37bd1-a97c-410c-862f-d7e0ec8bcedb",
        "fichier": "2022-09-porte-cochere-3-rue-de-la-perle-apres-faconnage-vue-ext-detail.jpg",
        "note": "Détail du panneautage neuf."
      }
    ]
  }
];

export const PIECES: Piece[] = [
  {
    "ouvrage": "Porte bâtarde",
    "adresse": "24 rue des Dames",
    "lieu": "Paris 17e",
    "annee": "2017",
    "matieres": [
      "Chêne",
      "Fonte",
      "Laiton"
    ],
    "uuid": "4308bf14-d393-4806-ba72-701bedf8c08e",
    "fichier": "2017-10-porte-batarde-24-rue-des-dames-paris-17-apres-restauration.jpg",
    "note": "Porte bâtarde restaurée : grilles de fonte dégagées, chêne remis en teinte claire, plinthe de laiton neuve."
  },
  {
    "ouvrage": "Grille de sas",
    "adresse": "54 rue de Verneuil",
    "lieu": "Paris 7e",
    "annee": "2019",
    "matieres": [
      "Acier",
      "Laiton"
    ],
    "uuid": "2ea887a0-7113-4e97-973c-7478c48e6ebe",
    "fichier": "2019-09-grille-sas-54-rue-de-verneuil-paris-7-vue-ensemble.jpg",
    "note": "Grille de sas à imposte à losanges, plantée dans un porche haussmannien."
  },
  {
    "ouvrage": "Grille de sas — détail",
    "adresse": "54 rue de Verneuil",
    "lieu": "Paris 7e",
    "annee": "2019",
    "matieres": [
      "Acier"
    ],
    "uuid": "18d39978-909a-44a3-ac61-5d57472c04c4",
    "fichier": "2019-09-grille-sas-54-rue-de-verneuil-paris-7-detail-fers-de-lances.jpg",
    "note": "Fers de lance et imposte à losanges, soudés et limés à l'atelier."
  },
  {
    "ouvrage": "Porte cochère",
    "adresse": "42 rue du Cardinal-Lemoine",
    "lieu": "Paris 5e",
    "annee": "2019",
    "matieres": [
      "Chêne",
      "Laiton"
    ],
    "uuid": "ac23114b-a402-4794-898e-02def630f916",
    "fichier": "2019-12-porte-cochere-42-rue-du-cardinal-lemoine-paris-5-vue-ensemble.jpg",
    "note": "Porte à grands panneaux, chêne verni, poignées et seuil de laiton."
  },
  {
    "ouvrage": "Seuil de laiton",
    "adresse": "42 rue du Cardinal-Lemoine",
    "lieu": "Paris 5e",
    "annee": "2019",
    "matieres": [
      "Laiton",
      "Chêne"
    ],
    "uuid": "60a23ef1-279a-4e78-a5e0-d14632c0c5a7",
    "fichier": "2019-12-porte-cochere-42-rue-du-cardinal-lemoine-paris-5-detail-seuil.jpg",
    "note": "Seuil de laiton rapporté sur le pavage, arrêt d'eau du vantail."
  },
  {
    "ouvrage": "Porte cochère monumentale",
    "adresse": "68 rue de la Chaussée-d'Antin",
    "lieu": "Paris",
    "annee": null,
    "matieres": [
      "Bois",
      "Ferronnerie d'imposte"
    ],
    "uuid": "f6bd5e19-1ff3-404f-bed1-d40878cf25a7",
    "fichier": "porte-cochere-monumentale-68-rue-de-la-chaussee-d-antin-en-cours-de-repose.jpg",
    "note": "Repose d'un vantail monumental au palan, sous l'imposte en éventail restée en place."
  },
  {
    "ouvrage": "Grille de défense",
    "adresse": "32 rue de Washington",
    "lieu": "Paris",
    "annee": "2024",
    "matieres": [
      "Acier"
    ],
    "uuid": "6859ffec-cf6e-4d55-8aa9-ab5cf029a7c2",
    "fichier": "2024-01-grille-de-defense-32-rue-de-washington-detail.jpg",
    "note": "Grille de défense à barreaux lancéolés, scellée dans la pierre de taille."
  },
  {
    "ouvrage": "Façade acier, arc surbaissé",
    "adresse": "41 rue Boulard",
    "lieu": "Paris 14e",
    "annee": "2020",
    "matieres": [
      "Acier",
      "Verre"
    ],
    "uuid": "fb69b224-e145-450c-b5fe-e27e6ebc662b",
    "fichier": "2020-03-facade-acier-arc-surbaisse-41-rue-boulard-paris-14.jpg",
    "note": "Châssis acier en arc surbaissé, ouvrant à soufflet et panneau grillagé, dans une cour ancienne."
  },
  {
    "ouvrage": "Porte de sas — dessin modèle",
    "adresse": "9 avenue de La Motte-Picquet",
    "lieu": "Paris",
    "annee": "2025",
    "matieres": [
      "Acier",
      "Verre imprimé"
    ],
    "uuid": "a01896f2-17b2-4700-b2b0-9c19b197f4ca",
    "fichier": "2025-01-porte-sas-9-avenue-de-la-motte-piquet-dessin-modele.jpg",
    "note": "L'ouvrage modèle, relevé avant façonnage : cannelures, boules et verre imprimé."
  },
  {
    "ouvrage": "Grille de sas en atelier",
    "adresse": "10 rue Saint-Paul",
    "lieu": "Paris 4e",
    "annee": "2020",
    "matieres": [
      "Acier brut"
    ],
    "uuid": "bec0dfc7-e507-4cb0-8f80-13865e06ac34",
    "fichier": "2020-05-grille-sas-10-rue-saint-paul-paris-4-atelier.jpg",
    "note": "Le cadre soudé, à plat sur les tréteaux de l'atelier, avant peinture."
  },
  {
    "ouvrage": "Porte sur rue tiercée",
    "adresse": "Le Corbeillier",
    "lieu": "Île-de-France",
    "annee": "2013",
    "matieres": [
      "Chêne",
      "Grilles forgées"
    ],
    "uuid": "7c31c7ac-d431-47ef-8c64-7b24dc447126",
    "fichier": "2013-02-porte-sur-rue-corbeillier-3-tiercee-chene-avec-grilles.jpg",
    "note": "Porte à trois panneaux, chêne clair, grilles forgées en partie haute."
  },
  {
    "ouvrage": "Porte d'immeuble en chêne",
    "adresse": "34 rue François-Bonvin",
    "lieu": "Paris",
    "annee": "2022",
    "matieres": [
      "Chêne",
      "Laiton"
    ],
    "uuid": "34fc4d56-5bff-4d50-bebd-1406b689c4ca",
    "fichier": "2022-08-porte-34-rue-francois-bonvin-faconnage-atelier.jpg",
    "note": "L'ouvrage neuf debout dans l'atelier de Massy, bois nu, avant finition."
  }
];

/** Photographies d'atelier réutilisées en tête de page. */
export const PHOTOS = {
  "grille": "64dcf235-6ae8-41ed-bc94-440ab19d2265",
  "saintPaul": "bec0dfc7-e507-4cb0-8f80-13865e06ac34",
  "bonvin": "34fc4d56-5bff-4d50-bebd-1406b689c4ca",
  "motte": "09ca2782-c81e-44da-839f-016f284e67ce",
  "cardinalMercierApres": "5a83c1e5-8785-4cde-9f1d-25ba41a00a05",
  "chausseeDantin": "f6bd5e19-1ff3-404f-bed1-d40878cf25a7",
  "verneuil": "2ea887a0-7113-4e97-973c-7478c48e6ebe",
  "vaucouleursApres": "029f59c0-f79a-44d7-9773-de7a099813f4",
  "desDames": "4308bf14-d393-4806-ba72-701bedf8c08e",
  "condeAvant": "3b69313c-a5d4-45cb-80d6-5807cebbbb22",
  "washington": "6859ffec-cf6e-4d55-8aa9-ab5cf029a7c2",
  "boulard": "fb69b224-e145-450c-b5fe-e27e6ebc662b",
  "cardinalLemoine": "ac23114b-a402-4794-898e-02def630f916",
  "vitrerie": "de219d4c-cf06-4613-a53e-2018e2928b6c"
} as const;

/** Libellé « 12 rue du Cardinal-Mercier, Paris 9e — 2018 ». */
export function cartouche(o: { adresse: string; lieu: string; annee: string | null }): string {
  const lieu = `${o.adresse}, ${o.lieu}`;
  return o.annee ? `${lieu} — ${o.annee}` : lieu;
}

export interface KnowledgeItem {
  keywords: string[];
  response: string;
}

export const chatbotKnowledge: KnowledgeItem[] = [
  {
    keywords: ["fondatrice", "ines watat", "qui est", "créatrice", "fondateur"],
    response: "Ines Watat est coach en relation, conférencière et fondatrice du mouvement Inspire Christian Life et de la « Destiny Academy ». Elle accompagne les hommes et les femmes à découvrir leur identité en Christ et à activer leur potentiel pour bâtir des foyers solides."
  },
  {
    keywords: ["destiny academy", "academy", "école", "formation", "cours", "pôles"],
    response: "La Destiny Academy propose des parcours de transformation pour célibataires et couples. Elle inclut le pôle Célibataires (identité, personnalité, guérison émotionnelle) et le pôle Couples (réussir ses premières années de mariage, leadership biblique, intimité)."
  },
  {
    keywords: ["mariage", "fiançailles", "alliance", "futurs époux", "conjoint"],
    response: "Nous proposons une préparation prophétique et pratique à l'alliance de destinée à travers l'École des Futurs Époux. L'objectif est de bâtir des foyers alignés à la pensée de Dieu."
  },
  {
    keywords: ["mission", "vision", "valeurs", "objectif", "but"],
    response: "Notre mission est de lever une génération guérie et consciente de son identité en Christ pour impacter durablement le monde à travers des familles transformées. Nos piliers sont : Dieu au centre, la connaissance de soi et la fusion de missions."
  },
  {
    keywords: ["célibataire", "seul", "célibat", "attente"],
    response: "Pour les célibataires, nous mettons l'accent sur la guérison des blessures émotionnelles, la découverte de la personnalité et le discernement relationnel pour se préparer intentionnellement à son partenaire de destinée."
  },
  {
    keywords: ["intimité", "sexualité", "jardin d'éden", "sexe"],
    response: "À travers le concept 'Jardin d’Éden', nous redécouvrons la vision divine de la sexualité comme un langage de communion sacrée, libéré des tabous, pour une connexion profonde dans le couple."
  },
  {
    keywords: ["contact", "appel", "rendez-vous", "parler", "aider"],
    response: "Vous pouvez prendre un appel découverte gratuit pour discuter de votre situation. Rendez-vous sur notre page de contact ou cliquez sur le bouton 'Prendre un appel' sur le site."
  }
];

export const defaultResponse = "Je suis ravi de vous aider ! Pourriez-vous préciser votre question sur la communauté Inspire Christian Life ou la Destiny Academy ? Vous pouvez aussi demander des infos sur nos formations pour célibataires et couples.";

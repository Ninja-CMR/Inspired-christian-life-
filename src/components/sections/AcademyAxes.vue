<script setup lang="ts">
const poles = [
  {
    title: "A. PÔLE CÉLIBATAIRES",
    description: "Un parcours de fondation pour identifier son identité en Christ, guérir de son passé et se préparer intentionnellement à une alliance qui honore Dieu.",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`,
    items: [
      "Découverte et management de sa personnalité",
      "Reprogrammation du dialogue intérieur",
      "Guérison des blessures émotionnelles",
      "Préparation au mariage de destinée",
      "Discernement relationnel et saisonnier"
    ]
  },
  {
    title: "B. PÔLE COUPLES & NOUVEAUX MARIÉS",
    description: "Destiny Academy propose des formations spécifiques pour accompagner les 1 à 5 premières années de mariage, période la plus déterminante.",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`,
    items: [
      "Réussir sa première année de mariage",
      "Bâtir ses 3 premières années selon la pensée de Dieu",
      "Gestion des conflits de personnalité dans le couple",
      "Autorité, leadership et soumission biblique (sans abus ni domination)",
      "Comprendre son conjoint au-delà de la culture (“bantou vs mari selon Christ”)",
      "Le langage d’amour dans le couple – version africaine",
      "Familles recomposées en Christ : équilibre, connexion et unité"
    ]
  },
  {
    title: "AXE INTIMITÉ & SEXUALITÉ CONJUGALE",
    subtitle: "(CONCEPT JARDIN D’ÉDEN)",
    description: "Redécouvrir la vision divine de la sexualité comme un langage de communion sacrée, libéré des tabous et des blessures, pour une connexion intime profonde et épanouie.",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
    items: [
      "Vivre une sexualité épanouie, saine et flambante en Christ",
      "Couple vierge/puceau : réussir sa vie sexuelle sans traumatisme",
      "Déconstruire les mythes sexuels et restaurer la connexion intime",
      "Sexualité comme langage de connexion, pas de performance"
    ]
  }
];
</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="mb-20">
        <span class="text-copper font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Notre Roadmap</span>
        <h2 class="text-4xl md:text-6xl font-bold text-black uppercase tracking-tighter leading-tight">
          Axes de <span class="text-copper italic">Formation</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-fr">
        <div 
          v-for="(pole, index) in poles" 
          :key="pole.title"
          class="group p-8 rounded-3xl bg-sage/5 border border-sage/10 hover:border-copper/30 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
        >
          <div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-copper mb-8 group-hover:bg-copper group-hover:text-white transition-colors duration-500" v-html="pole.icon">
          </div>

          <div class="mb-6">
            <h3 class="text-2xl font-bold text-black mb-2 uppercase tracking-tight">{{ pole.title }}</h3>
            <p v-if="pole.subtitle" class="text-copper font-bold text-sm tracking-widest uppercase mb-4">{{ pole.subtitle }}</p>
            <p v-if="pole.description" class="text-gray-500 font-body text-sm leading-relaxed mb-4">
              {{ pole.description }}
            </p>
          </div>

          <div class="mt-8">
            <ul class="space-y-4">
              <li 
                v-for="item in pole.items" 
                :key="item"
                class="flex gap-3 text-gray-700 font-body text-sm group/item"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-copper/40 mt-1.5 shrink-0 group-hover/item:bg-copper transition-colors"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

<script setup lang="ts">
const resources = [
  {
    id: 1,
    title: "10 croyances qui éloignent le mariage de toi",
    description: "Un guide gratuit pour identifier et briser les barrières mentales vers l'alliance.",
    type: "Ebook Gratuit",
    badge: "Gratuit",
    actionText: "Télécharger",
    color: "bg-sage/10",
    textColor: "text-sage"
  },
  {
    id: 2,
    title: "Je ne subis plus",
    description: "Comprendre et guérir son système émotionnel pour ne plus être victime de son passé.",
    type: "Ebook",
    badge: "3.000 CFA",
    actionText: "Acheter",
    color: "bg-copper/10",
    textColor: "text-copper"
  }
];
</script>

<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mb-20">
        <h1 class="text-5xl md:text-7xl font-bold text-black mb-8 uppercase tracking-tighter">
          Ressources <span class="text-copper">Prophétiques</span>
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed font-body">
          Des outils concrets pour vous accompagner dans votre cheminement vers une alliance de destinée et une vie épanouie.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div 
          v-for="item in resources" 
          :key="item.id"
          class="group border-b border-black/10 pb-12 hover:border-black transition-colors duration-500"
        >
          <div :class="['aspect-[16/9] mb-8 rounded-2xl flex items-center justify-center relative overflow-hidden', item.color]">
            <span :class="['text-xl font-bold uppercase tracking-widest opacity-30', item.textColor]">
              {{ item.type }}
            </span>
          </div>
          
          <div class="flex items-center gap-4 mb-4">
            <span class="text-xs font-bold uppercase tracking-widest text-copper">
              {{ item.badge }}
            </span>
          </div>

          <h2 class="text-3xl font-bold text-black mb-4 uppercase">
            {{ item.title }}
          </h2>
          
          <p class="text-gray-600 mb-8 font-body text-lg">
            {{ item.description }}
          </p>

          <button class="flex items-center gap-2 font-bold text-black group-hover:gap-4 transition-all duration-300 uppercase tracking-widest text-sm">
            {{ item.actionText }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

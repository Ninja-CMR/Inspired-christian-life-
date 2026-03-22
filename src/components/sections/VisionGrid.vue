<script setup lang="ts">
import bgImg1 from '../../assets/images/activités/photo_5961063863094986784_y.jpg';

const pillars = [
  {
    title: "Dieu au Centre",
    description: "Sa pensée comme guide ultime pour votre vie et votre future alliance.",
    iconPath: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" // Compass-like icon
  },
  {
    title: "Connaissance de Soi",
    description: "Comprendre votre personnalité et guérir votre système émotionnel pour une base stable.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" // Info/Silhouette-like
  },
  {
    title: "Fusion de Missions",
    description: "Aligner deux destinées individuelles pour accomplir un programme divin commun.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" // Intertwined/Clock
  }
];
</script>

<template>
  <section class="py-32 bg-midnight relative overflow-hidden">
    <!-- Single Background Image -->
    <div class="absolute inset-0 z-0 opacity-20">
      <img :src="bgImg1" class="w-full h-full object-cover mix-blend-overlay" />
    </div>

    <!-- Subtle Pattern Overlay -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl !text-white text-center mb-16 max-w-4xl mx-auto leading-tight font-heading">
        Plus qu'un simple mouvement, une préparation prophétique à l'alliance.
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div 
          v-for="(pillar, index) in pillars" 
          :key="index"
          class="text-center group"
        >
          <div class="w-20 h-20 mx-auto mb-8 bg-copper/10 rounded-full flex items-center justify-center group-hover:bg-copper/20 transition-colors duration-300">
            <svg class="w-10 h-10 text-copper" fill="currentColor" viewBox="0 0 24 24">
              <path :d="pillar.iconPath" />
            </svg>
          </div>
          <h3 class="text-2xl !text-white mb-4 font-heading group-hover:text-white transition-colors">
            {{ pillar.title }}
          </h3>
          <p class="text-white/80 leading-relaxed font-body">
            {{ pillar.description }}
          </p>
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

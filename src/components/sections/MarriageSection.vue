<script setup lang="ts">
import img1 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.41.32.jpeg'
import img2 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.55 (1).jpeg'
import img3 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.55 (2).jpeg'
import img4 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.56 (1).jpeg'

const features = [
  {
    title: "Le Mariage de Destinée",
    description: "Une union qui dépasse le simple sentiment pour s'aligner sur un appel divin commun."
  },
  {
    title: "Préparation Prophétique",
    description: "Identifier et lever les barrières spirituelles avant l'alliance."
  },
  {
    title: "Alliances Solides",
    description: "Bâtir sur des fondements inébranlables pour une vie de couple épanouie."
  }
];
</script>

<template>
  <section class="py-24 bg-midnight text-white overflow-hidden relative">
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-copper/5 -skew-x-12 transform origin-top translate-x-1/2"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Content -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span class="text-copper font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Alliances de Destinée</span>
          <h2 class="text-4xl !text-warm-white md:text-6xl font-bold mb-8 uppercase tracking-tighter leading-tight">
            Bâtir des <span class="text-copper italic">Foyers</span> <br/> 
            Selon le Cœur de Dieu
          </h2>
          <p class="text-xl text-gray-400 font-body leading-relaxed mb-12">
            Le mariage n'est pas une fin en soi, mais le début d'une mission. Nous vous accompagnons dans cette transition sacrée avec une approche qui mêle sagesse biblique et réalisme pratique.
          </p>

          <div class="space-y-8">
            <div v-for="feature in features" :key="feature.title" class="flex gap-6 group">
              <div class="w-12 h-12 rounded-full border border-copper/30 flex items-center justify-center shrink-0 group-hover:bg-copper group-hover:text-midnight transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2 uppercase tracking-wide">{{ feature.title }}</h4>
                <p class="text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Images Grid -->
        <div 
          class="grid grid-cols-2 gap-6"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
        >
          <div class="space-y-6">
            <div class="rounded-3xl overflow-hidden shadow-2xl skew-y-2">
              <img :src="img1" alt="Mariage 1" class="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="rounded-3xl overflow-hidden shadow-2xl -skew-y-2">
              <img :src="img2" alt="Mariage 2" class="w-full h-80 object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div class="space-y-6 pt-12">
            <div class="rounded-3xl overflow-hidden shadow-2xl -skew-y-2">
              <img :src="img3" alt="Mariage 3" class="w-full h-80 object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="rounded-3xl overflow-hidden shadow-2xl skew-y-2">
              <img :src="img4" alt="Mariage 4" class="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

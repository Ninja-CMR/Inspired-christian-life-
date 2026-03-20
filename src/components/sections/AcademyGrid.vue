<script setup lang="ts">
import type { IFormation } from '../../interfaces/IFormation';

defineProps<{
  formations: IFormation[];
}>();
</script>

<template>
  <section class="py-24 bg-warm-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl text-midnight mb-4">
          Transformez votre Intérieur, Transformez vos Relations.
        </h2>
        <h3 class="text-xl text-anthracite font-subtitle">
          Découvrez nos formations phares de Destiny Academy.
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="formation in formations" 
          :key="formation.id"
          class="card-premium group overflow-hidden bg-white"
        >
          <!-- Image Placeholder -->
          <div class="h-48 bg-sage/10 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <!-- Category Badge -->
            <span class="absolute top-4 left-4 bg-white/90 text-copper px-3 py-1 rounded-full text-sm font-bold shadow-sm">
              {{ formation.category }}
            </span>
          </div>

          <div class="p-8">
            <h3 class="text-2xl text-midnight mb-3 font-heading group-hover:text-copper transition-colors duration-300">
              {{ formation.title }}
            </h3>
            <p class="text-anthracite mb-6 line-clamp-2">
              {{ formation.description }}
            </p>
            
            <div class="flex items-center justify-between mt-auto">
              <span class="text-lg font-bold text-midnight">
                {{ formation.priceCFA.toLocaleString() }} <span class="text-sm font-normal">CFA</span>
              </span>
              <button class="text-midnight hover:text-copper font-bold transition-colors duration-300 flex items-center gap-2">
                En savoir plus
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
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

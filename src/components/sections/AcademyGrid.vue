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
        <router-link 
          v-for="formation in formations" 
          :key="formation.id"
          to="/academy"
          class="card-premium group overflow-hidden bg-white block cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
        >
          <!-- Image Placeholder -->
          <div class="h-48 bg-sage/10 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
              <img :src="formation.image" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            </div>
            <!-- Category Badge -->
            <span class="absolute top-4 left-4 bg-copper text-midnight px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-widest">
              {{ formation.category }}
            </span>
          </div>

          <div class="p-8">
            <h3 class="text-2xl text-midnight mb-3 font-heading group-hover:text-copper transition-colors duration-300">
              {{ formation.title }}
            </h3>
            <p class="text-anthracite mb-6 line-clamp-3 font-body text-sm leading-relaxed">
              {{ formation.description }}
            </p>
            
            <div class="space-y-6 mt-auto">
              <div class="flex items-center justify-between border-t border-midnight/5 pt-6">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Inscription :</span>
                  <span class="text-xl font-bold text-midnight font-heading">
                    {{ formation.priceCFA.toLocaleString() }} <span class="text-xs font-normal opacity-60">CFA</span>
                  </span>
                </div>
                <div class="bg-midnight text-white p-3 rounded-full group-hover:bg-copper group-hover:text-midnight transition-all duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

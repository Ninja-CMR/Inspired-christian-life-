<script setup lang="ts">
const images = [
  { id: 1, title: "Intérieur & Paix", aspect: "aspect-[4/5]" },
  { id: 2, title: "Alliance de Destinée", aspect: "aspect-square" },
  { id: 3, title: "Transformation", aspect: "aspect-[4/3]" },
  { id: 4, title: "Vision Prophétique", aspect: "aspect-square" },
  { id: 5, title: "Éveil Spirituel", aspect: "aspect-[3/4]" },
  { id: 6, title: "Cheminement", aspect: "aspect-video" }
];
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-4xl md:text-6xl font-bold text-black mb-6 uppercase tracking-tighter">
          Immersion <span class="text-copper">Visuelle</span>
        </h2>
        <p class="text-xl text-gray-500 max-w-2xl font-body">
          Découvrez l'atmosphère et les moments forts de notre communauté à travers cette sélection d'instantanés.
        </p>
      </div>

      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <div 
          v-for="image in images" 
          :key="image.id"
          class="relative group overflow-hidden rounded-2xl bg-gray-100"
        >
          <!-- Placeholder for User Images -->
          <div :class="['w-full flex items-center justify-center text-gray-300 italic text-sm', image.aspect]">
            Image Gallery {{ image.id }}
          </div>
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <h3 class="text-white text-xl font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {{ image.title }}
            </h3>
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

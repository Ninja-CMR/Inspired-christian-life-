<script setup lang="ts">
import img1 from '../../assets/images/activités/photo_5796569974322613153_y.jpg'
import img2 from '../../assets/images/activités/photo_5961063863094986784_y.jpg'
import img3 from '../../assets/images/activités/photo_5961063863094986792_y.jpg'
import img4 from '../../assets/images/activités/fraternité.jpg'
import img5 from '../../assets/images/activités/photo_5961063863094986815_y.jpg'
import img7 from '../../assets/images/activités/photo_5961063863094986818_y.jpg'
import img8 from '../../assets/images/activités/photo_5961063863094986845_y.jpeg'

const images = [
  { id: 1, src: img1, title: "Communion & Partage", aspect: "aspect-[4/5]" },
  { id: 2, src: img2, title: "Enseignement Profond", aspect: "aspect-square" },
  { id: 3, src: img3, title: "Moments de Prière", aspect: "aspect-[4/3]" },
  { id: 4, src: img4, title: "Fraternité Authentique", aspect: "aspect-square" },
  { id: 5, src: img5, title: "Célébration", aspect: "aspect-[3/4]" },
  { id: 7, src: img7, title: "Lumière & Vérité", aspect: "aspect-[4/5]" },
  { id: 8, src: img8, title: "Héritage Spirituel", aspect: "aspect-square" }
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
          Revivez les moments forts de notre communauté à travers ces images qui témoignent de la vie, du partage et de la transformation.
        </p>
      </div>

      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <div 
          v-for="image in images" 
          :key="image.id"
          class="relative group overflow-hidden rounded-2xl bg-gray-100 break-inside-avoid"
        >
          <img 
            :src="image.src" 
            :alt="image.title" 
            class="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <h3 class="text-white text-lg font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
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

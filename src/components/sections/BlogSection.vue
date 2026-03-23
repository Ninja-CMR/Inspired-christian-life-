<script setup lang="ts">
import img1 from '../../assets/images/activités/photo_5961063863094986845_y.jpeg'
import img2 from '../../assets/images/activités/photo_5961063863094986815_y.jpg'
import img3 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.55 (2).jpeg'

const posts = [
  {
    title: "Le Combat de l'Estime de Soi en Christ",
    date: "15 Octobre 2026",
    excerpt: "Comment la vision de Dieu sur nous transforme radicalement notre quotidien et nos relations.",
    category: "Identité",
    image: img1
  },
  {
    title: "Savoir Attendre : La Saison du Célibat",
    date: "02 Octobre 2026",
    excerpt: "Pourquoi le célibat est une saison de préparation stratégique et non une salle d'attente.",
    category: "Vie Chrétienne",
    image: img2
  },
  {
    title: "Communication & Conflits : Sagesse Biblique",
    date: "20 Septembre 2026",
    excerpt: "Des clés pratiques pour transformer les tensions en opportunités de croissance conjugale.",
    category: "Mariage",
    image: img3
  }
];
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-2xl">
          <span class="text-copper font-bold uppercase tracking-widest text-sm mb-4 block">Inspirations & Méditations</span>
          <h2 class="text-5xl md:text-7xl font-bold text-midnight uppercase tracking-tighter leading-none font-heading">
            Le <span class="text-copper">Blog</span> Inspire
          </h2>
        </div>
        <router-link to="/blog" class="group flex items-center gap-3 text-midnight font-bold border-b-2 border-copper pb-2 hover:text-copper transition-colors">
          Voir tous les articles
          <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <router-link 
          v-for="(post, index) in posts" 
          :key="index"
          to="/blog"
          class="group cursor-pointer block"
        >
          <div class="relative h-64 overflow-hidden rounded-[40px] mb-8 shadow-xl">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <span class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-midnight z-10">
              {{ post.category }}
            </span>
          </div>
          <div class="space-y-4">
            <span class="text-xs text-gray-400 font-body uppercase tracking-widest">{{ post.date }}</span>
            <h3 class="text-2xl font-bold text-midnight font-heading group-hover:text-copper transition-colors">
              {{ post.title }}
            </h3>
            <p class="text-gray-500 line-clamp-2 text-sm leading-relaxed">
              {{ post.excerpt }}
            </p>
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

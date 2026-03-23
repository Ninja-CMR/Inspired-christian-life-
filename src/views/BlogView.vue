<script setup lang="ts">
import img1 from '../assets/images/activités/photo_5961063863094986845_y.jpeg'
import img2 from '../assets/images/activités/photo_5961063863094986815_y.jpg'
import img3 from '../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.55 (2).jpeg'

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
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <header class="mb-20">
        <h1 class="text-5xl md:text-8xl font-bold text-midnight mb-8 uppercase tracking-tighter font-heading">
          Le <span class="text-copper">Blog</span> Inspire
        </h1>
        <p class="text-xl text-gray-500 max-w-2xl font-body">
          Ressources, méditations et conseils pour bâtir une vie épanouie selon les principes du Royaume.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <article 
          v-for="(post, index) in posts" 
          :key="index"
          class="group"
        >
          <div class="relative h-80 overflow-hidden rounded-[50px] mb-8 shadow-2xl">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <span class="absolute top-8 left-8 bg-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-midnight z-10 shadow-lg">
              {{ post.category }}
            </span>
          </div>
          
          <div class="px-2">
            <span class="text-sm text-copper font-bold uppercase tracking-widest block mb-4">{{ post.date }}</span>
            <h2 class="text-3xl font-bold text-midnight font-heading mb-6 group-hover:text-copper transition-colors leading-tight">
              {{ post.title }}
            </h2>
            <p class="text-gray-500 mb-8 leading-relaxed font-body">
              {{ post.excerpt }}
            </p>
            <button class="flex items-center gap-3 text-midnight font-bold border-b-2 border-copper pb-2 hover:gap-5 transition-all">
              Lire la suite
              <svg class="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

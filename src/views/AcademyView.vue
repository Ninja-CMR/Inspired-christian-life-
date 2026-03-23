<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AcademyGrid from '../components/sections/AcademyGrid.vue';
import AcademyAxes from '../components/sections/AcademyAxes.vue';
import type { IFormation } from '../interfaces/IFormation';

import afficheFormation from '../assets/images/ecole/affiche1.jpeg'
import afficheFormation2 from '../assets/images/ecole/estime.jpeg'
import afficheFormation3 from '../assets/images/ecole/estime.jpg'
import afficheFormation4 from '../assets/images/ecole/soi.jpg'

const currentSlide = ref(0);
let timer: any = null;

const academySlides = [
  {
    title: "Destiny Academy",
    subtitle: "Des programmes de transformation profonde pour aligner votre identité et vos relations sur le plan divin.",
    image: afficheFormation2,
    tag: "Bienvenue"
  },
  {
    title: "École des Futurs Époux et Épouse",
    subtitle: "Préparez votre alliance de destinée avec sagesse et révélation. Un accompagnement intensif de 3 mois.",
    image: afficheFormation,
    tag: "Mariage"
  },
  {
    title: "Guérison de l'Estime",
    subtitle: "Reprogrammez votre dialogue intérieur et redécouvrez votre valeur royale en Christ.",
    image: afficheFormation3,
    tag: "Transformation"
  }
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % academySlides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
  resetTimer();
};

const resetTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(nextSlide, 6000);
};

onMounted(() => {
  resetTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const formations: IFormation[] = [
  {
    id: '1',
    title: 'Découverte de sa Personnalité',
    description: 'Comprendre vos forces et faiblesses pour un avenir relationnel éclairé. Un parcours profond pour explorer les traits qui définissent votre interaction avec les autres.',
    priceCFA: 10000,
    duration: '1 mois',
    category: 'Personnalité',
    image: afficheFormation2
  },
  {
    id: '2',
    title: 'Changer son Dialogue Intérieur',
    description: 'Guérir l\'estime de soi et briser les cycles pessimistes en 12 jours. Une méthode intensive pour reprogrammer vos pensées selon la vérité biblique.',
    priceCFA: 2000,
    duration: '12 Jours',
    category: 'Système de fonctionnement', 
    image: afficheFormation3
  },
  {
    id: '3',
    title: 'École des Futurs Époux/Epouses',
    description: 'Préparation prophétique et pratique à l\'alliance de destinée sur 3 mois. Apprenez les fondements d\'un mariage solide avant de dire "Oui".',
    priceCFA: 10000,
    duration: '3 mois',
    category: 'Mariage',
    image: afficheFormation
  },
  {
    id: '4',
    title: 'Restauration de l\'Estime de Soi',
    description: 'Redécouvrez votre valeur aux yeux de Dieu et brisez les chaînes du passé qui vous empêchent d\'avancer.',
    priceCFA: 7000,
    duration: '1 mois',
    category: 'Système Émotionnel',
    image: afficheFormation4
  }
];
</script>

<template>
  <div class="pt-20">
    <header class="relative h-[70vh] min-h-[550px] flex items-center bg-black overflow-hidden mb-20 text-white font-heading">
      <!-- Slider Background -->
      <div class="absolute inset-0 z-0">
        <TransitionGroup name="fade">
          <div 
            v-for="(slide, index) in academySlides" 
            :key="slide.title"
            v-show="currentSlide === index"
            class="absolute inset-0"
          >
            <div class="absolute inset-0 bg-black/60 z-10"></div>
            <img 
              :src="slide.image" 
              :alt="slide.title" 
              class="w-full h-full object-cover scale-105"
              style="animation: slowZoom 20s infinite alternate"
            />
          </div>
        </TransitionGroup>
      </div>

      <div class="container mx-auto px-6 relative z-20">
        <div class="max-w-4xl text-left">
          <TransitionGroup name="slide-up">
            <div 
              v-for="(slide, index) in academySlides" 
              :key="slide.title"
              v-show="currentSlide === index"
              class="space-y-6"
            >
              <span class="inline-block px-4 py-1.5 rounded-full bg-copper text-midnight text-[10px] font-bold uppercase tracking-widest">
                {{ slide.tag }}
              </span>
              
              <h1 class="heading-prophetic text-5xl md:text-7xl !text-white leading-tight drop-shadow-2xl">
                {{ slide.title }}
              </h1>
              
              <p class="text-white/80 text-lg md:text-xl max-w-2xl font-body drop-shadow-lg leading-relaxed">
                {{ slide.subtitle }}
              </p>
            </div>
          </TransitionGroup>
        </div>
      </div>

      <!-- Dots -->
      <div class="absolute bottom-8 left-6 right-6 z-30 flex justify-center gap-3">
        <button 
          v-for="(_, index) in academySlides" 
          :key="index"
          @click="goToSlide(index)"
          class="w-10 h-1.5 rounded-full transition-all duration-500"
          :class="currentSlide === index ? 'bg-copper shadow-lg' : 'bg-white/20 hover:bg-white/40'"
        ></button>
      </div>
    </header>

    <AcademyAxes />

    <AcademyGrid :formations="formations" />

    <section class="py-24 bg-sage/5">
      <div class="container mx-auto px-6">
        <div class="bg-midnight rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl !text-warm-white mb-8">
              Vous ne savez pas par où commencer ?
            </h2>
            <p class="text-warm-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Nous vous aidons à identifier la formation la plus adaptée à votre situation actuelle et à vos objectifs de vie.
            </p>
            <router-link to="/contact" class="btn-primary">
              Demander conseil
            </router-link>
          </div>
          
          <!-- Background accent -->
          <div class="absolute bottom-0 right-0 w-64 h-64 bg-copper/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

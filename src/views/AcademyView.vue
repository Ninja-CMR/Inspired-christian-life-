<script setup lang="ts">
import AcademyGrid from '../components/sections/AcademyGrid.vue';
import type { IFormation } from '../interfaces/IFormation';

const formations: IFormation[] = [
  {
    id: '1',
    title: 'Découverte de sa Personnalité',
    description: 'Comprendre vos forces et faiblesses pour un avenir relationnel éclairé. Un parcours profond pour explorer les traits qui définissent votre interaction avec les autres.',
    priceCFA: 10000,
    duration: '1 mois',
    category: 'Personnalité'
  },
  {
    id: '2',
    title: 'Changer son Dialogue Intérieur',
    description: 'Guérir l\'estime de soi et briser les cycles pessimistes en 12 jours. Une méthode intensive pour reprogrammer vos pensées selon la vérité biblique.',
    priceCFA: 2000,
    duration: '12 Jours',
    category: 'Système Émotionnel'
  },
  {
    id: '3',
    title: 'École des Futurs Époux/Epouses',
    description: 'Préparation prophétique et pratique à l\'alliance de destinée sur 3 mois. Apprenez les fondements d\'un mariage solide avant de dire "Oui".',
    priceCFA: 10000,
    duration: '3 mois',
    category: 'Mariage'
  },
  {
    id: '4',
    title: 'Restauration de l\'Estime de Soi',
    description: 'Redécouvrez votre valeur aux yeux de Dieu et brisez les chaînes du passé qui vous empêchent d\'avancer.',
    priceCFA: 7000,
    duration: '1 mois',
    category: 'Système Émotionnel'
  }
];
</script>

<template>
  <div class="pt-32">
    <header class="bg-midnight py-20 relative overflow-hidden text-center text-warm-white mb-20">
      <!-- Glow decoration -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-copper/5 blur-[100px] rounded-full"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-5xl md:text-6xl !text-warm-white mb-6 uppercase tracking-wider font-heading">
          Destiny Academy
        </h1>
        <p class="text-xl text-warm-white/70 max-w-3xl mx-auto font-body">
          Des programmes de transformation profonde pour aligner votre identité et vos relations sur le plan divin.
        </p>
      </div>
    </header>

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

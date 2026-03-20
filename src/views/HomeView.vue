<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue';
import VisionGrid from '../components/sections/VisionGrid.vue';
import AcademyGrid from '../components/sections/AcademyGrid.vue';
import EbookShowcase from '../components/sections/EbookShowcase.vue';
import GallerySection from '../components/sections/GallerySection.vue';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel.vue';
import ReservationSection from '../components/sections/ReservationSection.vue';
import CoachingCallout from '../components/sections/CoachingCallout.vue';
import type { IFormation } from '../interfaces/IFormation';

const formations: IFormation[] = [
  {
    id: '1',
    title: 'Découverte de sa Personnalité',
    description: 'Comprendre vos forces et faiblesses pour un avenir relationnel éclairé.',
    priceCFA: 10000,
    duration: '1 mois',
    category: 'Personnalité'
  },
  {
    id: '2',
    title: 'Changer son Dialogue Intérieur',
    description: 'Guérir l\'estime de soi et briser les cycles pessimistes en 12 jours.',
    priceCFA: 2000,
    duration: '12 Jours',
    category: 'Système Émotionnel'
  },
  {
    id: '3',
    title: 'École des Futurs Époux/Epouses',
    description: 'Préparation prophétique et pratique à l\'alliance de destinée sur 3 mois.',
    priceCFA: 10000,
    duration: '3 mois',
    category: 'Mariage'
  }
];
</script>

<template>
  <main>
    <HeroSection 
      title="Vivez un Mariage selon la Pensée de Dieu : Le Mariage de Destinée."
      subtitle="Ne cherchez pas seulement à vous marier. Apprenez à vous découvrir, à guérir votre cœur et à aligner votre alliance sur le plan divin unique de votre vie."
    />
    
    <VisionGrid />
    
    <AcademyGrid :formations="formations" />
    
    <EbookShowcase />
    
    <GallerySection />
    
    <TestimonialsCarousel />
    
    <ReservationSection />
    
    <CoachingCallout />
  </main>
</template>

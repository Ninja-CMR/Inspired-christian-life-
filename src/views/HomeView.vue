<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue';
import VisionGrid from '../components/sections/VisionGrid.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import AcademyGrid from '../components/sections/AcademyGrid.vue';
import MarriageSection from '../components/sections/MarriageSection.vue';
import EbookShowcase from '../components/sections/EbookShowcase.vue';
import GallerySection from '../components/sections/GallerySection.vue';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel.vue';
import ReservationSection from '../components/sections/ReservationSection.vue';
import CoachingCallout from '../components/sections/CoachingCallout.vue';
import BlogSection from '../components/sections/BlogSection.vue';
import EventsSection from '../components/sections/EventsSection.vue';
import TeamSection from '../components/sections/TeamSection.vue';
import type { IFormation } from '../interfaces/IFormation';
import afficheFormation from '../assets/images/ecole/affiche1.jpeg'
import afficheFormation2 from '../assets/images/ecole/estime.jpeg'
import afficheFormation3 from '../assets/images/ecole/estime.jpg'

const formations: IFormation[] = [
  {
    id: '1',
    title: 'Découverte de sa Personnalité',
    description: 'Comprendre vos forces et faiblesses pour un avenir relationnel éclairé.',
    priceCFA: 10000,
    duration: '1 mois',
    category: 'Personnalité',
    image: afficheFormation2
  },
  {
    id: '2',
    title: 'Changer son Dialogue Intérieur',
    description: 'Guérir l\'estime de soi et briser les cycles toxiques en 12 jours.',
    priceCFA: 2000,
    duration: '12 Jours',
    category: 'Système Émotionnel',
    image: afficheFormation3
  },
  {
    id: '3',
    title: 'École des Futurs Époux/Epouses',
    description: 'Préparation prophétique et pratique au mariage de destinée sur 3 mois.',
    priceCFA: 10000,
    duration: '3 mois',
    category: 'Mariage',
    image: afficheFormation
  }
];
</script>

<template>
  <main>
    <HeroSection />
    
    <VisionGrid />
    
    <AboutSection />
    
    <TeamSection />
    
    <AcademyGrid :formations="formations" />
    
    <MarriageSection />
    
    <EbookShowcase />
    
    <GallerySection />

    <EventsSection />
    
    <TestimonialsCarousel />

    <BlogSection />
    
    <ReservationSection />
    
    <CoachingCallout />
  </main>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
import heroImage from '../../assets/hero-destiny.jpg';
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center bg-warm-white overflow-hidden pt-24 lg:pt-32 pb-[30px]">
    <!-- Content Container -->
    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left Side: Text Content -->
      <div 
        class="max-w-2xl"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h1 class="heading-prophetic text-5xl md:text-6xl lg:text-7xl mb-6">
          {{ title }}
        </h1>
        <p class="text-anthracite text-lg md:text-xl mb-10 leading-relaxed font-body">
          {{ subtitle }}
        </p>
        
        <div class="flex flex-wrap gap-4">
          <router-link to="/academy" class="btn-primary">
            Découvrir ma Destinée
          </router-link>
          <router-link to="/resources" class="btn-secondary">
            Télécharger notre Ebook Gratuit
          </router-link>
        </div>
      </div>

      <!-- Right Side: Visual (Placeholder for now) -->
      <div 
        class="hidden lg:block relative h-full min-h-[600px]"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
      >
        <div class="absolute inset-0 bg-sage/20 rounded-3xl overflow-hidden shadow-2xl">
          <!-- Masked dynamic image would go here -->
          <div class="absolute inset-0 bg-gradient-to-l from-transparent to-warm-white/80 z-10"></div>
          <img 
            :src = heroImage 
            alt="Destiny Presence" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Subtle golden glow decoration -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-copper/20 blur-3xl rounded-full"></div>
      </div>
    </div>

    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-sage/5 -skew-x-12 transform origin-top-right"></div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

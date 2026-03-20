<script setup lang="ts">
// CoachingCallout.vue
</script>

<template>
  <section class="py-24  relative  text-center">
    <!-- Decorative Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-copper/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl text-warm-white mb-6">
          Besoin d'un Guidage Approfondi ? L'Accompagnement Personnalisé sur un An.
        </h2>
        <h3 class="text-xl md:text-2xl text-warm-white/80 font-subtitle mb-12">
          Alignez votre vie et vos relations sur la pensée de Dieu avec un coaching sur mesure.
        </h3>
        
        <a 
          href="https://calendly.com" 
          target="_blank"
          class="inline-block bg-copper text-midnight text-xl font-bold px-12 py-5 rounded-full hover:bg-copper-light transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-copper/20"
        >
          Demander un entretien de coaching (300k CFA)
        </a>
        
        <p class="mt-8 text-warm-white/40 text-sm">
          Places limitées pour garantir un accompagnement de haute qualité.
        </p>
      </div>
    </div>

    <!-- Background Accents -->
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl"></div>
    <div class="absolute top-0 left-0 w-64 h-64 bg-midnight-light/20 rounded-full blur-3xl"></div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

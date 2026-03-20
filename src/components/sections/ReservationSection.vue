<script setup lang="ts">
const steps = [
  {
    number: "01",
    title: "Vérifiez vos disponibilités",
    description: "Choisissez un créneau qui vous convient pour un échange prophétique."
  },
  {
    number: "02",
    title: "Confirmez votre appel",
    description: "Recevez une confirmation instantanée et préparez vos questions."
  },
  {
    number: "03",
    title: "Bâtissez votre futur",
    description: "Lancez-vous dans votre parcours de transformation avec clarté."
  }
];
</script>

<template>
  <section class="py-24 bg-black text-white overflow-hidden relative">
    <!-- Subtle Gradient Background -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-copper/5 -skew-x-12 transform origin-top-right"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 class="text-4xl  !text-warm-white md:text-7xl font-bold mb-8 uppercase tracking-tighter leading-none">
            Réservez votre Transformation
          </h2>
          <p class="text-xl text-gray-400 mb-12 font-body leading-relaxed max-w-lg">
            Ne laissez plus votre futur au hasard. Prenez rendez-vous pour une session de découverte et commencez à aligner votre vie sur le plan divin.
          </p>
          
          <router-link to="/contact" class="inline-block bg-white text-black px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-copper hover:text-white transition-all duration-300">
            Prendre rendez-vous
          </router-link>
        </div>

        <div class="space-y-12 border-l border-white/10 pl-8 md:pl-12">
          <div 
            v-for="step in steps" 
            :key="step.number"
            class="relative"
          >
            <span class="absolute -left-20 md:-left-24 text-4xl md:text-5xl font-bold text-white/10 italic">
              {{ step.number }}
            </span>
            <h3 class="text-2xl font-bold mb-3 uppercase tracking-tight">
              {{ step.title }}
            </h3>
            <p class="text-gray-400 font-body">
              {{ step.description }}
            </p>
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

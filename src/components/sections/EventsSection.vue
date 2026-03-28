<script setup lang="ts">
import img1 from '../../assets/images/activités/photo_5796569974322613153_y.jpg'
import img2 from '../../assets/images/évènement/agape1.jpeg'
import img3 from '../../assets/images/évènement/agape2.jpeg'
import img5 from '../../assets/images/évènement/assemblééGénérale.jpeg'

const events = [
  {
    title: "Christian AFTERWORK",
    location: "Douala ",
    date: "Bientôt disponible",
    image: img1
  },
  {
    title: "Assemblée Générale ICL (AG)",
    location: "Douala/ En Présentiel",
    date: "Décembre 2026",
    image: img3
  },
  {
    title: "Agape ICL",
    location: "Doaula",
    date: "Bientôt disponible",
    image: img2
  }
];
</script>

<template>
  <section class="py-24 bg-midnight relative overflow-hidden">
    <!-- Subtle backdrop decoration -->
    <div class="absolute top-0 left-0 w-full h-full bg-copper/5 opacity-50 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <span class="text-copper font-bold uppercase tracking-widest text-sm mb-4 block">Notre communauté</span>
        <h2 class="text-5xl md:text-7xl font-bold !text-warm-white uppercase tracking-tighter leading-none font-heading">
          Prochains <span class="text-white">Événements</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Main Highlight -->
        <div class="relative h-[500px] bg-black/95 md:h-full rounded-[60px] overflow-hidden  group shadow-2xl">
          <div class="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
          <img :src="img5" alt="Fraternité" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex flex-col justify-end p-12">
            <span class="bg-copper text-midnight font-bold px-4 py-1 rounded-full text-[10px] uppercase tracking-widest w-fit mb-6">Mise en avant</span>
            <h3 class="text-3xl md:text-4xl font-bold !text-white mb-4 font-heading">Conférence de Fraternité & Partage</h3>
            <p class="text-white/70 max-w-md mb-8 italic">"Là où deux ou trois sont assemblés en Mon nom, Je suis au milieu d'eux."</p>
            <router-link to="/contact" class="btn-primary w-fit">Valide ton ticket</router-link>
          </div>
        </div>

        <!-- List Side -->
        <div class="space-y-8">
          <router-link 
            v-for="(event, index) in events" 
            :key="index"
            to="/contact"
            class="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-copper/30 transition-all duration-300 group cursor-pointer"
          >
            <div class="w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-copper transition-colors">
              <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
            </div>
            <div class="grow">
              <span class="text-copper text-[10px] uppercase tracking-widest block mb-1">{{ event.date }}</span>
              <h4 class="text-xl font-bold !text-white mb-1 font-heading group-hover:text-copper transition-colors">{{ event.title }}</h4>
              <p class="text-white/40 text-sm font-body">{{ event.location }}</p>
            </div>
            <div class="hidden sm:block">
              <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-copper group-hover:text-midnight transition-all">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </router-link>
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

<script setup lang="ts">
import inesImage from '../../assets/images/Equipe/Ines Watat.jpg'
import sergeImage from '../../assets/images/Equipe/Serge Agoume.jpg'

const team = [
  {
    name: 'Ines Watat',
    role: 'La Visionnaire',
    subtitle: 'Épouse et mère',
    image: inesImage,
    delay: 0
  },
  {
    name: 'Serge Agoume',
    role: 'Responsable de la communication & Management',
    subtitle: 'Expert en stratégie',
    image: sergeImage,
    delay: 200
  }
]
</script>

<template>
  <section class="py-24 bg-warm-white/30 overflow-hidden" id="equipe">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div 
        class="text-center max-w-3xl mx-auto mb-20 space-y-6"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <div class="space-y-2">
          <span class="text-copper font-subtitle tracking-widest uppercase text-sm font-bold">Notre équipe</span>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-midnight">Jeune et dynamique</h2>
        </div>
        
        <p class="text-lg text-anthracite font-body leading-relaxed">
          Engagé à servir passionnément afin d’aider chacun à se préparer pour sa saison de mariage 
          et à bâtir un foyer stable et épanoui.
        </p>
        
        <div class="flex justify-center">
          <div class="w-24 h-1 bg-copper/30 rounded-full"></div>
        </div>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div 
          v-for="member in team" 
          :key="member.name"
          class="group relative"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: member.delay } }"
        >
          <!-- Card Body -->
          <div class="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
            <!-- Image Container -->
            <div class="aspect-[4/5] overflow-hidden">
              <img 
                :src="member.image" 
                :alt="member.name" 
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>
            </div>

            <!-- Content Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 class="text-2xl md:text-3xl font-heading font-bold mb-1 drop-shadow-lg text-white font-black tracking-wide">{{ member.name }}</h3>
              <p class="text-copper font-bold mb-3 drop-shadow-md text-lg">{{ member.role }}</p>
              
              <div class="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out">
                <p class="text-white/80 font-body text-sm pt-2 border-t border-white/10">
                  {{ member.subtitle || 'Passionné par la vision ICL' }}
                </p>
              </div>
            </div>
            
            <!-- Decorative Accent -->
            <div class="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          
          <!-- Shadow/Glow -->
          <div class="absolute -inset-4 bg-copper/5 rounded-[3rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-heading { font-family: 'Playfair Display', serif; }
.font-body { font-family: 'Inter', sans-serif; }
.font-subtitle { font-family: 'Montserrat', sans-serif; }
</style>

<script setup lang="ts">
import presImage from '../../assets/images/présentation/présentation.jpg'
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <!-- Image Column -->
        <div 
          class="w-full lg:w-1/2 relative"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
            <img 
              :src="presImage" 
              alt="Ines Watat" 
              class="w-full aspect-[4/5] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-copper opacity-40 z-0"></div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/10 rounded-full blur-3xl z-0"></div>
        </div>

        <!-- Content Column -->
        <div 
          class="w-full lg:w-1/2 space-y-8"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-midnight leading-tight">
              Ines Watat <br/>
              <span class="text-copper italic text-2xl md:text-3xl font-subtitle">
                Fondatrice & Visionnaire
              </span>
            </h2>
            <div class="w-20 h-1 bg-copper/30"></div>
          </div>

          <div class="space-y-6 text-lg text-anthracite font-body leading-relaxed">
            <p class="font-bold text-midnight">
              Ines Watat, coach en relation, conférencière et fondatrice du mouvement Inspire Christian Life et de la « Destiny Academy ».
            </p>
            
            <p>
              Épouse et maman de deux enfants,
            </p>
            
            <p>
              J’accompagne les hommes et les femmes à découvrir et comprendre leur identité en Christ, découvrir et comprendre leur personnalité et activer leur potentiel afin de bâtir une vie authentique, des foyers solide, épanouies et équilibrées avec Christ.
            </p>
            
            <p>
              À travers une approche authentique, profonde et surtout transformationnelle, j’aide chacun à sortir des schémas limitants pour vivre selon sa destinée précisément dans le domaine des relations et du mariage.
            </p>
            
            <p>
              Mon message est centré sur la connaissance de soi, la responsabilité personnelle, la foi et l’alignement de ton âme et surtout sur la destinée.
            </p>
            
            <p class="italic text-midnight/80 border-l-4 border-copper pl-6 py-2 bg-warm-white/50">
              "Je crois profondément qu’une génération guérie, consciente de son identité, peut bâtir des foyers authentiques alignés à la pensée de Dieu et impacter durablement le monde."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: specific styles if needed */
</style>

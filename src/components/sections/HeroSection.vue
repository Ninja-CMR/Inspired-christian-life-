<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import img1 from '../../assets/images/ecole/estime.jpeg';
import img2 from '../../assets/images/ecole/Personnalite.jpg';
import img3 from '../../assets/images/ecole/affiche1.jpeg';
import img4 from '../../assets/images/ecole/soi.jpg';

const slides = [
    {
    title: "Restauration de l'Estime de Soi",
    subtitle: "Redécouvrez votre valeur aux yeux de Dieu et brisez les chaînes du passé.",
    image: img4,
    tag: "Identité en Christ",
    link: "/academy"
  },
  {
    title: "Découverte de sa Personnalité",
    subtitle: "Comprendre vos forces et faiblesses pour un avenir relationnel éclairé.",
    image: img2,
    tag: "Formation Phare",
    link: "/academy/personality"
  },
  {
    title: "Changer son Dialogue Intérieur",
    subtitle: "Guérir l'estime de soi et briser les cycles pessimistes en 12 jours.",
    image: img1,
    tag: "Système Émotionnel",
    link: "/academy/inner-dialogue"
  },
  {
    title: "École des Futurs Époux et Épouses",
    subtitle: "Préparation prophétique et pratique à l'alliance de destinée.",
    image: img3,
    tag: "Mariage & Alliance",
    link: "/academy/future-spouses"
  },
];

const currentSlide = ref(0);
let timer: any = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
  resetTimer();
};

const resetTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(nextSlide, 7000);
};

onMounted(() => {
  resetTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <section class="relative h-screen min-h-[700px] flex items-center bg-black overflow-hidden">
    <!-- Slider Background -->
    <div class="absolute inset-0 z-0">
      <TransitionGroup name="fade">
        <div 
          v-for="(slide, index) in slides" 
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

    <!-- Content Container -->
    <div class="container mx-auto px-6 relative z-20">
      <div class="max-w-4xl">
        <TransitionGroup name="slide-up">
          <div 
            v-for="(slide, index) in slides" 
            :key="slide.title"
            v-show="currentSlide === index"
            class="space-y-8"
          >
            <span class="inline-block px-4 py-1.5 rounded-full bg-copper text-midnight text-xs font-bold uppercase tracking-widest">
              {{ slide.tag }}
            </span>
            
            <h1 class="heading-prophetic text-5xl md:text-7xl lg:text-8xl !text-white leading-tight drop-shadow-2xl">
              {{ slide.title }}
            </h1>
            
            <p class="text-white/80 text-xl md:text-2xl max-w-2xl font-body drop-shadow-lg">
              {{ slide.subtitle }}
            </p>
            
            <div class="flex flex-wrap gap-6 pt-4">
              <router-link to="/contact" class="bg-copper text-midnight font-bold px-10 py-5 rounded-full hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-xl hover:shadow-copper/20">
                Prendre un appel découvert gratuit
              </router-link>
              <router-link to="/contact" class="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-5 rounded-full hover:bg-white hover:text-midnight transition-all duration-300 uppercase tracking-widest text-sm">
                En savoir plus
              </router-link>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-12 left-6 right-6 z-30 flex justify-center gap-4">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="group relative py-4 px-2"
      >
        <div 
          :class="[
            'w-12 h-1 rounded-full transition-all duration-500',
            currentSlide === index ? 'bg-copper' : 'bg-white/30 group-hover:bg-white/50'
          ]"
        ></div>
      </button>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 right-12 z-30 hidden lg:block">
      <div class="flex flex-col items-center gap-4">
        <span class="text-white/30 text-[10px] uppercase tracking-[0.3em] vertical-text">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.vertical-text {
  writing-mode: vertical-rl;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
}

.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes slowZoom {
  from { transform: scale(1.05); }
  to { transform: scale(1.15); }
}
</style>

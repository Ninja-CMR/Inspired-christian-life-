<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import img1 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.41.32.jpeg'
import img2 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.55 (1).jpeg'
import img3 from '../../assets/images/mariage/WhatsApp Image 2026-03-20 at 19.50.55 (2).jpeg'
import img4 from '../../assets/images/mariage/imgmariage.jpeg'

const currentSlide = ref(0);
let timer: any = null;

const slides = [
  {
    title: "Alliances de Destinée",
    description: "Bâtir des foyers solides fondés sur la pensée de Dieu et la révélation prophétique.",
    image: img1,
    tag: "Fondation"
  },
  {
    title: "Préparation Prophétique",
    description: "Identifier et lever les barrières invisibles avant le Oui pour un mariage épanoui.",
    image: img2,
    tag: "Accompagnement"
  },
  {
    title: "Fusion de Missions",
    description: "Aligner deux destinées individuelles pour accomplir un programme divin commun.",
    image: img3,
    tag: "Vision"
  },
  {
    title: "Alliances Durables",
    description: "Bâtir des foyers qui résistent au temps et aux tempêtes grâce aux principes du Royaume.",
    image: img4,
    tag: "Eternité"
  }
];

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

const features = [
  {
    title: "Mariage selon Son Cœur",
    description: "Une union qui honore Dieu."
  },
  {
    title: "Équilibre & Harmonie",
    description: "Des foyers stables avec Christ."
  }
];
</script>

<template>
  <section class="py-32 bg-midnight text-white overflow-hidden relative min-h-[850px] flex items-center">
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
            class="w-full h-full object-cover object-center scale-100"
            style="animation: slowZoom 30s infinite alternate"
          />
        </div>
      </TransitionGroup>
    </div>
    
    <div class="container mx-auto px-6 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Content -->
        <div class="max-w-xl">
          <TransitionGroup name="slide-up">
            <div 
              v-for="(slide, index) in slides" 
              :key="slide.title"
              v-show="currentSlide === index"
              class="space-y-10"
            >
              <div class="space-y-4">
                <span class="text-copper font-bold uppercase tracking-[0.4em] text-xs block opacity-100">{{ slide.tag }}</span>
                <h2 class="text-5xl md:text-7xl font-bold !text-white uppercase tracking-tighter leading-tight font-heading drop-shadow-2xl">
                  {{ slide.title }}
                </h2>
              </div>
              
              <p class="text-xl text-white/90 font-body leading-relaxed max-w-lg drop-shadow-lg">
                {{ slide.description }}
              </p>

              <div class="flex flex-col gap-6 pt-4">
                <div v-for="feature in features" :key="feature.title" class="flex items-center gap-4 group">
                  <div class="w-2.5 h-2.5 rounded-full bg-copper shrink-0 shadow-[0_0_10px_rgba(245,224,0,0.6)]"></div>
                  <h4 class="text-lg font-bold !text-white uppercase tracking-wide">{{ feature.title }}</h4>
                </div>
              </div>
              
              <div class="pt-8">
                <router-link to="/academy" class="inline-block bg-copper text-midnight font-bold px-10 py-4 rounded-full hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-xl">
                  Découvrir l'école des futurs époux
                </router-link>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Navigation Dots -->
        <div class="flex lg:flex-col gap-4 justify-center">
          <button 
            v-for="(_, index) in slides" 
            :key="index"
            @click="goToSlide(index)"
            class="group h-12 flex items-center gap-4 focus:outline-none"
          >
            <div 
              class="h-[2px] transition-all duration-500"
              :class="currentSlide === index ? 'w-12 bg-copper' : 'w-6 bg-white/20'"
            ></div>
            <span 
              class="text-[10px] uppercase tracking-widest transition-colors duration-300"
              :class="currentSlide === index ? 'text-copper' : 'text-white/20'"
            >
              0{{ index + 1 }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
}

.slide-up-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes slowZoom {
  from { transform: scale(1.05); }
  to { transform: scale(1.15); }
}

.container {
  max-width: 1200px;
}
</style>

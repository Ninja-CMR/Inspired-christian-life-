<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="[
      isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    ]"
  >
    <div class="container mx-auto px-6 flex items-center justify-between relative z-50">
      <!-- Logo -->
      <router-link to="/" @click="closeMenu" class="flex items-center gap-3 group">
        <div class="h-10 md:h-12 w-auto">
          <img src="/src/assets/logo-inspire.png" alt="Inspire Christian Life" class="h-full w-auto object-contain" />
        </div>
        <div class="hidden sm:flex flex-col">
          <span class="text-xl font-heading font-bold tracking-tight text-black leading-none">Inspire</span>
          <span class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-body leading-none mt-1">Christian Life</span>
        </div>
      </router-link>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-10">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/academy" class="nav-link">Academy</router-link>
        <router-link to="/resources" class="nav-link">Ressources</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>

      <!-- Desktop CTA -->
      <router-link to="/contact" class="hidden md:block bg-black text-white text-xs font-bold px-8 py-3 rounded-full hover:bg-copper hover:text-white transition-all duration-300 uppercase tracking-widest">
        S'INSCRIRE
      </router-link>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu"
        class="md:hidden text-black focus:outline-none relative w-10 h-10 flex items-center justify-center"
      >
        <div class="flex flex-col gap-1.5 w-6">
          <span 
            class="h-0.5 bg-black transition-all duration-300 origin-center"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
          ></span>
          <span 
            class="h-0.5 bg-black transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span 
            class="h-0.5 bg-black transition-all duration-300 origin-center"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
          ></span>
        </div>
      </button>
    </div>

    <Transition name="fade-slide">
      <div v-if="isMenuOpen" class="!bg-white flex flex-col pt-14 p-6 md:hidden">
        <div class="flex flex-col gap-6 pb-[10px] text-black">
          <router-link 
            v-for="(link, i) in [
              { name: 'Accueil', path: '/' },
              { name: 'Academy', path: '/academy' },
              { name: 'Ressources', path: '/resources' },
              { name: 'Contact', path: '/contact' }
            ]" 
            :key="i"
            :to="link.path"
            @click="closeMenu"
            class="text-2xl font-bold text-black uppercase tracking-tight hover:text-copper transition-colors"
          >
            {{ link.name }}
          </router-link>
        </div>
        
        <div class="mt-auto pb-[10px]">
          <router-link 
            to="/contact" 
            @click="closeMenu"
            class="block w-full bg-black text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-copper hover:text-black transition-colors duration-300"
          >
            S'INSCRIRE
          </router-link>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@reference "../../styles/tailwind.css";

.container {
  max-width: 1200px;
}

.nav-link {
  @apply text-sm font-bold text-black/60 hover:text-copper transition-colors duration-300 uppercase tracking-widest;
}

.router-link-active:not(.group) {
  @apply text-midnight;
}

/* Mobile Menu Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

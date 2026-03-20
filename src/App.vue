<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <div class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition 
          name="fade" 
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <TheFooter />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

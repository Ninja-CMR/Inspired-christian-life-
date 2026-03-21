<script setup lang="ts">
// TheFooter.vue
</script>

<template>
  <footer class="bg-warm-white py-20 border-t border-midnight/5">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <!-- Brand -->
        <div class="space-y-6">
          <router-link to="/" class="flex items-center gap-4 group">
            <div class="w-10 h-10 bg-midnight rounded-lg flex items-center justify-center text-copper font-heading font-bold text-xl group-hover:scale-110 transition-transform">
              I
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-heading font-bold tracking-tight text-midnight leading-none">Inspire</span>
              <span class="text-[12px] uppercase tracking-[0.2em] text-anthracite font-body leading-none mt-1">Christian Life</span>
            </div>
          </router-link>
          <p class="text-anthracite font-body text-lg leading-relaxed max-w-md">
            Porter la voix prophétique pour restaurer l'identité et le dessein divin.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-midnight font-bold uppercase tracking-widest text-sm mb-8">Academy</h4>
          <ul class="space-y-4">
            <li><router-link to="/academy/personality" class="text-anthracite hover:text-copper transition-colors">Découverte de sa Personnalité</router-link></li>
            <li><router-link to="/academy/inner-dialogue" class="text-anthracite hover:text-copper transition-colors">Dialogue Intérieur</router-link></li>
            <li><router-link to="/academy/future-spouses" class="text-anthracite hover:text-copper transition-colors">École des Futurs Époux</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-midnight font-bold uppercase tracking-widest text-sm mb-8">Contact</h4>
          <ul class="space-y-4 text-anthracite">
            <li>Douala, Cameroun</li>
            <li>contact@inspirechristianlife.com</li>
            <li class="flex gap-4 pt-4">
              <a href="https://www.facebook.com/share/1SeYWfMn2G/?mibextid=wwXIfr" class="w-10 h-10 rounded-full border border-midnight/10 flex items-center justify-center hover:bg-midnight hover:text-copper transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full border border-midnight/10 flex items-center justify-center hover:bg-midnight hover:text-copper transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-20 pt-8 border-t border-midnight/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-anthracite/60">
        <p>&copy; 2026 Inspire Christian Life. Tous droits réservés.</p>
        <div class="flex gap-8">
          <a href="#" class="hover:text-midnight transition-colors">Mentions Légales</a>
          <a href="#" class="hover:text-midnight transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

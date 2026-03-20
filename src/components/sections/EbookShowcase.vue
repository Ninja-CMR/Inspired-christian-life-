<script setup lang="ts">
// EbookShowcase.vue
</script>

<template>
  <section class="py-24 bg-midnight text-warm-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl !text-warm-white text-center mb-16 max-w-4xl mx-auto leading-tight">
        Plus qu'un simple mouvement, une préparation prophétique à l'alliance.
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Free Ebook -->
        <div class="flex flex-col md:flex-row gap-8 items-center bg-warm-white/5 p-8 rounded-3xl border border-warm-white/10 hover:border-copper/30 transition-all duration-500">
          <div class="w-full md:w-1/2 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
            <div class="aspect-[3/4] bg-sage/20 rounded-lg flex items-center justify-center text-sage">
              <!-- Mockup Image Placeholder -->
              <span class="text-sm italic">Ebook Mockup</span>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <span class="text-copper font-bold tracking-widest uppercase text-sm mb-2 block">Gratuit</span>
            <h3 class="text-3xl mb-4 font-heading">10 croyances qui éloignent le mariage de toi</h3>
            <form class="space-y-4">
              <input 
                type="text" 
                placeholder="Votre Prénom" 
                class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper text-warm-white"
              />
              <input 
                type="email" 
                placeholder="Votre Email" 
                class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper text-warm-white"
              />
              <button type="submit" class="w-full bg-copper text-midnight font-bold py-3 rounded-lg hover:bg-copper-light transition-colors duration-300">
                Télécharger
              </button>
            </form>
          </div>
        </div>

        <!-- Paid Ebook -->
        <div class="flex flex-col md:flex-row gap-8 items-center bg-warm-white/5 p-8 rounded-3xl border border-warm-white/10 hover:border-copper/30 transition-all duration-500">
          <div class="w-full md:w-1/2 shadow-2xl -skew-y-3 hover:skew-y-0 transition-transform duration-500">
            <div class="aspect-[3/4] bg-copper/20 rounded-lg flex items-center justify-center text-copper">
              <!-- Mockup Image Placeholder -->
              <span class="text-sm italic">Ebook Mockup</span>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <span class="text-copper font-bold tracking-widest uppercase text-sm mb-2 block">3.000 CFA</span>
            <h3 class="text-3xl mb-4 font-heading">Je ne subis plus</h3>
            <p class="text-warm-white/70 mb-6">
              Comprendre et guérir son système émotionnel pour ne plus être victime de son passé.
            </p>
            <button class="w-full border-2 border-copper text-copper font-bold py-3 rounded-lg hover:bg-copper hover:text-midnight transition-all duration-300">
              Acheter maintenant
            </button>
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

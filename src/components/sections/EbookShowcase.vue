<script setup lang="ts">
import ebookgratuit from '../../assets/images/ebook/ebookgratuit.avif'
import ebookpayant from '../../assets/images/ebook/ebookpayant.jpeg'
import ebookPDF from '../../assets/ebook pdf/LES 10 --CROYANCES QUI ELOIGNENT LE MARIAGE.pdf'
// EbookShowcase.vue
</script>

<template>
  <section class="py-32 bg-midnight text-warm-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-7xl !text-warm-white mb-6 uppercase tracking-tighter font-heading">
          Nos différents <span class="text-copper">Ebooks</span>
        </h2>
        
        <!-- Discovery Call Button -->
        <div class="mt-8">
          <router-link to="/contact" class="inline-flex items-center gap-4 bg-white text-midnight font-bold px-12 py-5 rounded-full hover:bg-copper hover:text-midnight transition-all duration-300 uppercase tracking-widest text-sm shadow-2xl group">
            Réserve un appel découverte de 30min
            <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Free Ebook -->
        <div class="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-white/20 transition-all duration-500 group">
          <div class="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
            <img :src="ebookgratuit" alt="Ebook Gratuit" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
          </div>
          <div class="w-full md:w-1/2">
            <span class="inline-block px-3 py-1 bg-sage/20 text-sage text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Gratuit</span>
            <h3 class="text-3xl mb-4 !text-white font-heading leading-tight">10 croyances qui éloignent le mariage de toi</h3>
            <div class="space-y-4">
              <a 
                :href="ebookPDF" 
                download="Les 10 Croyances - Inspire Christian Life.pdf"
                class="w-full bg-copper text-midnight font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 block text-center uppercase tracking-widest text-xs shadow-lg"
              >
                Télécharger
              </a>
              <p class="text-white/20 text-[10px] text-center uppercase tracking-widest">
                Format PDF • Immédiat
              </p>
            </div>
          </div>
        </div>

        <!-- Paid Ebook -->
        <div class="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-white/20 transition-all duration-500 group">
          <div class="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
            <img :src="ebookpayant" alt="Ebook Payant" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
          </div>
          <div class="w-full md:w-1/2">
            <span class="inline-block px-3 py-1 bg-copper/20 text-copper text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">3.000 CFA</span>
            <h3 class="text-3xl !text-white mb-4 font-heading leading-tight">Je ne subis plus</h3>
            <p class="text-white/50 mb-8 text-sm font-body leading-relaxed">
              Comprendre et guérir son système émotionnel pour ne plus être victime de son passé.
            </p>
            <a
              href="https://chretienentrepreneur.mychariow.shop/prd_xyl1m1" 
              target="_blank"
              class="w-full border-2 border-copper text-copper font-bold py-4 rounded-xl hover:bg-copper hover:text-midnight transition-all duration-300 block text-center uppercase tracking-widest text-xs"
            >
              Acheter maintenant
            </a>
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
